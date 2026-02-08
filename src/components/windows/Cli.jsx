import React from 'react'
import MacWindow from './MacWindow'
import Terminal from 'react-console-emulator'
import './cli.scss'

const Cli = ({windowName, setWindowState}) => {
    const commands = {
        about: {
            description: 'About me',
            fn: () =>
                'Alok Kumar Yadav - Full-Stack Developer (MERN) with a strong focus on frontend, UI/UX, and building product-like web applications.'
        },

        skills: {
            description: 'View technical skills',
            fn: () => `
                Frontend: React, JavaScript, HTML, CSS, Tailwind, Redux
                Backend: Node.js, Express.js
                Database: MongoDB
                Tools: Git, GitHub, Vercel, Render
                `
        },

        projects: {
            description: 'View featured projects',
            fn: () => `
                Featured Projects:
                - Dominate Design (Web-based design tool)
                - Drameeo (OTT Platform UI)
                - NotesHub (Notes application)
                - Storeo (E-commerce UI)
                `
        },

        experience: {
            description: 'Work experience',
            fn: () => `
                Frontend Developer Intern @ Xipper
                Jul 2025 - Oct 2025 (Remote)

                - Built responsive UI with React & Tailwind
                - Integrated REST APIs
                - Collaborated with backend & design teams
                `
        },

        education: {
            description: 'Education details',
            fn: () =>
                "Bachelor's in Computer Science / IT\nFocus: Web Development & Software Engineering"
        },

        contact: {
            description: 'Contact information',
            fn: () => `
                GitHub: github.com/AlokKumarYadav2410
                LinkedIn: linkedin.com/in/alokkumaryadav2410
                Portfolio: Vanta OS, portfolio-alok-live.vercel.app
                `
        },

        echo: { description: 'Echo a passed string.', usage: 'echo <string>', fn: (...args) => args.join(' ') }
    }

    return (
        <MacWindow height='60vh' windowName={windowName} setWindowState={setWindowState}>
            <div className="cli-window">
                <Terminal
                    commands={commands}
                    welcomeMessage={`
                    ┌───────────────────────────────────────────────┐
                    │  👋 Welcome to my interactive portfolio!
                    └───────────────────────────────────────────────┘
                    This terminal is your gateway to my work - projects, skills, and real-world experience, all just one command away.
   
                    Start with:
                    • about - Learn more about me
                    • skills - View my technical skills
                    • projects - Explore my featured projects
                    • experience - See my work experience
                    • education - View my education
                    • contact - Get in touch
                    • echo - Echo a passed string

                    Type 'help' anytime to see all available commands.

                    Happy exploring 🚀
                    `}


                    promptLabel="alokkumaryadav:~$"
                    promptLabelStyle={{ color: '#00ff00' }}
                />
            </div>
        </MacWindow>
    )
}

export default Cli
