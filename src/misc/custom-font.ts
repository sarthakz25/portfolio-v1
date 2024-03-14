import localFont from "next/font/local";

const Ageo = localFont({
    src: [
        {
            path: "../assets/fonts/light.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../assets/fonts/light-italic.ttf",
            weight: "300",
            style: "italic",
        },
        {
            path: "../assets/fonts/regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../assets/fonts/regular-italic.ttf",
            weight: "400",
            style: "italic",
        },
        {
            path: "../assets/fonts/medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../assets/fonts/medium-italic.ttf",
            weight: "500",
            style: "italic",
        },
        {
            path: "../assets/fonts/semi-bold.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../assets/fonts/semi-bold-italic.ttf",
            weight: "600",
            style: "italic",
        },
        {
            path: "../assets/fonts/bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../assets/fonts/bold-italic.ttf",
            weight: "700",
            style: "italic",
        },
        {
            path: "../assets/fonts/extra-bold.ttf",
            weight: "800",
            style: "normal",
        },
        {
            path: "../assets/fonts/extra-bold-italic.ttf",
            weight: "800",
            style: "italic",
        },
    ],
    // variable: "--font-ageo",
});

export { Ageo };