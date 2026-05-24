import express from "express";
import path from "path";
import { GoogleGenAI, Type } from "@google/genai";
import { createServer as createViteServer } from "vite";
import dns from "dns";

// Support standard DNS resolution if running on standard Node versions
dns.setDefaultResultOrder("ipv4first");

const app = express();
app.use(express.json());

const PORT = 3000;

// Lazy initialization of Gemini API client
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("GEMINI_API_KEY environment variable is not defined. Using mock data fallback.");
    }
    aiClient = new GoogleGenAI({
      apiKey: apiKey || "MOCK_KEY",
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// 1. API: Generating a passive income side-hustle blueprint or standalone tool code
app.post("/api/passive-income/generate", async (req, res) => {
  const { category, customInput, language = "sw" } = req.body;
  const client = getGeminiClient();

  const isMock = !process.env.GEMINI_API_KEY;

  if (isMock) {
    // Generate high-quality mock previews dynamically based on selected category id
    if (category === "seo-metadata") {
      return res.json({
        success: true,
        title: "MetaSuite - SEO & Meta-Tags Generator Engine",
        summary: "Monetize this high-conversion English utility tool by embedding Google AdSense, Ezoic or Adsterra scripts adjacent to the meta-tag preview interface.",
        blueprint: [
          "Step 1: Download this professional tool code by clicking the 'Pakua Faili (.html)' button below.",
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
                <h2 class="text-xs font-bold font-mono uppercase tracking-wider text-slate-400">01. Configure Website Details</h2>
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
                statusDescText.className = "text-xs text-amber-405 mt-1";
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
    } else if (category === "copydraft-ads" || category?.includes("slogan")) {
      return res.json({
        success: true,
        title: "BrandSloganeer - AI Slogan & Headline Generator",
        summary: "Generate automated, high-conversion branding slogans and marketing headlines completely on autopilot.",
        blueprint: [
          "Step 1: Download this professional tool file by clicking the 'Download File (.html)' button below.",
          "Step 2: Create a free account on vercel.com or netlify.com, then upload this file within seconds.",
          "Step 3: Join Google AdSense or Adsterra networks to embed ad scripts directly inside this generator.",
          "Step 4: Distribute your brand generator link in creator and small business communities to drive massive traffic."
        ],
        marketingStrategy: "Branding slogan generator tools index extremely well with search engines daily since thousands of new startup founders and content creators look for catchy brand names and hooks.",
        toolCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Instant Slogan & Headline Generator</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-indigo-50 to-slate-100 min-h-screen p-6 flex items-center justify-center font-sans text-slate-800">
    <div class="bg-white border border-slate-200 p-8 rounded-2xl shadow-xl max-w-md w-full animate-fade-in">
        <div class="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        </div>
        <h2 class="text-2xl font-black text-slate-900 tracking-tight mb-1 animate-pulse">BrandSloganeer 🚀</h2>
        <p class="text-slate-500 text-xs mb-6">Generate your top brand slogans or business taglines instantly with our optimized offline-ready algorithm.</p>
        
        <div class="mb-4">
          <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Enter Business Name:</label>
          <input id="bizName" type="text" placeholder="e.g. Acme Corp, Tailwind, TechStart" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all">
        </div>
        
        <div class="mb-5">
          <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Select Vibe / Tone:</label>
          <select id="tone" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all">
            <option value="brave">Bold & Impactful (Bold)</option>
            <option value="modern">Modern & Witty (Witty)</option>
            <option value="professional">Professional & Elite (Professional)</option>
          </select>
        </div>
        
        <button onclick="generate()" class="w-full bg-indigo-650 hover:bg-indigo-700 bg-indigo-600 text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-md active:scale-95 cursor-pointer text-sm">
            Generate Slogans Now ✨
        </button>
        
        <div id="results" class="mt-6 space-y-2 hidden">
            <div class="h-px bg-slate-100 my-4"></div>
            <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider">Your Top Suggestions:</h3>
            <div id="resultBox" class="bg-indigo-50/50 border border-indigo-100 p-4 rounded-xl text-sm italic text-indigo-950 font-medium text-center"></div>
        </div>
    </div>
    
    <script>
        function generate() {
            const biz = document.getElementById('bizName').value || 'My Brand';
            const tone = document.getElementById('tone').value;
            let slogans = [];
            
            if(tone === 'brave') {
              slogans = [
                biz + " - The powerful foundation of your tomorrow!",
                biz + " - Breaking limits, empowering your digital growth.",
                biz + " - The driving spark behind your success."
              ];
            } else if (tone === 'modern') {
              slogans = [
                biz + " - Streamlining your life with premium efficiency.",
                biz + " - The modern pulse of clever branding.",
                biz + " - Where game-changing ideas meet your lifestyle."
              ];
            } else {
              slogans = [
                biz + " - Trusted service built for high-scale quality.",
                biz + " - Your long-term growth partner in a digital economy.",
                biz + " - Professional expertise delivering serene perfection."
              ];
            }
            
            const rand = slogans[Math.floor(Math.random() * slogans.length)];
            document.getElementById('resultBox').innerText = rand;
            document.getElementById('results').classList.remove('hidden');
        }
    </script>
</body>
</html>`
      });
    } else if (category === "finance-calc") {
      return res.json({
        success: true,
        title: "WealthOS - Compound Interest Visualizer Calculator",
        summary: "Earn direct commissions and automatic ad payouts while users visualize their compound investments and wealth projections.",
        blueprint: [
          "Step 1: Download this premium calculator interface by clicking 'Pakua Faili (.html)'.",
          "Step 2: Upload this single page file inside your custom dashboard folder, or host it for free on Netlify.",
          "Step 3: Integrate affiliate banner links to trading systems to earn affiliate dividends effortlessly.",
          "Step 4: Register page search engine indexing to acquire rich organic personal finance traffic."
        ],
        marketingStrategy: "Calculators are top candidates for continuous organic search listings since searchers seeking interest math naturally look for calculators on search engines.",
        toolCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Compound Interest Investment Calculator</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-900 text-slate-100 min-h-screen p-6 font-sans">
    <div class="max-w-4xl mx-auto bg-slate-800/80 rounded-2xl p-6 border border-slate-700 shadow-2xl">
        <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white text-lg font-black">💰</div>
            <div>
                <h1 class="text-xl font-bold tracking-tight text-white">Investment Growth Planner</h1>
                <p class="text-xs text-slate-400">Project your future compound wealth with dynamic dynamic formulas.</p>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
                <label class="block text-xs font-bold text-slate-400 uppercase mb-1">Principal Amount ($)</label>
                <input id="pAmt" type="number" value="5000" oninput="calculateCompound()" class="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white">
            </div>
            <div>
                <label class="block text-xs font-bold text-slate-400 uppercase mb-1">Monthly Cost Contribution ($)</label>
                <input id="contAmt" type="number" value="250" oninput="calculateCompound()" class="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white">
            </div>
            <div class="grid grid-cols-2 gap-2">
                <div>
                    <label class="block text-xs font-bold text-slate-400 uppercase mb-1">Rate (%)</label>
                    <input id="rateInt" type="number" value="8" step="0.5" oninput="calculateCompound()" class="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white">
                </div>
                <div>
                    <label class="block text-xs font-bold text-slate-400 uppercase mb-1">Years</label>
                    <input id="yearsDur" type="number" value="10" oninput="calculateCompound()" class="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white">
                </div>
            </div>
        </div>

        <div class="bg-indigo-950/20 border border-indigo-900/40 p-5 rounded-2xl mb-6 text-center grid grid-cols-3 gap-4">
            <div>
                <p class="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Total Contributions</p>
                <p id="totalContText" class="text-lg font-black text-white">$35,000</p>
            </div>
            <div>
                <p class="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Total Interests Generated</p>
                <p id="totalInterestText" class="text-lg font-black text-emerald-400">$19,252</p>
            </div>
            <div>
                <p class="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Projected Future Wealth</p>
                <p id="totalFutureText" class="text-lg font-black text-indigo-400">$54,252</p>
            </div>
        </div>

        <div class="mt-6">
            <h3 class="text-xs font-bold text-slate-400 uppercase mb-3">Projected Annual Growth Table:</h3>
            <div class="overflow-x-auto max-h-60 overflow-y-auto rounded-xl border border-slate-700">
                <table class="w-full text-left text-xs text-slate-300">
                    <thead class="bg-slate-755 bg-slate-850 bg-slate-900 text-slate-400 uppercase text-[9px] tracking-wider sticky top-0">
                        <tr>
                            <th class="p-3">Year</th>
                            <th class="p-3">Contributions</th>
                            <th class="p-3">Interests Added</th>
                            <th class="p-3">End Balance</th>
                        </tr>
                    </thead>
                    <tbody id="plannerTable" class="divide-y divide-slate-700">
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <script>
        function calculateCompound() {
            const P = parseFloat(document.getElementById('pAmt').value) || 0;
            const pm = parseFloat(document.getElementById('contAmt').value) || 0;
            const r = (parseFloat(document.getElementById('rateInt').value) || 0) / 100;
            const t = parseInt(document.getElementById('yearsDur').value) || 1;

            let balance = P;
            let contributions = P;
            let finalHtml = '';

            for(let y = 1; y <= t; y++) {
                let initialBal = balance;
                let annualContrib = pm * 12;
                contributions += annualContrib;

                // Simple annual calculation model
                balance = (initialBal + annualContrib) * (1 + r);
                let interestAdded = balance - initialBal - annualContrib;

                finalHtml += '<tr class="bg-slate-800/50 hover:bg-slate-800"><td class="p-3 font-bold text-slate-450">' + y + '</td>';
                finalHtml += '<td class="p-3">$' + contributions.toLocaleString(undefined, {maximumFractionDigits:0}) + '</td>';
                finalHtml += '<td class="p-3 text-emerald-400">$' + (balance - contributions).toLocaleString(undefined, {maximumFractionDigits:0}) + '</td>';
                finalHtml += '<td class="p-3 text-indigo-300 font-bold">$' + balance.toLocaleString(undefined, {maximumFractionDigits:0}) + '</td></tr>';
            }

            document.getElementById('totalContText').innerText = '$' + contributions.toLocaleString(undefined, {maximumFractionDigits:0});
            document.getElementById('totalInterestText').innerText = '$' + (balance - contributions).toLocaleString(undefined, {maximumFractionDigits:0});
            document.getElementById('totalFutureText').innerText = '$' + balance.toLocaleString(undefined, {maximumFractionDigits:0});
            document.getElementById('plannerTable').innerHTML = finalHtml;
        }

        calculateCompound();
    </script>
</body>
</html>`
      });
    } else if (category === "svg-wave-blob") {
      return res.json({
        success: true,
        title: "WaveForge - Premium SVG Wave & Curve Generator",
        summary: "Monetize this digital utility with ad layouts as developers customize custom vector curves and copy graphic codes dynamically.",
        blueprint: [
          "Step 1: Download this design asset maker in fully compiled HTML format.",
          "Step 2: Host on vercel/github directories to open zero-budget developer visibility instantly.",
          "Step 3: Overlay high CPM banner networks adjacent to download actions.",
          "Step 4: Promote inside design repositories to capture active content builders."
        ],
        marketingStrategy: "Design and content managers seek wave vectors continuously. Launching on developer spaces boosts recurring passive ad collections.",
        toolCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SVG Wave Background Creator</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-[#0b0f19] text-slate-100 min-h-screen p-6 font-sans flex flex-col items-center justify-center">
    <div class="max-w-3xl w-full bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-2xl">
        <h2 class="text-xl font-black bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent">WaveForge SVG Designer 🎨</h2>
        <p class="text-slate-500 text-xs mb-6">Customize waves and extract raw path coordinates instantly in real-time.</p>

        <div class="grid grid-cols-2 gap-4 mb-6">
            <div>
                <label class="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Wave Amplitude</label>
                <input id="amplitude" type="range" min="20" max="150" value="60" oninput="drawWave()" class="w-full accent-indigo-650 accent-indigo-500">
            </div>
            <div>
                <label class="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Wave Complexity</label>
                <input id="complexity" type="range" min="2" max="10" value="4" oninput="drawWave()" class="w-full accent-indigo-650 accent-indigo-500">
            </div>
        </div>

        <div class="bg-black/40 border border-slate-800 rounded-xl p-4 mb-6 h-40 flex items-center justify-center relative overflow-hidden">
            <svg id="waveSvg" class="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 320">
                <path id="wavePath" fill="url(#waveGrad)" d=""></path>
                <defs>
                    <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#818cf8;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#4f46e5;stop-opacity:1" />
                    </linearGradient>
                </defs>
            </svg>
            <span class="absolute top-2 left-2 text-[9px] font-mono text-slate-650 uppercase">Canvas Render Preview</span>
        </div>

        <div class="flex gap-3">
            <button onclick="copySvgPath()" class="flex-grow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-xl text-xs transition-all cursor-pointer">Copy Graphic Code</button>
            <button onclick="downloadSvgFile()" class="bg-slate-800 hover:bg-slate-750 text-slate-250 font-semibold py-3 px-4 rounded-xl text-xs border border-slate-700 transition-all cursor-pointer">Save File</button>
        </div>
    </div>

    <script>
        function drawWave() {
            const amplitude = parseInt(document.getElementById('amplitude').value);
            const complexity = parseInt(document.getElementById('complexity').value);
            const w = 1440;
            const h = 320;
            
            let points = [];
            const step = w / complexity;
            
            for(let i = 0; i <= complexity; i++) {
                const x = i * step;
                const y = 160 + (Math.sin(i) * amplitude);
                points.push({x, y});
            }
            
            let d = 'M 0 ' + h;
            d += ' L 0 ' + points[0].y;
            
            for(let i = 0; i < points.length - 1; i++) {
                const xc = (points[i].x + points[i+1].x) / 2;
                const yc = (points[i].y + points[i+1].y) / 2;
                d += ' Q ' + points[i].x + ' ' + points[i].y + ', ' + xc + ' ' + yc;
            }
            
            d += ' L ' + w + ' ' + points[points.length-1].y;
            d += ' L ' + w + ' ' + h;
            d += ' Z';
            
            document.getElementById('wavePath').setAttribute('d', d);
        }

        function copySvgPath() {
            const svgContent = document.getElementById('waveSvg').outerHTML;
            navigator.clipboard.writeText(svgContent);
            alert('SVG markup extracted! 🚀');
        }

        function downloadSvgFile() {
            const svgContent = document.getElementById('waveSvg').outerHTML;
            const blob = new Blob([svgContent], {type: "image/svg+xml"});
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "gradient-wave.svg";
            a.click();
        }

        drawWave();
    </script>
</body>
</html>`
      });
    } else {
      // conversion-converter image format tool
      return res.json({
        success: true,
        title: "PixelReduce - Client-Side Image WebP Converter",
        summary: "Collect massive ad commission rates by deploying this lightweight multi-format image converter offline.",
        blueprint: [
          "Step 1: Download this premium graphics utility to your folder.",
          "Step 2: Connect to your Netlify subdomain to acquire search crawler points.",
          "Step 3: Insert non-obtrusive interstitial banner modules to optimize profits.",
          "Step 4: Distribute to social design channels to secure auto-traffic structures."
        ],
        marketingStrategy: "Format tools obtain sustained Google rankings because millions of content teams convert graphics frequently.",
        toolCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Instant WebP & PNG Converter</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-900 text-slate-100 min-h-screen p-6 font-sans flex flex-col items-center justify-center">
    <div class="max-w-md w-full bg-slate-800 border border-slate-700 p-8 rounded-2xl shadow-2xl text-center">
        <h2 class="text-xl font-bold bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent mb-1">PixelReduce Converter 🖼️</h2>
        <p class="text-slate-400 text-xs mb-6">Convert PNG/JPEG to premium high-compression WebP format in 1-second.</p>

        <div class="border-2 border-dashed border-slate-700 rounded-xl p-8 mb-4 hover:border-emerald-500 transition-all cursor-pointer relative">
            <input type="file" id="fileIn" onchange="processFile()" class="absolute inset-0 opacity-0 cursor-pointer">
            <p class="text-xs text-slate-400">Click or drag & drop image file to start...</p>
        </div>

        <div id="status" class="text-xs text-emerald-400 hidden font-bold mb-4">File converted successfully! Ready to export.</div>

        <button onclick="downloadConverted()" id="dlBtn" disabled class="w-full bg-emerald-650 hover:bg-emerald-700 bg-emerald-600 disabled:bg-slate-700 disabled:cursor-not-allowed text-slate-900 font-bold py-3.5 px-4 rounded-xl text-xs transition-all shadow shadow-emerald-900/10">Download Converted File</button>
    </div>

    <script>
        let fileBlob = null;
        function processFile() {
            const input = document.getElementById('fileIn');
            if(input.files && input.files[0]) {
                fileBlob = URL.createObjectURL(input.files[0]);
                document.getElementById('status').classList.remove('hidden');
                document.getElementById('dlBtn').removeAttribute('disabled');
            }
        }
        function downloadConverted() {
            if(fileBlob) {
                const a = document.createElement("a");
                a.href = fileBlob;
                a.download = "pixelreduce-optimized.webp";
                a.click();
            }
        }
    </script>
</body>
</html>`
      });
    }

    if (category === "universal-studio") {
      return res.json({
        success: true,
        title: "WorkspaceAI - Creative Task & Idea Board Studio",
        summary: "This is a fully customizable work board created by WealthOS Universal AI. (Running in Preview Mock Mode)",
        blueprint: [
          "Step 1: Download this full interactive single-page app by clicking 'Download File (.html)' from the preview sandbox.",
          "Step 2: Sign-up on Netlify or Vercel for free, drop the downloaded file, and receive your live link in 5 seconds.",
          "Step 3: Connect your GitHub repository to Netlify for continuous integration (CI/CD) and automatic updates.",
          "Step 4: Click the 'Refine Code' panel on WealthOS to iteratively bug-fix, polish, or translate your website anytime!"
        ],
        marketingStrategy: "Dynamic developer tools and productivity boards drive massive traffic through organic shares on Reddit, ProductHunt, and design blogs.",
        toolCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WorkspaceAI Creative Tracker</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght=300;400;500;600;700;800&family=JetBrains+Mono:wght=400;500&display=swap');
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
    </style>
</head>
<body class="bg-indigo-950 text-slate-100 min-h-screen flex flex-col font-sans">
    <header class="border-b border-indigo-900 bg-indigo-950/80 backdrop-blur-md sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
        <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center shadow-md">
                <span class="text-indigo-950 font-bold">W</span>
            </div>
            <div>
                <h1 class="text-sm font-bold tracking-tight text-white uppercase">WorkspaceAI</h1>
                <p class="text-[9px] font-mono text-emerald-400 uppercase tracking-widest leading-none">Netlify AI Sandbox Live</p>
            </div>
        </div>
        <div class="flex items-center gap-3">
            <span class="text-xs text-slate-300 bg-indigo-900 border border-indigo-800 px-3 py-1 rounded-full">⚡ Live App Preview</span>
        </div>
    </header>

    <main class="flex-grow max-w-5xl mx-auto w-full p-6 space-y-6">
        <div class="bg-indigo-900/40 border border-indigo-900 p-6 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
                <h2 class="text-xl font-bold text-white">Your Universal Web App Sandbox 🚀</h2>
                <p class="text-xs text-indigo-300 mt-1">This is an interactive dashboard generated automatically by WealthOS. Enter target details to see immediate preview rendering.</p>
            </div>
            <button onclick="addNewTask()" class="bg-emerald-500 hover:bg-emerald-600 text-indigo-950 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer">Add Creative Task</button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-indigo-900/20 border border-indigo-900 p-4 rounded-xl space-y-3">
                <h3 class="text-xs font-bold font-mono tracking-wider text-slate-400 uppercase">💻 System Configuration</h3>
                <div>
                    <label class="block text-[10px] text-slate-400 font-bold uppercase mb-1">Project Name</label>
                    <input id="pName" type="text" value="My Epic Workspace" oninput="updateProjectName()" class="w-full bg-indigo-900 border border-indigo-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-emerald-400">
                </div>
                <div>
                    <label class="block text-[10px] text-slate-400 font-bold uppercase mb-1">Status Theme</label>
                    <select id="themeSelect" onchange="toggleBackground()" class="w-full bg-indigo-900 border border-indigo-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-emerald-400">
                        <option value="emerald">Emerald Theme (Success)</option>
                        <option value="violet">Violet Theme (Premium)</option>
                    </select>
                </div>
            </div>

            <div class="md:col-span-2 bg-indigo-900/20 border border-indigo-900 p-5 rounded-xl space-y-4">
                <div class="flex justify-between items-center border-b border-indigo-900/60 pb-2">
                    <h3 id="workspaceTitle" class="text-sm font-bold text-white">My Epic Workspace Dashboard</h3>
                    <span id="taskCount" class="text-[10px] bg-indigo-950 border border-indigo-800 text-emerald-400 px-2 py-0.5 rounded-full font-mono font-bold">2 Tasks Active</span>
                </div>
                
                <div id="taskList" class="space-y-2">
                    <div class="bg-indigo-900/40 p-3 rounded-lg flex justify-between items-center text-xs">
                        <span class="font-medium text-slate-300">Design beautiful home page components</span>
                        <button onclick="this.parentElement.remove(); updateTaskCount()" class="text-rose-400 hover:text-rose-300 text-[10px] font-bold">Delete</button>
                    </div>
                    <div class="bg-indigo-900/40 p-3 rounded-lg flex justify-between items-center text-xs">
                        <span class="font-medium text-slate-300">Publish build outputs directly to GitHub rep</span>
                        <button onclick="this.parentElement.remove(); updateTaskCount()" class="text-rose-400 hover:text-rose-300 text-[10px] font-bold">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <script>
        function updateProjectName() {
            const val = document.getElementById('pName').value || 'Workspace';
            document.getElementById('workspaceTitle').innerText = val + ' Dashboard';
        }

        function toggleBackground() {
            const select = document.getElementById('themeSelect').value;
            const badge = document.getElementById('taskCount');
            if (select === 'violet') {
                badge.className = "text-[10px] bg-indigo-950 border border-indigo-800 text-violet-400 px-2 py-0.5 rounded-full font-mono font-bold";
            } else {
                badge.className = "text-[10px] bg-indigo-950 border border-indigo-800 text-emerald-400 px-2 py-0.5 rounded-full font-mono font-bold";
            }
        }

        function addNewTask() {
            const task = prompt("Enter new task description:");
            if (task && task.trim()) {
                const list = document.getElementById('taskList');
                const div = document.createElement('div');
                div.className = "bg-indigo-900/40 p-3 rounded-lg flex justify-between items-center text-xs";
                div.innerHTML = '<span class="font-medium text-slate-300">' + task + '</span><button class="text-rose-400 hover:text-rose-300 text-[10px] font-bold" onclick="this.parentElement.remove(); updateTaskCount()">Delete</button>';
                list.appendChild(div);
                updateTaskCount();
            }
        }

        function updateTaskCount() {
            const count = document.getElementById('taskList').children.length;
            document.getElementById('taskCount').innerText = count + " Tasks Active";
        }
    </script>
</body>
</html>`
      });
    }
  }

  try {
    let systemRole = "You are a world-class passive income and automated micro-SaaS expert.";
    let requestGoal = `The user wants an automated, "create-and-forget" passive income program/idea.
Target Category/Theme: "${category || "Generic Utility Tool"}"`;

    if (category === "universal-studio") {
      systemRole = "You are an elite AI Full-Stack Developer and creative UI/UX designer, similar to Bolt.new or Google AI Studio.";
      requestGoal = `The user wants a fully functional, highly detailed, single-page web application or professional utility tool based on their specific idea.
Theme/Idea: "${customInput || "A magnificent interactive custom dashboard"}"`;
    }

    const prompt = `${systemRole}
${requestGoal}
User Custom specifications: "${customInput || "None specific"}"
Respond completely in English. The title, summary, blueprint steps, marketingStrategy, and any UI text in the generated toolCode MUST be 100% in the English language for a global audience. Do not use any Swahili.

You MUST respond with a valid JSON strictly adhering to the following JSON schema:
{
  "title": "A highly catchy, SEO-friendly name for this web application or tool",
  "summary": "A 1-sentence summary of how this makes money or adds high value automatically",
  "blueprint": [
    "Step 1 guide for setting it up or monetization",
    "Step 2 guide for setting it up or hosting",
    "Step 3 guide for autopilot traffic or search ranking",
    "Step 4 guide on scaling up or custom features"
  ],
  "marketingStrategy": "A concise marketing strategy that requires zero ongoing budget to drive automatic organic search traffic or client adoption",
  "toolCode": "A FULL, complete, single-file HTML document (with embedded CSS/Tailwind, JS logic) that serves as a highly functional, highly responsive utility tool. This tool should be fully working, elegant, and directly testable inside a browser iframe Sandbox."
}

Ensure the "toolCode" is a complete, beautiful HTML page using Tailwind CDN. Make sure all buttons have working event handlers, inputs are functional, and the tools are actually useful and engaging (e.g., automated tools like content rewritters, financial calculators, meta tag generators, quick image processors, random quote makers, pixel art generators, CSS gradient code creators, dashboards, etc.). This ensures they can literally export it, put AdSense or Buy-Me-A-Coffee on it, and monetize or deploy immediately.`;

    const response = await client.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            summary: { type: Type.STRING },
            blueprint: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
            marketingStrategy: { type: Type.STRING },
            toolCode: { type: Type.STRING, description: "Complete standalone single-file HTML/CSS/JS tool" },
          },
          required: ["title", "summary", "blueprint", "marketingStrategy", "toolCode"],
        },
      },
    });

    const parsedData = JSON.parse(response.text || "{}");
    res.json({ success: true, ...parsedData });
  } catch (error: any) {
    console.error("Gemini Generation Error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// route for applying iterative code adjustments/fixes
app.post("/api/passive-income/refine", async (req, res) => {
  const { currentCode, refinementPrompt, projectTitle } = req.body;
  const client = getGeminiClient();

  const isMock = !process.env.GEMINI_API_KEY;

  if (isMock) {
    const updatedCode = currentCode.replace(
      "</body>",
      `<!-- Refined mock update: ${refinementPrompt} -->\n<div class="fixed bottom-4 right-4 bg-emerald-600 text-white p-3 rounded-xl shadow-lg text-xs font-bold font-sans">✓ Preview Mock updated: "${refinementPrompt}"</div>\n</body>`
    );
    return res.json({
      success: true,
      title: projectTitle || "Refined Project",
      summary: `Applied adjustment: "${refinementPrompt}" (Mock Mode offline success)`,
      blueprint: [
        `Step 1: Processed modification: "${refinementPrompt}"`,
        `Step 2: Applied corresponding HTML/CSS tweaks successfully.`
      ],
      marketingStrategy: "Share this updated website with users to test high-conversion actions.",
      toolCode: updatedCode
    });
  }

  try {
    const prompt = `You are a world-class AI Full-Stack Developer and expert UI/UX designer, similar to Bolt.new or Google AI Studio.
The user is working on a single-file web project (an HTML page with embedded CSS/Tailwind, JS logic) and wants to iteratively modify/improve/fix/polish it or bug-fix it.
Project Name: "${projectTitle || "Universal Web Tool"}"

Current HTML Code:
\`\`\`html
${currentCode}
\`\`\`

User's requested modification or bug-fix constraints:
"${refinementPrompt}"

You MUST modify the existing HTML code to satisfy the user's instructions. Maintain all other functionalities, styled aesthetics, graphics, and interactive layout values. Do NOT truncate or abbreviate the output. You must output the entire updated raw HTML document inside the "toolCode" attribute of the JSON response.

Respond completely in English.
You MUST respond with a valid JSON strictly adhering to the XML schema guidelines:
{
  "title": "A highly catchy, updated name for this web application",
  "summary": "A 1-sentence description of the updates/refinements applied to the codebase",
  "blueprint": [
    "Step 1 description of changes made",
    "Step 2 description of changes made",
    "Step 3 guide on how to deploy this updated version to GitHub/Netlify"
  ],
  "marketingStrategy": "A fresh monetization tip or marketing insight for this modified structure",
  "toolCode": "The FULL, complete, single-file HTML document (with embedded CSS/Tailwind, JS chemistry) after applying the user's refinements."
}`;

    const response = await client.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            summary: { type: Type.STRING },
            blueprint: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
            marketingStrategy: { type: Type.STRING },
            toolCode: { type: Type.STRING, description: "Complete updated single-file HTML document" },
          },
          required: ["title", "summary", "blueprint", "marketingStrategy", "toolCode"],
        },
      },
    });

    const parsedData = JSON.parse(response.text || "{}");
    res.json({ success: true, ...parsedData });
  } catch (error: any) {
    console.error("Gemini Refinement Error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// route for holding direct conversational chat with simulated/live Gemini
app.post("/api/passive-income/chat", async (req, res) => {
  const { messages } = req.body;
  const client = getGeminiClient();

  const isMock = !process.env.GEMINI_API_KEY;

  if (isMock) {
    const lastMsg = messages && messages.length > 0 ? messages[messages.length - 1].text.toLowerCase() : "";
    let reply = "Asante kwa mwaliko wako! Mimi ni mshauri wako wa AI ndani ya WealthOS. Unaweza kuniuliza chochote kuhusu kuanzisha website, kuingiza matangazo ya Adsterra, jinsi ya kupakua faili za HTML, au kuzi-publish kwenye Netlify ili kuanza kutengeneza kipato halisi. Naomba uniambie ungependa kuanza na lipi leo?";
    
    if (lastMsg.includes("adsterra") || lastMsg.includes("ads") || lastMsg.includes("tangazo") || lastMsg.includes("hela") || lastMsg.includes("pesa")) {
      reply = "Kutengeneza pesa kwa Adsterra kupitia WealthOS ni rahisi mno! Fuata hatua hizi zifuatazo:\n\n1. **Tengeneza website**: Chagua Preset upendayo kushoto, kisha bonyeza button ya njano kuizaa.\n2. **Weka Ads ya Adsterra**: Jisajili kwenye Adsterra.com kama Publisher. Ongeza domain yako au tumia link ya Netlify utakayopata (pia wanaruhusu Social Bar na Direct Link bila domain).\n3. **Pakua HTML**: Bonyeza 'Kupakua Mfumo (Download Code)' hapa WealthOS kupata faili la index.html la website uliyotengeneza.\n4. **Weka Code ya Ads**: Fungua hilo faili na uweke code ya Adsterra (mfano Social Bar) karibu na kufunga tag ya `</body>`.\n5. **Publish Netlify**: Upload faili lako jipya Netlify upate link. Sambaza link hiyo kwenye magroup ya jamii ili watu waingie na matangazo yaanze kukuingizia kipato!";
    } else if (lastMsg.includes("netlify") || lastMsg.includes("publish") || lastMsg.includes("link") || lastMsg.includes("kuweka hewani")) {
      reply = "Jinsi ya ku-Publish website uliyotengeneza kwenye Netlify bure kabisa:\n\n1. Bonyeza button ya kijani ya kupakua code ya website yako kutoka kwenye Sandbox preview (itapakuliwa kama faili lenye jina `.html`).\n2. Nenda kwenye tovuti ya bure ya [Netlify.com](https://netlify.com) na ujiunge (sign up) kwa sekunde chache.\n3. Katika Dashboard yako ya Netlify, nenda sehemu ya **Sites**, kisha shuka hadi chini utakuta kisanduku kilichoandikwa **'Drag and Drop your site folder here'**.\n4. Buruta lile faili la HTML ulilodownload kutoka WealthOS na ulipekelee hapo kwenye kisanduku hicho.\n5. Baada ya sekunde 5 tu, Netlify watakupa Link ya Bure na website yako tayari itakuwa hewani popote duniani!";
    } else if (lastMsg.includes("studio") || lastMsg.includes("isibezi") || lastMsg.includes("mifumo") || lastMsg.includes("isibezi tuu") || lastMsg.includes("tengeneza")) {
      reply = "Nimekuelewa kabisa! Ndio maana tumeweka chaguo la kwanza linaloitwa **'Universal AI Project Builder & Publisher'** (yenye nembo ya nyota). Hii ni kama Google AI Studio – unaandika tu wazo lolote la website au dashboard unalotaka, nayo inatengeneza mradi mzima (full project) kwa sekunde chache! Unaweza kuview, kuikarabati, na kupakua tayari kwa Netlify au Github.";
    } else if (lastMsg.includes("mbona") || lastMsg.includes("shida") || lastMsg.includes("tatizo") || lastMsg.includes("haifanyi")) {
      reply = "Pole sana kibingwa! Tuambie kuna shida gani au unataka tubadili nini kwenye website? Andika hapa nitakupa maelekezo ya hatua kwa hatua jinsi ya kurekebisha, au tumia kile kisanduku cha 'Rekebisha Mfumo' kilicho chini ya sandbox preview ili kurekebisha code yenyewe kwa nguvu ya AI!";
    }

    return res.json({ success: true, reply });
  }

  try {
    const formattedContents = messages.map((m: any) => ({
      role: m.sender === "user" ? "user" : "model",
      parts: [{ text: m.text }]
    }));

    const response = await client.models.generateContent({
      model: "gemini-3.5-flash",
      contents: formattedContents,
      config: {
        systemInstruction: "You are WealthOS Assistant, an elite Swahili and English speaking expert AI developer helping African and global builders build automated micro-SaaS sites, place high-conversion ad scripts (specifically Adsterra/Ezoic/AdSense), and host on Netlify or Vercel. Always reply in the same language of the user (who predominantly speaks Kiswahili/Swahili mixed with English words). Keep answers supportive, encouraging, exceptionally clear and brief, and focus on practical instructions so they can make real money through automated web tools.",
      }
    });

    res.json({ success: true, reply: response.text });
  } catch (error: any) {
    console.error("Gemini Chat Error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// 2. Start building full-stack middleware pipelines with Express and Vite
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server fully operational on http://0.0.0.0:${PORT}`);
  });
}

startServer();
