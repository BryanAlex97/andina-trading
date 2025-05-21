const API_ACC = "http://localhost:3000/api/acciones";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-accion");
  const lista = document.getElementById("lista-acciones");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const empresa = document.getElementById("empresa").value;
    const simbolo = document.getElementById("simbolo").value;
    const precio = document.getElementById("precio").value;

    const res = await fetch(API_ACC, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ empresa, simbolo, precio }),
    });

    const data = await res.json();
    alert(data.message);
    form.reset();
    cargarAcciones();
  });

  async function cargarAcciones() {
    const res = await fetch(API_ACC);
    const data = await res.json();

    lista.innerHTML = "";
    data.forEach((acc) => {
      const li = document.createElement("li");
      li.textContent = `${acc.empresa} (${acc.simbolo}) - $${acc.precio}`;
      lista.appendChild(li);
    });
  }

  cargarAcciones();
});