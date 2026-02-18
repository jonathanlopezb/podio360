"use client"

import { motion } from "framer-motion"
import { MoreHorizontal, Search, Trophy, User, ChevronRight, LayoutGrid, Filter } from "lucide-react"
import { cn } from "@/lib/utils"

const signals = [
    { match: "Djokovic vs Musetti", tour: "ATP BNL Roma Masters", date: "Abril 26, 2024 - Clay", odds: "1.42", stake: "$250", prob: "81%", active: true },
    { match: "Gauff vs Pegula", tour: "WTA Surface ELO", date: "Abril 26, 2024 - Clay", odds: "1.42", stake: "$250", prob: "75%" },
    { match: "Heat vs Celtics", tour: "NBA", date: "Abril 26, 2024", odds: "1.45", stake: "$250", prob: "68%" },
    { match: "Villarreal vs Barcelona", tour: "LaLiga", date: "Abril 26, 2024", odds: "1.29", stake: "$250", prob: "92%" },
    { match: "Bucks vs Knicks", tour: "NBA", date: "Abril 26, 2024", odds: "1.90", stake: "$250", prob: "54%" },
    { match: "Swiatek vs Rybakina", tour: "WTA Madrid", date: "Abril 26, 2024", odds: "1.08", stake: "$200", prob: "88%" },
    { match: "Dortmund vs PSG", tour: "UEFA Champions League", date: "Abril 26, 2024", odds: "1.85", stake: "$200", prob: "62%" },
]

export function SignalsTable() {
    return (
        <div className="podio-card flex-1 min-h-[600px] flex flex-col">
            <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.01]">
                <div className="flex items-center gap-8">
                    <h2 className="text-sm font-black uppercase tracking-[0.2em] text-white">Señales Activas High Edge</h2>
                    <div className="flex items-center gap-1 bg-black/40 p-1.5 rounded-xl border border-white/5 shadow-inner">
                        <button className="px-5 py-1.5 text-[10px] font-black uppercase bg-emerald-500 text-black rounded-lg shadow-lg shadow-emerald-500/20 transition-all">Tenis</button>
                        <button className="px-5 py-1.5 text-[10px] font-black uppercase text-gray-500 hover:text-gray-300 transition-colors">Baloncesto</button>
                        <button className="px-5 py-1.5 text-[10px] font-black uppercase text-gray-500 hover:text-gray-300 transition-colors flex items-center gap-2">
                            Fútbol <ChevronRight className="w-3 h-3" />
                        </button>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex items-center bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 text-[10px] font-bold text-gray-500 uppercase tracking-widest gap-2">
                        <span>Score</span>
                        <div className="flex items-center gap-1 text-white">
                            Retiros <ChevronDown className="w-3 h-3" />
                        </div>
                    </div>
                    <div className="p-2 rounded-lg bg-white/5 border border-white/5 cursor-pointer text-gray-500 hover:text-emerald-500 hover:border-emerald-500/30 transition-all">
                        <Filter className="w-4 h-4" />
                    </div>
                    <div className="p-2 rounded-lg bg-white/5 border border-white/5 cursor-pointer text-gray-500 hover:text-white transition-colors">
                        <LayoutGrid className="w-4 h-4" />
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-[10px] uppercase tracking-widest text-gray-600 border-b border-white/5 bg-white/[0.01]">
                            <th className="px-8 py-5 font-black">Partido</th>
                            <th className="px-8 py-5 font-black">Liga</th>
                            <th className="px-8 py-5 font-black">Cuota</th>
                            <th className="px-8 py-5 font-black">Stake</th>
                            <th className="px-8 py-5 font-black text-center">Prob. Victoria AI</th>
                            <th className="px-8 py-5 font-black text-right">Acción</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {signals.map((signal, idx) => (
                            <motion.tr
                                key={signal.match}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05, duration: 0.5 }}
                                className={cn(
                                    "hover:bg-white/[0.04] transition-all duration-300 group cursor-pointer relative",
                                    signal.active && "bg-emerald-500/[0.08] neon-border-emerald z-10 scale-[1.01] shadow-2xl"
                                )}
                            >
                                <td className="px-8 py-6">
                                    <div className="flex items-center gap-5">
                                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 relative overflow-hidden group-hover:border-emerald-500/30 transition-colors shadow-lg">
                                            <User className="w-8 h-8 text-gray-500 group-hover:text-emerald-500 transition-colors" />
                                            {signal.active && <div className="absolute inset-0 bg-emerald-500/10 shadow-[inner_0_0_15px_rgba(16,185,129,0.2)]" />}
                                        </div>
                                        <div>
                                            <p className="text-sm xl:text-base font-black text-white group-hover:text-emerald-400 transition-colors tracking-tight italic uppercase">{signal.match}</p>
                                            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">{signal.date}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-8 py-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                                            <Trophy className="w-3 h-3 text-emerald-500" />
                                        </div>
                                        <span className="text-[11px] font-bold text-gray-300 uppercase tracking-tighter">{signal.tour}</span>
                                    </div>
                                </td>
                                <td className="px-8 py-6 text-sm font-black text-emerald-400 font-mono tracking-tighter">{signal.odds}</td>
                                <td className="px-8 py-6 text-sm font-black text-gray-300 font-mono italic tracking-tighter">{signal.stake}</td>
                                <td className="px-8 py-6">
                                    <div className="flex flex-col items-center gap-3">
                                        <span className="text-2xl font-black text-white italic group-hover:text-emerald-400 transition-colors">{signal.prob}</span>
                                        <div className="flex gap-1">
                                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
                                                const probVal = parseInt(signal.prob);
                                                const isActive = i <= (probVal / 10);
                                                return (
                                                    <div
                                                        key={i}
                                                        className={cn(
                                                            "prob-segment",
                                                            isActive ? "active" : "inactive"
                                                        )}
                                                    />
                                                )
                                            })}
                                        </div>
                                    </div>
                                </td>
                                <td className="px-8 py-6 text-right">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-6 py-2 rounded-xl border border-white/10 text-[10px] font-black uppercase text-gray-400 group-hover:text-white group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-all shadow-lg"
                                    >
                                        Detalles
                                    </motion.button>
                                </td>
                                {signal.active && <div className="scan-line h-px bg-emerald-500/20 top-0 opacity-50" />}
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="p-6 border-t border-white/5 bg-white/[0.01] flex items-center justify-between">
                <span className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.2em]">Desplegando 7 de 23 señales</span>
                <div className="flex items-center gap-2">
                    <PaginationButton label="1" active />
                    <PaginationButton label="2" />
                    <PaginationButton label="3" />
                    <PaginationButton label="4" />
                    <PaginationButton label="5" />
                    <div className="text-gray-600 px-2 tracking-widest">...</div>
                    <PaginationButton icon={<ChevronRight className="w-3 h-3" />} />
                </div>
            </div>
        </div>
    )
}

function PaginationButton({ label, active, icon }: { label?: string, active?: boolean, icon?: any }) {
    return (
        <button className={cn(
            "w-8 h-8 rounded-lg border flex items-center justify-center text-[10px] font-black transition-all",
            active ? "bg-emerald-500 border-emerald-500 text-black shadow-lg shadow-emerald-500/20" : "bg-white/5 border-white/5 text-gray-500 hover:text-white hover:border-white/10"
        )}>
            {label || icon}
        </button>
    )
}

import { ChevronDown } from "lucide-react"
