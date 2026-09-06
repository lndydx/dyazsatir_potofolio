export type ProjectLink = { label: string; href: string };

export type Project = {
  name: string;
  madeWith: string;
  description: string;
  image?: string;
  imagePosition?: string;
  frame?: "browser" | "none";
  links: ProjectLink[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "ChemReact: Reaction Space Explorer",
    madeWith: "Python - RDKit - XGBoost - Next.js",
    description:
      "End-to-end data science pipeline: Parsing and cleaning 49,711 USPTO chemical reactions, feature engineering with Morgan fingerprints, reaction-type classification with XGBoost (98.4% accuracy), and an interactive web app to explore the results.",
    image: "/images/chemreact.webp",
    imagePosition: "center 15%",
    frame: "browser",
    links: [
      { label: "Live site", href: "https://chem-reaction-space.vercel.app/" },
      { label: "Code", href: "https://github.com/lndydx/ChemReactionSpace" },
    ],
    featured: true,
  },
  {
    name: "Atmoscope",
    madeWith: "Kotlin - REST API",
    description: "Android weather & astronomy app: Real-time weather and celestial position data in one view.",
    image: "/images/atmoscopes.webp",
    imagePosition: "center 30%",
    frame: "none",
    links: [{ label: "Code", href: "https://github.com/lndydx/Atmoscope" }],
  },
  {
    name: "Lnx Shader",
    madeWith: "GLSL",
    description: "Lnx Shader is a graphical rework pack for Minecraft Java Edition. Recommended for Low-Mid End device.",
    image: "/images/lnxshader.webp",
    imagePosition: "center",
    frame: "none",
    links: [
      { label: "Code", href: "https://github.com/lndydx/LnxShader" },
      { label: "Download", href: "https://github.com/lndydx/LnxShader/releases" },
    ],
  },
  {
    name: "Beyond Netherite Modpack",
    madeWith: "Java - Fabric",
    description: "A custom modpack that includes tools and armor made of obsidian and two new mobs",
    image: "/images/beyond_netherite.webp",
    imagePosition: "center",
    frame: "none",
    links: [
      { label: "Code", href: "https://github.com/lndydx/BeyondNetherite" },
      { label: "Download", href: "https://github.com/lndydx/BeyondNetherite/releases" },
    ],
  },
  {
    name: "Math Visualization",
    madeWith: "Python - Manim",
    description: "Mathematical visualizations made with Manim animation engine. From calculus to linear algebra.",
    image: "/images/math.webp",
    imagePosition: "center 10%",
    frame: "none",
    links: [
      { label: "Code", href: "https://github.com/lndydx/Manim_Math_Visualization" },
    ],
  },
];

export type ExperienceItem = { role: string; org: string; desc: string; duration: string };

export const experience: ExperienceItem[] = [
  {
    role: "Tech Division",
    org: "GDGoC (Google Developer Groups on Campus)",
    desc: "Contributed to the tech division for GDGoC Widyatama.",
    duration: "2025 - 2026",
  },
  {
    role: "Data Science Essentials with Python",
    org: "Cisco Networking Academy",
    desc: "Foundational data science certification data wrangling, visualization, and basic machine learning with Python.",
    duration: "Certificate",
  },
];