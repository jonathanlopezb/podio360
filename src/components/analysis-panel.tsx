"use client"

import { motion } from "framer-motion"
import { TrendingUp, User, AlertTriangle, Trophy, BarChart3, Info, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

export function AnalysisPanel() {
    return (
        <div className="w-[400px] flex flex-col gap-6 font-sans">

            {/* AI Confidence Widget */}
            <div className="podio-card p-6 border-emerald-500/10 bg-gradient-to-br from-emerald-500/[0.03] to-transparent">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Índice de Confianza AI</h2>
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,1)]" />
                </div>
                <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-5xl font-black text-white tracking-tighter">+12.4%</span>
                    <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2 py-0.5 rounded leading-none">Precio Live</span>
                </div>
                <div className="flex items-center gap-2 mb-6">
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tight">Precisión del Modelo 30d — <span className="text-gray-300 italic">78.6%</span></p>
                    <Info className="w-3 h-3 text-gray-600" />
                </div>

                <div className="space-y-2">
                    <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "78.6%" }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="h-full emerald-gradient shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                        />
                    </div>
                    <div className="flex justify-between text-[9px] font-black text-gray-600 uppercase tracking-[0.15em]">
                        <span>Volatilidad: MEDIA</span>
                        <span>Nivel: ALPHA v2</span>
                    </div>
                </div>
            </div>

            {/* Deep Match Analysis */}
            <div className="podio-card">
                <div className="p-4 border-b border-white/5 flex items-center justify-between bg-white/[0.01]">
                    <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Deep Match Analysis</h2>
                    <MoreHorizontal className="w-4 h-4 text-gray-600" />
                </div>

                <div className="p-6 space-y-8">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full border-2 border-emerald-500/20 p-1 relative group cursor-pointer transition-all">
                            <div className="w-full h-full rounded-full bg-emerald-500/10 flex items-center justify-center overflow-hidden">
                                <User className="w-10 h-10 text-emerald-500/40" />
                            </div>
                            <div className="absolute inset-0 rounded-full border border-emerald-500/40 animate-ping opacity-20 pointer-events-none" />
                        </div>
                        <div>
                            <h3 className="text-lg font-black text-white uppercase italic tracking-tight">Djokovic vs Musetti</h3>
                            <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">
                                <MapPin className="w-3 h-3" />
                                Abril 26, 2024 — Clay
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <InsightItem
                            label="Forma Jugador"
                            value="+24 ELO"
                            status="positive"
                            icon={<Trophy className="w-4 h-4 text-emerald-500" />}
                        />
                        <InsightItem
                            label="Riesgo Lesión"
                            value="Moderado"
                            status="warning"
                            icon={<AlertTriangle className="w-4 h-4 text-amber-500" />}
                        />
                    </div>
                </div>
            </div>

            {/* Equity Curve Widgets */}
            <div className="podio-card p-6 flex-1 bg-gradient-to-b from-white/[0.02] to-transparent">
                <div className="flex items-center justify-between mb-8">
                    <div className="space-y-1">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Equity Curve & Drawdown</h2>
                        <p className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">Profit Acumulado vs Benchmark</p>
                    </div>
                    <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded-lg">
                        <TrendingUp className="w-3 h-3 text-emerald-500" />
                        <span className="text-[10px] font-black text-emerald-500 font-mono">+ 2.2%</span>
                    </div>
                </div>

                <div className="h-40 relative flex items-end gap-[2px]">
                    {[30, 45, 38, 55, 48, 70, 62, 85, 78, 100, 92].map((h, i) => (
                        <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ delay: i * 0.05, duration: 0.8, ease: "circOut" }}
                            className="flex-1 rounded-t-[2px] bg-gradient-to-t from-emerald-500/5 via-emerald-500/40 to-emerald-500 relative group"
                        >
                            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                            {i === 10 && <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]" />}
                        </motion.div>
                    ))}
                    {/* Legend lines */}
                    <div className="absolute inset-x-0 bottom-1/4 h-px border-t border-white/[0.03] border-dashed" />
                    <div className="absolute inset-x-0 bottom-1/2 h-px border-t border-white/[0.03] border-dashed" />
                    <div className="absolute inset-x-0 bottom-3/4 h-px border-t border-white/[0.03] border-dashed" />
                </div>
                <div className="flex justify-between mt-4 text-[8px] font-black text-gray-600 uppercase tracking-widest">
                    <span>Abril</span>
                    <span>Mayo</span>
                </div>
            </div>
        </div>
    )
}

function InsightItem({ label, value, status, icon }: { label: string, value: string, status: "positive" | "warning", icon: any }) {
    const colors = {
        positive: "bg-emerald-500/5 border-emerald-500/10 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.05)]",
        warning: "bg-amber-500/5 border-amber-500/10 text-amber-400"
    }

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className={cn("p-4 rounded-2xl border transition-all", colors[status])}
        >
            <div className="flex items-center gap-3 mb-2">
                <div className="p-1.5 rounded-lg bg-white/5">
                    {icon}
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest opacity-60">{label}</span>
            </div>
            <span className="text-sm font-black italic uppercase tracking-tighter">{value}</span>
        </motion.div>
    )
}

import { MoreHorizontal } from "lucide-react"
