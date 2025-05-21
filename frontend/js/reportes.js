const API_REP = "http://localhost:3000/api/reportes/resumen";

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn-cargar-reporte");
  const lista = document.getElementById("lista-reporte");

  btn.addEventListener("click", async () => {
    const res = await fetch(API_REP);
    const data = await res.json();

    lista.innerHTML = `
      <li>Total de Inversionistas: ${data.total_inversionistas}</li>
      <li>Total de Contratos: ${data.total_contratos}</li>
      <li>Órdenes de Compra: ${data.total_ordenes_compra}</li>
      <li>Órdenes de Venta: ${data.total_ordenes_venta}</li>
      <li>Acciones Compradas: ${data.total_acciones_compradas}</li>
      <li>Acciones Vendidas: ${data.total_acciones_vendidas}</li>
    `;
  });
});
