"use client"

import { TrendingUp, User, AlertTriangle, Trophy, Info, MapPin, MoreHorizontal, Database, Activity, Target, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, BarChart, Bar } from 'recharts'

const radarData = [
    { subject: 'Potencia', A: 120, B: 110, fullMark: 150 },
    { subject: 'Resistencia', A: 98, B: 130, fullMark: 150 },
    { subject: 'Backhand', A: 86, B: 130, fullMark: 150 },
    { subject: 'Forehand', A: 99, B: 100, fullMark: 150 },
    { subject: 'Saque', A: 85, B: 90, fullMark: 150 },
    { subject: 'Retorno', A: 65, B: 85, fullMark: 150 },
];

const equityData = [
    { name: 'Ene', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Abr', value: 800 },
    { name: 'May', value: 500 },
    { name: 'Jun', value: 900 },
    { name: 'Jul', value: 1200 },
];

export function AnalysisPanel() {
    return (
        <div className="w-full flex flex-col gap-6 font-sans">

            {/* AI Confidence Node - Futuristic 2026 */}
            <div className="podio-card p-6 border-emerald-500/20 bg-[#080808] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-[60px] pointer-events-none" />

                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                            <Activity className="w-4 h-4 text-emerald-500" />
                        </div>
                        <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Motor de Probabilidad v6.2</h2>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,1)] animate-pulse" />
                        <span className="text-[8px] font-black text-emerald-500 uppercase tracking-widest">Real-Time</span>
                    </div>
                </div>

                <div className="flex items-end justify-between mb-8">
                    <div className="space-y-1">
                        <span className="text-5xl font-black text-white tracking-tighter italic">81.4<span className="text-emerald-500 text-3xl">%</span></span>
                        <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Confianza del Algoritmo</p>
                    </div>
                    <div className="h-12 w-24">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={equityData.slice(-5)}>
                                <Area type="monotone" dataKey="value" stroke="#10b981" fill="transparent" strokeWidth={2} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                        <span className="text-[8px] font-black text-gray-600 uppercase tracking-widest block mb-1">Varianza Node</span>
                        <span className="text-xs font-black text-white italic">± 2.4%</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                        <span className="text-[8px] font-black text-gray-600 uppercase tracking-widest block mb-1">Cluster IP</span>
                        <span className="text-xs font-black text-emerald-500">Node-A24</span>
                    </div>
                </div>
            </div>

            {/* Avant-Garde Radar Analysis */}
            <div className="podio-card p-6 min-h-[400px]">
                <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                    <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Deep Profile Analysis</h2>
                    <Zap className="w-4 h-4 text-emerald-500" />
                </div>

                <div className="h-[250px] w-full mb-8 flex justify-center items-center">
                    <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                            <PolarGrid stroke="#ffffff10" />
                            <PolarAngleAxis dataKey="subject" tick={{ fill: '#666', fontSize: 8, fontWeight: 900 }} />
                            <Radar
                                name="Djokovic"
                                dataKey="A"
                                stroke="#10b981"
                                fill="#10b981"
                                fillOpacity={0.5}
                            />
                            <Radar
                                name="Musetti"
                                dataKey="B"
                                stroke="#ffffff30"
                                fill="#ffffff10"
                                fillOpacity={0.3}
                            />
                        </RadarChart>
                    </ResponsiveContainer>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center justify-between text-[9px] font-black uppercase tracking-widest border-l-2 border-emerald-500 pl-3">
                        <span className="text-gray-500">Inferencia de Victoria</span>
                        <span className="text-emerald-500">Alta Probabilidad</span>
                    </div>
                    <div className="flex gap-2">
                        <div className="flex-1 p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/10 text-center">
                            <span className="text-[8px] font-black text-emerald-500/60 uppercase block">Djokovic</span>
                            <span className="text-xs font-black text-white">82% Perf</span>
                        </div>
                        <div className="flex-1 p-3 rounded-xl bg-white/5 border border-white/5 text-center">
                            <span className="text-[8px] font-black text-gray-600 uppercase block">Musetti</span>
                            <span className="text-xs font-black text-gray-400">64% Perf</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Equity Vanguard Curve */}
            <div className="podio-card p-6">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                            <TrendingUp className="w-4 h-4 text-emerald-500" />
                        </div>
                        <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Rendimiento Alpha 2026</h2>
                    </div>
                    <span className="text-lg font-black text-emerald-500 font-mono italic">+21.4%</span>
                </div>

                <div className="h-40 w-full mb-4">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={equityData}>
                            <defs>
                                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <Area type="stepAfter" dataKey="value" stroke="#10b981" fillOpacity={1} fill="url(#colorValue)" strokeWidth={2} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                <div className="flex justify-between items-center bg-white/[0.01] border border-white/5 rounded-xl p-4">
                    <div className="flex flex-col">
                        <span className="text-[8px] font-black text-gray-600 uppercase tracking-widest">Drawdown Máx</span>
                        <span className="text-xs font-black text-white">-4.2%</span>
                    </div>
                    <div className="w-px h-6 bg-white/5" />
                    <div className="flex flex-col text-right">
                        <span className="text-[8px] font-black text-gray-600 uppercase tracking-widest">Sharpe Ratio</span>
                        <span className="text-xs font-black text-emerald-500">2.84</span>
                    </div>
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
                <div className="p-1 rounded bg-white/5">
                    {icon}
                </div>
                <span className="text-[8px] font-black uppercase tracking-widest opacity-60">{label}</span>
            </div>
            <span className="text-xs font-black italic uppercase tracking-tighter">{value}</span>
        </div>
    )
}
