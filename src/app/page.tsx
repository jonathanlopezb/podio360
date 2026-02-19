"use client"

import { Sidebar } from "@/components/sidebar"
import { Topbar } from "@/components/topbar"
import { KPICards } from "@/components/kpi-cards"
import { SignalsTable } from "@/components/signals-table"
import { AnalysisPanel } from "@/components/analysis-panel"
import { Footer } from "@/components/footer"
import { TravelItem } from "@/components/widgets/travel-item"
import { NewsItem } from "@/components/widgets/news-item"
import { Megaphone, ChevronRight, Truck, PlaneTakeoff, Clock } from "lucide-react"

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
                  <h1 className="text-xl lg:text-2xl font-black text-white uppercase tracking-tighter italic">Quantum Analysis Node</h1>
                </div>
                <div className="flex items-center gap-2">
                  <div className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-black text-emerald-500 uppercase tracking-widest shadow-lg shadow-emerald-500/5">ATP Masters</div>
                  <div className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-black text-gray-500 uppercase tracking-widest">Circuito Challenger</div>
                </div>
              </div>
            </header>

            {/* Tarjetas de Métricas */}
            <KPICards />

            {/* Fila de Widgets Secundarios */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Widget: Viajes y Logística */}
              <DashboardWidget icon={Truck} title="Itinerario y Fatiga de Viaje" extraIcon={PlaneTakeoff}>
                <div className="space-y-4">
                  <TravelItem player="L. Musetti" route="Cagliari → Roma" time="4h Vuelo" fatigue="Baja" />
                  <TravelItem player="N. Djokovic" route="Belgrado → Roma" time="2h Vuelo" fatigue="Mínima" />
                  <TravelItem player="C. Alcaraz" route="Madrid → Roma" time="2.5h Vuelo" fatigue="Mínima" />
                </div>
                <div className="mt-5 p-3 rounded-xl bg-orange-500/5 border border-orange-500/10 flex items-center gap-3">
                  <Clock className="w-4 h-4 text-orange-500 shrink-0" />
                  <p className="text-[10px] text-orange-200/60 font-medium leading-tight">
                    Alerta de Jet Lag: Musetti llegó hace menos de 12h. Posible impacto en primer set.
                  </p>
                </div>
              </DashboardWidget>

              {/* Widget: Live Feed & News */}
              <DashboardWidget icon={Megaphone} title="Feed de Noticias AI" isItalic>
                <div className="space-y-4 flex-1">
                  <NewsItem status="warning" text="Musetti: Molestia leve en muñeca reportada." time="22m" />
                  <NewsItem status="active" text="Alcaraz confirma participación en Madrid." time="1h" />
                  <NewsItem status="update" text="Datos climáticos actualizados para Roma." time="3h" />
                </div>
                <button className="mt-4 text-[8px] font-black uppercase text-gray-600 hover:text-white transition-colors tracking-widest flex items-center gap-2 mx-auto">
                  Ver más <ChevronRight className="w-3 h-3" />
                </button>
              </DashboardWidget>
            </div>

            {/* Tabla de Señales */}
            <div className="min-w-0">
              <SignalsTable />
            </div>
          </div>

          {/* Panel de Análisis Lateral */}
          <div className="w-full xl:w-[380px] shrink-0">
            <AnalysisPanel />
          </div>

        </div>

        {/* Pie de Página */}
        <Footer />
      </div>

      {/* Ambiance Effects */}
      <BackgroundEffects />

      <style jsx global>{`
        :root { --sidebar-width: 240px; }
        @media (max-width: 1280px) { :root { --sidebar-width: 70px; } }
        @media (max-width: 1279px) { 
          :root { --sidebar-width: 0px; }
          .xl\:ml-\[var\(--sidebar-width\)\] { margin-left: 0; }
        }
        body { font-size: 13px; }
      `}</style>
    </main>
  )
}

function DashboardWidget({ children, icon: Icon, title, extraIcon: ExtraIcon, isItalic }: any) {
  return (
    <div className="podio-card group p-5 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
            <Icon className="w-4 h-4 text-emerald-500" />
          </div>
          <h2 className={`text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ${isItalic ? 'italic' : ''}`}>{title}</h2>
        </div>
        {ExtraIcon && <ExtraIcon className="w-3.5 h-3.5 text-gray-600" />}
      </div>
      {children}
    </div>
  )
}

function BackgroundEffects() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none -z-10 bg-[#050505]" />
      <div className="fixed inset-0 pointer-events-none opacity-10 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-[50%] h-[50%] bg-emerald-500/10 blur-[150px] rounded-full" />
      </div>
    </>
  )
}
