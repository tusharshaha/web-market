import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import validator from "validator";
import * as bcrypt from "bcryptjs";

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
    default: "active",
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

  // async comparePassword(password: string, hash: string) {
  //   return await bcrypt.compare(password, hash);
  // }

  // generatePasswordRestToken() {
  //   const token = crypto.randomUUID().toString();
  //   this.passwordResetToken = token;
  //   const date = new Date();
  //   // get tomorrow / expire date is 1 day.
  //   date.setDate(date.getDate() + 1);
  //   this.passwordResetExpires = date;
  //   return token;
  // }
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
