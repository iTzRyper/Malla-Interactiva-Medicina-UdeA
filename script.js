const estructura = {
  "APH: Primeros Auxilios": { prerrequisitos: [], correquisitos: [], nivel: 1 },
  "Salud y Sociedad I": { prerrequisitos: [], correquisitos: [], nivel: 1 },
  "Comunicación I": { prerrequisitos: [], correquisitos: [], nivel: 1 },
  "Informática Médica I": { prerrequisitos: [], correquisitos: [], nivel: 1 },
  "Inglés I": { prerrequisitos: [], correquisitos: [], nivel: 1 },
  "Biología de la Célula I": { prerrequisitos: [], correquisitos: [], nivel: 1 },
  "Inglés II": { prerrequisitos: ["Inglés I"], correquisitos: [], nivel: 2 },
  "Biología de la Célula II": { prerrequisitos: ["Biología de la Célula I"], correquisitos: [], nivel: 2 },
  "Comunicación II": { prerrequisitos: ["Comunicación I"], correquisitos: [], nivel: 2 },
  "Neurociencias": { prerrequisitos: ["Biología de la Célula I"], correquisitos: [], nivel: 2 },
  "Endocrinología y Metabolismo I": { prerrequisitos: ["Biología de la Célula I"], correquisitos: [], nivel: 2 },
  "Autorregulación y Autoconciencia": { prerrequisitos: ["Biología de la Célula I"], correquisitos: [], nivel: 2 },
  "Inglés III": { prerrequisitos: ["Inglés II"], correquisitos: [], nivel: 3 },
  "Formación Ciudadana y Constitución": { prerrequisitos: [], correquisitos: [], nivel: 3 },
  "Salud y Sociedad II": { prerrequisitos: [], correquisitos: [], nivel: 3 },
  "Cardiorrespiratorio": { prerrequisitos: ["Autorregulación y Autoconciencia"], correquisitos: [], nivel: 3 },
  "Movimiento y Postura": { prerrequisitos: ["Neurociencias"], correquisitos: ["Cardiorrespiratorio"], nivel: 3 },
  "Hematología": { prerrequisitos: ["Autorregulación y Autoconciencia"], correquisitos: [], nivel: 3 },
  "Sexualidad": { prerrequisitos: ["Autorregulación y Autoconciencia"], correquisitos: ["Hematología"], nivel: 3 },
  "Inglés IV": { prerrequisitos: ["Inglés III"], correquisitos: [], nivel: 4 },
  "Inmunología": { prerrequisitos: [], correquisitos: ["Hematología"], nivel: 4 },
  "Salud e Infección I": { prerrequisitos: ["Biología de la Célula II"], correquisitos: ["Inmunología"], nivel: 4 },
  "Gastroenterología y Nutrición": { prerrequisitos: [], correquisitos: ["Cardiorrespiratorio"], nivel: 4 },
  "Inglés V": { prerrequisitos: ["Inglés IV"], correquisitos: [], nivel: 5 },
  "Informática Médica II": { prerrequisitos: ["Informática Médica I"], correquisitos: ["Acto Médico"], nivel: 5 },
  "Salud e Infección II": { prerrequisitos: ["Inmunología", "Salud e Infección I"], correquisitos: [], nivel: 5 },
  "Acto Médico": { prerrequisitos: ["Inmunología", "Salud e Infección I", "Gastroenterología y Nutrición", "Comunicación II", "Movimiento y Postura"], correquisitos: [], nivel: 5 },
  "Salud y Sociedad III": { prerrequisitos: ["Salud y Sociedad II"], correquisitos: ["Niñez I", "Adolescente I"], nivel: 6 },
  "Niñez I": { prerrequisitos: ["Acto Médico"], correquisitos: ["Adolescente I"], nivel: 6 },
  "Adolescente I": { prerrequisitos: ["Sexualidad", "Acto Médico"], correquisitos: ["Salud y Sociedad III", "Niñez I"], nivel: 6 },
  "Epidemiología Clínica I": { prerrequisitos: ["Salud y Sociedad III"], correquisitos: ["Niñez I", "Adolescente I"], nivel: 7 },
  "Niñez II": { prerrequisitos: ["Acto Médico"], correquisitos: ["Adolescente I"], nivel: 7 },
  "Adolescencia II": { prerrequisitos: ["Sexualidad", "Acto Médico"], correquisitos: ["Salud y Sociedad III", "Niñez I"], nivel: 7 },
  "Endocrinología y Metabolismo II": { prerrequisitos: ["Epidemiología Clínica I", "Endocrinología y Metabolismo I", "Acto Médico"], correquisitos: ["Adultez I"], nivel: 8 },
  "Adultez I": { prerrequisitos: ["Epidemiología Clínica I", "Acto Médico", "Salud e Infección II"], correquisitos: ["Endocrinología y Metabolismo II"], nivel: 8 },
  "Adultez I: Salud Mental": { prerrequisitos: ["Epidemiología Clínica I", "Adolescencia II"], correquisitos: [], nivel: 8 },
  "Epidemiología Clínica II": { prerrequisitos: ["Epidemiología Clínica I"], correquisitos: [], nivel: 9 },
  "Adultez II: Urgencias Médicas": { prerrequisitos: ["Acto Médico", "Adultez I"], correquisitos: ["Adultez II: Urgencias Quirúrgicas"], nivel: 9 },
  "Adultez II: Urgencias Quirúrgicas": { prerrequisitos: ["Acto Médico", "Adultez I"], correquisitos: ["Adultez II: Urgencias Médicas"], nivel: 9 },
  "Adultez III: Gestión Humana": { prerrequisitos: ["Adultez II: Urgencias Médicas", "Adultez II: Urgencias Quirúrgicas"], correquisitos: ["Adultez III: Salud y Género"], nivel: 10 },
  "Adultez III: Salud y Género": { prerrequisitos: ["Adultez II: Urgencias Médicas", "Adultez II: Urgencias Quirúrgicas"], correquisitos: ["Adultez III: Gestión Humana"], nivel: 10 },
  "Vejez": { prerrequisitos: ["Adultez III: Salud y Género"], correquisitos: [], nivel: 11 },
  "Cáncer": { prerrequisitos: ["Adultez II: Urgencias Médicas", "Adultez II: Urgencias Quirúrgicas"], correquisitos: ["Vejez"], nivel: 11 },
  "Adultez IV: Resolución Actualizada": { prerrequisitos: ["Adultez II: Urgencias Médicas", "Adultez II: Urgencias Quirúrgicas"], correquisitos: ["Vejez", "Cáncer"], nivel: 11 },
  "Atención Integral del Niño y Adolescente": { prerrequisitos: ["Vejez", "Cáncer", "Adultez IV: Resolución Actualizada"], correquisitos: [], nivel: 12 },
  "Atención Integral de la Mujer": { prerrequisitos: ["Vejez", "Cáncer", "Adultez IV: Resolución Actualizada"], correquisitos: [], nivel: 12 },
  "Atención Integral del Adulto": { prerrequisitos: ["Vejez", "Cáncer", "Adultez IV: Resolución Actualizada"], correquisitos: [], nivel: 12 },
  "Urgencias Médicas": { prerrequisitos: ["Vejez", "Cáncer", "Adultez IV: Resolución Actualizada"], correquisitos: [], nivel: 12 },
  "Atención Primaria en Salud I": { prerrequisitos: ["Vejez", "Cáncer", "Adultez IV: Resolución Actualizada"], correquisitos: [], nivel: 12 },
  "Urgencias Quirúrgicas": { prerrequisitos: ["Vejez", "Cáncer", "Adultez IV: Resolución Actualizada"], correquisitos: [], nivel: 12 },
  "Intervención Habilidades Críticas I": { prerrequisitos: ["Vejez", "Cáncer", "Adultez IV: Resolución Actualizada"], correquisitos: [], nivel: 13 },
  "Intervención Crítica II": { prerrequisitos: ["Vejez", "Cáncer"], correquisitos: [], nivel: 13 },
  "Urgencias Ortopédicas": { prerrequisitos: ["Vejez", "Cáncer", "Adultez IV: Resolución Actualizada"], correquisitos: [], nivel: 13 },
  "Atención Primaria en Salud II": { prerrequisitos: ["Vejez", "Cáncer", "Adultez IV: Resolución Actualizada"], correquisitos: [], nivel: 13 }
};

const estados = {};
Object.keys(estructura).forEach(m => { estados[m] = 'bloqueada'; });

function puedeDesbloquear(m) {
  const { prerrequisitos, correquisitos } = estructura[m];
  const pre = prerrequisitos.every(x => estados[x] === 'cursada');
  const co = correquisitos.every(x => estados[x] === 'cursada' || estados[x] === 'disponible');
  return pre && co;
}

function actualizarEstados() {
  for (const mat in estructura) {
    if (estados[mat] !== 'cursada') {
      estados[mat] = puedeDesbloquear(mat) ? 'disponible' : 'bloqueada';
    }
  }
}

function crearMalla() {
  const cont = document.getElementById('malla');
  cont.innerHTML = '';
  const niveles = [...new Set(Object.values(estructura).map(o => o.nivel))].sort();
  niveles.forEach(n => {
    const col = document.createElement('div');
    col.className = 'columna';
    col.innerHTML = `<h2>Semestre ${n}</h2>`;
    Object.keys(estructura).filter(m => estructura[m].nivel === n).forEach(m => {
      const div = document.createElement('div');
      div.textContent = m;
      div.className = 'materia';
      div.addEventListener('click', () => {
        if (estados[m] === 'disponible') {
          estados[m] = 'cursada';
          actualizarEstados();
          crearMalla();
        }
      });
      div.classList.add(estados[m]);
      col.appendChild(div);
    });
    cont.appendChild(col);
  });
}

function init() {
  actualizarEstados();
  crearMalla();
}

init();
