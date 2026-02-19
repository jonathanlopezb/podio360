"use client"

import { Bell, Settings, ChevronDown, Share2, LayoutGrid, Lock, RefreshCw, Zap, Trophy, User, Circle, LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function Topbar() {
    return (
        <header className="h-20 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-40 bg-[#050505]/60 backdrop-blur-xl border-b border-white/5 w-full">
            <div className="flex items-center gap-4 lg:gap-10">
                <div className="flex items-center gap-3 group cursor-pointer">
                    <div className="w-5 h-5 rounded bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:border-emerald-500/40 transition-colors">
                        <Trophy className="w-3 h-3 text-emerald-500" />
                    </div>
                    <span className="text-[9px] lg:text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] hidden sm:block">Dashboard AI de Deportes</span>
                </div>

                <nav className="hidden xl:flex items-center gap-8">
                    <TopNavSelector label="Deporte" value="Tenis" />
                    <TopNavSelector label="Precision" value="Ultra" highlight="text-emerald-500" />
                    <TopNavSelector
                        label="Confianza"
                        value="+ 6.5s"
                        highlight="text-white"
                        icon={<Zap className="w-3 h-3 text-amber-500" />}
                    />
                </nav>
            </div>

            <div className="flex items-center gap-3 lg:gap-6">
                {/* Utility Icons */}
                <div className="flex items-center gap-1.5 lg:gap-3">
                    <div className="hidden lg:flex items-center gap-1.5">
                        <UtilityButton icon={Share2} />
                        <UtilityButton icon={LayoutGrid} />
                        <UtilityButton icon={Lock} />
                        <UtilityButton icon={RefreshCw} />
                    </div>

                    <div className="h-6 w-[1px] bg-white/10 mx-1 lg:mx-2" />

                    {/* Premium Profile Section - login visible */}
                    <div className="flex items-center gap-4 pl-2 cursor-pointer group">
                        <div className="flex flex-col text-right hidden sm:flex">
                            <span className="text-[10px] font-black text-white uppercase tracking-tighter leading-none group-hover:text-emerald-400 transition-colors">
                                Jonathan Lopez
                            </span>
                            <span className="text-[8px] font-bold text-emerald-500 uppercase tracking-[0.15em] mt-1 flex items-center justify-end gap-1.5">
                                <Circle className="w-1.5 h-1.5 fill-emerald-500 animate-pulse" />
                                Pro Alpha
                            </span>
                        </div>

                        <div className="relative">
                            <div className="w-11 h-11 rounded-2xl border-2 border-emerald-500/20 p-0.5 group-hover:border-emerald-500/60 transition-all shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                                <div className="w-full h-full bg-emerald-500/10 border border-emerald-500/20 rounded-[10px] flex items-center justify-center overflow-hidden">
                                    <User className="w-7 h-7 text-emerald-500 group-hover:scale-110 transition-transform" />
                                </div>
                            </div>
                            {/* Online Badge */}
                            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#050505] rounded-full flex items-center justify-center border-2 border-[#050505]">
                                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_5px_rgba(16,185,129,1)]" />
                            </div>
                        </div>

                        {/* Persistent Login Indicator Button */}
                        <div className="hidden md:flex items-center gap-2 bg-emerald-500 px-4 py-2 rounded-xl text-black font-black uppercase text-[9px] tracking-widest hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20">
                            <LogIn className="w-3.5 h-3.5" />
                            <span>Acceso</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

function TopNavSelector({ label, value, highlight = "text-white", icon }: { label: string, value: string, highlight?: string, icon?: any }) {
    return (
        <div className="flex items-center gap-2.5 cursor-pointer group">
            <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest group-hover:text-gray-400 transition-colors">{label}</span>
            <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-xl border border-white/5 group-hover:border-white/10 transition-all">
                {icon && icon}
                <span className={cn("text-[11px] font-black uppercase tracking-tight", highlight)}>{value}</span>
                <ChevronDown className="w-3 h-3 text-gray-700 group-hover:text-gray-400" />
            </div>
        </div>
    )
}

function UtilityButton({ icon: Icon }: { icon: any }) {
    return (
        <Button variant="ghost" size="icon" className="w-9 h-9 text-gray-600 hover:text-white hover:bg-white/5 rounded-xl border border-transparent hover:border-white/5 transition-all">
            <Icon className="w-4 h-4" />
        </Button>
    )
}
