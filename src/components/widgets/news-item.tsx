import { cn } from "@/lib/utils"

export function NewsItem({ status, text, time }: any) {
    const statusColors = {
        warning: "bg-amber-500",
        active: "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]",
        update: "bg-blue-500"
    }
    return (
        <div className="flex items-start gap-4">
            <div className={cn("w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 transition-transform", statusColors[status as keyof typeof statusColors])} />
            <div className="space-y-0.5">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight leading-snug">{text}</p>
                <span className="text-[8px] font-black text-gray-600 uppercase tracking-widest">{time}</span>
            </div>
        </div>
    )
}
