import React from "react";
import { BookOpen, HelpCircle, ShieldCheck, Heart, ExternalLink } from "lucide-react";

export default function HustleAcademy() {
  const courses = [
    {
      titleSelector: "1. Free Infinite Hosting Platforms (Zero Server Bills)",
      title: "1. Zero-Cost Hosting Platforms (Zero Server Bills)",
      desc: "The first secret to zero-cost passive revenue is using modern hosting platforms that let you publish your web pages (.html) online completely FREE for life, without any monthly billing.",
      listItems: [
        "Vercel (Takes under 30 seconds, simply drag-and-drop your downloaded .html file there).",
        "Netlify (Completely free with infinite capacity to handle millions of monthly visitors easily).",
        "GitHub Pages (Perfect for developers, ultra-stable and free).",
        "Blogger Custom HTML Widget (Deploy your direct tool inside a free Google Blogger widget)."
      ],
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200"
    },
    {
      titleSelector: "2. Placing Automated Ad Scripts (Placement Monetization)",
      title: "2. Placing Automated Ad Scripts (Placement Monetization)",
      desc: "This is the true engine of 'Create and Forget' streams. As soon as users land to calculate interest, write SEO keywords, or configure metadata, you'll render tiny ad snippets and earn ad revenue 24/7.",
      listItems: [
        "Google AdSense (The gold standard ad publisher network with high global CPM match rates).",
        "Ezoic AI Partner (Pays exceptionally well for multi-page utilities and high-engagement tools).",
        "Adsterra Network (Approve your domain within 10 minutes and receive automated ad widgets).",
        "Buy Me A Coffee Widget (Enables supportive users to gift you small digital tips and donations directly)."
      ],
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
    },
    {
      titleSelector: "3. Integrating Micro-Payments & Paywalls",
      title: "3. Integrating Micro-Payments & Paywalls",
      desc: "Want to charge users a tiny fee (such as $1 or $2) to unlock premium generator features or high-volume usage? You can integrate direct automated paywalls that work entirely while you sleep.",
      listItems: [
        "Stripe or Lemon Squeezy (The best payment platforms for international credit card payments on complete autopilot).",
        "Flutterwave & Paystack (Enables easy African and global card processing configurations instantly).",
        "PayPal Buttons (Very easy client-side triggers to receive payments internationally in seconds).",
        "Usage-limited Paywall (Users get 3 free generations daily, then prompt to pay to unlock unlimited access)."
      ],
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200"
    },
    {
      titleSelector: "4. Autopilot Search Optimization (Autopilot SEO)",
      title: "4. Autopilot Search Optimization (Autopilot SEO)",
      desc: "No users means no revenue. But you don't need to spend any money on paid ads. Automated micro-utilities naturally climb Google SEO rankings faster than standard blogs due to sheer usability.",
      listItems: [
        "Submit your utility tool website on indie platforms like IndieHackers and ProductHunt.",
        "Publish a short explanatory article on Medium or DEV.to with direct back-links.",
        "Ensure optimized meta tags for low-competition, high-volume search query phrases.",
        "Share helpful tips in developer, business, or creator forums on Facebook, Reddit, and Telegram."
      ],
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200"
    }
  ];

  return (
    <div className="space-y-8 font-sans select-none">
      {/* Intro Header */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-950 to-slate-900 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-center justify-between shadow-lg text-white">
        <div className="space-y-3 max-w-2xl text-left">
          <span className="text-xs font-mono px-3 py-1 bg-white/10 text-white border border-white/20 rounded-full font-bold">
            PASSIVE INCOME HUSTLE ACADEMY
          </span>
          <h2 className="text-xl sm:text-2xl font-display font-bold leading-tight">
            The &ldquo;Create and Forget&rdquo; Method: Monetize Your Micro-Utilities
          </h2>
          <p className="text-xs sm:text-sm text-indigo-100 leading-relaxed font-sans">
            Building a self-running micro-utility is not just about writing code; it's about hosting it cleanly for free, integrating automated ad banners or paywalls, and mastering zero-budget SEO search discovery. This short step-by-step masterclass clears the path.
          </p>
        </div>
        <div className="flex-shrink-0 p-4 bg-white/5 rounded-xl border border-white/10">
          <BookOpen className="w-12 h-12 text-white animate-bounce" />
        </div>
      </div>

      {/* Structured grid study material */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {courses.map((course, idx) => (
          <div key={idx} className="bg-white border border-slate-200 p-6 rounded-2xl flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded border font-semibold ${course.badgeColor}`}>
                  Lesson 0{idx + 1}
                </span>
                <span className="text-slate-400 text-[10px] font-mono">0{idx + 1} / 04</span>
              </div>

              <h3 className="font-display font-bold text-slate-800 text-sm sm:text-base leading-snug mb-3 text-left">
                {course.title}
              </h3>
              
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-4 text-left font-sans">
                {course.desc}
              </p>

              {/* Bullet points */}
              <div className="space-y-2 bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-left">
                {course.listItems.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex gap-2 items-start text-xs sm:text-sm text-slate-650 font-sans">
                    <span className="text-emerald-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span className="select-text text-slate-705">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[10px] font-mono text-indigo-600 font-bold flex items-center gap-1 bg-indigo-50 px-2 py-1 rounded">
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
                100% Proven Method
              </span>
              <span className="text-[10px] font-mono text-slate-400 select-all">
                #create-and-forget
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Blueprint FAQ / Quick Setup */}
      <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-sm">
        <h3 className="font-display font-bold text-slate-800 text-base sm:text-lg mb-5 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-indigo-600" />
          What is Next After Downloading Your Tool File?
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans">
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl relative overflow-hidden text-left">
            <h4 className="text-sm font-bold text-indigo-600 font-display mb-1">Launch (Vercel Drag & Drop Method):</h4>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Vercel allows you to deploy tools entirely without command lines. Head to <a href="https://vercel.com" target="_blank" rel="noreferrer" className="text-indigo-600 underline inline-flex items-center gap-1 font-bold">vercel.com <ExternalLink className="w-3 h-3" /></a> to create a free account, and simply Drag-and-Drop your downloaded <strong>.html</strong> file. Within seconds, your web tool is live globally on a custom URL!
            </p>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl relative overflow-hidden text-left">
            <h4 className="text-sm font-bold text-indigo-600 font-display mb-1">What if I Don't Get Traffic?</h4>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Be patient and ensure helpful page text. Google's search algorithms index clean, single-purpose micro-utilities exceptionally fast. Make sure your tool page has a descriptive title, simple manual instructions, and target keywords. Helpful utility pages earn high placement naturally over time.
            </p>
          </div>
        </div>
      </div>

      {/* Closing call to action with heart styling */}
      <div className="bg-slate-100 max-w-md mx-auto p-4 rounded-xl border border-slate-200 text-center flex items-center justify-center gap-2 text-xs text-slate-500">
        <span>Created with care by the Passive Income Blueprint Engine</span>
        <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" />
      </div>
    </div>
  );
}
