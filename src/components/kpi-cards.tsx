"use client"

import { TrendingUp, Target, Zap, Activity } from "lucide-react"
import { motion } from "framer-motion"

const stats = [
    { label: "ROI Global", value: "+19.5%", trend: "up", icon: Activity, detail: "Eficiencia del Modelo: 92%" },
    { label: "Tasa de Victoria", value: "78.2%", trend: "up", icon: Target, detail: "Últimos 30 Días" },
    { label: "Ventaja AI", value: "+12.4%", trend: "up", icon: Zap, detail: "Varianza Promedio" },
]

export function KPICards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, index) => (
                <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="podio-card p-6 h-36 group hover:neon-border-emerald cursor-default"
                >
                    {/* Background Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-colors" />

                    <div className="relative z-10 flex flex-col justify-between h-full">
                        <div className="flex items-center justify-between">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 group-hover:text-gray-400 transition-colors">{stat.label}</p>
                            <div className="w-8 h-8 rounded-lg bg-emerald-500/5 border border-emerald-500/10 flex items-center justify-center group-hover:border-emerald-500/30 transition-all">
                                <stat.icon className="w-4 h-4 text-emerald-500" />
                            </div>
                        </div>

                        <div className="flex items-end gap-3">
                            <h3 className="text-4xl font-black tracking-tighter text-white">
                                {stat.value}
                            </h3>
                            <motion.div
                                animate={{ y: [0, -4, 0] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="flex items-center gap-1 mb-1 text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded text-[10px] font-bold"
                            >
                                <TrendingUp className="w-3 h-3" />
                                ALZA
                            </motion.div>
                        </div>

                        <div className="flex items-center justify-between mt-2">
                            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tight group-hover:text-gray-400 transition-colors">
                                {stat.detail}
                            </p>
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                        </div>
                    </div>

                    {/* Scan Line Animation */}
                    <div className="scan-line opacity-0 group-hover:opacity-100" />
                </motion.div>
            ))}
        </div>
    )
}
