"use client"

import { cn } from "@/lib/utils"
import {
    BarChart2,
    Dribbble,
    Gamepad2,
    Home,
    Trophy,
    User,
    BarChart,
    ChevronRight
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const sidebarLinks = [
    { icon: Home, label: "Dashboard", href: "/" },
    { icon: Trophy, label: "Tennis", href: "/tennis", active: true },
    { icon: Dribbble, label: "Basketball", href: "/basketball" },
    { icon: Gamepad2, label: "Football", href: "/football" },
    { icon: BarChart2, label: "Stats", href: "/stats" },
    { icon: User, label: "Profil", href: "/profil" },
]

export function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className="w-60 h-screen bg-[#050505] border-r border-white/5 flex flex-col fixed left-0 top-0 z-50 py-8">
            <div className="px-8 mb-12 flex items-center gap-3">
                <div className="w-8 h-8 emerald-gradient rounded-lg flex items-center justify-center neon-glow-emerald">
                    <Trophy className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-bold tracking-tight text-white uppercase">Podio <span className="text-emerald-500">360</span></span>
            </div>

            <nav className="flex-1 px-4 space-y-2">
                {sidebarLinks.map((link) => {
                    const isActive = link.label === "Tennis" // Mocking activity for visual match
                    return (
                        <Link key={link.label} href={link.href}>
                            <div className={cn(
                                "group flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 relative",
                                isActive ? "bg-emerald-500/5 text-white" : "text-gray-500 hover:text-white"
                            )}>
                                <div className="flex items-center gap-4">
                                    <link.icon className={cn("w-5 h-5 transition-colors", isActive ? "text-emerald-500" : "group-hover:text-emerald-400")} />
                                    <span className="text-sm font-medium tracking-wide">{link.label}</span>
                                </div>
                                {isActive && (
                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
                                )}
                                {isActive && (
                                    <div className="absolute left-0 w-0.5 h-6 bg-emerald-500 rounded-full" />
                                )}
                            </div>
                        </Link>
                    )
                })}
            </nav>

            <div className="px-6 mt-auto">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2">Desarrollar al mercado</p>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span className="text-xs font-semibold text-gray-300">Live Signals</span>
                    </div>
                </div>
            </div>
        </aside>
    )
}
