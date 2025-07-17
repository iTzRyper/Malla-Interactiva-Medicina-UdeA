const materias = [
  {
    nombre: "APH: PRIMEROS AUXILIOS",
    nivel: "1",
    prerrequisitos: [],
    correquisitos: []
  },
  {
    nombre: "SALUD Y SOCIEDAD I",
    nivel: "1",
    prerrequisitos: [],
    correquisitos: []
  },
  {
    nombre: "COMUNICACIÓN I",
    nivel: "1",
    prerrequisitos: [],
    correquisitos: []
  },
  {
    nombre: "INFORMÁTICA MÉDICA I",
    nivel: "1",
    prerrequisitos: [],
    correquisitos: []
  },
  {
    nombre: "INGLÉS I",
    nivel: "1",
    prerrequisitos: [],
    correquisitos: []
  },
  {
    nombre: "BIOLOGÍA DE LA CÉLULA I",
    nivel: "1",
    prerrequisitos: [],
    correquisitos: []
  },
  {
    nombre: "INGLÉS II",
    nivel: "2",
    prerrequisitos: ["INGLÉS I"],
    correquisitos: []
  },
  {
    nombre: "BIOLOGÍA DE LA CÉLULA II",
    nivel: "2",
    prerrequisitos: ["BIOLOGÍA DE LA CÉLULA I"],
    correquisitos: []
  },
  {
    nombre: "COMUNICACIÓN II",
    nivel: "2",
    prerrequisitos: ["COMUNICACIÓN I"],
    correquisitos: []
  },
  {
    nombre: "NEUROCIENCIAS",
    nivel: "2",
    prerrequisitos: ["BIOLOGÍA DE LA CÉLULA I"],
    correquisitos: []
  },
  {
    nombre: "ENDOCRINGL Y METABOLISM I",
    nivel: "2",
    prerrequisitos: ["BIOLOGÍA DE LA CÉLULA I"],
    correquisitos: []
  },
  {
    nombre: "AUTORREGLCN Y AUTOCONSVCN",
    nivel: "2",
    prerrequisitos: ["BIOLOGÍA DE LA CÉLULA I"],
    correquisitos: []
  },
  // ... (continúa con todas las demás materias, usando mismo formato)
];

const niveles = {};

materias.forEach(m => {
  if (!niveles[m.nivel]) niveles[m.nivel] = [];
  niveles[m.nivel].push(m);
});

function crearMalla() {
  const malla = document.getElementById("malla");
  malla.innerHTML = "";

  Object.keys(niveles)
    .sort((a, b) => parseInt(a) - parseInt(b))
    .forEach(nivel => {
      const columna = document.createElement("div");
      columna.className = "columna";
      columna.innerHTML = `<h2>Semestre ${nivel}</h2>`;
      niveles[nivel].forEach(materia => {
        const div = document.createElement("div");
        div.className = "materia bloqueada";
        div.textContent = materia.nombre;
        div.onclick = () => toggleMateria(materia.nombre);
        columna.appendChild(div);
      });
      malla.appendChild(columna);
    });

  actualizarEstados();
}

function toggleMateria(nombre) {
  const div = document.querySelectorAll(".materia");
  div.forEach(el => {
    if (el.textContent === nombre) {
      el.classList.toggle("cursada");
    }
  });
  actualizarEstados();
}

function actualizarEstados() {
  const cursadas = new Set(
    Array.from(document.querySelectorAll(".materia.cursada")).map(
      d => d.textContent
    )
  );

  materias.forEach(m => {
    const div = Array.from(document.querySelectorAll(".materia")).find(
      el => el.textContent === m.nombre
    );

    const prereqCumplidos = m.prerrequisitos.every(p => cursadas.has(p));
    const correq = m.correquisitos;
    const puedeTomar = prereqCumplidos;

    if (cursadas.has(m.nombre)) {
      div.className = "materia cursada";
    } else if (puedeTomar) {
      div.className = "materia disponible";
    } else {
      div.className = "materia bloqueada";
    }
  });
}

window.onload = crearMalla;