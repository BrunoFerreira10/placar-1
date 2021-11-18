const menuList = [
  { type: "item", title: "Dashboards", to: "/", icon: "dashboard_customize", menuItens: [] },
  { type: "group", title: "Consultas", to: "", icon: "search", menuItens: [
      { type: "sub-item", title: "Veículos", to: "/queries/vehicles", icon: "mdi-car-side", menuItens: [] },
      { type: "sub-item", title: "Testes", to: "/queries/tests", icon: "mdi-list-status", menuItens: [] },
      { type: "sub-item", title: "Estatísticas", to: "/queries/stats", icon: "bar_chart", menuItens: [] },
      { type: "sub-item", title: "Timers", to: "/queries/timers", icon: "timer", menuItens: [] }],
  },
  { type: "group", title: "Relatórios", to: "", icon: "description", menuItens: [
    { type: "sub-item",title: "Vehicles", to: "/reports/vehicles", icon: "dashboard_customize", menuItens: [] },
    { type: "sub-item", title: "Testes", to: "/reports/tests", icon: "mdi-list-status", menuItens: [] },
    { type: "sub-item", title: "Estatísticas", to: "/reports/stats", icon: "bar_chart", menuItens: [] },
    { type: "sub-item", title: "Timers", to: "/reports/timers", icon: "timer", menuItens: [] }],
  },
]

export default {
  menuList
}