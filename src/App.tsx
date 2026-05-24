import React, { useState, useEffect } from "react";
import { PRESET_CATEGORIES, PassiveIncomeCategory, GeneratedToolResponse } from "./types";
import CategoryCard from "./components/CategoryCard";
import BlueprintViewer from "./components/BlueprintViewer";
import SandboxPreview from "./components/SandboxPreview";
import HustleAcademy from "./components/HustleAcademy";
import { 
  Sparkles, 
  Lightbulb, 
  BookOpen, 
  Sliders, 
  TrendingUp, 
  ArrowRight, 
  RefreshCw, 
  Code,
  Globe,
  DollarSign,
  Briefcase,
  AlertCircle,
  MessageSquare,
  Send,
  User,
  Bot
} from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "chat" | "academy">("dashboard");
  const [selectedCategory, setSelectedCategory] = useState<PassiveIncomeCategory>(PRESET_CATEGORIES[0]);
  const [customInput, setCustomInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Refinement states
  const [refinementInput, setRefinementInput] = useState("");
  const [refining, setRefining] = useState(false);
  const [refinementHistory, setRefinementHistory] = useState<string[]>([]);
  
  // Chat Companion State
  const [chatMessages, setChatMessages] = useState<Array<{ sender: "user" | "ai"; text: string; time: string }>>([
    {
      sender: "ai",
      text: "Mambo mkuu! Karibu kwenye WealthOS AI Chat. Mimi ni msanidi na mshauri wako msaidizi mahiri (AI Full-Stack Developer).\n\nHapa unaweza kuniuliza mbinu za kutengeneza hela, kupokea miongozo ya kuweka Ads za Adsterra au AdSense, namna ya ku-publish kazi zako Netlify/GitHub, au kunidokezea wazo lolote jipya la website unalotaka nikujengee hapa bila hata kuniandikia mimi!\n\nNini ungependa tufanye leo?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [chatInput, setChatInput] = useState("");
  const [chatLoading, setChatLoading] = useState(false);
  const [generatedData, setGeneratedData] = useState<GeneratedToolResponse | null>({
    title: "MetaSuite - SEO & Meta-Tags Generator Engine",
    summary: "Monetize this high-conversion English utility tool by embedding Google AdSense, Ezoic or Adsterra scripts adjacent to the meta-tag preview interface.",
    blueprint: [
      "Step 1: Download this professional tool code by clicking the 'Download File (.html)' button below.",
      "Step 2: Log into your Vercel or Netlify account, or create one for free, and upload this single file instantly.",
      "Step 3: Copy your Adsterra Social Bar code (https://pl29533478.effectivecpmnetwork.com/...) and place it in the body tag of your published file to monetize incoming traffic.",
      "Step 4: Share the published URL on blogger forums, SEO Facebook groups, and developer channels to receive passive ad earnings automatically."
    ],
    marketingStrategy: "Blogging teams, agency owners, and independent programmers look for search-engine indexing tags and JSON-LD markup templates daily. Listing this helper suite on automated resource index sites delivers immense daily traffic.",
    toolCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SEO Meta Tags & Schema Markup Generator 🚀</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
    </style>
</head>
<body class="bg-slate-950 text-slate-100 min-h-screen flex flex-col">
    <header class="border-b border-slate-900 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
        <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center shadow-md">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <div>
                <h1 class="text-sm font-bold tracking-tight text-white uppercase">MetaSuite</h1>
                <p class="text-[9px] font-mono text-slate-500 uppercase tracking-widest leading-none">SEO Hook Engine</p>
            </div>
        </div>
        <div class="flex items-center gap-3">
            <span class="text-xs text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">✨ v1.2 Release</span>
        </div>
    </header>

    <main class="flex-grow max-w-7xl mx-auto w-full p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <!-- Control Box (Inputs) -->
        <section class="lg:col-span-5 bg-slate-900/40 border border-slate-900 rounded-2xl p-5 space-y-4">
            <div>
                <h2 class="text-xs font-bold font-mono uppercase tracking-wider text-slate-450 text-slate-400">01. Configure Website Details</h2>
                <p class="text-xs text-slate-500 mt-1">Configure your metadata to generate Google, Facebook, and Twitter tags instantly in real-time.</p>
            </div>

            <div class="space-y-3">
                <div>
                    <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Site Name</label>
                    <input id="siteName" type="text" value="My Digital Portal" oninput="updateAll()" class="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all">
                </div>
                <div>
                    <div class="flex justify-between items-center mb-1.5">
                        <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Page Title</label>
                        <span id="titleCounter" class="text-[9px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-900/30 px-1.5 py-0.5 rounded">0 / 60 chars</span>
                    </div>
                    <input id="pageTitle" type="text" value="Grow Your Digital Business Faster on Autopilot" oninput="updateAll()" class="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all">
                </div>
                <div>
                    <div class="flex justify-between items-center mb-1.5">
                        <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Meta Description</label>
                        <span id="descCounter" class="text-[9px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-900/30 px-1.5 py-0.5 rounded">0 / 160 chars</span>
                    </div>
                    <textarea id="metaDesc" rows="3" oninput="updateAll()" class="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all leading-relaxed">Discover how we help online creators and small businesses build sustainable passive income streams with 100% free automated tools.</textarea>
                </div>
                <div>
                    <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Target Keyphrase</label>
                    <input id="focusKeyword" type="text" value="passive income, automated tools" oninput="updateAll()" class="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all">
                </div>
                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Author</label>
                        <input id="author" type="text" value="Richard" oninput="updateAll()" class="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all">
                    </div>
                    <div>
                        <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Robots Directive</label>
                        <select id="robots" onchange="updateAll()" class="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all">
                            <option value="index, follow">Index, Follow (Default)</option>
                            <option value="noindex, follow">Noindex, Follow</option>
                            <option value="index, nofollow">Index, Nofollow</option>
                            <option value="noindex, nofollow">Noindex, Nofollow</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="h-px bg-slate-900"></div>

            <div>
                <h3 class="text-xs font-bold font-mono uppercase tracking-wider text-slate-400">02. Rich OG Meta Configuration</h3>
                <p class="text-xs text-slate-500 mt-1">Configure open graph images and social network schemas for sharing.</p>
            </div>
            <div class="space-y-3">
                <div>
                    <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">OG Image URL</label>
                    <input id="ogImage" type="text" value="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop" oninput="updateAll()" class="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all">
                </div>
                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Twitter Username</label>
                        <input id="twitterUser" type="text" value="@richard_hq" oninput="updateAll()" class="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all">
                    </div>
                    <div>
                        <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Schema Type</label>
                        <select id="schemaType" onchange="updateAll()" class="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all">
                            <option value="Website">Website Schema</option>
                            <option value="Article">Article Schema</option>
                            <option value="Product">Product Schema</option>
                        </select>
                    </div>
                </div>
            </div>
        </section>

        <!-- Preview & Output displays (Tabs) -->
        <section class="lg:col-span-7 space-y-6">
            <!-- Simulated Google Snippet & Dynamic Preview -->
            <div class="bg-slate-900/25 border border-slate-900 p-5 rounded-2xl space-y-4">
                <div class="flex items-center justify-between">
                    <h3 class="text-xs font-bold font-mono uppercase tracking-wider text-slate-400">🔍 Live SERP Preview</h3>
                    <span class="text-[10px] bg-indigo-950 text-indigo-400 border border-indigo-900/50 px-2 py-0.5 rounded-full font-bold">Google Crawler Ready</span>
                </div>
                <div class="bg-white p-5 rounded-xl text-left border border-slate-200">
                    <p class="text-sm font-sans text-slate-500 mb-1 leading-none flex items-center gap-1">
                        <span class="text-xs text-slate-400 select-none">https://yourdomain.com</span>
                        <span class="text-[9px] text-slate-400">▼</span>
                    </p>
                    <h3 id="previewTitle" class="text-lg font-sans text-blue-800 hover:underline leading-tight cursor-pointer font-medium">Grow Your Digital Business Faster on Autopilot</h3>
                    <p id="previewDesc" class="text-xs font-sans mt-1 text-slate-600 leading-relaxed">Discover how we help online creators and small businesses build sustainable passive income streams with 100% free automated tools.</p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                    <div id="statusTitle" class="bg-emerald-950/20 border border-emerald-900/30 p-3 rounded-xl">
                        <p class="text-[9px] font-bold text-emerald-400 uppercase tracking-wider">Title Audit</p>
                        <p id="statusTitleText" class="text-xs text-slate-300 mt-1">Excellent title length (46/60)</p>
                    </div>
                    <div id="statusDesc" class="bg-emerald-950/20 border border-emerald-900/30 p-3 rounded-xl">
                        <p class="text-[9px] font-bold text-emerald-400 uppercase tracking-wider">Meta Description Audit</p>
                        <p id="statusDescText" class="text-xs text-slate-300 mt-1">Perfect length (127/160)</p>
                    </div>
                </div>
            </div>

            <!-- Dynamic Social Share Visualizer -->
            <div class="bg-slate-900/25 border border-slate-900 p-5 rounded-2xl space-y-4">
                <h3 class="text-xs font-bold font-mono uppercase tracking-wider text-slate-400">📱 Facebook Card Preview</h3>
                <div class="bg-slate-900 rounded-xl overflow-hidden border border-slate-800/80">
                    <img id="socialImagePreview" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop" alt="Share visual preview" class="w-full h-40 object-cover" />
                    <div class="p-4 bg-slate-950 border-t border-slate-900">
                        <div id="socialDomain" class="text-[9px] font-mono text-slate-500 uppercase tracking-wider">MYDIGITALPORTAL.COM</div>
                        <h4 id="socialTitle" class="text-xs font-bold text-slate-200 truncate mt-0.5">Grow Your Digital Business Faster on Autopilot</h4>
                        <p id="socialDesc" class="text-[10px] text-slate-400 mt-1 line-clamp-2">Discover how we help online creators and small businesses build sustainable passive income streams with 100% free automated tools.</p>
                    </div>
                </div>
            </div>

            <!-- Codes Tab container -->
            <div class="bg-slate-900/40 border border-slate-900 rounded-2xl p-5 space-y-4">
                <div class="flex items-center justify-between">
                    <h3 class="text-xs font-bold font-mono uppercase tracking-wider text-slate-400">💻 Generated Tag Outputs</h3>
                    <button onclick="copyCurrentCode()" class="bg-indigo-600 hover:bg-indigo-700 text-white text-[11px] font-bold px-3 py-1.5 rounded-xl transition-all flex items-center gap-1 cursor-pointer">
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                        <span id="copyBtnText">Copy Code</span>
                    </button>
                </div>

                <div class="flex gap-2 p-1 bg-slate-950 rounded-xl border border-slate-900 mr-auto w-fit">
                    <button onclick="switchTab('html')" id="tab-html" class="px-3 py-1.5 bg-indigo-650 text-white bg-indigo-600 text-[10px] font-mono uppercase font-bold rounded-lg cursor-pointer">Standard HTML Meta</button>
                    <button onclick="switchTab('social')" id="tab-social" class="px-3 py-1.5 text-slate-500 text-[10px] font-mono uppercase font-bold rounded-lg cursor-pointer">Social Graphs</button>
                    <button onclick="switchTab('schema')" id="tab-schema" class="px-3 py-1.5 text-slate-500 text-[10px] font-mono uppercase font-bold rounded-lg cursor-pointer">JSON-LD Schema</button>
                </div>

                <div class="relative bg-slate-950 rounded-xl border border-slate-900 p-4">
                    <pre class="overflow-x-auto text-[11px] text-emerald-400 font-mono leading-relaxed select-all" id="codeViewer"></pre>
                </div>
            </div>
        </section>
    </main>

    <footer class="mt-auto py-6 border-t border-slate-900 text-center text-xs text-slate-500 bg-slate-950">
        <p>&copy; 2026 MetaSuite Engine. This page is optimized and ready for deployment to premium domains.</p>
    </footer>

    <script>
        let currentTab = 'html';

        function updateAll() {
            const siteName = document.getElementById('siteName').value || 'My Site';
            const pageTitle = document.getElementById('pageTitle').value || 'My Page Title';
            const metaDesc = document.getElementById('metaDesc').value || 'My Page Description';
            const keywords = document.getElementById('focusKeyword').value || '';
            const author = document.getElementById('author').value || 'Richard';
            const robots = document.getElementById('robots').value;
            const ogImage = document.getElementById('ogImage').value || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200';
            const twitterUser = document.getElementById('twitterUser').value || '@twitter';
            const schemaType = document.getElementById('schemaType').value;

            // Update Counters
            document.getElementById('titleCounter').innerText = pageTitle.length + ' / 60 chars';
            document.getElementById('descCounter').innerText = metaDesc.length + ' / 160 chars';

            // Audits
            const statusTitle = document.getElementById('statusTitle');
            const statusTitleText = document.getElementById('statusTitleText');
            if(pageTitle.length > 0 && pageTitle.length <= 60) {
                statusTitle.className = "bg-emerald-950/20 border border-emerald-900/30 p-3 rounded-xl";
                statusTitleText.innerText = "Excellent title length (" + pageTitle.length + "/60)";
                statusTitleText.className = "text-xs text-emerald-400 mt-1";
            } else {
                statusTitle.className = "bg-amber-950/20 border border-amber-900/30 p-3 rounded-xl";
                statusTitleText.innerText = "Title is too long or short. Keep under 60 (" + pageTitle.length + ")";
                statusTitleText.className = "text-xs text-amber-400 mt-1";
            }

            const statusDesc = document.getElementById('statusDesc');
            const statusDescText = document.getElementById('statusDescText');
            if(metaDesc.length >= 120 && metaDesc.length <= 160) {
                statusDesc.className = "bg-emerald-950/20 border border-emerald-900/30 p-3 rounded-xl";
                statusDescText.innerText = "Excellent meta description (" + metaDesc.length + "/160)";
                statusDescText.className = "text-xs text-emerald-400 mt-1";
            } else {
                statusDesc.className = "bg-amber-950/20 border border-amber-900/30 p-3 rounded-xl";
                statusDescText.innerText = "Settle description between 120-160 characters (" + metaDesc.length + ")";
                statusDescText.className = "text-xs text-amber-400 mt-1";
            }

            // Updates Previews
            document.getElementById('previewTitle').innerText = pageTitle;
            document.getElementById('previewDesc').innerText = metaDesc;
            document.getElementById('socialTitle').innerText = pageTitle;
            document.getElementById('socialDesc').innerText = metaDesc;
            document.getElementById('socialImagePreview').src = ogImage;
            document.getElementById('socialDomain').innerText = siteName.toUpperCase() + '.COM';

            // Standard HTML Tags Generator
            const cleanTitle = pageTitle.replace(/"/g, '&quot;');
            const cleanDesc = metaDesc.replace(/"/g, '&quot;');
            const cleanKeywords = keywords.replace(/"/g, '&quot;');
            const cleanAuthor = author.replace(/"/g, '&quot;');

            let htmlBlock = '<!-- Primary HTML Meta Tags -->\\n';
            htmlBlock += '<title>' + cleanTitle + '</title>\\n';
            htmlBlock += '<meta name="title" content="' + cleanTitle + '">\\n';
            htmlBlock += '<meta name="description" content="' + cleanDesc + '">\\n';
            if (keywords) {
                htmlBlock += '<meta name="keywords" content="' + cleanKeywords + '">\\n';
            }
            htmlBlock += '<meta name="author" content="' + cleanAuthor + '">\\n';
            htmlBlock += '<meta name="robots" content="' + robots + '">';

            // Social Graphic Tags
            let socialBlock = '<!-- Open Graph / Share Cards -->\\n';
            socialBlock += '<meta property="og:type" content="website">\\n';
            socialBlock += '<meta property="og:site_name" content="' + siteName.replace(/"/g, '&quot;') + '">\\n';
            socialBlock += '<meta property="og:title" content="' + cleanTitle + '">\\n';
            socialBlock += '<meta property="og:description" content="' + cleanDesc + '">\\n';
            socialBlock += '<meta property="og:image" content="' + ogImage + '">\\n\\n';
            socialBlock += '<!-- Twitter Cards -->\\n';
            socialBlock += '<meta name="twitter:card" content="summary_large_image">\\n';
            socialBlock += '<meta name="twitter:creator" content="' + twitterUser + '">\\n';
            socialBlock += '<meta name="twitter:title" content="' + cleanTitle + '">\\n';
            socialBlock += '<meta name="twitter:description" content="' + cleanDesc + '">\\n';
            socialBlock += '<meta name="twitter:image" content="' + ogImage + '">';

            // JSON-LD Schema
            let schemaBlock = '<!-- JSON-LD Structured Data Schema Markup -->\\n';
            schemaBlock += '<script type="application/ld+json">\\n';
            schemaBlock += '{\\n';
            schemaBlock += '  "@context": "https://schema.org",\\n';
            schemaBlock += '  "@type": "' + schemaType + '",\\n';
            schemaBlock += '  "name": "' + siteName.replace(/"/g, '\\\\"') + '",\\n';
            schemaBlock += '  "headline": "' + pageTitle.replace(/"/g, '\\\\"') + '",\\n';
            schemaBlock += '  "description": "' + metaDesc.replace(/"/g, '\\\\"') + '"';
            if (author) {
                schemaBlock += ',\\n  "author": {\\n';
                schemaBlock += '    "@type": "Person",\\n';
                schemaBlock += '    "name": "' + author.replace(/"/g, '\\\\"') + '"\\n';
                schemaBlock += '  }';
            }
            schemaBlock += '\\n}\\n';
            schemaBlock += '<\/script>';

            // Put active content in code viewer
            const codeViewer = document.getElementById('codeViewer');
            if (currentTab === 'html') {
                codeViewer.textContent = htmlBlock;
            } else if (currentTab === 'social') {
                codeViewer.textContent = socialBlock;
            } else {
                codeViewer.textContent = schemaBlock;
            }
        }

        function switchTab(tabId) {
            currentTab = tabId;
            const tabs = ['html', 'social', 'schema'];
            tabs.forEach(t => {
                const el = document.getElementById('tab-' + t);
                if (t === tabId) {
                    el.className = 'px-3 py-1.5 bg-indigo-650 text-white bg-indigo-600 text-[10px] font-mono uppercase font-bold rounded-lg cursor-pointer';
                } else {
                    el.className = 'px-3 py-1.5 text-slate-500 text-[10px] font-mono uppercase font-bold rounded-lg cursor-pointer';
                }
            });
            updateAll();
        }

        function copyCurrentCode() {
            const range = document.createRange();
            range.selectNode(document.getElementById('codeViewer'));
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
            try {
                document.execCommand('copy');
                const btnText = document.getElementById('copyBtnText');
                const orig = btnText.innerText;
                btnText.innerText = 'Copied Code! 🎉';
                setTimeout(() => { btnText.innerText = orig; }, 1500);
            } catch (err) {}
            window.getSelection().removeAllRanges();
        }

        // Run on load
        updateAll();
    </script>
</body>
</html>`
  });

  // Call the server formulation endpoint to get custom AI ideas
  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    setRefinementHistory([]);
    try {
      const response = await fetch("/api/passive-income/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: selectedCategory.id,
          customInput: customInput.trim() || selectedCategory.presetPrompt,
        })
      });

      const data = await response.json();
      if (data.success) {
        setGeneratedData({
          title: data.title,
          summary: data.summary,
          blueprint: data.blueprint,
          marketingStrategy: data.marketingStrategy,
          toolCode: data.toolCode
        });
      } else {
        throw new Error(data.error || "Failed to generate the blueprint.");
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An error occurred during generation.");
    } finally {
      setLoading(false);
    }
  };

  // Helper for quick-start project building (AI Studio Mode)
  const handleGenerateCustomIdea = async (ideaPrompt: string) => {
    setLoading(true);
    setError(null);
    setRefinementHistory([]);
    const targetCategory = PRESET_CATEGORIES.find(c => c.id === "universal-studio") || PRESET_CATEGORIES[0];
    setSelectedCategory(targetCategory);
    setCustomInput(ideaPrompt);
    try {
      const response = await fetch("/api/passive-income/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: "universal-studio",
          customInput: ideaPrompt,
        })
      });

      const data = await response.json();
      if (data.success) {
        setGeneratedData({
          title: data.title,
          summary: data.summary,
          blueprint: data.blueprint,
          marketingStrategy: data.marketingStrategy,
          toolCode: data.toolCode
        });
      } else {
        throw new Error(data.error || "Failed to generate custom AI project.");
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An error occurred during custom project build.");
    } finally {
      setLoading(false);
    }
  };

  // Call the server code modification endpoint
  const handleRefine = async () => {
    if (!refinementInput.trim() || !generatedData) return;
    setRefining(true);
    setError(null);
    try {
      const response = await fetch("/api/passive-income/refine", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          currentCode: generatedData.toolCode,
          refinementPrompt: refinementInput.trim(),
          projectTitle: generatedData.title
        })
      });

      const data = await response.json();
      if (data.success) {
        setGeneratedData({
          title: data.title,
          summary: data.summary,
          blueprint: data.blueprint,
          marketingStrategy: data.marketingStrategy,
          toolCode: data.toolCode
        });
        setRefinementHistory(prev => [...prev, refinementInput.trim()]);
        setRefinementInput("");
      } else {
        throw new Error(data.error || "Failed to refine the code.");
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An error occurred during refinement.");
    } finally {
      setRefining(false);
    }
  };

  const handleSendChatMessage = async (textToSend?: string) => {
    const messageText = textToSend || chatInput.trim();
    if (!messageText) return;

    if (!textToSend) setChatInput("");

    const userMessage = {
      sender: "user" as const,
      text: messageText,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    const updatedMessages = [...chatMessages, userMessage];
    setChatMessages(updatedMessages);
    setChatLoading(true);

    try {
      const response = await fetch("/api/passive-income/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages.map(m => ({ sender: m.sender, text: m.text })) })
      });

      const data = await response.json();
      if (data.success) {
        setChatMessages(prev => [
          ...prev,
          {
            sender: "ai" as const,
            text: data.reply,
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
          }
        ]);
      } else {
        throw new Error(data.error || "Ujumbe haukuweza kutumwa.");
      }
    } catch (err: any) {
      console.error(err);
      setChatMessages(prev => [
        ...prev,
        {
          sender: "ai" as const,
          text: `Samahani mkuu, kuna hitilafu imetokea: ${err.message || "Tafadhali kagua connection yako."}`,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        }
      ]);
    } finally {
      setChatLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-50 flex flex-col font-sans overflow-x-hidden text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Header Navigation */}
      <header className="bg-white border-b border-slate-200 px-4 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0 shadow-sm relative z-30">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-indigo-600 rounded-lg flex items-center justify-center shadow-md shadow-indigo-200">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div className="text-left">
            <span className="font-extrabold text-lg tracking-tight uppercase text-slate-900">
              WealthOS <span className="text-indigo-600">v2.5</span>
            </span>
            <p className="text-[10px] font-mono text-slate-400 uppercase leading-none tracking-wider font-semibold">Autopilot Income System</p>
          </div>
        </div>

        {/* Tab state toggler */}
        <nav className="flex gap-2 bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs sm:text-sm">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`px-4 py-2 font-semibold rounded-lg flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === "dashboard"
                ? "bg-white text-indigo-600 shadow-sm"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            <Sliders className="w-4 h-4 shrink-0" />
            AI Expert Tools
          </button>

          <button
            onClick={() => setActiveTab("chat")}
            className={`px-4 py-2 font-semibold rounded-lg flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === "chat"
                ? "bg-white text-indigo-600 shadow-sm"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            <MessageSquare className="w-4 h-4 shrink-0 text-indigo-500" />
            AI Chat Companion (Gumzo)
          </button>
          
          <button
            onClick={() => setActiveTab("academy")}
            className={`px-4 py-2 font-semibold rounded-lg flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === "academy"
                ? "bg-white text-indigo-600 shadow-sm"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            <BookOpen className="w-4 h-4 shrink-0" />
            Hustle Academy
          </button>
        </nav>

        {/* Dashboard Live Metrics */}
        <div className="flex items-center gap-4 shrink-0">
          <span className="h-6 w-px bg-slate-200 hidden md:block" />
          <div className="text-right hidden sm:block">
            <p className="text-[10px] font-mono text-slate-400 uppercase font-bold leading-none">System Efficiency</p>
            <p className="text-sm font-black text-emerald-600">98.4% Autopilot</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-xs text-indigo-700 font-bold border border-indigo-200">
            TZ
          </div>
        </div>
      </header>

      {/* Main Container workspace */}
      <main className="flex-grow p-4 sm:p-8 max-w-7xl mx-auto w-full flex flex-col gap-8">
        
        {/* Dynamic Inner Tab View selector split */}
        {activeTab === "dashboard" ? (
          <div className="space-y-8 text-left">
            
            {/* Dynamic Intro Hero with active Swahili context */}
            <div className="bg-indigo-900 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shrink-0 shadow-lg border border-indigo-950">
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full" />
              <div className="relative z-10 space-y-2">
                <span className="text-[10px] font-mono font-bold bg-white/10 text-white border border-white/20 px-3 py-1 rounded-full uppercase tracking-wider">
                  WealthOS AI Web Studio - Google AI Studio & Netlify Compiler Live
                </span>
                <h1 className="text-2xl sm:text-4xl font-extrabold font-display leading-tight">
                  Tengeneza Website Yoyote unayotaka kwa Nguvu ya Gemini AI ⚡
                </h1>
                <p className="text-indigo-200 max-w-3xl text-xs sm:text-sm leading-relaxed font-sans mt-2">
                  Andika wazo lako kwa maelezo rahisi (hata mchanganyiko wa Kiswahili na Kiingereza). AI ya WealthOS inatafsiri na kukujengea mradi mzima (Full Website Project) wenye faili kamili la HTML la kupakua na kuweka Netlify bure.
                </p>
              </div>
            </div>

            {/* Mass Center-Stage AI Prompt Workspace (Google AI Studio Experience) */}
            <div className="bg-white border-2 border-indigo-600/35 p-6 sm:p-8 rounded-3xl shadow-xl space-y-6 relative transition-all">
              <div className="absolute -top-3.5 left-6 bg-indigo-600 text-white font-mono text-[10px] tracking-wider font-bold px-3 py-1 rounded-full uppercase shadow">
                Kituo Kikuu cha Uundaji (AI Studio Workspace)
              </div>
              
              <div className="space-y-2">
                <h2 className="text-lg sm:text-xl font-bold font-display text-slate-800 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-indigo-600 animate-pulse fill-indigo-600/20" />
                  Andika Wazo Lako la Website au App Hapa chini:
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm max-w-4xl leading-relaxed">
                  Kariri wazo lako kisha lipandishe hapa (Mfano: <em>&ldquo;Unda interactive workout tracker yenye charts za maendeleo na motisha kwa Kiswahili&rdquo;</em>, au <em>&ldquo;Build a dynamic lofi study timer with customizable focus tasks list&rdquo;</em>). Mifumo yetu itakoroga code za CSS, HTML na JS na kuziweka hewani sekunde chache zijazo!
                </p>
              </div>

              {/* Huge dynamic Text area prompt */}
              <div className="relative">
                <textarea
                  rows={4}
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  placeholder="Andika au chagua wazo lako la website hapa (Mfano: Unda interactive dashboard ya kukokotoa faida ya biashara zangu na graph ya visual charts...)..."
                  className="w-full bg-slate-50 focus:bg-white rounded-2xl p-4 pr-12 text-sm sm:text-base border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 text-slate-800 font-sans leading-relaxed transition-all shadow-inner"
                  disabled={loading}
                />
                <button
                  onClick={() => customInput.trim() && handleGenerate()}
                  disabled={loading || !customInput.trim()}
                  className="absolute right-3.5 bottom-3.5 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white p-2.5 rounded-xl transition-all shadow-md active:scale-95 cursor-pointer flex items-center justify-center gap-2 font-bold"
                  title="Tengeneza Mfumo Sasa hivi"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Clickable Quick Idea Starters Section */}
              <div className="space-y-2 pt-2 text-left">
                <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                  <Lightbulb className="w-3.5 h-3.5 text-indigo-600 animate-bounce" />
                  Mawazo mepesi ya haraka (Bonyeza kuanza kujengewa na AI hapa hapa):
                </p>
                <div className="flex flex-wrap gap-2.5 justify-start">
                  {[
                    {
                      label: "🎵 Lofi Pomodoro Clock",
                      prompt: "Build a beautiful dark theme Pomodoro Study timer with animated wave rings, ambient rain/nature sounds, custom task checkbox list, and customizable sessions."
                    },
                    {
                      label: "💼 Client Portfolio Web",
                      prompt: "Create a premium responsive developer personal portfolio with hero showcase, interactive projects grid with category filters, experience timeline, and sleek feedback form."
                    },
                    {
                      label: "🌦️ Weather Advisor Dashboard",
                      prompt: "Build an interactive climate and weather advisor dashboard where users type any city, select simulated weather states manually, and receive smart clothing and outdoor activity advice."
                    },
                    {
                      label: "📊 Income & Expense Grapher",
                      prompt: "Create a personal utility finance tracker with add/delete expense items, currency selector, total money counter display, and an interactive canvas chart showing spend shares."
                    },
                    {
                      label: "📋 Kanban Task Board (Trello-like)",
                      prompt: "Create an interactive Kanban workflow task board with three statuses (Todo, Doing, Done), priority labels (Low/Medium/High), drag-delete option, and add task fields."
                    }
                  ].map((starter, sIdx) => (
                    <button
                      key={sIdx}
                      onClick={() => !loading && handleGenerateCustomIdea(starter.prompt)}
                      disabled={loading}
                      className="text-xs text-slate-600 bg-slate-50 hover:bg-indigo-50 hover:text-indigo-600 active:scale-95 border border-slate-200 hover:border-indigo-200 rounded-xl px-3.5 py-2 transition-all cursor-pointer font-sans font-medium"
                    >
                      {starter.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Submit Build trigger button */}
              <button
                onClick={handleGenerate}
                disabled={loading || !customInput.trim()}
                className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 disabled:from-slate-200 disabled:to-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white font-extrabold py-4 px-6 rounded-2xl text-xs sm:text-base border-0 shadow-lg shadow-indigo-100 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[98%]"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    <span>Inatengeneza web app... Tafadhali subiri AI inafanya coding sasa hivi!</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 text-amber-300 fill-amber-300" />
                    <span>Tengeneza Mradi Mzima (Generate Custom Code & Blueprints)</span>
                  </>
                )}
              </button>
            </div>

            {/* Split section below: Presets Left, Output Sandbox Right */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              
              {/* Left Column: Traditional Preset Selector for quick ideas & monetisation info */}
              <div className="lg:col-span-1 space-y-6">
                <div className="flex items-center gap-2">
                  <span className="p-1 px-2.5 bg-indigo-50 text-indigo-700 font-bold font-mono text-xs rounded border border-indigo-100">01</span>
                  <h2 className="font-display font-bold text-slate-800 text-base">Commercial Tools Presets</h2>
                </div>

                <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
                  {PRESET_CATEGORIES.map((cat) => (
                    <CategoryCard
                      key={cat.id}
                      category={cat}
                      isSelected={selectedCategory.id === cat.id}
                      onSelect={() => {
                        setSelectedCategory(cat);
                        setCustomInput(cat.presetPrompt);
                      }}
                    />
                  ))}
                </div>

                {/* Adsterra Instruction Card */}
                <div className="bg-emerald-950 border border-emerald-800 text-white rounded-2xl p-5 space-y-3 shadow-md">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 uppercase">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    💰 MBINU YA KIPATO CHA HARAKA (MONETIZE):
                  </div>
                  <p className="text-[11px] text-emerald-200 leading-relaxed font-sans">
                    Kubandika matangazo ni kazi ya sekunde chache! Unapopakua website ya HTML kutoka WealthOS, fungua hilo faili na uweke code zako za **Adsterra Social Bar** au **Direct Link** ndani ya faili ili kuanza kuvuna kipato watu wanapotumia mfumo uliotengeneza.
                  </p>
                  <div className="pt-1.5 border-t border-emerald-900 flex justify-between items-center">
                    <span className="text-[9px] font-mono text-emerald-300 font-bold uppercase">Netlify + Adsterra</span>
                    <span className="text-[9px] bg-emerald-800 text-white px-2 py-0.5 rounded font-mono font-bold">100% On autopilot</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Dynamic Output Preview Sandbox & Real-time AI compiling logs console */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center gap-2">
                  <span className="p-1 px-2.5 bg-indigo-50 text-indigo-700 font-bold font-mono text-xs rounded border border-indigo-100">02</span>
                  <h2 className="font-display font-bold text-slate-800 text-base">
                    Workspace Sandbox & Live Preview
                  </h2>
                </div>

                {/* Error Box display if any */}
                {error && (
                  <div className="bg-rose-50 border border-rose-200 text-rose-700 p-4 rounded-xl flex items-start gap-2.5 text-xs sm:text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0 text-rose-600" />
                    <div>
                      <strong className="font-bold">An error occurred: </strong>
                      <span>{error}. Please ensure your GEMINI_API_KEY environment variable is configured. You can still play with and download the preset mock tools successfully.</span>
                    </div>
                  </div>
                )}

                {/* Dynamic Loading Console OR Data Output Rendering */}
                {loading ? (
                  <div className="bg-slate-950 border border-slate-850 p-6 rounded-3xl h-[650px] shadow-2xl flex flex-col justify-between font-mono text-[11px] sm:text-xs">
                    <div className="space-y-4 overflow-y-auto pb-4 text-left">
                      <div className="flex items-center justify-between border-b border-indigo-950 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-ping" />
                          <span className="font-bold text-indigo-400">WEALTHOS AI WORKSPACE COMPILER v2.5</span>
                        </div>
                        <span className="text-[9px] bg-indigo-950 border border-indigo-900 text-indigo-300 px-2 py-0.5 rounded-full uppercase tracking-widest font-bold">
                          STATUS: LIVE BUILDING...
                        </span>
                      </div>

                      <div className="space-y-2.5 text-slate-300">
                        <p className="text-emerald-400 font-bold flex items-center gap-2">
                          <span className="text-emerald-500">✓</span> [API] Initiating connection to Google AI Studio Gemini API...
                        </p>
                        <p className="text-indigo-300 flex items-center gap-2">
                          <span className="text-indigo-400">✓</span> [ENGINE] Analyzing custom prompt blueprint rules...
                        </p>
                        <p className="text-slate-200 animate-pulse flex items-center gap-2">
                          <span className="text-indigo-400">⚡</span> [CODE-GEN] Writing pure standalone single-page codebase...
                        </p>
                        <p className="text-slate-400 flex items-center gap-2">
                          <span className="text-indigo-400">⚡</span> [UI-THEME] Injecting responsive Tailwind CSS utility classes...
                        </p>
                        <p className="text-slate-450 text-slate-500 flex items-center gap-2">
                          <span className="text-indigo-400">⚡</span> [LOGIC] Compiling event listeners, interactive calculators, and client state storage...
                        </p>
                        <p className="text-amber-400 animate-bounce flex items-center gap-2">
                          <span className="text-amber-400">●</span> [SANDBOX] Wrapping HTML and preparing download blobs with ad script headers...
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-slate-900 border border-slate-850 p-4 rounded-xl flex items-center gap-3 text-left">
                      <RefreshCw className="w-5 h-5 text-indigo-400 animate-spin flex-shrink-0" />
                      <div>
                        <p className="text-[11px] text-indigo-300 font-bold uppercase tracking-wider">Tusaidie Kuvuta Trafiki Kuu:</p>
                        <p className="text-[10px] text-slate-400 font-sans leading-relaxed">
                          Tovuti ikikamilika unaweza **kuview live** hapo hapo kwenye simu au PC yako, **kuifanyia marekebisho** kwa lugha yoyote (hata Kiswahili), na kuipakua upendavyo!
                        </p>
                      </div>
                    </div>
                  </div>
                ) : generatedData ? (
                  <div className="space-y-8">
                    {/* Live interactive browser tester */}
                    <div>
                      <h3 className="font-mono text-xs text-slate-450 uppercase tracking-widest font-semibold mb-3">
                        ✓ Interactive Preview Sandbox:
                      </h3>
                      <SandboxPreview blueprintData={generatedData} />
                    </div>

                    {/* Live AI Refinement Tweak Console */}
                    <div className="bg-slate-900/40 border border-indigo-900/30 p-5 rounded-2xl space-y-4 text-left">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-xs font-bold font-mono text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
                            <Sparkles className="w-4 h-4 text-indigo-400 animate-pulse fill-indigo-400/20" />
                            Kurekebisha au Kubadilisha Mfumo (Refine Web App Sandbox)
                          </h4>
                          <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                            Kama kuna hitilafu, au kitu unataka kubadili au kurekebisha kwenye hii website, mpe maagizo AI hapa chini (mfano: <em>&ldquo;Badilisha rangi iwe giza&rdquo;</em>, <em>&ldquo;Weka kila kitu kwa Kiswahili&rdquo;</em>, au <em>&ldquo;Ongeza button ya kufuta&rdquo;</em>). Mifumo yetu inafanya kazi kama Google AI Studio au Netlify!
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={refinementInput}
                          onChange={(e) => setRefinementInput(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" && !refining) {
                              handleRefine();
                            }
                          }}
                          placeholder="Andika maboresho ya kurekebisha kwenye website hii..."
                          className="flex-grow bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-indigo-600 transition-all font-sans"
                          disabled={refining}
                        />

                        <button
                          onClick={handleRefine}
                          disabled={refining || !refinementInput.trim()}
                          className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-800 disabled:text-slate-500 disabled:cursor-not-allowed text-white font-bold px-5 rounded-xl text-xs sm:text-sm transition-all shrink-0 cursor-pointer flex items-center gap-2 active:scale-95"
                        >
                          {refining ? (
                            <>
                              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                              <span>Inarekebisha...</span>
                            </>
                          ) : (
                            <>
                              <Sparkles className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                              <span>Rekebisha Mfumo</span>
                            </>
                          )}
                        </button>
                      </div>

                      {refinementHistory.length > 0 && (
                        <div className="pt-2 border-t border-slate-900/40">
                          <p className="text-[10px] font-mono font-bold text-slate-400 uppercase">Historia ya Marekebisho:</p>
                          <div className="flex flex-wrap gap-1.5 mt-1">
                            {refinementHistory.map((hist, hIdx) => (
                              <span key={hIdx} className="text-[10px] bg-indigo-950 border border-indigo-900/50 px-2 py-0.5 rounded-full text-indigo-400 font-mono">
                                ✓ {hist}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Step-by-step setup blueprints */}
                    <div>
                      <h3 className="font-mono text-xs text-slate-450 uppercase tracking-widest font-semibold mb-3">
                        ✓ Step-by-Step Blueprint & Strategy Manual:
                      </h3>
                      <BlueprintViewer blueprintData={generatedData} />
                    </div>
                  </div>
                ) : (
                  <div className="bg-white border border-dashed border-slate-300/80 p-12 rounded-2xl text-center space-y-4">
                    <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto">
                      <Lightbulb className="w-6 h-6 animate-pulse" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm sm:text-base">Utility Not Yet Generated</h4>
                      <p className="text-slate-500 text-xs sm:text-sm max-w-sm mx-auto mt-1 leading-relaxed">
                        Andika wazo lako kuu la website hapo juu au chagua Preset ya kuanza rahisi, kisha bofya &ldquo;Tengeneza Mradi Mzima&rdquo; ili kuanza testing live hapa hapa!
                      </p>
                    </div>
                  </div>
                )}
                
              </div>
            </div>
          </div>
        ) : activeTab === "chat" ? (
          <div className="animate-fade-in duration-200 text-left bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-sm space-y-6 max-w-4xl mx-auto w-full">
            
            {/* Upper Interactive Information banner */}
            <div className="bg-indigo-900 rounded-2xl p-5 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono bg-white/10 text-white font-bold border border-white/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  WealthOS AI Chat Companion
                </span>
                <h2 className="text-lg sm:text-xl font-bold font-display">
                  Sogoa na AI Kuhusu Kipato, Ads & Mifumo 💬
                </h2>
                <p className="text-indigo-200 text-[11px] sm:text-xs">
                  Uliza chochote kuhusu namna ya ku-monetize mifumo kwa Adsterra au AdSense, uwekaji wa tovuti Netlify, au mbinu nyingine za autopilot.
                </p>
              </div>
              <div className="flex items-center gap-1.5 bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 px-3 py-1.5 rounded-full text-xs font-mono font-bold self-start sm:self-auto uppercase">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
                <span>AI Online (Swahili/English)</span>
              </div>
            </div>

            {/* Scrollable messages container listing */}
            <div className="border border-slate-100 bg-slate-50/50 rounded-2xl p-4 min-h-[400px] max-h-[500px] overflow-y-auto space-y-4 flex flex-col">
              {chatMessages.map((msg, idx) => {
                const isAi = msg.sender === "ai";
                return (
                  <div
                    key={idx}
                    className={`flex items-start gap-3 max-w-[85%] ${
                      isAi ? "self-start text-left" : "self-end flex-row-reverse text-right"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                        isAi 
                          ? "bg-indigo-600 text-white" 
                          : "bg-slate-800 text-slate-100"
                      }`}
                    >
                      {isAi ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                    </div>
                    
                    <div className="space-y-1">
                      <div
                        className={`rounded-2xl px-4 py-2.5 text-xs sm:text-sm shadow-sm leading-relaxed whitespace-pre-wrap ${
                          isAi
                            ? "bg-white text-slate-800 border border-slate-200/60 rounded-tl-none font-sans"
                            : "bg-indigo-600 text-white rounded-tr-none font-sans"
                        }`}
                      >
                        {msg.text}
                      </div>
                      <p className="text-[9px] font-mono text-slate-400 px-1">
                        {msg.time}
                      </p>
                    </div>
                  </div>
                );
              })}

              {chatLoading && (
                <div className="flex items-center gap-2 text-indigo-600 font-bold self-start p-2 text-xs font-mono animate-pulse">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>AI ya WealthOS inafikiria mbinu na kukuandikia jibu...</span>
                </div>
              )}
            </div>

            {/* Rapid suggestions helper button group */}
            <div className="space-y-2 pt-2">
              <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest text-left">
                💡 MIFANO YA MASWALI (Bonyeza kumuuliza AI papo hapo):
              </p>
              <div className="flex flex-wrap gap-2 justify-start">
                {[
                  "Mimi ni mgeni, naanzia wapi kutengeneza pesa na WealthOS?",
                  "Nitafanyaje ili niongeze matangazo ya Adsterra kwenye website yangu?",
                  "Jinsi gani nitaiweka tovuti yangu kwenye Netlify bure?",
                  "Nawezaje kutumia Universal AI Studio kuunda website yoyote ninayotaka?"
                ].map((suggest, sIdx) => (
                  <button
                    key={sIdx}
                    onClick={() => !chatLoading && handleSendChatMessage(suggest)}
                    disabled={chatLoading}
                    className="text-[11px] text-slate-600 bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 active:scale-95 border border-slate-200/80 rounded-xl px-3 py-1.5 transition-all cursor-pointer font-sans"
                  >
                    🚀 &ldquo;{suggest}&rdquo;
                  </button>
                ))}
              </div>
            </div>

            {/* User Typing input form container */}
            <div className="flex gap-2 pt-4 border-t border-slate-100">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !chatLoading) {
                    handleSendChatMessage();
                  }
                }}
                placeholder="Andika swali lako kuhusu ads, hosting, kurekebisha mifumo au mbinu za kipato hapa..."
                className="flex-grow bg-slate-55 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-850 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all font-sans placeholder-slate-400"
                disabled={chatLoading}
              />
              <button
                onClick={() => handleSendChatMessage()}
                disabled={chatLoading || !chatInput.trim()}
                className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white font-bold px-6 rounded-xl text-xs sm:text-sm transition-all shadow-md shadow-indigo-100 flex items-center gap-2 active:scale-95 shrink-0 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Tuma</span>
              </button>
            </div>

          </div>
        ) : (
          /* Academy tab block */
          <div className="animate-fade-in duration-200">
            <HustleAcademy />
          </div>
        )}

      </main>

      {/* Styled WealthOS minimal site footer */}
      <footer className="bg-white border-t border-slate-200 mt-auto py-6 text-center text-xs text-slate-400 relative z-10 font-sans">
        <div className="max-w-7xl mx-auto px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1">
            <p>&copy; 2026 WealthOS Inc. All assets and revenues are 100% yours.</p>
          </div>
          <div className="flex gap-4 font-mono text-[10px]">
            <span className="text-indigo-600 font-bold">&#10004; AUTO-HOSTING READY</span>
            <span>•</span>
            <span className="text-emerald-600 font-bold">&#10004; ADS READY</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
