export class Glaze {
    constructor(
      public id: string,
      public name: string,
      public isDecorative: boolean,
      public isFoodSafe: boolean,
      public viscosity: "Estable" | "Fluido" | "Semi-Fluido",
      public opacity: "Opaco" | "Translucido" | "Transparente",
      public finish: "Brillante" | "Semi-Brillante" | "Mate" | "Semi-Mate" | "Satinado",
      public surface: "Lisa" | "Texturizada",
      public temperature: "Alta" | "Media" | "Baja",
      public recommendedThickness: string,
      public recommendedFiring?: string,
      public recommendedClay?: string,
      public notes? : string,
      public cone?: number,
      public imageUrl?: string
    ) { }
  }