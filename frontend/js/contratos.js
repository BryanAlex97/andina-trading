const API_CON = "http://localhost:3000/api/contratos";
const API_INV_CON = "http://localhost:3000/api/inversionistas";
const API_COM_CON = "http://localhost:3000/api/comisionistas";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-contrato");
  const lista = document.getElementById("lista-contratos");
  const selInv = document.getElementById("inversionista");
  const selCom = document.getElementById("comisionista");
  console.log("JS de contratos cargado.");

  // Cargar selectores
  async function cargarSelectores() {
    console.log("Cargando inversionistas y comisionistas...");

    const inv = await fetch(API_INV_CON).then(r => r.json());
    const com = await fetch(API_COM_CON).then(r => r.json());

    console.log("Inversionistas:", inv);
    console.log("Comisionistas:", com);

    selInv.innerHTML = inv.map(i => `<option value="${i.id}">${i.nombre}</option>`).join("");
    selCom.innerHTML = com.map(c => `<option value="${c.id}">${c.nombre}</option>`).join("");
  }

  // Enviar contrato
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const inversionista_id = selInv.value;
    const comisionista_id = selCom.value;

    const res = await fetch(API_CON, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ inversionista_id, comisionista_id })
    });

    const data = await res.json();
    alert(data.message);
    cargarContratos();
  });

  // Mostrar lista
  async function cargarContratos() {
    const res = await fetch(API_CON);
    const data = await res.json();

    lista.innerHTML = "";
    data.forEach(ct => {
      const li = document.createElement("li");
      li.textContent = `${ct.inversionista} contrató con ${ct.comisionista} el ${new Date(ct.fecha_creacion).toLocaleDateString()}`;
      lista.appendChild(li);
    });
  }

  cargarSelectores();
  cargarContratos();
});
