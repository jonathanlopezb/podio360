"use client"

import { Search, Bell, Settings, ChevronDown, Share2, Wallet, ExternalLink, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Topbar() {
    return (
        <header className="h-16 flex items-center justify-between px-8 sticky top-0 z-40 ml-60 w-[calc(100%-15rem)] bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
            <div className="flex items-center gap-8">
                <div className="flex items-center gap-2 text-xs font-medium text-gray-400 uppercase tracking-widest">
                    <div className="w-4 h-4 rounded bg-emerald-500/10 flex items-center justify-center">
                        <Trophy className="w-3 h-3 text-emerald-500" />
                    </div>
                    AI Sports Dashboard
                </div>

                <nav className="hidden lg:flex items-center gap-6">
                    <div className="flex items-center gap-1.5 cursor-pointer hover:text-white transition-colors">
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-tighter">Sport</span>
                        <span className="text-xs font-bold text-white uppercase px-2 py-0.5 bg-white/5 rounded">Tennis</span>
                        <ChevronDown className="w-3 h-3 text-gray-500" />
                    </div>
                    <div className="flex items-center gap-1.5 cursor-pointer hover:text-white transition-colors">
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-tighter">Risk:</span>
                        <span className="text-xs font-bold text-emerald-500 uppercase">High</span>
                    </div>
                    <div className="flex items-center gap-1.5 cursor-pointer hover:text-white transition-colors">
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-tighter">Confidence</span>
                        <span className="text-xs font-bold text-emerald-400">+ 6.5%</span>
                    </div>
                </nav>
            </div>

            <div className="flex items-center gap-3">
                <div className="flex items-center bg-white/5 rounded-lg border border-white/5 px-2 mr-4">
                    <Search className="w-4 h-4 text-gray-500 ml-1" />
                    <input
                        className="bg-transparent border-none focus:ring-0 text-xs py-2 px-3 text-white w-48 placeholder:text-gray-600 font-medium"
                        placeholder="Search signals..."
                    />
                </div>

                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="w-9 h-9 text-gray-400 hover:bg-white/5 rounded-lg border border-white/5 transition-all">
                        <Share2 className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="w-9 h-9 text-gray-400 hover:bg-white/5 rounded-lg border border-white/5 transition-all">
                        <Wallet className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="w-9 h-9 text-gray-400 hover:bg-white/5 rounded-lg border border-white/5 transition-all">
                        <Settings className="w-4 h-4" />
                    </Button>
                    <div className="h-4 w-[1px] bg-white/10 mx-1" />
                    <div className="flex items-center gap-3 pl-2">
                        <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center cursor-pointer hover:border-emerald-500/50 transition-colors">
                            <User className="w-4 h-4 text-gray-400" />
                        </div>
                        <User className="w-8 h-8 rounded-full border border-emerald-500/50 p-0.5" />
                    </div>
                </div>
            </div>
        </header>
    )
}

// Fixed import for Trophy in Topbar
import { Trophy as TrophyIcon } from "lucide-react"
const Trophy = TrophyIcon
