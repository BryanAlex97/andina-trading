const API = "http://localhost:3000/api/inversionistas";

const form = document.getElementById("form-inversionista");
const lista = document.getElementById("lista-inversionistas");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;

  const res = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, email }),
  });

  const data = await res.json();
  alert(data.message);
  form.reset();
  cargarInversionistas();
});

async function cargarInversionistas() {
  const res = await fetch(API);
  const inversionistas = await res.json();

  lista.innerHTML = "";
  inversionistas.forEach((inv) => {
    const li = document.createElement("li");
    li.textContent = `${inv.nombre} - ${inv.email}`;
    lista.appendChild(li);
  });
}

window.onload = cargarInversionistas;
