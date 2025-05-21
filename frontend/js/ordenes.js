const API_ORD = "http://localhost:3000/api/ordenes";
const API_CON_ORD = "http://localhost:3000/api/contratos";
const API_ACC_ORD = "http://localhost:3000/api/acciones";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-orden");
  const lista = document.getElementById("lista-ordenes");
  const selContrato = document.getElementById("contrato");
  const selAccion = document.getElementById("accion");
  const selTipo = document.getElementById("tipo");
  const inputCantidad = document.getElementById("cantidad");

  // Cargar selects
  async function cargarSelectores() {
    const contratos = await fetch(API_CON_ORD).then(r => r.json());
    const acciones = await fetch(API_ACC_ORD).then(r => r.json());

    selContrato.innerHTML = contratos.map(c =>
      `<option value="${c.id}">${c.inversionista} con ${c.comisionista}</option>`
    ).join("");

    selAccion.innerHTML = acciones.map(a =>
      `<option value="${a.id}">${a.empresa} (${a.simbolo})</option>`
    ).join("");
  }

  // Crear orden
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const contrato_id = selContrato.value;
    const accion_id = selAccion.value;
    const tipo = selTipo.value;
    const cantidad = inputCantidad.value;

    const res = await fetch(API_ORD, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contrato_id, accion_id, tipo, cantidad })
    });

    const data = await res.json();
    alert(data.message);
    form.reset();
    cargarOrdenes();
  });

  // Mostrar lista
  async function cargarOrdenes() {
    const res = await fetch(API_ORD);
    const ordenes = await res.json();

    lista.innerHTML = "";
    ordenes.forEach(o => {
      const li = document.createElement("li");
      li.textContent = `${o.inversionista} hizo una ${o.tipo} de ${o.cantidad} acciones de ${o.accion} el ${new Date(o.fecha).toLocaleDateString()}`;
      lista.appendChild(li);
    });
  }

  cargarSelectores();
  cargarOrdenes();
});
