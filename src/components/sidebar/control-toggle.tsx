import { useState } from "react"
import { cn } from "@/lib/utils"

export function ControlToggle({ label, icon: Icon, defaultChecked = false }: { label: string, icon: any, defaultChecked?: boolean }) {
    const [checked, setChecked] = useState(defaultChecked)
    return (
        <div
            onClick={() => setChecked(!checked)}
            className="flex items-center justify-between group cursor-pointer px-1"
        >
            <div className="flex items-center gap-1.5">
                <Icon className={cn("w-3 h-3 transition-colors", checked ? "text-emerald-500" : "text-gray-600 group-hover:text-gray-400")} />
                <span className="font-semibold text-[9px] text-gray-600 group-hover:text-gray-400 uppercase tracking-widest">{label}</span>
            </div>
            <div className={cn(
                "w-5 h-2.5 rounded-full relative transition-colors border",
                checked ? "bg-emerald-500/20 border-emerald-500/40" : "bg-white/5 border-white/10"
            )}>
                <div className={cn(
                    "absolute top-px left-px w-1.5 h-1.5 rounded-full transition-all",
                    checked ? "translate-x-2 bg-emerald-500 shadow-[0_0_4px_rgba(16,185,129,0.8)]" : "translate-x-0 bg-gray-600"
                )} />
            </div>
        </div>
    )
}
