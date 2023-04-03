import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { NestExpressApplication } from "@nestjs/platform-express";
import helmet from "helmet";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(helmet());
  app.enableCors({
    origin: "*",
    methods: "GET,HEAD,PATCH,POST,DELETE",
    credentials: true,
  });
  app.setGlobalPrefix("api");
  await app.listen(5000);
}
bootstrap();
