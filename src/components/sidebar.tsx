"use client"

import { useState, useEffect } from "react"
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
    ChevronLeft,
    ChevronRight,
    Monitor,
    Menu,
    X
} from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

const sidebarLinks = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/" },
    { icon: Trophy, label: "Tenis", href: "/tenis", active: true },
    { icon: Dribbble, label: "Baloncesto", href: "/baloncesto" },
    { icon: Gamepad2, label: "Fútbol", href: "/futbol" },
    { icon: BarChart3, label: "Estadísticas", href: "/stats" },
    { icon: User, label: "Perfil", href: "/profil" },
]

export function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    // Auto-collapse on smaller screens
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1280) setIsCollapsed(true)
            else setIsCollapsed(false)
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <>
            {/* Mobile Toggle */}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="fixed top-5 left-5 z-[60] xl:hidden p-2 rounded-lg bg-emerald-500 text-black shadow-lg shadow-emerald-500/20"
            >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Sidebar Container */}
            <motion.aside
                initial={false}
                animate={{
                    width: isCollapsed ? 80 : 256,
                    x: isMobileMenuOpen ? 0 : (typeof window !== 'undefined' && window.innerWidth < 1280 ? -256 : 0)
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={cn(
                    "h-screen bg-[#050505] border-r border-white/5 flex flex-col fixed left-0 top-0 z-50 py-8 overflow-hidden",
                    isMobileMenuOpen && "translate-x-0 !w-64"
                )}
            >
                {/* Toggle Button (Desktop) */}
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="absolute -right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-6 h-12 bg-emerald-500 rounded-l-md flex items-center justify-center text-black z-50 xl:flex hidden hover:scale-105 transition-transform"
                >
                    {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
                </button>

                {/* Logo Area */}
                <div className={cn("px-6 mb-12 flex items-center gap-3 transition-all", isCollapsed ? "justify-center px-0" : "")}>
                    <div className="w-10 h-10 shrink-0 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/20 neon-glow-emerald">
                        <Trophy className="text-emerald-500 w-6 h-6" />
                    </div>
                    {!isCollapsed && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex flex-col"
                        >
                            <span className="text-xl font-black tracking-tighter text-white uppercase leading-none">
                                Podio <span className="text-emerald-500">360</span>
                            </span>
                            <span className="text-[8px] font-bold text-gray-500 uppercase tracking-[0.2em]">SaaS Premium</span>
                        </motion.div>
                    )}
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-3 space-y-2">
                    {sidebarLinks.map((link) => {
                        const isActive = link.label === "Tenis"
                        return (
                            <Link key={link.label} href={link.href}>
                                <motion.div
                                    whileHover={{ x: isCollapsed ? 0 : 4 }}
                                    className={cn(
                                        "group flex items-center px-4 py-3 rounded-xl transition-all duration-300 relative",
                                        isActive ? "bg-emerald-500/10 text-white" : "text-gray-500 hover:text-white",
                                        isCollapsed ? "justify-center px-2" : "justify-between"
                                    )}
                                >
                                    <div className="flex items-center gap-4">
                                        <link.icon className={cn(
                                            "w-5 h-5 transition-colors shrink-0",
                                            isActive ? "text-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" : "group-hover:text-emerald-400"
                                        )} />
                                        {!isCollapsed && (
                                            <span className="text-sm font-bold tracking-tight whitespace-nowrap">{link.label}</span>
                                        )}
                                    </div>
                                    {!isCollapsed && isActive && (
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
                <div className={cn("px-4 space-y-4 pt-8 border-t border-white/5 transition-all", isCollapsed ? "items-center" : "")}>
                    {!isCollapsed ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="space-y-3"
                        >
                            <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-gray-500 px-2">
                                <span>Configuración UI</span>
                                <Settings className="w-3 h-3" />
                            </div>

                            <ControlToggle label="Descender al aspecto" icon={Monitor} defaultChecked />
                            <ControlToggle label="LED Soporte" icon={ShieldCheck} />
                            <ControlToggle label="LED Signos" icon={Zap} defaultChecked />
                        </motion.div>
                    ) : (
                        <div className="flex flex-col items-center gap-4">
                            <Settings className="w-4 h-4 text-gray-500" />
                            <Zap className="w-4 h-4 text-emerald-500" />
                        </div>
                    )}

                    <div className={cn(
                        "p-4 rounded-xl bg-white/5 border border-white/5 mt-4 group hover:bg-white/[0.08] transition-all cursor-pointer",
                        isCollapsed ? "p-2 aspect-square flex items-center justify-center" : ""
                    )}>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,1)] shrink-0" />
                            {!isCollapsed && (
                                <>
                                    <span className="text-[10px] font-black text-white uppercase tracking-tighter">Señales en Vivo</span>
                                    <ChevronRight className="w-3 h-3 ml-auto text-gray-600 group-hover:text-emerald-500 transition-colors" />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </motion.aside>

            {/* Overlay for mobile */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 xl:hidden"
                    />
                )}
            </AnimatePresence>
        </>
    )
}

function ControlToggle({ label, icon: Icon, defaultChecked = false }: { label: string, icon: any, defaultChecked?: boolean }) {
    const [checked, setChecked] = useState(defaultChecked)
    return (
        <div
            onClick={() => setChecked(!checked)}
            className="flex items-center justify-between group cursor-pointer px-2"
        >
            <div className="flex items-center gap-2">
                <Icon className={cn("w-3.5 h-3.5 transition-colors", checked ? "text-emerald-500" : "text-gray-500 group-hover:text-gray-300")} />
                <span className="text-[10px] font-semibold text-gray-500 group-hover:text-gray-300">{label}</span>
            </div>
            <div className={cn(
                "w-6 h-3 rounded-full relative transition-colors border",
                checked ? "bg-emerald-500/20 border-emerald-500/50" : "bg-white/5 border-white/10"
            )}>
                <motion.div
                    animate={{ x: checked ? 12 : 0 }}
                    className={cn(
                        "absolute top-0.5 left-0.5 w-1.5 h-1.5 rounded-full",
                        checked ? "bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.8)]" : "bg-gray-600"
                    )}
                />
            </div>
        </div>
    )
}
