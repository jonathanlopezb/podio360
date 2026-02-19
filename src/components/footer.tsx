import { ExternalLink } from "lucide-react"

export function Footer() {
    return (
        <footer className="mt-auto px-6 py-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 bg-white/[0.01]">
            <div className="flex items-center gap-6">
                <div className="flex flex-col">
                    <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Podio 360</span>
                    <span className="text-[8px] font-bold text-gray-600 uppercase tracking-widest mt-1">© 2026 Arquitectura de Datos Vanguardista.</span>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Desarrollado por</span>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
                    <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">JoL</span>
                    <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                </div>
            </div>
        </footer>
    )
}
