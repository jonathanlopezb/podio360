# Documentación Técnica - PODIO 360

## 🎯 Visión General
PODIO 360 es un Dashboard SaaS de señales deportivas de alta fidelidad, diseñado para ofrecer una experiencia visual "trading-view type" con un enfoque en la precisión de IA y el rendimiento en tiempo real.

## 🏗️ Arquitectura de Software
El proyecto utiliza una arquitectura de componentes atómica basada en **Next.js 14** (App Router).

### Stack Tecnológico
- **Frontend**: Next.js 14, TypeScript.
- **Estilos**: Tailwind CSS 4.0, Radix UI.
- **Componentes**: shadcn/ui.
- **Animaciones**: Framer Motion.
- **Gestión de Estado**: Zustand.
- **Data Fetching**: TanStack Query (React Query).
- **Tablas**: TanStack Table.
- **Gráficas**: Recharts.

## 🎨 Identidad Visual
- **Fondo**: `#050505` (Negro Profundo).
- **Acento**: `#10b981` (Verde Esmeralda Neón).
- **Tipografía**: `Inter` (Sans-serif moderna).
- **Efectos**: Glassmorphism, Neon Glow, y gradientes de alta densidad.

## 📁 Estructura del Proyecto
```bash
src/
├── app/            # Rutas y Layouts (Next.js App Router)
├── components/     # Componentes compartidos
│   ├── ui/         # Componentes base de shadcn/ui
│   └── ...         # Sidebar, Topbar, KPI Cards, etc.
├── lib/            # Utilidades y configuraciones (utils.ts)
└── store/          # Estados globales con Zustand (Próximamente)
```

## 🛠️ Guía de Desarrollo
### Instalación
```bash
npm install
```

### Ejecución Local
```bash
npm run dev
```

### Construcción para Producción
```bash
npm run build
```

## 🚀 Próximas Fases
- **Fase 2**: Implementación de filtros dinámicos, búsqueda real y estados de carga.
- **Fase 3**: Integración de Heatmaps, gráficas dinámicas de Recharts y Score de IA real.

---
*Desarrollado con ❤️ para una experiencia SaaS de primer nivel.*
