/* eslint-disable @typescript-eslint/no-var-requires */
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { NestExpressApplication } from "@nestjs/platform-express";
const passport = require("passport");
const cookieParser = require("cookie-parser");
const crypto = require("crypto");
const session = require("express-session");
import helmet from "helmet";
import { ValidationPipe } from "@nestjs/common";
import { ThrottlerExceptionFilter } from "./utils/throtller-exception.filter";
import { CookieOptions } from "express-session";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors({
    origin: process.env.FRONTEND_URL,
    methods: "GET,PATCH,POST,DELETE,OPTIONS",
    credentials: true,
  });
  app.setGlobalPrefix("api");
  app.use(helmet());
  const cookie: CookieOptions = { maxAge: 60 * 1000 * 2 }; //cookie max age is 2 minute

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
      cookie,
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new ThrottlerExceptionFilter());
  await app.listen(5000);
}
bootstrap();
