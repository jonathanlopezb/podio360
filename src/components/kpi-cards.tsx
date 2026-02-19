"use client"

import { TrendingUp, Target, Zap, Activity } from "lucide-react"

const stats = [
    { label: "ROI Global", value: "+19.5%", trend: "up", icon: Activity, detail: "Eficiencia: 92%" },
    { label: "Tasa Victoria", value: "78.2%", trend: "up", icon: Target, detail: "Últimos 30 Días" },
    { label: "Ventaja AI", value: "+12.4%", trend: "up", icon: Zap, detail: "Varianza Promedio" },
]

export function KPICards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
            {stats.map((stat, index) => (
                <div
                    key={stat.label}
                    className="podio-card p-5 h-32 group cursor-default transition-all hover:bg-white/[0.03]"
                >
                    <div className="relative z-10 flex flex-col justify-between h-full">
                        <div className="flex items-center justify-between">
                            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-500 group-hover:text-gray-400">{stat.label}</p>
                            <div className="w-7 h-7 rounded-lg bg-emerald-500/5 border border-emerald-500/10 flex items-center justify-center">
                                <stat.icon className="w-3.5 h-3.5 text-emerald-500" />
                            </div>
                        </div>

                        <div className="flex items-end gap-2.5">
                            <h3 className="text-3xl font-black tracking-tighter text-white">
                                {stat.value}
                            </h3>
                            <div className="flex items-center gap-1 mb-1 text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded text-[8px] font-bold">
                                <TrendingUp className="w-2.5 h-2.5" />
                                ALZA
                            </div>
                        </div>

                        <div className="flex items-center justify-between mt-1">
                            <p className="text-[9px] text-gray-600 font-bold uppercase tracking-tight group-hover:text-gray-500 transition-colors">
                                {stat.detail}
                            </p>
                            <div className="w-1 h-1 rounded-full bg-emerald-500 opacity-50 shadow-[0_0_5px_rgba(16,185,129,0.8)]" />
                        </div>
                    </div>

                    <div className="scan-line h-px bg-emerald-500/10 opacity-0 group-hover:opacity-30" />
                </div>
            ))}
        </div>
    )
}
