export class SignUpDto {
  readonly name!: string;
  readonly email!: string;
  readonly password!: string;
  readonly contactNumber?: string;
  readonly userImage?: string;
}
