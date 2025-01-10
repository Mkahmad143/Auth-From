import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplete.js";
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
