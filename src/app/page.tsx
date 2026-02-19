"use client"

import { Sidebar } from "@/components/sidebar"
import { Topbar } from "@/components/topbar"
import { KPICards } from "@/components/kpi-cards"
import { SignalsTable } from "@/components/signals-table"
import { AnalysisPanel } from "@/components/analysis-panel"
import { motion } from "framer-motion"
import { Megaphone, Map as MapIcon, ChevronRight, Truck, PlaneTakeoff, Clock } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] flex selection:bg-emerald-500/30 overflow-x-hidden text-[13px]">
      {/* Barra Lateral Izquierda */}
      <Sidebar />

      {/* Contenedor Principal Adaptativo */}
      <div className="flex-1 flex flex-col min-w-0 transition-all duration-300 xl:ml-[var(--sidebar-width)]">
        {/* Barra Superior */}
        <Topbar />

        {/* Área de Contenido Principal */}
        <div className="p-4 lg:p-6 flex flex-col xl:flex-row gap-6 min-h-[calc(100vh-5rem)] max-w-[1920px] mx-auto w-full">

          {/* Dashboard Central */}
          <div className="flex-1 min-w-0 space-y-6">
            <header className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-6 bg-emerald-500 rounded-full" />
                  <h1 className="text-xl lg:text-2xl font-black text-white uppercase tracking-tighter italic">Análisis Pro Tenis</h1>
                </div>
                <div className="flex items-center gap-2">
                  <div className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-black text-emerald-500 uppercase tracking-widest shadow-lg shadow-emerald-500/5">ATP Masters</div>
                  <div className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-black text-gray-500 uppercase tracking-widest">Circuito Challenger</div>
                </div>
              </div>
            </header>

            {/* Tarjetas de Métricas */}
            <KPICards />

            {/* Fila de Widgets Secundarios: Viajes y Noticias */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Carta de Viajes y Logística (NUEVA) */}
              <div className="podio-card group p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                      <Truck className="w-4 h-4 text-emerald-500" />
                    </div>
                    <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Itinerario y Fatiga de Viaje</h2>
                  </div>
                  <PlaneTakeoff className="w-3.5 h-3.5 text-gray-600" />
                </div>

                <div className="space-y-4">
                  <TravelItem player="L. Musetti" route="Cagliari → Roma" time="4h Vuelo" fatigue="Baja" status="checked" />
                  <TravelItem player="N. Djokovic" route="Belgrado → Roma" time="2h Vuelo" fatigue="Mínima" status="checked" />
                  <TravelItem player="C. Alcaraz" route="Madrid → Roma" time="2.5h Vuelo" fatigue="Mínima" status="checked" />
                </div>

                <div className="mt-5 p-3 rounded-xl bg-orange-500/5 border border-orange-500/10 flex items-center gap-3">
                  <Clock className="w-4 h-4 text-orange-500 shrink-0" />
                  <p className="text-[10px] text-orange-200/60 font-medium leading-tight">
                    Alerta de Jet Lag: Musetti llegó hace menos de 12h. Posible impacto en primer set.
                  </p>
                </div>
              </div>

              {/* Live Feed & News (Optimizada) */}
              <div className="podio-card group p-5 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center">
                    <Megaphone className="w-4 h-4 text-gray-400 group-hover:text-emerald-500" />
                  </div>
                  <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 italic">Feed de Noticias AI</h2>
                </div>

                <div className="space-y-4 flex-1">
                  <NewsItem status="warning" text="Musetti: Molestia leve en muñeca reportada." time="22m" />
                  <NewsItem status="active" text="Alcaraz confirma participación en Madrid." time="1h" />
                  <NewsItem status="update" text="Datos climáticos actualizados para Roma." time="3h" />
                </div>

                <button className="mt-4 text-[8px] font-black uppercase text-gray-600 hover:text-white transition-colors tracking-widest flex items-center gap-2 mx-auto">
                  Ver más <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Tabla de Señales */}
            <div className="min-w-0">
              <SignalsTable />
            </div>
          </div>

          {/* Panel de Análisis Lateral */}
          <div className="w-full xl:w-[360px] shrink-0">
            <AnalysisPanel />
          </div>

        </div>
      </div>

      {/* Background Ambience (Simplificado) */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-[#050505]" />
      <div className="fixed inset-0 pointer-events-none opacity-10 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-[50%] h-[50%] bg-emerald-500/10 blur-[150px] rounded-full" />
      </div>

      <style jsx global>{`
        :root {
          --sidebar-width: 240px;
        }
        @media (max-width: 1280px) {
          :root { --sidebar-width: 70px; }
        }
        @media (max-width: 1279px) {
          :root { --sidebar-width: 0px; }
          .xl\:ml-\[var\(--sidebar-width\)\] { margin-left: 0; }
        }
        body {
          font-size: 13px;
        }
      `}</style>
    </main>
  )
}

function TravelItem({ player, route, time, fatigue, status }: any) {
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

function NewsItem({ status, text, time }: any) {
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
