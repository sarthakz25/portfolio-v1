"use server";

import { getErrorMessage, validateString } from "@/misc/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("email");
    const senderMessage = formData.get("message");

    // server side validation
    if (!validateString(senderEmail, 250)) {
        return {
            error: "Invalid sender email",
        };
    }

    if (!validateString(senderMessage, 1000)) {
        return {
            error: "Invalid sender message",
        };
    }

    try {
        await resend.emails.send({
            from: "Portfolio Contact Form <onboarding@resend.dev>",
            to: "sarthakhandelwal@gmail.com",
            subject: "Message from contact form",
            // text: senderMessage as string,
            // react: <ContactFormEmail email={senderEmail} message={senderMessage} />
            react: React.createElement(ContactFormEmail, {
                email: senderEmail as string,
                message: senderMessage as string,
            }),
            reply_to: senderEmail as string,
        });
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error),
        };
    }
};
