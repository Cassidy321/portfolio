import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }

  const { email, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ message: "Merci de renseigner votre email et votre message" });
  }

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio" ${email}`,
      to: process.env.EMAIL_USER,
      subject: "Nouveau message du formulaire de contact du portfolio",
      text: `
From: ${email}
        
Message:
${message}
      `,
      html: `
Vous avez un nouveau message provenant du formulaire de contact
<br>

**E-mail :** ${email}
<br>

**Message :** ${message}
      `,
    });

    res.status(200).json({ message: "Votre message a bien été envoyé !" });
  } catch (error) {
    console.error("Sending error:", error);
    res.status(500).json({ message: "Un problème technique est survenu, veuillez réessayer" });
  }
}