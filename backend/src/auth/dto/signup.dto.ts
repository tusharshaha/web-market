export enum Role {
  DEVELOPER = "developer",
  CLIENT = "client",
}

export class SignUpDto {
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly contactNumber: string;
  readonly userImage: string;
  readonly role: Role;
}
