import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
} from "./emailTemplete.js";
import { mailTrapClient, sender } from "./mailTrap.config.js";

export const sendVerficationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];
  try {
    const response = await mailTrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email Verification",
    });

    console.log("Email Verification successfully", response);
  } catch (error) {
    console.error(`Error sending email`, error);
    throw new Error("Failed to send email verification", error);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }];

  try {
    const response = await mailTrapClient.send({
      from: sender,
      to: recipient,
      template_uuid: "fc61c316-776e-46ee-84e1-4de1cbba6bd5",
      template_variables: {
        name: name,
      },
    });
    console.log("Welcome email successfully sent", response);
  } catch (error) {
    console.error(`Error sending welcome email`, error);
  }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  const recipient = [{ email }];
  try {
    const response = await mailTrapClient.send({
      from: sender,
      to: recipient,
      subject: "Reset your password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
      category: "Password Reset",
    });
    console.log("Password reset email successfully sent", response);
  } catch (error) {
    console.log("Error in reset", error);
    throw new Error("Failed to send password reset email", error);
  }
};

export const sendPasswordSuccessEmail = async (email) => {
  const recipient = [{ email }];

  try {
    const response = await mailTrapClient.send({
      from: sender,
      to: recipient,
      subject: "Password change successful",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
      category: "Password Change",
    });
    console.log("Password change email successfully sent", response);
  } catch (error) {
    console.log("Error in password reset", error);
    throw new Error("Failed to send password change email", error);
  }
};
