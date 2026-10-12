export const preguntas = [
  {
    pregunta: "El «banco» te pide confirmar tu clave en un enlace. ¿Qué haces?",
    opciones: [
      { texto: "Entro al enlace y verifico que todo esté bien." },
      { texto: "No hago clic y entro yo mismo a la app o web oficial." },
      { texto: "Respondo el correo preguntando si es real." },
    ],
    correcta: 1,
    explicacion:
      "El enlace y el remitente los controla el atacante; si le respondes, también hablas con él.",
  },
  {
    pregunta: "¿Cuál de estas contraseñas es la más segura?",
    opciones: [
      { texto: "Empresa2026", mono: true },
      { texto: "P@ssw0rd!", mono: true },
      { texto: "mi-perro-come-mango-en-verano", mono: true },
    ],
    correcta: 2,
    explicacion:
      "La longitud protege más que los símbolos. A y B son patrones que los atacantes prueban primero.",
  },
  {
    pregunta: "Hiciste clic en un enlace sospechoso. ¿Qué haces primero?",
    opciones: [
      { texto: "Cierro la ventana y no digo nada." },
      { texto: "Apago el equipo y espero a ver si pasa algo." },
      { texto: "Aviso de inmediato a TI." },
    ],
    correcta: 2,
    explicacion:
      "Los primeros minutos son los que cuentan. Callar le da tiempo al atacante.",
  },
];
