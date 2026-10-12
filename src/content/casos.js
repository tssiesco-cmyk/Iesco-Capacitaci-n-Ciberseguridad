/**
 * Casos del juego «¿Real o trampa?». Marcas y dominios ficticios a proposito.
 * Cada pista tiene un numero; el mensaje marca con ese mismo numero la parte
 * que delata la trampa.
 */
export const casos = [
  {
    id: "correo",
    tipo: "Correo",
    esTrampa: true,
    remitente: "StreaMax Soporte",
    direccion: "soporte@streamax-cuentas.verificar-pago.co",
    asunto: "URGENTE: tu cuenta será suspendida en 24 horas",
    saludo: "Estimado cliente",
    cuerpo:
      ": detectamos un problema con tu pago. Si no actualizas tus datos hoy, perderás tu cuenta y tu historial.",
    boton: "Actualizar mis datos",
    enlace: "http://streamax.pago-seguro.xyz/login",
    veredictoExtra: null,
    pistas: [
      "El dominio no es el de la empresa.",
      "Apura y amenaza: «24 horas».",
      "Saludo genérico: no sabe tu nombre.",
      "El enlace lleva a otra web, terminada en .xyz.",
    ],
    regla: "Entra tú mismo a la app o web oficial, nunca desde el enlace.",
  },
  {
    id: "chat",
    tipo: "Mensaje al celular",
    esTrampa: true,
    encabezado: "Número que no tienes guardado · 9:12 a. m.",
    burbujas: [
      "Hola, soy tu gerente. Cambié de número.",
      "Estoy en reunión y no puedo hablar.",
      "Necesito una transferencia urgente a un proveedor. Te paso la cuenta.",
      "No lo comentes con nadie, es confidencial.",
    ],
    veredictoExtra: "Es el «fraude del jefe».",
    pistas: [
      "Número nuevo que no puedes comprobar.",
      "Evita la llamada que lo delataría.",
      "Pide dinero y con apuro.",
      "Pide secreto para que no consultes.",
    ],
    regla: "Llama al número que ya tenías guardado.",
  },
];
