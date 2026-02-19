"use client"

import { Trophy, User, ChevronRight, LayoutGrid, Filter, ChevronDown } from "lucide-react"
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
        <div className="podio-card flex-1 min-h-[500px] flex flex-col">
            <div className="p-4 border-b border-white/5 flex items-center justify-between bg-white/[0.01]">
                <div className="flex items-center gap-6">
                    <h2 className="text-xs font-black uppercase tracking-[0.2em] text-white">Señales High Edge</h2>
                    <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/5">
                        <button className="px-3 py-1 text-[9px] font-black uppercase bg-emerald-500 text-black rounded shadow-[0_0_10px_rgba(16,185,129,0.3)] transition-all">Tenis</button>
                        <button className="px-3 py-1 text-[9px] font-black uppercase text-gray-600 hover:text-gray-400">Basket</button>
                        <button className="px-3 py-1 text-[9px] font-black uppercase text-gray-600 hover:text-gray-400">Fútbol</button>
                    </div>
                </div>

                <div className="flex items-center gap-2.5">
                    <div className="flex items-center bg-white/5 px-2.5 py-1 rounded border border-white/5 text-[9px] font-bold text-gray-600 uppercase tracking-widest gap-2">
                        <span>Score</span>
                        <ChevronDown className="w-3 h-3 text-gray-700" />
                    </div>
                    <div className="p-1.5 rounded bg-white/5 border border-white/5 text-gray-700">
                        <Filter className="w-3.5 h-3.5" />
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left text-[11px]">
                    <thead>
                        <tr className="uppercase tracking-widest text-gray-700 border-b border-white/5 bg-white/[0.01]">
                            <th className="px-6 py-4 font-black">Partido</th>
                            <th className="px-6 py-4 font-black">Liga</th>
                            <th className="px-6 py-4 font-black">Cuota</th>
                            <th className="px-6 py-4 font-black">Stake</th>
                            <th className="px-6 py-4 font-black text-center">Prob (%)</th>
                            <th className="px-6 py-4 font-black text-right">Acción</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {signals.map((signal, idx) => (
                            <tr
                                key={signal.match}
                                className={cn(
                                    "hover:bg-white/[0.03] transition-colors group cursor-pointer",
                                    signal.active && "bg-emerald-500/[0.05] border-l-2 border-emerald-500"
                                )}
                            >
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-9 h-9 rounded-full border border-white/5 flex items-center justify-center bg-emerald-950/20 group-hover:border-emerald-500/30 transition-colors">
                                            <User className="w-6 h-6 text-emerald-500/40 group-hover:text-emerald-500" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-black text-white group-hover:text-emerald-400 italic uppercase tracking-tight">{signal.match}</p>
                                            <p className="text-[9px] text-gray-600 font-bold uppercase">{signal.date}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-[10px] font-bold text-gray-500 uppercase">{signal.tour}</span>
                                </td>
                                <td className="px-6 py-4 text-xs font-black text-emerald-400 font-mono italic">{signal.odds}</td>
                                <td className="px-6 py-4 text-xs font-black text-gray-400 font-mono italic">{signal.stake}</td>
                                <td className="px-6 py-4">
                                    <div className="flex flex-col items-center gap-2">
                                        <span className="text-lg font-black text-white italic group-hover:text-emerald-400">{signal.prob}</span>
                                        <div className="flex gap-0.5">
                                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
                                                const probVal = parseInt(signal.prob);
                                                const isActive = i <= (probVal / 10);
                                                return (
                                                    <div
                                                        key={i}
                                                        className={cn(
                                                            "w-2 h-1 rounded-[1px] transition-all duration-300",
                                                            isActive ? "bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.5)]" : "bg-white/[0.05]"
                                                        )}
                                                    />
                                                )
                                            })}
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button
                                        className="px-4 py-1.5 rounded-lg border border-white/10 text-[9px] font-black uppercase text-gray-600 group-hover:text-white group-hover:bg-emerald-500 transition-all"
                                    >
                                        Detalles
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="p-4 border-t border-white/5 bg-white/[0.01] flex items-center justify-between mt-auto">
                <span className="text-[9px] font-bold text-gray-700 uppercase tracking-widest">7 de 23 señales</span>
                <div className="flex items-center gap-1.5">
                    <PaginationButton label="1" active />
                    <PaginationButton label="2" />
                    <PaginationButton label="3" />
                    <PaginationButton icon={<ChevronRight className="w-3 h-3" />} />
                </div>
            </div>
        </div>
    )
}

function PaginationButton({ label, active, icon }: any) {
    return (
        <button className={cn(
            "w-7 h-7 rounded border flex items-center justify-center text-[9px] font-black transition-all",
            active ? "bg-emerald-500 border-emerald-500 text-black" : "bg-white/5 border-white/5 text-gray-600 hover:text-white"
        )}>
            {label || icon}
        </button>
    )
}
