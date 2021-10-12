var typed = new Typed('#typed',{
  strings: ['A servicios de tecnología.', 'Guia de servicios de tecnología.' ],
  typeSpeed: 200,
  backSpeed: 50,
  loop: true
});

var tiemposDeSolucion = [
  ["Crítica", "15", "1"],
  ["Alta", "15", "4"],
  ["Media", "15", "8"],
  ["Baja", "60", "24"],
];

var tiempoSolucion1Hora = [
  ["Incidente", "Accesos", "Bloqueo Contraseña"],
  ["Requerimiento", "Accesos", "Páginas Internet"],
  ["Incidente", "Accesos", "Falla Acceso a Páginas Internet"],
  ["Incidente", "Audiovisuales", "Videoconferencia"],
  ["Incidente", "Red", "Reportar Falla"],
  ["Incidente", "Telefonía fija", "Reportar Falla Telefonía fija"],
  ["Incidente", "VPN", "Reportar Falla"],
  ["Incidente", "Audiovisuales", "Teleconferencia"],
  ["Incidente", "Audiovisuales", "Proyección de Salas"],
  ["Requerimiento", "Accesos", "Aplicaciones"],
];

var tiempoSolucion4Hora = [
  ["Requerimiento", "Accesos", "Usuario Internet visitantes"],
  ["Requerimiento", "Telefonía fija", "Habilitar extensión"],
  ["Requerimiento", "Telefonía fija", "Cambiar nombre en la Extensión"],
  ["Incidente", "Modem-Internet Móvil", "Reportar falla"],
  ["Requerimiento", "Telefonía fija", "Formateo de extensión"],
];

var tiempoSolucion8Hora = [
  ["Incidente", "Computador", "Bloqueo y/o Falla PC"],
  ["Incidente", "Computador", "Reportar Robo PC"],
  ["Incidente", "Computador", "Falla Accesorios "],
  ["Incidente", "Computador", "Herramientas de Ofimáticas-Office"],
  ["Incidente", "Computador", "Actualización de Parches"],
  ["Incidente", "Computador", "Token"],
  ["Incidente", "Computador", "Actualización Antivirus"],
  ["Incidente", "Aplicaciones", "CEAC (NGGC)"],
  ["Incidente", "Aplicaciones", "EAUDIT"],
  ["Incidente", "Aplicaciones", "EDATA MINING"],
  ["Incidente", "Aplicaciones", "GCCS"],
  ["Incidente", "Aplicaciones", "ALEX ONLINE"],
  ["Incidente", "Aplicaciones", "CLARA"],
  ["Incidente", "Aplicaciones", "CLIX"],
  ["Incidente", "Aplicaciones", "IDEA"],
  ["Incidente", "Aplicaciones", "INTRANET"],
  ["Incidente", "Aplicaciones", "KICS"],
  ["Incidente", "Aplicaciones", "MY PD"],
  ["Incidente", "Aplicaciones", "SENTINEL"],
  ["Incidente", "Aplicaciones", "INTERPRETER"],
  ["Incidente", "Aplicaciones", "KPMG LINK"],
  ["Incidente", "Aplicaciones", "CERVELLO KDSC"],
  ["Incidente", "Aplicaciones", "NOVASOFT"],
  ["Incidente", "Aplicaciones", "RENTAS PERSONAS NATURALES"],
  ["Incidente", "Aplicaciones", "ALTERYX"],
  ["Incidente", "Aplicaciones", "CERTIFICACIONES MERCADEO"],
  ["Incidente", "Aplicaciones", "CLOSE OUT EAUDIT"],
  ["Incidente", "Aplicaciones", "CONSECUTIVOS AUDITORIA"],
  ["Incidente", "Aplicaciones", "CONSECUTIVOS TAX"],
  ["Incidente", "Aplicaciones", "DARUMA"],
  ["Incidente", "Aplicaciones", "DYNAMICS NAV"],
  ["Incidente", "Aplicaciones", "E-FINAC"],
  ["Incidente", "Aplicaciones", "ENTRAPASS"],
  ["Incidente", "Aplicaciones", "HOJA DE RUTA"],
  ["Incidente", "Aplicaciones", "KACTUS"],
  ["Incidente", "Aplicaciones", "DIGINET"],
  ["Incidente", "Aplicaciones", "LEGALIZACIONES"],
  ["Incidente", "Aplicaciones", "RELATIVITY"],
  ["Incidente", "Aplicaciones", "TABLEAU"],
  ["Incidente", "Aplicaciones", "SEVEN"],
  ["Incidente", "Audiovisuales", "Carteleras Digitales"],
  ["Incidente", "Accesos", "Permisos en Carpetas"],
  ["Incidente", "Computador", "Falla internet Explorer"],
  ["Incidente", "Computador", "Google Chrome"],
  ["Requerimiento", "Accesos", "Creación de Cuentas Privilegiadas"],
  ["Requerimiento", "Computador", "Acceso a Equipos en Custodia"],
  ["Requerimiento", "Accesos", "Excepciones Accesos a Sitios Restringidos"],
  ["Requerimiento", "Accesos", "Filtros Antispam"],
  ["Requerimiento", "Computador", "Token"],
];

var tiempoSolucion24Hora = [
  ["Requerimiento Interno", "Suministros", "Compra"],
  ["Requerimiento", "Novedad", "personal Ingreso"],
  ["Requerimiento", "Novedad personal", "Retiro"],
  ["Requerimiento", "Novedad personal", "Actualización"],
  ["Requerimiento", "Novedad personal", "Ausentismo"],
  ["Incidente", "Accesos", "Buzón de Correo de Usuario"],
  ["Requerimiento", "Accesos", "Crear Buzón Funcional"],
  ["Requerimiento", "Accesos", "Crear Lista de Distribución"],
  ["Requerimiento", "Accesos", "Crear Buzón de Sala"],
  ["Requerimiento", "Accesos", "Crear carpeta de Red"],
  ["Requerimiento", "Accesos", "Permisos sobre Carpeta de Red"],
  ["Requerimiento", "Computador", "Compra PC"],
  ["Requerimiento", "Computador", "Préstamo Computador"],
  ["Requerimiento", "Computador", "Compra Periféricos"],
  ["Requerimiento", "Computador", "Compra Periféricos de Almacenamiento"],
  ["Requerimiento", "Computador", "Instalación Software Estándar"],
  ["Requerimiento", "Computador", "Instalación Software No Estándar"],
];

let tablaTiemposDeSolucion = new DataTable("#tabla-tiempos-de-solucion", {
  lengthChange: false,
  processing: false,
  ordenig: false,
  searching: true,
  paging: true,
  info: false,
  dom: "<'mx-auto col-md-12'>",
  data: tiemposDeSolucion,
  columns: [
    { title: "Prioridad" },
    { title: "Tiempo de Atención </br> (Minutos)" },
    { title: "Tiempo de resolución </br> (horas)" },
  ],
});

let tablaUnaHora = new DataTable("#tabla-una-hora", {
  lengthChange: false,
  processing: false,
  ordenig: false,
  searching: true,
  paging: true,
  info: false,
  scrollY: 300,
  dom: "<'mx-auto col-md-12'ftp>",
  data: tiempoSolucion1Hora,
  columns: [
    { title: "Categoría" },
    { title: "Subcategoría" },
    { title: "Tipo" },
  ],
});

let tableCuatroHora = new DataTable("#tabla-cuatro-hora", {
  lengthChange: false,
  processing: false,
  ordenig: false,
  searching: true,
  paging: true,
  info: false,
  scrollY: 330,
  dom: "<'mx-auto col-md-11'ftp>",
  data: tiempoSolucion4Hora,
  columns: [
    { title: "Categoría" },
    { title: "Subcategoría" },
    { title: "Tipo" },
  ],
});

let table_3 = new DataTable("#tabla-twenty-four-hour", {
  lengthChange: false,
  processing: false,
  ordenig: false,
  searching: true,
  paging: true,
  info: false,
  scrollY: 330,
  //dom: "<'mx-auto col-md-11 'ftp>",
  data: tableCinco,
  columns: [
    { title: "Categoría" },
    { title: "Subcategoría" },
    { title: "Tipo" },
  ],
});


