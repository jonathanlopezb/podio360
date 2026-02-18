"use client"

import { cn } from "@/lib/utils"
import {
    LayoutDashboard,
    Trophy,
    Dribbble,
    Gamepad2,
    BarChart3,
    User,
    Settings,
    ShieldCheck,
    Zap,
    ChevronRight,
    Monitor
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

const sidebarLinks = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/" },
    { icon: Trophy, label: "Tenis", href: "/tenis", active: true },
    { icon: Dribbble, label: "Baloncesto", href: "/baloncesto" },
    { icon: Gamepad2, label: "Fútbol", href: "/futbol" },
    { icon: BarChart3, label: "Estadísticas", href: "/stats" },
    { icon: User, label: "Perfil", href: "/profil" },
]

export function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className="w-64 h-screen bg-[#050505] border-r border-white/5 flex flex-col fixed left-0 top-0 z-50 py-8">
            {/* Logo Area */}
            <div className="px-8 mb-12 flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/20 neon-glow-emerald">
                    <Trophy className="text-emerald-500 w-6 h-6" />
                </div>
                <div className="flex flex-col">
                    <span className="text-xl font-black tracking-tighter text-white uppercase leading-none">
                        Podio <span className="text-emerald-500">360</span>
                    </span>
                    <span className="text-[8px] font-bold text-gray-500 uppercase tracking-[0.2em]">SaaS Premium</span>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 space-y-2">
                {sidebarLinks.map((link) => {
                    const isActive = link.label === "Tenis"
                    return (
                        <Link key={link.label} href={link.href}>
                            <motion.div
                                whileHover={{ x: 4 }}
                                className={cn(
                                    "group flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 relative",
                                    isActive ? "bg-emerald-500/10 text-white" : "text-gray-500 hover:text-white"
                                )}
                            >
                                <div className="flex items-center gap-4">
                                    <link.icon className={cn("w-5 h-5 transition-colors", isActive ? "text-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" : "group-hover:text-emerald-400")} />
                                    <span className="text-sm font-bold tracking-tight">{link.label}</span>
                                </div>
                                {isActive && (
                                    <motion.div
                                        layoutId="activeIndicator"
                                        className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.8)]"
                                    />
                                )}
                                {isActive && (
                                    <div className="absolute left-0 w-0.5 h-6 bg-emerald-500 rounded-full" />
                                )}
                            </motion.div>
                        </Link>
                    )
                })}
            </nav>

            {/* Control Panel Footer */}
            <div className="px-6 space-y-4 pt-8 border-t border-white/5">
                <div className="space-y-3">
                    <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-gray-500">
                        <span>Configuración UI</span>
                        <Settings className="w-3 h-3" />
                    </div>

                    <ControlToggle label="Descender al aspecto" icon={Monitor} defaultChecked />
                    <ControlToggle label="LED Soporte" icon={ShieldCheck} />
                    <ControlToggle label="LED Signos" icon={Zap} defaultChecked />
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/5 mt-4 group hover:bg-white/[0.08] transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,1)]" />
                        <span className="text-[10px] font-black text-white uppercase tracking-tighter">Señales en Vivo</span>
                        <ChevronRight className="w-3 h-3 ml-auto text-gray-600 group-hover:text-emerald-500 transition-colors" />
                    </div>
                </div>
            </div>
        </aside>
    )
}

function ControlToggle({ label, icon: Icon, defaultChecked = false }: { label: string, icon: any, defaultChecked?: boolean }) {
    return (
        <div className="flex items-center justify-between group cursor-pointer">
            <div className="flex items-center gap-2">
                <Icon className="w-3.5 h-3.5 text-gray-500 group-hover:text-gray-300" />
                <span className="text-[10px] font-semibold text-gray-500 group-hover:text-gray-300">{label}</span>
            </div>
            <div className={cn(
                "w-6 h-3 rounded-full relative transition-colors border",
                defaultChecked ? "bg-emerald-500/20 border-emerald-500/50" : "bg-white/5 border-white/10"
            )}>
                <div className={cn(
                    "absolute top-0.5 w-1.5 h-1.5 rounded-full transition-all",
                    defaultChecked ? "right-0.5 bg-emerald-500" : "left-0.5 bg-gray-600"
                )} />
            </div>
        </div>
    )
}
