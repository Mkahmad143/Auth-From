import { MailtrapClient } from "mailtrap";

const TOKEN = "84694af7b3d179ad99fd24b314ba4f16";

export const mailTrapClient = new MailtrapClient({
  token: TOKEN,
});

export const sender = {
  email: "demo@demomailtrap.com",
  name: "Ahmad Developer",
};
