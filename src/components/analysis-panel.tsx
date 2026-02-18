"use client"

import { motion } from "framer-motion"
import { TrendingUp, User, AlertTriangle, Trophy, BarChart as ChartIcon } from "lucide-react"

export function AnalysisPanel() {
    return (
        <div className="w-96 flex flex-col gap-6 font-sans">
            <div className="podio-card p-6">
                <h2 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-4">AI Confidence Index</h2>
                <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-black text-white">+12.4%</span>
                    <span className="text-xs font-bold text-emerald-400 font-mono tracking-tighter">Live Price</span>
                </div>
                <p className="text-[10px] text-gray-500 font-medium mb-6">Model Accuracy 30d — 78.6%</p>

                <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden mb-2">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "78.6%" }}
                        className="h-full emerald-gradient"
                    />
                </div>
                <div className="flex justify-between text-[8px] font-bold text-gray-600 uppercase tracking-widest">
                    <span>Volatility: Medium</span>
                    <span>Index Level: Alpha</span>
                </div>
            </div>

            <div className="podio-card p-6">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full border border-emerald-500/30 overflow-hidden">
                        <User className="w-full h-full p-1 text-emerald-500/50" />
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-white uppercase">Djkokovic vs Musetti</h3>
                        <p className="text-[10px] text-gray-500">April 26, 2024 - Clay</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center justify-between group">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-emerald-500/5 border border-emerald-500/10 flex items-center justify-center">
                                <Trophy className="w-4 h-4 text-emerald-500" />
                            </div>
                            <span className="text-[10px] font-bold uppercase text-gray-400">Player Form</span>
                        </div>
                        <span className="text-xs font-bold text-emerald-400 font-mono">+24 ELO</span>
                    </div>

                    <div className="flex items-center justify-between group">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-red-500/5 border border-red-500/10 flex items-center justify-center">
                                <AlertTriangle className="w-4 h-4 text-red-500" />
                            </div>
                            <span className="text-[10px] font-bold uppercase text-gray-400">Injury Risk</span>
                        </div>
                        <span className="text-xs font-bold text-red-400 font-mono tracking-tighter">Moderate</span>
                    </div>
                </div>
            </div>

            <div className="podio-card p-6 flex-1">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Equity Curve & Drawdown</h2>
                    <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-400">
                        <TrendingUp className="w-3 h-3" />
                        + 2.2%
                    </div>
                </div>

                <div className="h-48 relative flex items-end gap-1">
                    {[40, 60, 45, 80, 55, 90, 75, 100].map((h, i) => (
                        <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ delay: i * 0.1 }}
                            className="flex-1 rounded-t-sm bg-gradient-to-t from-emerald-500/20 to-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.2)]"
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
