"use server";

import nodemailer from "nodemailer";

export async function submitContactForm(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;
    // File handling (simple attachment logic placeholder)
    const file = formData.get("file") as File;

    if (!name || !email || !message) {
        return { success: false, message: "Campos obrigatórios faltando." };
    }

    // Configure Nodemailer Transport
    // Use environment variables for security in production
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.example.com",
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
            user: process.env.SMTP_USER || "user",
            pass: process.env.SMTP_PASS || "pass",
        },
    });

    try {
        const mailOptions: any = {
            from: `"Formulário Site" <${process.env.SMTP_FROM || "noreply@interpretbrasil.com"}>`,
            to: process.env.SMTP_TO || "contato@interpretbrasil.com",
            subject: `Novo Contato de: ${name}`,
            text: `
        Nome: ${name}
        Email: ${email}
        Telefone: ${phone}
        
        Mensagem:
        ${message}
      `,
            html: `
        <h3>Novo Contato pelo Site</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <br/>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
        };

        if (file && file.size > 0) {
            const buffer = Buffer.from(await file.arrayBuffer());
            mailOptions.attachments = [
                {
                    filename: file.name,
                    content: buffer,
                },
            ];
        }

        // Send email
        await transporter.sendMail(mailOptions);

        console.log("Email sent successfully to:", process.env.SMTP_TO);

        return { success: true, message: "Mensagem enviada com sucesso!" };
    } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, message: "Erro ao enviar mensagem. Tente novamente." };
    }
}
