"use client"

import { TrendingUp, User, AlertTriangle, Trophy, Info, MapPin, MoreHorizontal, Zap, BarChart3, Database } from "lucide-react"
import { cn } from "@/lib/utils"

export function AnalysisPanel() {
    return (
        <div className="w-full flex flex-col gap-5 font-sans">

            {/* AI Confidence Widget */}
            <div className="podio-card p-5 border-emerald-500/10 bg-gradient-to-br from-emerald-500/[0.03] to-transparent">
                <div className="flex items-center justify-between mb-3">
                    <h1 className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-500">Confianza AI</h1>
                    <div className="flex items-center gap-1.5">
                        <span className="text-[8px] font-bold text-emerald-500/80 uppercase">Live</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,1)]" />
                    </div>
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-4xl font-black text-white tracking-tighter italic">+12.4%</span>
                    <span className="text-[8px] font-black text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-1.5 py-0.5 rounded-sm border border-emerald-500/20">Market Edge</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                    <p className="text-[9px] text-gray-600 font-bold uppercase">Precisión 30d — <span className="text-gray-300">78.6%</span></p>
                    <Info className="w-3 h-3 text-gray-700" />
                </div>

                <div className="space-y-1.5">
                    <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"
                            style={{ width: "78.6%" }}
                        />
                    </div>
                    <div className="flex justify-between text-[8px] font-black text-gray-700 uppercase tracking-widest">
                        <span>Volatilidad: Baja</span>
                        <span>Modelo: Omega-9</span>
                    </div>
                </div>
            </div>

            {/* Deep Match Analysis */}
            <div className="podio-card">
                <div className="p-4 border-b border-white/5 flex items-center justify-between bg-white/[0.01]">
                    <h2 className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-600 italic">Deep Match Analysis</h2>
                    <MoreHorizontal className="w-3.5 h-3.5 text-gray-700" />
                </div>

                <div className="p-5 space-y-5">
                    {/* Player Head-to-Head */}
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-12 h-12 rounded-full border border-emerald-500/20 bg-emerald-500/5 flex items-center justify-center p-1">
                                <User className="w-8 h-8 text-emerald-500/30" />
                            </div>
                            <span className="text-[9px] font-black text-white uppercase tracking-tighter">Djokovic</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-[10px] font-black text-gray-700 uppercase italic">VS</span>
                            <div className="w-px h-6 bg-white/5 my-1" />
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center p-1">
                                <User className="w-8 h-8 text-gray-500/30" />
                            </div>
                            <span className="text-[9px] font-black text-gray-300 uppercase tracking-tighter">Musetti</span>
                        </div>
                    </div>

                    {/* Comparison Bars */}
                    <div className="space-y-3">
                        <ComparisonBar label="Potencia Servicio" val1={85} val2={65} />
                        <ComparisonBar label="Defensa Linea" val1={92} val2={78} />
                        <ComparisonBar label="Mentalidad Tie" val1={98} val2={45} />
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                        <InsightItem
                            label="Forma Reciente"
                            value="+24 ELO"
                            status="positive"
                            icon={<Trophy className="w-3.5 h-3.5 text-emerald-500" />}
                        />
                        <InsightItem
                            label="Riesgo Físico"
                            value="Moderado"
                            status="warning"
                            icon={<AlertTriangle className="w-3.5 h-3.5 text-amber-500" />}
                        />
                    </div>
                </div>
            </div>

            {/* Model Insights - NEW SECTION */}
            <div className="podio-card p-5 space-y-4">
                <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                        <Database className="w-4 h-4 text-emerald-500" />
                    </div>
                    <h2 className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-500">Model Insights (Alpha)</h2>
                </div>

                <div className="space-y-3">
                    <div className="flex justify-between items-center bg-white/[0.02] p-2 rounded-lg border border-white/5">
                        <span className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">Bias de Superficie</span>
                        <span className="text-[10px] font-black text-emerald-500">+1.2% Clay</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/[0.02] p-2 rounded-lg border border-white/5">
                        <span className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">Confianza H2H</span>
                        <span className="text-[10px] font-black text-white">Alta (8/10)</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/[0.02] p-2 rounded-lg border border-white/5">
                        <span className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">Probabilidad Break</span>
                        <span className="text-[10px] font-black text-amber-500">64.2%</span>
                    </div>
                </div>
            </div>

            {/* Equity Curve */}
            <div className="podio-card p-5 bg-gradient-to-b from-white/[0.02] to-transparent">
                <div className="flex items-center justify-between mb-6">
                    <div className="space-y-0.5">
                        <h2 className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-600 italic">Equity Curve & Drawdown</h2>
                        <p className="text-[8px] font-bold text-gray-700 uppercase tracking-widest">Rendimiento Histórico del Modelo</p>
                    </div>
                    <div className="text-right">
                        <span className="text-sm font-black text-emerald-500 font-mono italic tracking-tighter">+ 2,420.50</span>
                    </div>
                </div>

                <div className="h-32 relative flex items-end gap-[1px]">
                    {[30, 45, 38, 55, 48, 70, 62, 85, 78, 100, 92, 110, 105, 120].map((h, i) => (
                        <div
                            key={i}
                            className="flex-1 bg-gradient-to-t from-emerald-500/5 to-emerald-500 transition-all duration-700 opacity-80 hover:opacity-100 hover:scale-y-105"
                            style={{ height: `${h}%` }}
                        />
                    ))}
                    {/* Shadow/Drawdown overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-red-500/5 to-transparent opacity-20" />
                </div>
                <div className="flex justify-between mt-3 text-[8px] font-black text-gray-700 uppercase tracking-widest">
                    <span>Enero 2024</span>
                    <span>Mayo 2024</span>
                </div>
            </div>
        </div>
    )
}

function ComparisonBar({ label, val1, val2 }: { label: string, val1: number, val2: number }) {
    return (
        <div className="space-y-1.5">
            <div className="flex justify-between text-[8px] font-bold text-gray-600 uppercase tracking-[0.1em]">
                <span>{label}</span>
                <span className="text-gray-500">{val1}% vs {val2}%</span>
            </div>
            <div className="h-[3px] w-full bg-white/5 rounded-full flex overflow-hidden">
                <div className="h-full bg-emerald-500" style={{ width: `${val1}%` }} />
                <div className="h-full bg-white/10" style={{ width: `${val2}%` }} />
            </div>
        </div>
    )
}

function InsightItem({ label, value, status, icon }: { label: string, value: string, status: "positive" | "warning", icon: any }) {
    const colors = {
        positive: "bg-emerald-500/5 border-emerald-500/10 text-emerald-400",
        warning: "bg-amber-500/5 border-amber-500/10 text-amber-400"
    }

    return (
        <div className={cn("p-3 rounded-xl border transition-colors", colors[status])}>
            <div className="flex items-center gap-2 mb-1.5">
                <div className="p-1 rounded bg-white/5">
                    {icon}
                </div>
                <span className="text-[8px] font-black uppercase tracking-widest opacity-60">{label}</span>
            </div>
            <span className="text-xs font-black italic uppercase tracking-tighter">{value}</span>
        </div>
    )
}
