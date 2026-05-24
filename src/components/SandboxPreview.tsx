import React, { useState, useEffect } from "react";
import { GeneratedToolResponse } from "../types";
import { Play, Code, Copy, Download, RefreshCw, Check, Monitor, Terminal, ChevronRight, Eye } from "lucide-react";

interface SandboxPreviewProps {
  blueprintData: GeneratedToolResponse;
}

export default function SandboxPreview({ blueprintData }: SandboxPreviewProps) {
  const [activeTab, setActiveTab] = useState<"render" | "code">("render");
  const [copied, setCopied] = useState(false);
  const [editableCode, setEditableCode] = useState(blueprintData.toolCode);
  const [iframeKey, setIframeKey] = useState(0);

  useEffect(() => {
    setEditableCode(blueprintData.toolCode);
  }, [blueprintData.toolCode]);

  const handleCopy = () => {
    navigator.clipboard.writeText(editableCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([editableCode], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${blueprintData.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") || "micro-tool"}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleReset = () => {
    setEditableCode(blueprintData.toolCode);
    setIframeKey((prev) => prev + 1);
  };

  const handleApplyChanges = () => {
    setIframeKey((prev) => prev + 1);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col h-[650px] shadow-sm">
      {/* Sandbox Controls bar */}
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200 flex flex-wrap gap-4 items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-400 block" />
            <span className="w-3 h-3 rounded-full bg-amber-400 block" />
            <span className="w-3 h-3 rounded-full bg-emerald-400 block" />
          </div>
          <span className="h-4 w-px bg-slate-250" />
          <div className="flex bg-slate-200/60 p-0.5 rounded-lg border border-slate-200">
            <button
              onClick={() => setActiveTab("render")}
              className={`px-3 py-1 rounded-md text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === "render"
                  ? "bg-white text-indigo-600 shadow-sm"
                  : "text-slate-500 hover:text-slate-750"
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              Preview (Sandbox)
            </button>
            <button
              onClick={() => setActiveTab("code")}
              className={`px-3 py-1 rounded-md text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === "code"
                  ? "bg-white text-indigo-600 shadow-sm"
                  : "text-slate-500 hover:text-slate-750"
              }`}
            >
              <Code className="w-3.5 h-3.5" />
              Edit Code
            </button>
          </div>
        </div>

        {/* Action triggers */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="px-3 py-1.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 hover:border-slate-300 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-650" />
                <span className="text-emerald-700 font-bold">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-500" />
                <span>Copy Code</span>
              </>
            )}
          </button>

          <button
            onClick={handleDownload}
            className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 shadow-sm"
            title="Download complete ready-to-use HTML file"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download File (.html)</span>
          </button>
        </div>
      </div>

      {/* Main Sandbox Area */}
      <div className="flex-grow min-h-0 relative bg-slate-100 flex flex-col">
        {activeTab === "render" ? (
          <div className="w-full h-full flex flex-col">
            {/* Live Environment Browser Address bar indicator */}
            <div className="bg-slate-50 p-2 px-4 border-b border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500 shrink-0">
              <div className="flex items-center gap-2 flex-grow truncate">
                <Monitor className="w-3.5 h-3.5 text-slate-400" />
                <span className="bg-white px-3 py-1 rounded border border-slate-200 text-slate-500 truncate w-full max-w-md select-all">
                  https://www.your-money-tool.com/sandbox/preview.html
                </span>
              </div>
              <button
                onClick={handleReset}
                className="p-1 hover:text-indigo-600 hover:bg-white rounded border border-transparent hover:border-slate-200 transition-all cursor-pointer"
                title="Refresh Sandbox View"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Simulated Live iFrame */}
            <div className="flex-grow bg-slate-100 relative min-h-0">
              <iframe
                key={iframeKey}
                title="Autopilot Tool Preview"
                srcDoc={editableCode}
                className="w-full h-full border-0 bg-white"
                sandbox="allow-scripts allow-modals allow-same-origin"
              />
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex flex-col font-mono text-xs overflow-hidden">
            <div className="bg-slate-50 p-2 px-4 border-b border-slate-200 flex items-center justify-between text-slate-500 shrink-0">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-indigo-600" />
                <span>Instant Sandbox Tweaks (Edit tool code below):</span>
              </span>
              <button
                onClick={handleApplyChanges}
                className="px-2 py-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 rounded transition-all text-[10px] font-bold cursor-pointer"
              >
                Apply Changes
              </button>
            </div>
            <textarea
              value={editableCode}
              onChange={(e) => setEditableCode(e.target.value)}
              className="w-full flex-grow p-4 bg-[#090e1a] text-emerald-400 font-mono text-xs focus:outline-none resize-none overflow-y-auto leading-relaxed border-0 select-all"
              spellCheck={false}
              placeholder="<!-- Insert your web tool code here... -->"
            />
          </div>
        )}
      </div>

      {/* Lower Banner explaining deployment and passive setup */}
      <div className="bg-slate-50 p-3 px-5 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Ready to monetize: <strong>Blogger, Netlify, Carrd, or GitHub Pages</strong> (All are 100% Free!)</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-400 text-[10px] font-mono">
          <span>Client-Side Engine</span>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 border border-emerald-100 rounded">No Hosting Bills!</span>
        </div>
      </div>
    </div>
  );
}
