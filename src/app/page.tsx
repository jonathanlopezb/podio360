"use client"

import { Sidebar } from "@/components/sidebar"
import { Topbar } from "@/components/topbar"
import { KPICards } from "@/components/kpi-cards"
import { SignalsTable } from "@/components/signals-table"
import { AnalysisPanel } from "@/components/analysis-panel"
import { motion, AnimatePresence } from "framer-motion"
import { Megaphone, Map as MapIcon, ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] flex selection:bg-emerald-500/30">
      {/* Barra Lateral Izquierda */}
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Barra Superior */}
        <Topbar />

        {/* Área de Contenido Principal */}
        <div className="ml-64 p-8 flex gap-8 h-[calc(100vh-5rem)] overflow-hidden">

          {/* Dashboard Central (Scrollable) */}
          <div className="flex-1 overflow-y-auto no-scrollbar space-y-8 pr-4">
            <header className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-6 bg-emerald-500 rounded-full" />
                <h1 className="text-3xl font-black text-white uppercase tracking-tighter italic">Análisis de Tenis</h1>
              </div>
              <div className="flex items-center gap-2">
                <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black text-emerald-500 uppercase tracking-widest shadow-lg shadow-emerald-500/5">ATP Masters</div>
                <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black text-gray-500 uppercase tracking-widest">Circuito Challenger</div>
              </div>
            </header>

            {/* Tarjetas de Métricas - Entrada animada */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <KPICards />
            </motion.div>

            {/* Tabla de Señales - Entrada animada */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <SignalsTable />
            </motion.div>

            {/* Live Feed & News - Refinado según mockup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="podio-card group"
            >
              <div className="p-6 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                    <Megaphone className="w-4 h-4 text-gray-500 group-hover:text-emerald-500 transition-colors" />
                  </div>
                  <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 italic">Noticias en Vivo y Feed de Lesiones</h2>
                </div>
                <div className="flex gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,1)]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                </div>
              </div>

              <div className="flex p-6 gap-8">
                <div className="flex-1 space-y-6">
                  <NewsItem
                    status="warning"
                    text="Musetti habría sufrido una lesión menor en la muñeca; llegando a Roma tras un vuelo largo."
                    time="22 mins atrás"
                  />
                  <NewsItem
                    status="active"
                    text="Alcaraz confirma participación en Madrid; el modelo AI aumenta su edge en un +2.4%."
                    time="1 hora atrás"
                  />
                  <NewsItem
                    status="update"
                    text="Nuevos datos climáticos descargados para la jornada de tarde; humedad +15%."
                    time="3 horas atrás"
                  />
                </div>

                {/* Mini Mapa / Visualización lateral mockup */}
                <div className="w-64 h-full bg-black/40 rounded-2xl border border-white/5 p-4 flex flex-col items-center justify-center text-center relative overflow-hidden group/map">
                  <div className="absolute inset-0 bg-emerald-500/[0.02] mix-blend-overlay" />
                  <MapIcon className="w-12 h-12 text-gray-800 mb-2 group-hover/map:text-emerald-900 transition-colors" />
                  <p className="text-[9px] font-black text-gray-700 uppercase tracking-widest">Visualización Geográfica de Datos</p>
                  <div className="mt-4 flex flex-col items-center">
                    <div className="text-[10px] font-black text-gray-500 uppercase tracking-tighter">Roma, IT</div>
                    <div className="w-1 h-8 bg-gradient-to-t from-emerald-500 via-emerald-500/20 to-transparent mt-2 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white/[0.01] border-t border-white/5 flex justify-center">
                <button className="text-[9px] font-black uppercase text-gray-600 hover:text-white transition-colors tracking-widest flex items-center gap-2">
                  Ver Registro Completo <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Panel de Análisis Lateral (Fijo con entrada lateral) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <AnalysisPanel />
          </motion.div>

        </div>
      </div>

      {/* Background Micro-animations */}
      <div className="fixed inset-0 pointer-events-none opacity-20 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-emerald-500/10 blur-[150px] rounded-full"
        />
      </div>
    </main>
  )
}

function NewsItem({ status, text, time }: { status: "warning" | "active" | "update", text: string, time: string }) {
  const statusColors = {
    warning: "bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]",
    active: "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,1)]",
    update: "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
  }

  return (
    <div className="flex items-start gap-5 group cursor-default">
      <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 transition-transform group-hover:scale-125 ${statusColors[status]}`} />
      <div className="space-y-1">
        <p className="text-xs text-gray-400 font-bold tracking-tight leading-relaxed group-hover:text-gray-300 transition-colors uppercase">
          {text}
        </p>
        <span className="text-[9px] font-black text-gray-600 uppercase tracking-widest">{time}</span>
      </div>
    </div>
  )
}
