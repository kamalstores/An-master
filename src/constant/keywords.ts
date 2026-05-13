const names = [
  "Kamal Sharma",
  "Kamal Sharma Portfolio",
  "kamalstores",
  "Kamal Sharma NIT Kurukshetra",
  "Kamal Sharma Haryana",
];

const roles = [
  "Software Engineer",
  "Full Stack Developer",
  "Next.js Developer",
  "React Developer",
  "Backend Developer",
  "AI/ML Engineer",
  "Competitive Programmer",
  "CS Student Developer",
  "Cloud Developer",
  "DSA Expert",
];

const skills = [
  // Web Frameworks & Libraries
  "Next.js",
  "React.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "Express.js",

  // Database & Backend
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "Prisma ORM",
  "REST API",
  "Firebase",

  // AI/ML & Systems
  "Machine Learning",
  "Deep Learning",
  "NLP",
  "TensorFlow",
  "Keras",
  "Computer Vision",
  "C++ Optimization",
  "Python Automation",
  "Docker",
  "CI/CD Pipelines",
  "Git & GitHub",

  // Cloud
  "AWS",
  "Microsoft Azure",
  "Google Cloud",
  "AWS Bedrock",
  "Vercel",
];

const projects = [
  "MetaScrub",
  "CarRental Platform",
  "Emotion Detection CNN",
  "DSA Problem Tracker",
];

const locations = [
  "India",
  "Haryana",
  "Kurukshetra",
  "NIT Kurukshetra",
  "Bengaluru",
  "Delhi NCR",
  "Remote",
  "Worldwide",
];

const longTail = [
  "Hire Full Stack Developer India",
  "Best React Developer Portfolio NIT",
  "Software Engineer Intern Accenture",
  "Smart India Hackathon Finalist",
  "DSA Tracker App Developer",
  "Privacy First Web App Developer",
  "Machine Learning Projects Showcase",
  "Freelance Web Developer India",
  "Open Source Builder GitHub",
  "Competitive Programmer LeetCode",
];

export const Keywords = [
  ...names,
  ...roles,
  ...skills,
  ...projects,
  ...locations,
  ...longTail,

  ...roles.flatMap((role) => locations.map((loc) => `${role} in ${loc}`)),
  ...skills.map((skill) => `${skill} Developer`),
  ...skills.map((skill) => `${skill} Expert`),
  ...skills.map((skill) => `Hire ${skill} Developer`),
];
