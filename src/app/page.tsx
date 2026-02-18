import { Sidebar } from "@/components/sidebar"
import { Topbar } from "@/components/topbar"
import { KPICards } from "@/components/kpi-cards"
import { SignalsTable } from "@/components/signals-table"
import { AnalysisPanel } from "@/components/analysis-panel"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] flex">
      {/* Barra Lateral Izquierda */}
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Barra Superior */}
        <Topbar />

        {/* Área de Contenido Principal */}
        <div className="ml-60 p-8 flex gap-8 h-[calc(100vh-4rem)] overflow-hidden">

          {/* Dashboard Central (Scrollable) */}
          <div className="flex-1 overflow-y-auto no-scrollbar space-y-8 pr-2">
            <header className="space-y-1">
              <h1 className="text-2xl font-black text-white uppercase tracking-tighter">Tennis Analysis</h1>
              <div className="flex items-center gap-2">
                <div className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-500 uppercase">ATP</div>
                <div className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-bold text-gray-500 uppercase">Challenger</div>
              </div>
            </header>

            {/* Tarjetas Principales */}
            <KPICards />

            {/* Tabla de Señales */}
            <SignalsTable />

            {/* Live Feed (Mockup placeholder) */}
            <div className="podio-card p-6">
              <h2 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-4">Live News & Injury Feed</h2>
              <div className="space-y-4">
                {[1, 2].map((i) => (
                  <div key={i} className="flex items-center gap-4 py-2 border-b border-white/5 last:border-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <p className="text-xs text-gray-400 font-medium">Musetti reportedly dealing with minor wrist injury; arriving in Rome after long flight.</p>
                    <span className="ml-auto text-[10px] font-mono text-gray-600">22 mins ago</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Panel de Análisis Lateral (Fijo) */}
          <AnalysisPanel />

        </div>
      </div>
    </main>
  )
}
