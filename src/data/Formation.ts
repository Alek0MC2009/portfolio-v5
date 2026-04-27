// src/data/formaciones.ts
export interface Formation {
  titulo: string;
  institucion: string;
  localidad: string;
  fecha: string;
  descripcion: string;
  tecnologias: string[]; // Cambiado a array
}

export const Formaciones: Formation[] = [
  {
    titulo: "Titulo en FP SMR",
    institucion: "IES Manuel Sales i Ferré",
    localidad: "Ulldecona",
    fecha: "15/9/2024 - Aún sigo cursando",
    descripcion:
      "Tengo el titulo en la FP de SMR donde aprendí introduccion a la programacion y manejo de sistemas operativos y redes",
    tecnologias: [
      "Python",
      "Html",
      "Css",
      "Javascript",
      "Bash",
      "Cmd",
      "Powershell",
      "Redes",
    ], // Array
  },
];
