import { fuentes } from "./fuentes";

export const habitos = [
  {
    titulo: "Contraseña larga y distinta por cuenta",
    texto:
      "Cuatro palabras o más, como mi-perro-come-mango. Guárdalas en un gestor, no en un papel ni en un Excel.",
    ejemplo: "mi-perro-come-mango",
    dato: "«123456» fue la contraseña más usada del mundo en 2025.",
    fuente: { ...fuentes.nordpass, nombre: "NordPass" },
  },
  {
    titulo: "Verificación en dos pasos",
    texto:
      "Una segunda llave en tu celular. Si te llega una aprobación que no pediste, recházala y avisa.",
    dato: "Bloquea más del 99% de los ataques a cuentas.",
    fuente: { ...fuentes.microsoft, nombre: "Microsoft" },
  },
  {
    titulo: "Si dudas, pregunta",
    texto:
      "Detente, no abras, verifica por otro canal y reporta. Una falsa alarma no molesta a nadie.",
  },
];
