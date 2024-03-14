import React from "react";
import { FaCode } from "react-icons/fa"
import { FaTrain } from "react-icons/fa6"
import { MdEvent } from "react-icons/md"
import bookmark from "../../public/bookmark.png"
import converse from "../../public/converse.png"
import screenscape from "../../public/screenscape.png"
import inscribe from "../../public/inscribe.png"

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "App Development Executive",
        location: "Google Developer Students Club - MPSTME",
        description: "Gained hands-on experience building Android apps using Jetpack Compose, Kotlin, Flutter and managed workshops like Compose Camp and Flutter Forward Extended.",
        icon: React.createElement(FaCode),
        date: "Sep 2022 - Jul 2023",
    },
    {
        title: "Community Service",
        location: "IRCTC - Churchgate, Mumbai",
        description: "Enhanced user experience of the IRCTC Tourism website, enhancing multilingual support, improving mobile navigation, debugging personalized tourist recommendations, etc.",
        icon: React.createElement(FaTrain),
        date: "Jun 2022 - Jul 2022",
    },
    {
        title: "Digital Creatives Executive",
        location: "Social Conclave - MPSTME",
        description: "Utilized Adobe Premiere Pro, Illustrator, Photoshop After Effects to make digital creative content for events and promotions, including t-shirt designs, ID cards, medals, social media posts, etc.",
        icon: React.createElement(MdEvent),
        date: "Dec 2021 - Mar 2022",
    },
    {
        title: "Technical Executive",
        location: "Sattva - MPSTME",
        description: "Contributed to website development, live streaming on Youtube and Discord community creation, including bot design, to enhance Sattva’s online visibility and user engagement.",
        icon: React.createElement(MdEvent),
        date: "Nov 2021 - Feb 2022",
    },
] as const;

export const projectsData = [
    {
        title: "Inscribe",
        description: "Engineered a feature-rich note-taking app with real-time sync, rich text editing, image support, nested documents, and Stripe integration for subscription plans.",
        tags: ["Next.js", "React", "Convex", "Tailwind"],
        imageUrl: inscribe,
    },
    {
        title: "Converse",
        description: "Built a cross-platform social app facilitating content sharing, commenting, and community engagement with user authentication, moderation tools, and an intuitive interface.",
        tags: ["Flutter", "Riverpod", "Firebase"],
        imageUrl: converse,
    },
    {
        title: "Bookmark",
        description: "Created an AR-powered indoor navigation app for a college library, featuring QR code re-centering, wayfinding aids, mapped routes, and movable arrow/line indicators.",
        tags: ["Unity", "ARCore", "C#"],
        imageUrl: bookmark,
    },
    {
        title: "ScreenScape",
        description: "Developed a movie discovery website with user authentication, search/filtering, TMDB API integration, detailed movie pages featuring trailers, and personalized recommendations.",
        tags: ["HTML", "CSS", "Javascript", "SQL"],
        imageUrl: screenscape,
    },
] as const;

export const skillsData = [
    "Java",
    "Python",
    "C++",
    "Node.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Dart",
    "Kotlin",
    "HTML",
    "CSS",
    "SQL",
    "Firebase",
    "Docker",
    "Git",
] as const;
