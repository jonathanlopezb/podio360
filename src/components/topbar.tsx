"use client"

import { Search, Bell, Settings, ChevronDown, Share2, Wallet, ExternalLink, User, Trophy, LayoutGrid, Lock, RefreshCw, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function Topbar() {
    return (
        <header className="h-20 flex items-center justify-between px-8 sticky top-0 z-40 ml-64 w-[calc(100%-16rem)] bg-[#050505]/60 backdrop-blur-xl border-b border-white/5">
            <div className="flex items-center gap-10">
                <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                        <Trophy className="w-3 h-3 text-emerald-500" />
                    </div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Dashboard AI de Deportes</span>
                </div>

                <nav className="hidden xl:flex items-center gap-8">
                    <TopNavSelector label="Deporte" value="Tenis" />
                    <TopNavSelector label="Riesgo" value="Alto" highlight="text-white" />
                    <TopNavSelector
                        label="Confianza"
                        value="+ 6.5%"
                        highlight="text-emerald-500"
                        icon={<Zap className="w-3 h-3 text-emerald-500" />}
                    />
                </nav>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex items-center bg-white/5 rounded-full border border-white/5 px-4 h-10 group focus-within:border-emerald-500/30 transition-all">
                    <Search className="w-4 h-4 text-gray-500 transition-colors group-focus-within:text-emerald-500" />
                    <input
                        className="bg-transparent border-none focus:ring-0 text-xs py-2 px-3 text-white w-40 xl:w-60 placeholder:text-gray-600 font-bold uppercase tracking-wider"
                        placeholder="Buscar señales..."
                    />
                </div>

                <div className="flex items-center gap-1.5">
                    <UtilityButton icon={Search} />
                    <UtilityButton icon={Share2} />
                    <UtilityButton icon={LayoutGrid} />
                    <UtilityButton icon={Lock} />
                    <UtilityButton icon={RefreshCw} />

                    <div className="h-6 w-[1px] bg-white/10 mx-2" />

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-3 pl-2 cursor-pointer group"
                    >
                        <div className="w-10 h-10 rounded-xl border border-emerald-500/30 p-0.5 overflow-hidden group-hover:border-emerald-500 shadow-lg transition-all">
                            <div className="w-full h-full bg-emerald-500/10 flex items-center justify-center rounded-lg">
                                <User className="w-6 h-6 text-emerald-500" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </header>
    )
}

function TopNavSelector({ label, value, highlight = "text-white", icon }: { label: string, value: string, highlight?: string, icon?: any }) {
    return (
        <motion.div
            whileHover={{ y: -1 }}
            className="flex items-center gap-2 cursor-pointer group"
        >
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest group-hover:text-gray-400 transition-colors">{label}</span>
            <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 group-hover:border-white/10 transition-all">
                {icon && icon}
                <span className={cn("text-xs font-black uppercase tracking-tight", highlight)}>{value}</span>
                <ChevronDown className="w-3 h-3 text-gray-600 group-hover:text-gray-400" />
            </div>
        </motion.div>
    )
}

function UtilityButton({ icon: Icon }: { icon: any }) {
    return (
        <Button variant="ghost" size="icon" className="w-10 h-10 text-gray-500 hover:text-white hover:bg-white/5 rounded-xl border border-transparent hover:border-white/5 transition-all">
            <Icon className="w-4.5 h-4.5" />
        </Button>
    )
}
