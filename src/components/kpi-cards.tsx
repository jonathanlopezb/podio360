"use client"

import { TrendingUp, TrendingDown, Target, Zap, Activity } from "lucide-react"
import { motion } from "framer-motion"

const stats = [
    { label: "Global ROI", value: "+19.5%", trend: "up", icon: Activity, detail: "Model Efficiency: 92%" },
    { label: "Win Rate", value: "78.2%", trend: "up", icon: Target, detail: "Last 30 Days" },
    { label: "AI Edge", value: "+12.4%", trend: "up", icon: Zap, detail: "Average Variance" },
]

export function KPICards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, index) => (
                <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="podio-card p-6 h-32 group hover:neon-border-emerald transition-all duration-500 overflow-hidden"
                >
                    {/* Background Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-emerald-500/5 rounded-full blur-3xl" />

                    <div className="relative z-10 flex flex-col justify-between h-full">
                        <div className="flex items-center justify-between">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{stat.label}</p>
                            <stat.icon className="w-4 h-4 text-emerald-500/50" />
                        </div>

                        <div className="flex items-end gap-3">
                            <h3 className="text-3xl font-extrabold tracking-tighter text-white">
                                {stat.value}
                            </h3>
                            <div className="flex items-center gap-1 mb-1 text-emerald-400">
                                <TrendingUp className="w-4 h-4" />
                            </div>
                        </div>

                        <p className="text-[10px] text-gray-500 font-medium">
                            {stat.detail}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}
