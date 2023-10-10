import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { NestExpressApplication } from "@nestjs/platform-express";
import * as session from "express-session";
import * as passport from "passport";
import * as crypto from "crypto";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const MongoStore = require("connect-mongo");
import helmet from "helmet";
import { ValidationPipe } from "@nestjs/common";
import { ThrottlerExceptionFilter } from "./utils/throtller-exception.filter";

type Cookie = {
  maxAge: number;
  httpOnly?: boolean;
  secure?: boolean;
  sameSite?: boolean;
};

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix("api");
  app.use(helmet());
  app.enableCors({
    origin: process.env.FRONTEND_URL,
    methods: "GET,HEAD,PATCH,POST,DELETE",
    credentials: true,
  });
  // store the user session to mongoDB
  const mongoStore = MongoStore.create({
    mongoUrl: process.env.MONGO_URI,
    collectionName: "user_sessions",
    autoRemove: "native",
  });
  const cookie: Cookie = { maxAge: 60000 * 60 * 24 * 7 };

  // set cookie security on  production
  if (process.env.NODE_ENV === "production") {
    app.set("trust proxy", 1); // trust first proxy
    cookie.httpOnly = true;
    cookie.sameSite = true;
    cookie.secure = true; // serve secure cookies
  }
  app.use(
    session({
      name: "LOGIN_INFO",
      genid: () => crypto.randomUUID() + Date.now(),
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      store: mongoStore,
      cookie,
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new ThrottlerExceptionFilter());
  await app.listen(5000);
}
bootstrap();
