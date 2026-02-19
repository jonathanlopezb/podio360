import { ChevronRight } from "lucide-react"

export function TravelItem({ player, route, time, fatigue }: any) {
    return (
        <div className="flex items-center justify-between group/item">
            <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/40" />
                <div className="flex flex-col">
                    <span className="text-[10px] font-black text-white uppercase tracking-tight">{player}</span>
                    <span className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">{route}</span>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="text-right">
                    <p className="text-[9px] font-black text-gray-400 group-hover/item:text-white transition-colors uppercase">{time}</p>
                    <p className="text-[8px] font-bold text-emerald-500/60 uppercase">Fatiga: {fatigue}</p>
                </div>
                <div className="w-5 h-5 rounded-lg border border-white/5 flex items-center justify-center bg-white/[0.02]">
                    <ChevronRight size={10} className="text-gray-700" />
                </div>
            </div>
        </div>
    )
}
