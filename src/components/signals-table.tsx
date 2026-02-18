"use client"

import { motion } from "framer-motion"
import { MoreHorizontal, Search, Trophy, Terminal, User } from "lucide-react"

const signals = [
    { match: "Djkokovic vs Musetti", league: "BNL Rome Masters", odds: "1.42", stake: "$250", prob: "81%", logo: "🎾" },
    { match: "Gauff vs Pegula", league: "WTA Madrid", odds: "1.42", stake: "$250", prob: "75%", logo: "🎾" },
    { match: "Heat vs Celtics", league: "NBA", odds: "1.45", stake: "$250", prob: "68%", logo: "🏀" },
    { match: "Villarreal vs Barcelona", league: "LaLiga", odds: "1.29", stake: "$250", prob: "92%", logo: "⚽" },
    { match: "Bucks vs Knicks", league: "NBA", odds: "1.90", stake: "$250", prob: "54%", logo: "🏀" },
]

export function SignalsTable() {
    return (
        <div className="podio-card flex-1 min-h-[500px] flex flex-col">
            <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                <div className="flex items-center gap-6">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-white">Active High Edge Signals</h2>
                    <div className="flex items-center gap-1 bg-white/5 p-1 rounded-lg border border-white/5">
                        <button className="px-3 py-1 text-[10px] font-bold uppercase bg-emerald-500/20 text-emerald-400 rounded-md">Tennis</button>
                        <button className="px-3 py-1 text-[10px] font-bold uppercase text-gray-500 hover:text-gray-300">Basketball</button>
                        <button className="px-3 py-1 text-[10px] font-bold uppercase text-gray-500 hover:text-gray-300">Football</button>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/5 cursor-pointer text-gray-500">
                        <Search className="w-4 h-4" />
                    </div>
                    <div className="p-2 rounded-lg bg-white/5 border border-white/5 cursor-pointer text-gray-500">
                        <MoreHorizontal className="w-4 h-4" />
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-[10px] uppercase tracking-widest text-gray-500 border-b border-white/5">
                            <th className="px-8 py-4 font-bold">Match</th>
                            <th className="px-8 py-4 font-bold">League</th>
                            <th className="px-8 py-4 font-bold">Odds</th>
                            <th className="px-8 py-4 font-bold">Stake</th>
                            <th className="px-8 py-4 font-bold text-center">AI Win Prob.</th>
                            <th className="px-8 py-4 font-bold text-right">Details</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {signals.map((signal, idx) => (
                            <motion.tr
                                key={signal.match}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className={cn(
                                    "hover:bg-white/[0.03] transition-colors group cursor-pointer",
                                    idx === 0 && "bg-emerald-500/[0.03]"
                                )}
                            >
                                <td className="px-8 py-5">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-lg overflow-hidden relative">
                                            {idx === 0 ? <User className="w-full h-full object-cover p-1" /> : signal.logo}
                                            {idx === 0 && <div className="absolute inset-0 bg-emerald-500/20 mix-blend-overlay" />}
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">{signal.match}</p>
                                            <p className="text-[10px] text-gray-500 font-medium">April 26, 2024 - Clay</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-8 py-5">
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                        </div>
                                        <span className="text-xs font-semibold text-gray-300">{signal.league}</span>
                                    </div>
                                </td>
                                <td className="px-8 py-5 text-xs font-bold text-emerald-400 tracking-tight">{signal.odds}</td>
                                <td className="px-8 py-5 text-xs font-bold text-gray-300">{signal.stake}</td>
                                <td className="px-8 py-5">
                                    <div className="flex flex-col items-center gap-1.5">
                                        <span className="text-lg font-black text-white">{signal.prob}</span>
                                        <div className="flex gap-0.5">
                                            {[...Array(5)].map((_, i) => (
                                                <div
                                                    key={i}
                                                    className={cn(
                                                        "w-4 h-1 rounded-full",
                                                        i < (parseInt(signal.prob) / 20) ? "bg-emerald-500 neon-glow-emerald" : "bg-white/10"
                                                    )}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </td>
                                <td className="px-8 py-5 text-right">
                                    <button className="px-4 py-1.5 rounded-lg border border-white/10 text-[10px] font-black uppercase text-gray-400 hover:text-white hover:border-white/20 transition-all">
                                        Details
                                    </button>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

import { cn } from "@/lib/utils"
