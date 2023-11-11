import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "./schemas/user.schema";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { GoogleStrategy } from "./strategies/google.strategy";
import { SessionSerializer } from "../auth/session/session.serializer";
import { RefreshStrategy } from "./strategies/refresh.strategy";
import { ConfigService } from "@nestjs/config";

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          secret: config.get<string>("JWT_SECRET"),
        };
      },
    }),
    MongooseModule.forFeature([{ name: "User", schema: UserSchema }]),
  ],
  controllers: [AuthController],
  providers: [
    SessionSerializer,
    AuthService,
    JwtStrategy,
    RefreshStrategy,
    GoogleStrategy,
  ],
  exports: [JwtStrategy, RefreshStrategy, GoogleStrategy],
})
export class AuthModule {}
