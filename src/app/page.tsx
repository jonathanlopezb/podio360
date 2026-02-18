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
    <main className="min-h-screen bg-[#050505] flex selection:bg-emerald-500/30 overflow-x-hidden">
      {/* Barra Lateral Izquierda */}
      <Sidebar />

      {/* Contenedor Principal Adaptativo */}
      <div className="flex-1 flex flex-col min-w-0 transition-all duration-300 xl:ml-[var(--sidebar-width)]">
        {/* Barra Superior */}
        <Topbar />

        {/* Área de Contenido Principal - Layout Responsivo de 3 a 1 columna */}
        <div className="p-4 lg:p-8 flex flex-col xl:flex-row gap-8 min-h-[calc(100vh-5rem)]">

          {/* Dashboard Central */}
          <div className="flex-1 min-w-0 space-y-8">
            <header className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-6 lg:h-8 bg-emerald-500 rounded-full" />
                  <h1 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tighter italic">Análisis de Tenis</h1>
                </div>
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black text-emerald-500 uppercase tracking-widest shadow-lg shadow-emerald-500/5">ATP Masters</div>
                  <div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-black text-gray-500 uppercase tracking-widest">Circuito Challenger</div>
                </div>
              </div>
            </header>

            {/* Tarjetas de Métricas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <KPICards />
            </motion.div>

            {/* Tabla de Señales - Responsiva con Scroll Horizontal Controlado */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="min-w-0"
            >
              <SignalsTable />
            </motion.div>

            {/* Live Feed & News - Adaptativo */}
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
              </div>

              <div className="flex flex-col lg:flex-row p-6 gap-8">
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

                {/* Mini Mapa / Visualización lateral (Hidden on small mobile) */}
                <div className="hidden sm:flex w-full lg:w-72 h-48 bg-black/40 rounded-2xl border border-white/5 p-4 flex-col items-center justify-center text-center relative overflow-hidden group/map">
                  <div className="absolute inset-0 bg-emerald-500/[0.05] mix-blend-overlay" />
                  <MapIcon className="w-12 h-12 text-gray-800 mb-2 group-hover/map:text-emerald-900 transition-colors" />
                  <p className="text-[9px] font-black text-gray-700 uppercase tracking-widest">Visualización Geográfica de Datos</p>
                  <div className="mt-4 flex flex-col items-center">
                    <div className="text-[10px] font-black text-gray-500 uppercase tracking-tighter">Roma, IT</div>
                    <div className="w-1 h-8 bg-gradient-to-t from-emerald-500 via-emerald-500/20 to-transparent mt-2 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                  </div>
                  {/* Dotted lines over map */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{ backgroundImage: "radial-gradient(circle, #10b981 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                </div>
              </div>

              <div className="p-4 bg-white/[0.01] border-t border-white/5 flex justify-center">
                <button className="text-[9px] font-black uppercase text-gray-600 hover:text-white transition-colors tracking-widest flex items-center gap-2">
                  Ver Registro Completo <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Panel de Análisis Lateral - Stack on Mobile, Aside on Desktop */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full xl:w-[400px] shrink-0"
          >
            <AnalysisPanel />
          </motion.div>

        </div>
      </div>

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-[#050505]" />
      <div className="fixed inset-0 pointer-events-none opacity-20 overflow-hidden -z-10">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-emerald-500/20 blur-[180px] rounded-full"
        />
      </div>

      <style jsx global>{`
        :root {
          --sidebar-width: 256px;
        }
        @media (max-width: 1280px) {
          :root { --sidebar-width: 80px; }
        }
        @media (max-width: 1279px) {
          :root { --sidebar-width: 0px; }
          .xl\:ml-\[var\(--sidebar-width\)\] { margin-left: 0; }
        }
      `}</style>
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
      <div className={`w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 transition-transform group-hover:scale-125 ${statusColors[status]}`} />
      <div className="space-y-1">
        <p className="text-xs xl:text-sm text-gray-400 font-bold tracking-tight leading-relaxed group-hover:text-gray-300 transition-colors uppercase">
          {text}
        </p>
        <div className="flex items-center gap-2">
          <span className="text-[9px] font-black text-gray-600 uppercase tracking-widest">{time}</span>
          <div className="w-1 h-1 rounded-full bg-white/5" />
          <span className="text-[9px] font-black text-emerald-500/50 uppercase tracking-widest italic">Verificado AI</span>
        </div>
      </div>
    </div>
  )
}
