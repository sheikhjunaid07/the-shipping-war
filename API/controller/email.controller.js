import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendMail(email, password) {
  try {
    await resend.emails.send({
      from: "sheikh.junaid7320@gmail.com",
      to: email,
      subject: "Verification Email - Shipping War",
      html: `
        <h1>Welcome to Shipping War</h1>
        <p>You have successfully registered.</p>

        <h3>Login Credentials</h3>
        <p><b>Username:</b> ${email}</p>
        <p><b>Password:</b> ${password}</p>

        <a href='http://localhost:5173/verify/" +
      ${email} +
      "'>Click to verify....</a>

      `,
    });

    console.log("Email sent successfully");
  } catch (error) {
    console.error("Email error:", error);
  }
}

export default sendMail;
