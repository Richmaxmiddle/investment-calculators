export interface PassiveIncomeCategory {
  id: string;
  titleSw: string;
  titleEn: string;
  descriptionSw: string;
  descriptionEn: string;
  icon: string;
  complexity: "Rahisi" | "Kati" | "Kubwa";
  difficulty: "Easy" | "Medium" | "Hard";
  revenuePotential: string;
  marketingNiche: string;
  presetPrompt: string;
}

export interface GeneratedToolResponse {
  title: string;
  summary: string;
  blueprint: string[];
  marketingStrategy: string;
  toolCode: string;
}

export const PRESET_CATEGORIES: PassiveIncomeCategory[] = [
  {
    id: "universal-studio",
    titleSw: "AI Universal Web Project Studio 💫",
    titleEn: "Universal AI Project Builder & Publisher",
    descriptionSw: "Weka wazo lolote lile la website au app (mf. portfolio, Pomodoro, dashboard) na AI yetu itatengeneza mradi mzima (full project) kwa sekunde chache wenye uwezo wa kupakua na ku-publish mara moja.",
    descriptionEn: "Enter ANY website or web application idea in plain English. Generates a fully working Netlify-style standalone project you can preview, refine, download, or share.",
    icon: "Sparkles",
    complexity: "Kubwa",
    difficulty: "Hard",
    revenuePotential: "$1,000 - $10,000 / month",
    marketingNiche: "Custom Web Applications",
    presetPrompt: "Build an interactive, highly professional dashboard with responsive visuals, beautiful animations, robust features, and custom interactive math/logic. Ensure the page looks modern with elegant color pairings and card layouts."
  },
  {
    id: "seo-metadata",
    titleSw: "Jenereta ya Meta-Tags na SEO",
    titleEn: "SEO Metadata & Keyword Tool",
    descriptionSw: "Watu mamilioni kila siku wanatafuta jinsi ya kuboresha tovuti zao. Tovuti hii inajiendesha yenyewe kuandika Meta-Tags za kurasa na kutoa Maneno Muhimu (Keywords) kwa kutumia AI.",
    descriptionEn: "A high-conversion SEO utility helping websites rank higher on Google search results automatically.",
    icon: "TrendingUp",
    complexity: "Rahisi",
    difficulty: "Easy",
    revenuePotential: "$200 - $1,500 / mwezi",
    marketingNiche: "Blogging & Web Development",
    presetPrompt: "Build a high-performance SEO Meta Generator tool. It should have inputs for Page Title, Description, Focus Keywords, and Target Audience. It must instantly generate fully optimized meta tags, JSON-LD Schema schema, and open graph image tags. It should have a clean copy to clipboard button.",
  },
  {
    id: "copydraft-ads",
    titleSw: "Jenereta ya Vichwa vya Habari (Slogans)",
    titleEn: "AI Slogan & Copywriter Hook Engine",
    descriptionSw: "Zana inayosaidia wafanyabiashara wadogo na waanzilishi (founders) kupata slogans, kauli mbinu na vichwa bora vya video za Youtube kwa Sekunde 1.",
    descriptionEn: "Highly addictive copywriting tool that writes headlines, social hooks, and brand slogans instantly.",
    icon: "Rocket",
    complexity: "Rahisi",
    difficulty: "Easy",
    revenuePotential: "$300 - $2,000 / mwezi",
    marketingNiche: "Marketing & Startups",
    presetPrompt: "Create a highly engaging brand slogan and copywriting generator. Users input their Business Name and Niche, and pick a Tone (Witty, Professional, Bold, Funny). The tool generates 10 high-conversion headlines with copy-to-clipboard options and responsive CSS fade-in actions.",
  },
  {
    id: "finance-calc",
    titleSw: "Vikokotoo vya Uwekezaji na Fedha",
    titleEn: "Viral Financial Calculators",
    descriptionSw: "Vikokotoo vya kifedha (kama vya kukokotoa riba ya mchanganyiko - Compound Interest, madeni au mikopo) ni rahisi kupata trafiki kubwa ya kudumu kutoka Google organic search. Watu wanavishiriki sana.",
    descriptionEn: "Viral, highly search-engine friendly tools used daily by users calculating interest, debts, and loan structures.",
    icon: "Calculator",
    complexity: "Kati",
    difficulty: "Medium",
    revenuePotential: "$500 - $4,000 / mwezi",
    marketingNiche: "Personal Finance & Real Estate",
    presetPrompt: "Create a premium Compound Interest & Investment Visualizer Calculator. It should allow inputs for Initial Principal, Monthly Contribution, Annual Interest Rate, and Years. It must render a beautiful table breakdown showing year-by-year growth, total principal, and total interest accumulated, styled cleanly with fully styled custom responsive cards.",
  },
  {
    id: "svg-wave-blob",
    titleSw: "Svg Graphic Generator & Wave Maker",
    titleEn: "SVG Designer & Wave Background Maker",
    descriptionSw: "Wabunifu wa tovuti na wasanifu picha (web designers) huwa wanatafuta wallpapers, mawimbi ya kurembesha (waves), au maumbo thabiti (shapes) ya Svg kila sekunde kujumuisha kwenye kazi zao.",
    descriptionEn: "Visual generator tool helping designers easily create custom decorative wave backgrounds, blobs, and gradients in SVG export.",
    icon: "Palette",
    complexity: "Kati",
    difficulty: "Medium",
    revenuePotential: "$400 - $3,000 / mwezi",
    marketingNiche: "Web Design, Graphics & UI/UX",
    presetPrompt: "Create an interactive SVG Wave and Curve Generator. Users can customize wave wave height, wave count, select solid or premium linear gradients, and toggle smooth curves. It must show a live SVG render box and a button to copy the direct SVG path/code or download as a .svg file.",
  },
  {
    id: "conversion-converter",
    titleSw: "Zana ya Kubadili File & Vipimo",
    titleEn: "Multi-Unit & File Size Optimizer",
    descriptionSw: "Trafiki kubwa ya bure! Kigeuzi hiki kinasaidia kubadili picha (e.g., PNG kwenda WEBP / JPEG), saizi za mafaili au vipimo kwa urahisi moja kwa moja kwenye kifaa (Client-Side).",
    descriptionEn: "Highly efficient tool converting image compression formats, unit parameters, or code configurations client-side instantly.",
    icon: "FileCode",
    complexity: "Kati",
    difficulty: "Medium",
    revenuePotential: "$600 - $5,000 / mwezi",
    marketingNiche: "System Administration / Daily Utilities",
    presetPrompt: "Create a client-side Image File Converter and Resize simulator. Users upload or drop any image, can visually adjust the quality (using a slider), and choose to download it as WebP, JPEG, or PNG format with custom dimensions. It must demonstrate total compression stats dynamically.",
  }
];
