import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as bcrypt from "bcryptjs";
import { Document } from "mongoose";

export enum Role {
  DEVELOPER = "developer",
  CLIENT = "client",
  ADMIN = "admin",
}

@Schema({
  timestamps: true,
})
export class User extends Document {
  @Prop({
    required: [true, "Please give your name"],
    trim: true,
    minLength: [3, "Name must be at least 3 characters."],
    maxLength: [100, "Name is too large"],
  })
  name: string;

  @Prop({
    unique: true,
    required: [true, "Email can't be empty!"],
    validate: {
      validator: (value: string) => {
        const regex = /^[a-zA-Z0-9._-]+@(?:gmail|yahoo|hotmail|outlook)\.com$/;
        return regex.test(value);
      },
      message: "Please provide a valid email",
    },
    trim: true,
  })
  email: string;

  @Prop({
    required: [true, "Password can't be empty!"],
    validate: {
      validator: (value: string) => {
        const regex = /^(?=.*[a-z])(?=.*\d).{8,}$/;
        return regex.test(value);
      },
      message: "password {VALUE} is not strong enough.",
    },
  })
  password: string;

  @Prop()
  contactNumber: string;

  @Prop()
  userImage: string;

  @Prop({
    default: "developer",
  })
  role: Role;

  @Prop({
    enum: ["active", "deactive", "block"],
    default: "deactive",
  })
  status: string;

  @Prop({
    enum: ["email", "google", "linkedin"],
    default: "email",
  })
  provider: string;

  @Prop()
  providerId: string;

  @Prop()
  confirmationToken: string;

  @Prop()
  passwordResetToken: string;

  @Prop()
  confirmationTokenExpires: Date;

  @Prop()
  passwordResetExpires: Date;

  @Prop()
  passwordChangedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const password = this.password;
  const hashPassword = bcrypt.hashSync(password, 8);
  this.password = hashPassword;
  this.passwordChangedAt = new Date();
  this.passwordResetToken = undefined;
  this.passwordResetExpires = undefined;
  next();
});

// create TTL index for invalid user
UserSchema.index({ confirmationTokenExpires: 1 }, { expireAfterSeconds: 0 });
