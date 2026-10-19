import project1 from "../assets/projects/Project-1.png";
import project2 from "../assets/projects/Project-2.png";
import project3 from "../assets/projects/Project-3.png";

const projects = [
  {
    id: 1,
    title: "Bazar Dor App A07",
    image: project1,
    category: "Frontend Web Application",
    technologies: [
      "React",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "React.js",
      "Next.js",
      "Better Auth"
    ],
    description:
      "BazarDor is a responsive web application that helps users check daily commodity prices in Bangladesh. Users can explore products, compare price changes, and view market information through a simple and user-friendly interface. Built with Next.js, React, JavaScript, and CSS.",
    live: "https://bazardor-app-a7.vercel.app/",
    github: "https://github.com/majedul45/bazardor-app-a7",
    challenges: [
      "Integrating REST APIs to fetch and display product prices and category data accurately",
      "Implementing dynamic price-change indicators to highlight rising and falling commodity prices",
      "Ensuring responsive layouts and consistent UI across desktop, tablet, and mobile devices"
    ],
    future: [
      "Real-time commodity price updates with live market data integration",
      "Advanced product search, filtering, and price comparison features",
      "Interactive price history charts to track daily, weekly, and monthly price trends"
    ],
  },
  {
    id: 2,
    title: "FitLog — Personal Fitness Tracker",
    image: project2,
    category: "Fitness Tracking Web App",
    technologies: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Vite",
      "DaisyUI",
      "REST API"
    ],
    description:
      "A responsive fitness tracking web application designed to help users explore workouts, manage fitness activities, and track their workout plans. Features dynamic workout data fetching, interactive workout cards, fitness activity management, and a user-friendly interface optimized for mobile, tablet, and desktop devices.",
    live: "https://fitlog-app-a06.vercel.app/",
    github: "https://github.com/majedul45/fitlog-app-a06",
    challenges: [
      "Efficient global state management using React Context API to manage workout-related data and user interactions.",
      "Dynamic REST API integration to fetch and display workout data with proper loading and error handling.",
      "Interactive workout management with real-time UI updates and efficient data handling."
    ],
    future: [
      "User authentication and personalized fitness dashboards.",
      "Workout history tracking with progress visualization and activity statistics.",
      "Integration with fitness APIs and persistent workout data storage."
    ],
  },
  {
    id: 3,
    title: "StackForge — Dev Stack Builder",
    image: project3,
    category: "Productivity & Developer Tools",
    technologies: [
      "React",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "DaisyUI",
      "Vite",
      "React Toastify",
      "JSON"
    ],
    description:
      "An interactive developer productivity tool that helps users build and manage their personalized technology stack. Features a searchable technology collection, category-based filtering, interactive technology cards, and a dynamic stack management system. Users can add technologies to their stack, prevent duplicate selections, and remove individual or all selected technologies through an intuitive, responsive interface.",
    live: "https://neon-puffpuff-874999.netlify.app/",
    github: "https://github.com/majedul45/DevStack-React-A05",
    challenges: [
      "Implemented React state management to handle technology selection, removal, duplicate prevention, and real-time UI updates.",
      " Used Tailwind CSS and DaisyUI to create a consistent, responsive interface with interactive states and visual feedback.",
      "Organized technology information in JSON format for efficient rendering and easier content maintenance."

    ],
    future: [
      "Advanced search, sorting, and category-based filtering.",
      "Export and share personalized technology stacks.",
      "User authentication and cloud synchronization using Firebase."
    ],
  },
];

export default projects;
