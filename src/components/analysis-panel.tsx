"use client"

import { TrendingUp, User, AlertTriangle, Trophy, Info, MapPin, MoreHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"

export function AnalysisPanel() {
    return (
        <div className="w-full flex flex-col gap-5 font-sans">

            {/* AI Confidence Widget */}
            <div className="podio-card p-5 border-emerald-500/10 bg-gradient-to-br from-emerald-500/[0.03] to-transparent">
                <div className="flex items-center justify-between mb-3">
                    <h2 className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-500">Confianza AI</h2>
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-70" />
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-4xl font-black text-white tracking-tighter">+12.4%</span>
                    <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-1.5 py-0.5 rounded leading-none">Live</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                    <p className="text-[9px] text-gray-600 font-bold uppercase">Precisión 30d — <span className="text-gray-400 italic">78.6%</span></p>
                </div>

                <div className="space-y-1.5">
                    <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-emerald-500"
                            style={{ width: "78.6%" }}
                        />
                    </div>
                </div>
            </div>

            {/* Deep Match Analysis */}
            <div className="podio-card">
                <div className="p-4 border-b border-white/5 flex items-center justify-between bg-white/[0.01]">
                    <h2 className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-600">Deep Analysis</h2>
                    <MoreHorizontal className="w-3.5 h-3.5 text-gray-700" />
                </div>

                <div className="p-5 space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full border border-emerald-500/20 flex items-center justify-center bg-emerald-500/5">
                            <User className="w-6 h-6 text-emerald-500/40" />
                        </div>
                        <div>
                            <h3 className="text-sm font-black text-white uppercase italic tracking-tight">Djokovic vs Musetti</h3>
                            <div className="flex items-center gap-1.5 text-[8px] font-bold text-gray-600 uppercase tracking-widest">
                                <MapPin className="w-3 h-3" />
                                Roma — Clay
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <InsightItem
                            label="Forma"
                            value="+24 ELO"
                            status="positive"
                            icon={<Trophy className="w-3.5 h-3.5 text-emerald-500" />}
                        />
                        <InsightItem
                            label="Riesgo"
                            value="Medio"
                            status="warning"
                            icon={<AlertTriangle className="w-3.5 h-3.5 text-amber-500" />}
                        />
                    </div>
                </div>
            </div>

            {/* Equity Curve (Optimizada) */}
            <div className="podio-card p-5 bg-gradient-to-b from-white/[0.02] to-transparent">
                <div className="flex items-center justify-between mb-6">
                    <div className="space-y-0.5">
                        <h2 className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-600">Equity Curve</h2>
                        <p className="text-[8px] font-bold text-gray-700 uppercase tracking-widest">Accion Acumulada</p>
                    </div>
                    <div className="text-right">
                        <span className="text-xs font-black text-emerald-500 font-mono italic">+ 2.2%</span>
                    </div>
                </div>

                <div className="h-32 relative flex items-end gap-[1px]">
                    {[30, 45, 38, 55, 48, 70, 62, 85, 78, 100, 92].map((h, i) => (
                        <div
                            key={i}
                            className="flex-1 bg-gradient-to-t from-emerald-500/5 to-emerald-500 transition-all duration-500"
                            style={{ height: `${h}%` }}
                        />
                    ))}
                </div>
                <div className="flex justify-between mt-3 text-[8px] font-black text-gray-700 uppercase tracking-widest">
                    <span>Abr</span>
                    <span>May</span>
                </div>
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
                {icon}
                <span className="text-[8px] font-black uppercase tracking-widest opacity-60">{label}</span>
            </div>
            <span className="text-xs font-black italic uppercase tracking-tighter">{value}</span>
        </div>
    )
}
