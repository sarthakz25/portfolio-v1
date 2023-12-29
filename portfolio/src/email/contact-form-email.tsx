import React from 'react';
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

type ContactFormEmailProps = {
    email: string;
    message: string;
}

export default function ContactFormEmail({
    email, message
}: ContactFormEmailProps) {
    return <Html>
        <Head />
        <Preview>
            New message from portfolio website
        </Preview>
        <Tailwind>
            <Body className="bg-zinc-50 rounded-xl">
                <Container>
                    <Section className="bg-zinc-100 borderBlack my-10 px-10 py-5 rounded-xl">
                        <Heading className="leading-tight text-xl">
                            You've received the following message:
                        </Heading>
                        <Text className="font-medium">{message}</Text>
                        <Hr />
                        <Text className="font-semibold">The sender's email is {email}</Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
}
