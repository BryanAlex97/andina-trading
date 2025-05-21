const API_INV = "http://localhost:3000/api/inversionistas";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-inversionista");
  const lista = document.getElementById("lista-inversionistas");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;

    const res = await fetch(API_INV, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, email }),
    });

    const data = await res.json();
    alert(data.message);
    form.reset();
    cargarInversionistas();
  });

  async function cargarInversionistas() {
    const res = await fetch(API_INV);
    const data = await res.json();

    lista.innerHTML = "";
    data.forEach((inv) => {
      const li = document.createElement("li");
      li.textContent = `${inv.nombre} - ${inv.email}`;
      lista.appendChild(li);
    });
  }

  cargarInversionistas();
});