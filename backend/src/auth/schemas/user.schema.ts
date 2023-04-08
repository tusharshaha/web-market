import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import validator from "validator";
import * as bcrypt from "bcryptjs";
import { Document } from "mongoose";

@Schema({
  timestamps: true,
})
export class User extends Document {
  @Prop({
    required: [true, "Please give your name"],
    trim: true,
    minLength: [2, "Name must be at least 3 characters."],
    maxLength: [100, "Name is too large"],
  })
  name: string;

  @Prop({
    unique: true,
    required: [true, "Email must is required!"],
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
      message: "{VALUE} is not strong enough.",
    },
  })
  password: string;

  @Prop({
    validate: {
      validator: (value: string) => {
        return validator.isMobilePhone(value, "any", { strictMode: true });
      },
      message: "Please provide a valid contact number.",
    },
  })
  contactNumber: string;

  @Prop({ validate: [validator.isURL, "Please provide a valid image url."] })
  userImage: string;

  @Prop({
    enum: ["developer", "client", "admin"],
    default: "developer",
  })
  role: string;

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
  const hashPassword = await bcrypt.hash(password, 16);
  this.password = hashPassword;
  this.passwordChangedAt = new Date();
  this.passwordResetToken = undefined;
  this.passwordResetExpires = undefined;
  next();
});

// create TTL index for invalid user
UserSchema.index({ confirmationTokenExpires: 1 }, { expireAfterSeconds: 0 });
