import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { NestExpressApplication } from "@nestjs/platform-express";
import * as session from "express-session";
import * as passport from "passport";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const MongoStore = require("connect-mongo");
import helmet from "helmet";

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
  app.use(
    session({
      name: "LOGIN_INFO",
      secret: process.env.JWT_SECRET,
      resave: false,
      saveUninitialized: false,
      store: mongoStore,
      cookie: {
        maxAge: 60000 * 60 * 24 * 7,
      },
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(5000);
}
bootstrap();
