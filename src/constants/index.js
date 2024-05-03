import { ducen, vpi } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    dotnetcore,
    angular,
    mssql,
    mysql,
    gitlab,
    blazor,
    csharp,
    bootstrap
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: gitlab,
        name: "Gitlab",
        type: "Version Control",
    },
    {
        imageUrl: angular,
        name: "Angular",
        type: "Fronted",
    },
    {
        imageUrl: dotnetcore,
        name: ".Net Core",
        type: "Backend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: mssql,
        name: "MSSQL",
        type: "RDBMS",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Frontend",
    },
    {
        imageUrl: csharp,
        name: 'C#',
        type: 'Backend'
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: blazor,
        name: "Blazor",
        type: "Frontend",
    },
    {
        imageUrl: bootstrap,
        name: "Bootstrap",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Associate Software Engineer",
        company_name: "Ducen Infotek Inc.",
        icon: ducen,
        iconBg: "#accbe1",
        date: "August 2022 - August 2023",
        points: [
            "Developing and maintaining web applications using Angular, .Net Core and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Junior Software Developer",
        company_name: "VeritasPay Philippines Inc.",
        icon: vpi,
        iconBg: "#fbc3bc",
        date: "September 2023 - May 2024",
        points: [
            "Spearheaded the development of a .Net Core Web API from scratch.",
            "Implemented industry standard Software Architecture using Clean Architecture and CQRS pattern.",
            "Implemented authentication & authorization of API using HMAC Authentication filter & middleware.",
            "Setup dependencies, packages needed eg. Entity Framework Core, Dapper, DbContext, MediatR etc...",
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/cutiegianina',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/richard-puig-732601227',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'API provider using ExpressJS & MongoDB',
        description: 'Exploring ExpressJS since I wanted to create an API provider with lightweight server powering it.',
        link: 'https://github.com/cutiegianina/pirates',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Clean Architecture in .Net Core and Angular with JWT Authentication',
        description: 'I showcased here how a clean architecture .Net Core application should be.',
        link: 'https://github.com/cutiegianina/Clean-Architecture-in-.Net-Core',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: '3D Portfolio using React',
        description: '3D portfolio which contains details about me as a Full-Stack Software Engineer.',
        link: 'https://github.com/cutiegianina/Portfoliov2',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Beach-front properties for sale',
        description: 'I built this website when I was still a student.',
        link: 'https://github.com/cutiegianina/samalbeachline',
    }
];

export const name = {
    first: 'Richard',
    last: 'Puig'
}