export const TOPICS = [
  // --- TECHNOLOGY & DEVELOPMENT ---
  "JavaScript",
  "TypeScript",
  "Python",
  "Rust",
  "Go",
  "C++",
  "Java",
  "Swift",
  "Kotlin",
  "PHP",
  "HTML",
  "CSS",
  "SASS",
  "SCSS",
  "Tailwind CSS",
  "Bootstrap",
  "Responsive Design",
  "Web Accessibility",
  "DOM Manipulation",
  "Web Animations",
  "Canvas API",
  "Web Components",
  "LitElement",
  "React.js",
  "Next.js",
  "Vue.js",
  "Nuxt.js",
  "Svelte",
  "SvelteKit",
  "Angular",
  "Solid.js",
  "Astro",
  "Redux",
  "Zustand",
  "Recoil",
  "MobX",
  "React Query",
  "tRPC",
  "TanStack Table",
  "Formik",
  "React Hook Form",
  "Framer Motion",
  "Three.js",
  "D3.js",
  "Chart.js",
  "Jest",
  "Playwright",
  "Cypress",
  "Vitest",
  "Vite",
  "Webpack",
  "Babel",
  "ESLint",
  "Prettier",
  "Type Checking",
  "Git",
  "GitHub",
  "GitLab",
  "CI/CD",
  "Docker",
  "Kubernetes",
  "Terraform",
  "Linux Admin",
  "Networking Basics",
  "HTTP/HTTPS",
  "WebSockets",
  "GraphQL",
  "REST APIs",
  "Backend Development",
  "Node.js",
  "Express.js",
  "NestJS",
  "Fastify",
  "Django",
  "Flask",
  "Laravel",
  "Ruby on Rails",
  "ASP.NET",
  "Spring Boot",
  "Go Fiber",
  "Hapi.js",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "SQLite",
  "Redis",
  "Firebase",
  "Supabase",
  "Prisma ORM",
  "Drizzle ORM",
  "PlanetScale",
  "Vercel",
  "Netlify",
  "Render",
  "AWS",
  "GCP",
  "Azure",
  "SaaS Development",
  "Serverless",
  "BFF Pattern",
  "Monorepos",

  // --- AI, DATA & SCIENCE ---
  "Machine Learning",
  "Deep Learning",
  "NLP",
  "Computer Vision",
  "AI Ethics",
  "Prompt Engineering",
  "Data Engineering",
  "Data Science",
  "Data Analytics",
  "Python for Data",
  "NumPy",
  "Pandas",
  "Scikit-learn",
  "TensorFlow",
  "PyTorch",
  "LangChain",
  "Vector Databases",
  "RAG Architecture",
  "OpenAI API",
  "LlamaIndex",
  "LLMs",
  "Chatbots",
  "Voice AI",
  "Image Generation",
  "Face Recognition",
  "Sentiment Analysis",
  "Web Scraping",
  "Big Data",
  "Data Warehousing",
  "Apache Kafka",
  "Airflow",
  "ETL Pipelines",
  "SQL Optimization",

  // --- MOBILE, GAMES, IOT ---
  "React Native",
  "Flutter",
  "SwiftUI",
  "Jetpack Compose",
  "PWA",
  "Game Design",
  "Unity",
  "Unreal Engine",
  "Pixel Art",
  "Game Engines",
  "Game Loops",
  "AR/VR",
  "Augmented Reality",
  "Virtual Reality",
  "Smart Homes",
  "Raspberry Pi",
  "Arduino",
  "IoT Sensors",
  "Home Automation",
  "Wearables",
  "Car Electronics",

  // --- UI/UX DESIGN ---
  "Figma",
  "Adobe XD",
  "Sketch",
  "UI Design",
  "UX Writing",
  "Design Systems",
  "Color Theory",
  "Typography",
  "User Flows",
  "Wireframing",
  "Prototyping",
  "Microinteractions",
  "Accessibility",
  "UX Psychology",

  // --- MARKETING & GROWTH ---
  "SEO",
  "Content Marketing",
  "Growth Hacking",
  "Email Marketing",
  "Copywriting",
  "Product Marketing",
  "SaaS Growth",
  "Facebook Ads",
  "Google Ads",
  "Affiliate Marketing",
  "Referral Programs",
  "Influencer Marketing",
  "Funnel Optimization",
  "Landing Pages",
  "A/B Testing",
  "Customer Retention",
  "Brand Strategy",
  "Analytics",

  // --- BUSINESS & STARTUPS ---
  "Startup Ideas",
  "MVP Launches",
  "Product Management",
  "Agile",
  "Scrum",
  "Kanban",
  "VC Funding",
  "Bootstrapping",
  "Angel Investing",
  "Pitch Decks",
  "Startup Culture",
  "Remote Teams",
  "Company Culture",
  "Hiring & Interviews",
  "Scaling Startups",
  "Exit Strategy",
  "SaaS Metrics",
  "B2B vs B2C",
  "Market Research",

  // --- FINANCE & CRYPTO ---
  "Personal Finance",
  "Budgeting",
  "Investing",
  "Index Funds",
  "Stock Market",
  "Crypto Trading",
  "NFTs",
  "DeFi",
  "Bitcoin",
  "Ethereum",
  "Web3",
  "Smart Contracts",
  "Solidity",
  "Crypto Wallets",
  "Yield Farming",
  "Tokenomics",
  "Blockchain Protocols",
  "Trading Bots",
  "Financial Literacy",

  // --- POLITICS & SOCIETY ---
  "Political Analysis",
  "Elections",
  "Public Policy",
  "International Relations",
  "Activism",
  "Social Justice",
  "LGBTQ+ Bullshit",
  "Feminism",
  "Government Systems",
  "Constitutional Law",
  "Criminal Justice",
  "Global Conflicts",
  "Diplomacy",
  "Freedom of Speech",
  "Civic Education",
  "Political Philosophy",

  // --- EDUCATION & PRODUCTIVITY ---
  "Study Hacks",
  "Time Management",
  "Note-taking",
  "Zettelkasten",
  "Second Brain",
  "Notion",
  "Obsidian",
  "PKM",
  "Digital Organization",
  "Mind Mapping",
  "Focus Strategies",
  "Pomodoro Technique",
  "Bullet Journaling",
  "Lifelong Learning",
  "Online Learning",
  "Learning Theory",
  "Remote Learning",

  // --- WRITING, MEDIA & ART ---
  "Fiction Writing",
  "Nonfiction Writing",
  "Poetry",
  "Blogging",
  "Technical Writing",
  "Journaling",
  "Creative Writing",
  "Screenwriting",
  "Fan Fiction",
  "Comics",
  "Calligraphy",
  "Typography Art",
  "Illustration",
  "AI Art",
  "Painting",
  "Sketching",
  "Digital Art",
  "Graffiti",
  "Tattoo Design",

  // --- BOOKS, MOVIES, MUSIC ---
  "Book Reviews",
  "Literary Analysis",
  "Self-Help Books",
  "Sci-Fi Books",
  "Fantasy Lore",
  "Film Reviews",
  "Movie Theories",
  "Cinema Techniques",
  "Soundtracks",
  "Film Festivals",
  "Indie Films",
  "YouTube Creators",
  "Podcasting",
  "DJing",
  "Music Production",
  "Sound Design",
  "Singing",
  "Rap Culture",
  "Hip Hop",
  "K-Pop",
  "Instrument Tutorials",

  // --- FASHION & LIFESTYLE ---
  "Streetwear",
  "Luxury Fashion",
  "Minimalist Style",
  "Vintage Fashion",
  "Fashion History",
  "Ethical Fashion",
  "Sneaker Culture",
  "Makeup",
  "Skincare",
  "Hairstyling",
  "Fragrances",
  "Outfit Planning",
  "Personal Style",
  "Modeling Tips",
  "Fashion Photography",

  // --- HEALTH & WELLNESS ---
  "Fitness Routines",
  "Bodyweight Training",
  "Gym Workouts",
  "Cardio",
  "HIIT",
  "Yoga",
  "Pilates",
  "Mindfulness",
  "Meditation",
  "Therapy",
  "Mental Health",
  "Self-Care",
  "Biohacking",
  "Nutrition",
  "Meal Planning",
  "Veganism",
  "Keto",
  "Intermittent Fasting",
  "Supplements",
  "Sleep Hacks",

  // --- FOOD & COOKING ---
  "Home Cooking",
  "Baking",
  "Vegan Recipes",
  "Meal Prep",
  "Street Food",
  "Culinary Skills",
  "Coffee Brewing",
  "Wine Tasting",
  "Cocktail Recipes",
  "Fermentation",
  "Cultural Foods",
  "Slow Cooking",
  "Grilling",
  "Desserts",
  "Healthy Recipes",

  // --- TRAVEL & CULTURE ---
  "Backpacking",
  "Luxury Travel",
  "Solo Travel",
  "Digital Nomads",
  "Vanlife",
  "World Cultures",
  "Hidden Destinations",
  "Travel Photography",
  "Remote Work Travel",
  "City Guides",
  "Cultural Etiquette",

  // --- HOME, DIY, PETS ---
  "Interior Design",
  "Minimalism",
  "Decluttering",
  "DIY Projects",
  "Woodworking",
  "Gardening",
  "Plant Care",
  "Pet Care",
  "Dog Training",
  "Aquariums",
  "Exotic Pets",

  // --- RELATIONSHIPS & LIFE ---
  "Dating Advice",
  "Marriage",
  "Parenting",
  "Divorce Recovery",
  "Friendships",
  "Communication Skills",
  "Conflict Resolution",
  "Boundaries",
  "Love Languages",
  "Empathy",
  "Personal Development",

  // --- SPIRITUALITY & PHILOSOPHY ---
  "Stoicism",
  "Existentialism",
  "Spiritual Practices",
  "Religion",
  "Atheism",
  "New Age Beliefs",
  "Astrology",
  "Tarot Reading",
  "Lucid Dreaming",
  "Karma",
  "Chakras",
  "Life Purpose",
  "Gratitude",

  // --- MISC & EMERGING ---
  "Generative AI",
  "Prompt Crafting",
  "AI Agents",
  "Digital Twins",
  "Space Exploration",
  "Astrobiology",
  "Bioinformatics",
  "Neurotechnology",
  "Futurism",
  "Climate Tech",
  "Urban Planning",
  "Circular Economy",
  "Minimalist Coding",
  "Internet History",
  "Memes",
  "Reddit Culture",
  "Subcultures",
  "Internet Safety"
]
