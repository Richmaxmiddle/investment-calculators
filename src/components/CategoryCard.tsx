import React from "react";
import { PassiveIncomeCategory } from "../types";
import { TrendingUp, Rocket, Calculator, Palette, FileCode, CheckCircle2, DollarSign, Sparkles } from "lucide-react";

interface CategoryCardProps {
  key?: string;
  category: PassiveIncomeCategory;
  isSelected: boolean;
  onSelect: () => void;
}

export default function CategoryCard({ category, isSelected, onSelect }: CategoryCardProps) {
  // Get corresponding Lucide Icon
  const renderIcon = () => {
    const iconClass = `w-5 h-5 ${isSelected ? "text-indigo-600" : "text-slate-600"}`;
    switch (category.icon) {
      case "TrendingUp":
        return <TrendingUp className={iconClass} />;
      case "Rocket":
        return <Rocket className={iconClass} />;
      case "Calculator":
        return <Calculator className={iconClass} />;
      case "Palette":
        return <Palette className={iconClass} />;
      case "FileCode":
        return <FileCode className={iconClass} />;
      case "Sparkles":
        return <Sparkles className={iconClass} />;
      default:
        return <Rocket className={iconClass} />;
    }
  };

  const difficultyColor = 
    category.difficulty === "Easy" 
      ? "bg-emerald-50 text-emerald-700 border-emerald-200" 
      : category.difficulty === "Medium" 
      ? "bg-amber-50 text-amber-700 border-amber-200" 
      : "bg-rose-50 text-rose-700 border-rose-200";

  return (
    <button
      onClick={onSelect}
      className={`relative w-full text-left p-5 rounded-xl border transition-all cursor-pointer select-none duration-200 flex flex-col justify-between ${
        isSelected
          ? "bg-white border-indigo-600 shadow-md shadow-indigo-600/5 ring-1 ring-indigo-600/20"
          : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50 shadow-sm"
      }`}
    >
      {isSelected && (
        <span className="absolute top-3 right-3 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-100">
          <CheckCircle2 className="w-4 h-4 text-indigo-600" />
        </span>
      )}
      
      <div>
        <div className="flex items-center gap-3 mb-3.5">
          <div className={`p-2 rounded-lg border ${isSelected ? "bg-indigo-50 border-indigo-100" : "bg-slate-100 border-slate-200"}`}>
            {renderIcon()}
          </div>
          <div>
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${difficultyColor}`}>
              {category.difficulty} Level
            </span>
            <h3 className={`font-display font-bold text-sm mt-1 sm:text-base leading-snug ${isSelected ? "text-indigo-900" : "text-slate-800"}`}>
              {category.titleEn}
            </h3>
          </div>
        </div>

         <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 sm:line-clamp-3">
          {category.descriptionEn}
        </p>
      </div>

      <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
        <div className="flex items-center gap-1">
          <div className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded flex items-center gap-0.5 border border-emerald-100">
            <DollarSign className="w-3 h-3 text-emerald-600 shrink-0" />
            <span className="font-semibold">{category.revenuePotential.replace("mwezi", "month")}</span>
          </div>
        </div>
        <div>
          Niche: <span className="text-slate-700 font-semibold">{category.marketingNiche}</span>
        </div>
      </div>
    </button>
  );
}
