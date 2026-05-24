import React from "react";
import { GeneratedToolResponse } from "../types";
import { Award, Layers, Compass, Send, ShieldCheck, HelpCircle } from "lucide-react";

interface BlueprintViewerProps {
  blueprintData: GeneratedToolResponse;
}

export default function BlueprintViewer({ blueprintData }: BlueprintViewerProps) {
  return (
    <div className="space-y-6">
      {/* Overview Block */}
      <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Profit Overview</h4>
            <h3 className="font-display text-base font-bold text-slate-900">{blueprintData.title}</h3>
          </div>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed italic bg-emerald-50 border-l-2 border-emerald-500 pl-4 py-2.5 rounded-r-lg">
          &ldquo;{blueprintData.summary}&rdquo;
        </p>
      </div>

      {/* Steps Blueprint */}
      <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
        <div className="flex items-center gap-3.5 mb-5">
          <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Implementation Blueprint</h4>
            <h3 className="font-display text-base font-bold text-slate-900">How to Launch on Complete Autopilot</h3>
          </div>
        </div>

        <div className="space-y-4">
          {blueprintData.blueprint.map((step, index) => (
            <div key={index} className="flex gap-4 items-start p-3 hover:bg-slate-50 rounded-lg transition-colors duration-150">
              <div className="flex-shrink-0 w-7 h-7 bg-indigo-50 border border-indigo-100 rounded-full flex items-center justify-center text-xs font-mono text-indigo-600 font-bold">
                0{index + 1}
              </div>
              <div className="space-y-1">
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-sans select-text">
                  {step}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Free Traffic & Marketing Blueprint */}
      <div className="bg-white border border-slate-200 p-6 rounded-2xl relative overflow-hidden shadow-sm">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-48 h-48 bg-indigo-500/5 blur-3xl pointer-events-none rounded-full" />
        
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
            <Send className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">SEO & Free Traffic Strategy</h4>
            <h3 className="font-display text-base font-bold text-slate-900">Attracting Users Without Paid Ads</h3>
          </div>
        </div>
        
        <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
          <p className="select-text whitespace-pre-line">
            {blueprintData.marketingStrategy}
          </p>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-400 font-mono">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            These steps help ensure recurring organic Google search clicks.
          </div>
        </div>
      </div>

      {/* Creator Advice - Passive Income Rules */}
      <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl border-dashed">
        <h4 className="flex items-center gap-2 text-xs font-bold text-slate-700 font-mono mb-2.5">
          <Compass className="w-4 h-4 text-indigo-600" />
          EXPERT ADVICE (PASSIVE INCOME BLUEPRINT)
        </h4>
        <p className="text-slate-500 text-xs leading-relaxed font-sans">
          The secret to <strong className="text-slate-800">&ldquo;Create and Forget&rdquo;</strong> is to build simple, highly useful daily utilities. Once you publish it to a free host, search engine spiders begin crawling and indexing your tool. Within 2-3 months, persistent search traffic rolls in organically, letting ads and affiliate widgets collect revenue 24/7 without further updates!
        </p>
      </div>
    </div>
  );
}
