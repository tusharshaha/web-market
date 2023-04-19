import {
  IsEmail,
  IsEnum,
  IsMobilePhone,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
} from "class-validator";
import { Role } from "../schemas/user.schema";

export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  @Matches(/^[A-Za-z ]+$/, { message: "Your name is not valid" })
  readonly name: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @IsOptional()
  @IsMobilePhone()
  readonly contactNumber: string;

  @IsOptional()
  @IsUrl()
  readonly userImage: string;

  @IsOptional()
  @IsEnum(Role, { message: "The role can't be accepted" })
  readonly role: string;
}
