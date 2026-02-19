"use client"

import { LogIn, ShieldCheck, ChevronDown, Trophy, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function Topbar() {
    return (
        <header className="h-20 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-40 bg-[#050505]/60 backdrop-blur-xl border-b border-white/5 w-full">
            <div className="flex items-center gap-4 lg:gap-10">
                <div className="flex items-center gap-3 group cursor-pointer">
                    <div className="w-6 h-6 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:border-emerald-500/40 transition-all">
                        <Trophy className="w-3.5 h-3.5 text-emerald-500" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] font-black text-white uppercase tracking-[0.2em] leading-none">Podio 360</span>
                        <span className="text-[7px] font-bold text-emerald-500/60 uppercase tracking-widest mt-1">Live AI Node</span>
                    </div>
                </div>

                <nav className="hidden xl:flex items-center gap-8 border-l border-white/5 pl-8">
                    <TopNavSelector label="Estado Red" value="Online" highlight="text-emerald-500" dot={true} />
                    <TopNavSelector label="Latencia" value="12ms" highlight="text-white" />
                </nav>
            </div>

            <div className="flex items-center gap-4">
                {/* Visual Auth Module - Guest State */}
                <div className="flex items-center gap-3">
                    <div className="flex flex-col text-right">
                        <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest leading-none">Modo Invitado</span>
                        <span className="text-[7px] font-bold text-gray-600 uppercase tracking-[0.2em] mt-1">Acceso Limitado</span>
                    </div>

                    <div className="h-8 w-[1px] bg-white/5 mx-1" />

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group flex items-center gap-3 bg-white/[0.03] border border-white/10 hover:border-emerald-500/50 px-4 py-2.5 rounded-xl transition-all shadow-xl"
                    >
                        <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors">
                            <ShieldCheck className="w-4 h-4 text-gray-400 group-hover:text-emerald-500" />
                        </div>
                        <div className="flex flex-col items-start">
                            <span className="text-[10px] font-black text-white uppercase tracking-tighter leading-none">Iniciar Sesión</span>
                            <span className="text-[7px] font-bold text-emerald-500 uppercase tracking-widest mt-0.5">Terminal Pro</span>
                        </div>
                        <LogIn className="w-3 h-3 text-gray-600 group-hover:text-white transition-colors ml-1" />
                    </motion.button>
                </div>
            </div>
        </header>
    )
}

function TopNavSelector({ label, value, highlight = "text-white", dot = false }: { label: string, value: string, highlight?: string, dot?: boolean }) {
    return (
        <div className="flex items-center gap-2.5 cursor-pointer group">
            <span className="text-[9px] font-bold text-gray-600 uppercase tracking-widest group-hover:text-gray-400 transition-colors">{label}</span>
            <div className="flex items-center gap-2 bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/5 group-hover:border-white/10 transition-all">
                {dot && <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_5px_rgba(16,185,129,1)]" />}
                <span className={cn("text-[10px] font-black uppercase tracking-tight", highlight)}>{value}</span>
                <ChevronDown className="w-2.5 h-2.5 text-gray-700" />
            </div>
        </div>
    )
}
