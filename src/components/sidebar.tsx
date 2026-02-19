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
    X,
    Circle,
    Truck
} from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ControlToggle } from "./sidebar/control-toggle"

const sidebarLinks = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/" },
    { icon: Trophy, label: "Tenis", href: "/tenis", active: true },
    { icon: Dribbble, label: "Baloncesto", href: "/baloncesto" },
    { icon: Gamepad2, label: "Fútbol", href: "/futbol" },
    { icon: BarChart3, label: "Estadísticas", href: "/stats" },
    { icon: Truck, label: "Viajes/Logística", href: "/viajes" },
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
                    width: isCollapsed ? 70 : 240,
                    x: isMobileMenuOpen ? 0 : (typeof window !== 'undefined' && window.innerWidth < 1280 ? -240 : 0)
                }}
                transition={{ type: "tween", duration: 0.3 }}
                className={cn(
                    "h-screen bg-[#050505] border-r border-white/5 flex flex-col fixed left-0 top-0 z-50 py-6 overflow-hidden",
                    isMobileMenuOpen && "translate-x-0 !w-60"
                )}
            >
                {/* Improved Toggle Button */}
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="absolute -right-3 top-20 w-6 h-6 bg-[#111] border border-white/10 rounded-full flex items-center justify-center text-emerald-500 z-50 xl:flex hidden hover:bg-emerald-500 hover:text-black transition-all shadow-xl"
                >
                    {isCollapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
                </button>

                {/* Logo Area */}
                <div className={cn("px-5 mb-10 flex items-center gap-2.5 transition-all text-xs", isCollapsed ? "justify-center px-0" : "")}>
                    <div className="w-9 h-9 shrink-0 bg-emerald-500 rounded-full flex items-center justify-center border border-white/10 relative shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                        <Trophy className="text-black w-5 h-5" />
                    </div>
                    {!isCollapsed && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex flex-col"
                        >
                            <span className="text-lg font-black tracking-tighter text-white uppercase leading-none">
                                Podio <span className="text-emerald-500">360</span>
                            </span>
                            <span className="text-[7px] font-bold text-gray-500 uppercase tracking-[0.2em]">SaaS Premium</span>
                        </motion.div>
                    )}
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-2.5 space-y-1.5">
                    {sidebarLinks.map((link) => {
                        const isActive = link.label === "Tenis"
                        return (
                            <Link key={link.label} href={link.href}>
                                <motion.div
                                    className={cn(
                                        "group flex items-center px-3 py-2.5 rounded-xl transition-all duration-200 relative",
                                        isActive ? "bg-emerald-500/10 text-white" : "text-gray-500 hover:text-white",
                                        isCollapsed ? "justify-center px-2" : "justify-between"
                                    )}
                                >
                                    <div className="flex items-center gap-3">
                                        <link.icon className={cn(
                                            "w-4.5 h-4.5 transition-colors shrink-0",
                                            isActive ? "text-emerald-500" : "group-hover:text-emerald-400"
                                        )} />
                                        {!isCollapsed && (
                                            <span className="text-xs font-bold tracking-tight whitespace-nowrap">{link.label}</span>
                                        )}
                                    </div>
                                    {!isCollapsed && isActive && (
                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
                                    )}
                                    {isActive && (
                                        <div className="absolute left-0 w-0.5 h-5 bg-emerald-500 rounded-full" />
                                    )}
                                </motion.div>
                            </Link>
                        )
                    })}
                </nav>

                {/* Control Panel Footer */}
                <div className={cn("px-3 space-y-3 pt-6 border-t border-white/5 transition-all text-[9px]", isCollapsed ? "items-center" : "")}>
                    {!isCollapsed ? (
                        <div className="space-y-2.5">
                            <div className="flex items-center justify-between font-bold uppercase tracking-widest text-gray-600 px-1">
                                <span>UI Config</span>
                                <Settings className="w-2.5 h-2.5" />
                            </div>

                            <ControlToggle label="Aspecto" icon={Monitor} defaultChecked />
                            <ControlToggle label="LED Signos" icon={Zap} defaultChecked />
                        </div>
                    ) : (
                        <div className="flex flex-col items-center gap-3 text-gray-600">
                            <Settings className="w-3.5 h-3.5 hover:text-white transition-colors cursor-pointer" />
                            <Zap className="w-3.5 h-3.5 text-emerald-500 cursor-pointer" />
                        </div>
                    )}

                    <div className={cn(
                        "p-3 rounded-xl bg-white/5 border border-white/5 mt-3 group hover:bg-white/[0.08] transition-all cursor-pointer",
                        isCollapsed ? "p-2 aspect-square flex items-center justify-center" : ""
                    )}>
                        <div className="flex items-center gap-2.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,1)] shrink-0" />
                            {!isCollapsed && (
                                <span className="text-[9px] font-black text-white uppercase tracking-tighter">Live Feed</span>
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
