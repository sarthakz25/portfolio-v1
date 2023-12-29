"use server";

import { validateString } from "@/utils/util";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("email");
    const senderMessage = formData.get("message");

    // server side validation
    if (!validateString(senderEmail, 250)) {
        return {
            error: "Invalid sender email"
        };
    }

    if (!validateString(senderMessage, 1000)) {
        return {
            error: "Invalid sender message"
        };
    }

    try {
        await resend.emails.send({
            from: "Portfolio Contact Form <onboarding@resend.dev>",
            to: "sarthakhandelwal@gmail.com",
            subject: "message from contact form",
            text: senderMessage as string,
            reply_to: senderEmail as string,
        });
    } catch (error) {
        console.log(error);
    }

};
