const API_COM = "http://localhost:3000/api/comisionistas";
const API_PAIS_COM = "http://localhost:3000/api/paises";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-comisionista");
  const lista = document.getElementById("lista-comisionistas");
  const selPais = document.getElementById("pais-com"); // Nuevo selector

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre-com").value;
    const cedula = document.getElementById("cedula-com").value;
    const email = document.getElementById("email-com").value;
    const pais_id = selPais.value; // Captura el país seleccionado

    const res = await fetch(API_COM, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, cedula, email, pais_id }),
    });

    const data = await res.json();
    alert(data.message);
    form.reset();
    cargarComisionistas();
  });

  async function cargarPaises() {
    const res = await fetch(API_PAIS_COM);
    const paises = await res.json();
    selPais.innerHTML = paises
      .map((p) => `<option value="${p.id}">${p.nombre}</option>`)
      .join("");
  }

  async function cargarComisionistas() {
    const res = await fetch(API_COM);
    const data = await res.json();

    lista.innerHTML = "";
    data.forEach((com) => {
      const li = document.createElement("li");
      li.textContent = `${com.nombre} - ${com.cedula} - ${com.email} - ${com.pais ?? 'Sin país'}`;
      lista.appendChild(li);
    });
  }

  cargarPaises();         // Carga los países al cargar la página
  cargarComisionistas();  // Carga los comisionistas como antes
});