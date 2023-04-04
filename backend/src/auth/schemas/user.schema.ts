import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import validator from "validator";

@Schema({
  timestamps: true,
})
export class User {
  @Prop({
    required: [true, "Please provide a first name"],
    trim: true,
    minLength: [2, "Name must be at least 3 characters."],
    maxLength: [100, "Name is too large"],
  })
  name: string;

  @Prop({
    unique: true,
    required: [true, "Email must is required!"],
    validate: [validator.isEmail, "Please provide a valid Email"],
    lowercase: true,
    trim: true,
  })
  email: string;

  @Prop({
    required: [true, "Password can't be empty!"],
    validate: {
      validator: (value: string) => {
        return validator.isStrongPassword(value, {
          minLength: 8,
          minSymbols: 1,
          minUppercase: 1,
          minNumbers: 1,
          minLowercase: 1,
        });
      },
      message: "{VALUE} is not strong enough.",
    },
  })
  password: string;

  @Prop({
    validate: {
      validator: (value: string) => {
        return validator.isMobilePhone(value, "any", { strictMode: true });
      },
      message: "Please provide a valid contact number",
    },
  })
  contactNumber: string;

  @Prop()
  userImage: string;

  @Prop({
    enum: ["developer", "client", "admin"],
    default: "developer",
  })
  role: string;

  @Prop({
    enum: ["active", "block"],
    default: "actice",
  })
  status: string;

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

// create TTL index for invalid user
UserSchema.index({ confirmationTokenExpires: 1 }, { expireAfterSeconds: 0 });
