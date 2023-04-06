import { User } from "../auth/schemas/user.schema";

const confirmMailTemp = (user: User) => {
  return `
        <html>
            <body>
                <p>Hi ${user.name},</p>

                <p>Your email address has been registered with <b>Hotel Booking</b>. Please confirm your account by clicking the link below:</p>

                <a href="${process.env.PROJECT_URL}/api/auth/signup/confirmation/${user.confirmationToken}" target="_blank">
                    Verify your account
                </a>

                <p>If you did not associate your email address with <b>Hotel Booking</b>, please ignore this message and do not click on the link above.</p>

                <p>
                    Thank you,</br>
                    Hotel Booking
                </p>
            </body>
        </html>
    `;
};

export default confirmMailTemp;
