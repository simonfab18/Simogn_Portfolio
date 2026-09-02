const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Safari", // was "Safari"
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive", // was "Trash"
        icon: "trash.png",
        canOpen: false,
    },
];

const blogPosts = [
    {
        id: 1,
        date: "2025",
        title:
            "AI in Connected Products (AIOT)",
        image: "/images/linkedin.png",
        link: "https://www.linkedin.com/learning/certificates/1cd37556f96fb4a58d226170920110f132675d7bee0f03c3b80a65e211d76654?trk=share_certificate",
    },
    {
        id: 2,
        date: "2025",
        title: "IoT Foundations: Operating Systems Fundamentals",
        image: "/images/linkedin.png",
        link: "https://www.linkedin.com/learning/certificates/28f6f09083eeb6d73710d13772ccfe1c169467fcc85f451da1dc0306c43f5597?trk=share_certificate",
    },
    {
        id: 3,
        date: "2025",
        title: "Cloud Storage Concepts: Services, Cost Control, and Security",
        image: "/images/linkedin.png",
        link: "https://www.linkedin.com/learning/certificates/eec2cd0af2a80ee4baa4615d69e08a86ec57e254ba265fffb1b0ec5fd7e58563?trk=share_certificate",
    },

    {
        id: 4,
        date: "2025",
        title: "Getting Started with Professional Scrum",
        image: "/images/linkedin.png",
        link: "https://www.linkedin.com/learning/certificates/d395be5c964b48bb1eeb3492659fe029a9577a84f3a6135caf4cafd509237d11?trk=share_certificate",
    },
];

const techStack = [
    {
        category: "Language",
        items: ["TypeScript", "JavaScript", "Python", "SQL"],
    },
    {
        category: "Frontend",
        items: ["React.js", "Next.js", "Tailwind", "CSS", "Vite"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express.js", "FastAPI", "REST", "OAuth", "JWT"],
    },
    {
        category: "Database",
        items: ["PostgreSQL", "Supabase"],
    },
    {
        category: "AI & Automation",
        items: ["OpenAI API", "Claude", "Gemini API", "n8n"],
    },
    {
        category: "DevOps & Cloud",
        items: ["Git", "GitHub", "Docker", "Vercel", "Render", "Google Cloud"],
    },
];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#f4656b",
        link: "https://github.com/simonfab18",
    },

    {
        id: 4,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#05b6f6",
        link: "https://www.linkedin.com/in/simon-fabregas-b66611360/",
    },
];

const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Library",
    },
    {
        id: 2,
        icon: "/icons/gicon2.svg",
        title: "Memories",
    },
    {
        id: 3,
        icon: "/icons/gicon3.svg",
        title: "Places",
    },
    {
        id: 4,
        icon: "/icons/gicon4.svg",
        title: "People",
    },
    {
        id: 5,
        icon: "/icons/gicon5.svg",
        title: "Favorites",
    },
];

const gallery = [
    {
        id: 1,
        name: "toga.jpg",
        img: "/images/toga.jpg",
    },
    {
        id: 2,
        name: "formal.jpg",
        img: "/images/formal.jpg",
    },
    {
        id: 3,
        name: "simon1.jpg",
        img: "/images/simon1.jpg",
    },
];

export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        {
            id: 5,
            name: "jobfit-resume-analyzer",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 right-20",
            windowPosition: "top-[45vh] left-80",
            children: [
                {
                    id: 1,
                    name: "jobfit-resume-analyzer.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    subtitle: "JobFit Resume Analyzer",
                    description: [
                        "JobFit is an AI-powered resume analyzer that evaluates how well a candidate's resume aligns with a target job description.",
                        "It identifies relevant skills, missing keywords, experience gaps, and areas for improvement to help applicants better tailor their resumes.",
                        "The system transforms job requirements and resume content into actionable feedback for a stronger, more targeted application.",
                    ],
                },
                {
                    id: 2,
                    name: "jobfit-resume-analyzer.url",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://puter.com/app/jobfit-ai-resume-analyzer",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "jobfit-resume-analyzer.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/jobfit.png",
                },
            ],
        },

        {
            id: 6,
            name: "kora-ai-company-knowledge-&-operations-rag-assistant",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-4",
            windowPosition: "top-[57vh] left-120",
            children: [
                {
                    id: 1,
                    name: "KORA - AI COMPANY KNOWLEDGE & OPERATIONS RAG ASSISTANT.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    subtitle: "KORA - AI COMPANY KNOWLEDGE & OPERATIONS RAG ASSISTANT",
                    description: [
                        "KORA is an AI-powered company knowledge assistant that uses Retrieval-Augmented Generation (RAG) to provide answers grounded in internal documentation, SOPs, and operational knowledge.",
                        "It helps teams quickly retrieve company-specific information, understand processes, and access relevant knowledge through a single conversational interface.",
                        "Designed to turn scattered internal documentation into an accessible and practical source of organizational knowledge.",
                    ],
                },
                {
                    id: 2,
                    name: "KORA - AI COMPANY KNOWLEDGE & OPERATIONS RAG ASSISTANT.url",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://kora-ai-company-knowledge-operation.vercel.app/",
                    position: "top-20 left-20",
                },
                {
                    id: 4,
                    name: "KORA - AI COMPANY KNOWLEDGE & OPERATIONS RAG ASSISTANT.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-80",
                    imageUrl: "/images/kora.png",
                },
            ],
        },

        {
            id: 7,
            name: "sift-ai-customer-support-triage",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 right-60",
            windowPosition: "top-[71vh] left-90",
            children: [
                {
                    id: 1,
                    name: "SIFT - AI POWERED CUSTOMER SUPPORT TRIAGE PLATFORM.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    subtitle: "SIFT - AI POWERED CUSTOMER SUPPORT TRIAGE PLATFORM",
                    description: [
                        "SIFT is an AI-powered customer support platform that automatically analyzes incoming requests, classifies their intent, and routes them to the appropriate workflow.",
                        "It combines customer context, support knowledge, and AI-generated responses to help teams resolve issues faster while keeping communication consistent.",
                        "Built to automate repetitive support operations while giving teams better visibility into customer requests and response workflows.",
                    ],
                },
                {
                    id: 2,
                    name: "SIFT - AI POWERED CUSTOMER SUPPORT TRIAGE PLATFORM.url",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://ai-customer-support-triage-response.vercel.app/",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "SIFT - AI POWERED CUSTOMER SUPPORT TRIAGE PLATFORM.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/sift.png",
                },
            ],
        },

        {
            id: 8,
            name: "sports-websocket",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 left-4",
            windowPosition: "top-[60vh] right-130",
            children: [
                {
                    id: 1,
                    name: "sports-websocket.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    subtitle: "Sports WebSocket",
                    description: [
                        "Sports WebSocket is a backend system designed to stream live sports events, scores, and updates through persistent WebSocket connections.",
                        "It demonstrates real-time communication and event-driven data streaming, allowing connected clients to receive updates without continuously polling the server.",
                        "Backend implementation completed; frontend application and live sports data integration are not yet implemented.",
                    ],
                },
            ],
        },

        {
            id: 9,
            name: "n8n-automations",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 right-60",
            windowPosition: "top-[70vh] right-90",
            children: [
                {
                    id: 1,
                    name: "AI-Powered Real Estate CRM, Lead Qualification & Booking Automation.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-5",
                    subtitle: "AI-Powered Real Estate CRM, Lead Qualification & Booking Automation",
                    description: [
                        "An end-to-end real estate lead conversion system built with n8n. It captures property inquiries, qualifies each lead, updates the CRM, sends personalized responses, alerts the sales team, and automates appointment booking and follow-up.",
                        "The goal was to reduce manual lead handling and help real estate teams respond faster to serious buyers while keeping lower-priority leads organized for future follow-up.",
                        "Tools used: n8n,\n" +
                        "GoHighLevel,\n" +
                        "Google Gemini,\n" +
                        "Gmail,\n" +
                        "Slack,\n" +
                        "Tally Form"
                    ],
                },

                {
                    id: 2,
                    name: "AI Customer Support Triage & Response.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-80 left-38",
                    subtitle: "AI Customer Support Triage & Response",
                    description: [
                        "An AI-powered customer support automation system that helps businesses manage incoming support emails faster and more consistently.",
                        "The system is designed for e-commerce stores, service businesses, and growing support teams that receive a high volume of customer inquiries.",
                        "Tools used: n8n,\n" +
                        "Google Gemini,\n" +
                        "Gmail,\n" +
                        "Airtable,\n" +
                        "Slack",
                    ],
                },

                {
                    id: 3,
                    name: "Shopify Abandoned Checkout Recovery Automation.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-34",
                    subtitle: "Shopify Abandoned Checkout Recovery Automation",
                    description: [
                        "The workflow detects when a customer starts checkout but does not complete the purchase, waits for a defined period, checks whether the order was completed, and sends a sequence of recovery emails only when necessary.",
                        "The system also tracks each recovery attempt in Airtable, prevents duplicate follow-ups, records successful recoveries, and calculates recovered revenue.",
                        "Tools used: n8n,\n" +
                        "Shopify,\n" +
                        "Shopify Admin API,\n" +
                        "Airtable,\n" +
                        "Gmail",
                    ],
                },

                {
                    id: 4,
                    name: "B2B Lead Scraping, Contact Enrichment and AI Outreach Automation.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-48 left-5",
                    subtitle: "B2B Lead Scraping, Contact Enrichment and AI Outreach Automation",
                    description: [
                        "An end-to-end B2B lead generation and outreach automation using n8n. The workflow helps businesses identify potential clients, enrich company data, generate personalized outreach emails with AI, organize leads in Airtable, and automatically prepare Gmail drafts for review.",
                        "The system is configurable and can be reused across different industries, locations, and service offers without rebuilding the workflow from scratch.",
                        "Tools used: n8n,\n" +
                        "Apify,\n" +
                        "Snov.io,\n" +
                        "Google Gemini,\n" +
                        "Gmail,\n" +
                        "Airtable,\n" +
                        "Tally Forms",
                    ],
                },

                {
                    id: 5,
                    name: "AI-Powered CRM Lead Capture, Qualification, and Response System.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-48 right-34",
                    subtitle: "AI-Powered CRM Lead Capture, Qualification, and Response System",
                    description: [
                        "This system automatically captures new inquiries, analyzes and qualifies each lead using AI, creates or updates the contact in HubSpot, opens a linked sales deal, alerts the sales team, and sends a personalized response to the prospect.",
                        "The workflow is designed for service businesses, agencies, consultants, and sales teams that want to respond faster, reduce manual data entry, and ensure that no new lead is overlooked.",
                        "Tools used: n8n,\n" +
                        "HubSpot,\n" +
                        "Google Gemini,\n" +
                        "Gmail,\n" +
                        "n8n Forms",
                    ],
                },

                {
                    id: 6,
                    name: "n8n_1.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-5 left-38",
                    imageUrl: "/images/n8n-real-estate.png",
                },

                {
                    id: 7,
                    name: "n8n_2.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-5 right-1",
                    imageUrl: "/images/n8n-shopify.png",
                },

                {
                    id: 8,
                    name: "n8n_3.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-48 right-1",
                    imageUrl: "/images/n8n-lead-capture.png",
                },

                {
                    id: 9,
                    name: "n8n_4.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-48 left-38",
                    imageUrl: "/images/n8n-lead-scraping.png",
                },

                {
                    id: 10,
                    name: "n8n_5.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-85 right-34",
                    imageUrl: "/images/n8n-customer-support.png",
                },
            ],
        },
    ],
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "toga.png",
            icon: "/images/toga.jpg",
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: "/images/toga.jpg",
        },
        {
            id: 2,
            name: "formal.png",
            icon: "/images/formal.jpg",
            kind: "file",
            fileType: "img",
            position: "top-28 right-72",
            imageUrl: "/images/formal.jpg",
        },
        {
            id: 3,
            name: "simon1.png",
            icon: "/images/simon1.jpg",
            kind: "file",
            fileType: "img",
            position: "top-52 left-80",
            imageUrl: "/images/simon1.jpg",
        },
        {
            id: 4,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-60 left-5",
            subtitle: "Meet the Developer Behind the Code",
            image: "/images/formal_cut.jpg",
            description: [
                "Hey! I’m Simon 👋, an IT graduate and software developer who enjoys turning ideas into practical, well-designed applications.",
                "I work across modern web development, AI, automation, and cloud technologies, with experience building everything from interactive web apps to AI-powered systems and business workflows.",
                "I care about writing clean, maintainable code while creating interfaces that feel intuitive, responsive, and enjoyable to use.",
                "I’m always curious about new technologies and love taking on challenging projects that push me to learn, experiment, and build something better."
            ],
        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            // you can add `href` if you want to open a hosted resume
            // href: "/your/resume/path.pdf",
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "btc.jpg",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-10",
            imageUrl: "/images/btc.jpg",
        },
    ],
};

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
