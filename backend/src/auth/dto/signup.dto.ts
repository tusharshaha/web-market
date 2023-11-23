import {
  IsEmail,
  IsMobilePhone,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
} from "class-validator";

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

  @IsNotEmpty()
  @IsUrl()
  readonly userImage: string;
}
