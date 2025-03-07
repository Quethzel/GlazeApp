import { Injectable } from '@angular/core';
import { Glaze } from '../models/glaze';

@Injectable({
  providedIn: 'root'
})
export class GlazeService {
  glazes: Glaze[] = [
    { id: '0000', name: 'Azul Cobalto', isDecorative: true, isFoodSafe: false, viscosity: 'Semi-Fluido', opacity: 'Transparente', finish: 'Brillante', surface: 'Lisa', temperature: 'Alta', recommendedThickness: '3 - 4 capas', recommendedFiring: 'Cone 7', recommendedClay: 'Stoneware, 301', notes: 'No apto para alimentos.' },
    { id: '000A', name: 'Verde Esmeralda', isDecorative: true, isFoodSafe: false, viscosity: 'Estable', opacity: 'Transparente', finish: 'Brillante', surface: 'Lisa', temperature: 'Alta', recommendedThickness: '2 capas', recommendedFiring: 'Cone 8', recommendedClay: '400', notes: 'Se ve muy bien en arcillas claras pero no es apto para alimentos.' },
    { id: '003B', name: 'Rojo Carmesí', isDecorative: true, isFoodSafe: false, viscosity: 'Estable', opacity: 'Transparente', finish: 'Brillante', surface: 'Lisa', temperature: 'Alta', recommendedThickness: '2 capas', recommendedFiring: 'Cone 8', recommendedClay: '401', notes: 'No se recomienda para uso en superficies que entren en contacto con alimentos.' },
    { id: 'FFFF', name: 'Arena de Mar', isDecorative: true, isFoodSafe: true, viscosity: 'Estable', opacity: 'Opaco', finish: 'Mate', surface: 'Texturizada', temperature: 'Alta', recommendedThickness: '2 capas', recommendedFiring: 'Cone 8', recommendedClay: '401', notes: 'No se recomienda en arcillas blancas, ya que se pierde el color.' },
    { id: '0F0F', name: 'Blanco Puro', isDecorative: false, isFoodSafe: true, viscosity: 'Estable', opacity: 'Opaco', finish: 'Mate', surface: 'Lisa', temperature: 'Alta', recommendedThickness: '2 capas', recommendedFiring: 'Cone 8', recommendedClay: '401', notes: 'Apto para alimentos.' },
    { id: 'FF01', name: 'Océano Profundo', isDecorative: true, isFoodSafe: false, viscosity: 'Fluido', opacity: 'Transparente', finish: 'Brillante', surface: 'Lisa', temperature: 'Media', recommendedThickness: '3 capas', recommendedFiring: 'Cone 5', recommendedClay: '400, 402', notes: 'Ideal para efectos de flujo controlado.' },
    { id: 'FF02', name: 'Verde Musgo', isDecorative: false, isFoodSafe: true, viscosity: 'Estable', opacity: 'Translucido', finish: 'Satinado', surface: 'Lisa', temperature: 'Alta', recommendedThickness: '2 capas', recommendedFiring: 'Cone 7', recommendedClay: '403', notes: 'Resalta mejor en arcillas oscuras.' },
    { id: 'FF03', name: 'Carbón Oscuro', isDecorative: true, isFoodSafe: true, viscosity: 'Semi-Fluido', opacity: 'Opaco', finish: 'Mate', surface: 'Texturizada', temperature: 'Media', recommendedThickness: '1 capa', recommendedFiring: 'Cone 5', recommendedClay: '404', notes: 'Puede presentar craquelado en cocciones rápidas.' },
    { id: 'FF04', name: 'Cielo Estrellado', isDecorative: true, isFoodSafe: false, viscosity: 'Fluido', opacity: 'Transparente', finish: 'Brillante', surface: 'Lisa', temperature: 'Media', recommendedThickness: '3 capas', recommendedFiring: 'Cone 5', recommendedClay: '404, 405', notes: 'Aporta efectos metálicos en reducción.' },
    { id: 'FF05', name: 'Nieve Pura', isDecorative: false, isFoodSafe: true, viscosity: 'Estable', opacity: 'Opaco', finish: 'Brillante', surface: 'Lisa', temperature: 'Alta', recommendedThickness: '2 capas', recommendedFiring: 'Cone 8', recommendedClay: '406', notes: 'Perfecto para piezas utilitarias.' },
    { id: 'FF06', name: 'Lava Ardiente', isDecorative: true, isFoodSafe: false, viscosity: 'Fluido', opacity: 'Translucido', finish: 'Brillante', surface: 'Lisa', temperature: 'Media', recommendedThickness: '2 capas', recommendedFiring: 'Cone 6', recommendedClay: '400, 411', notes: 'Genera texturas volcánicas al aplicar grueso.' },
    { id: 'FF07', name: 'Bosque Encantado', isDecorative: true, isFoodSafe: true, viscosity: 'Estable', opacity: 'Translucido', finish: 'Satinado', surface: 'Lisa', temperature: 'Alta', recommendedThickness: '2 capas', recommendedFiring: 'Cone 8', recommendedClay: '409, 400', notes: 'Cambios de color en cocciones prolongadas.' },
    { id: 'FF08', name: 'Arena Roja', isDecorative: true, isFoodSafe: true, viscosity: 'Semi-Fluido', opacity: 'Opaco', finish: 'Mate', surface: 'Texturizada', temperature: 'Media', recommendedThickness: '2 capas', recommendedFiring: 'Cone 5', recommendedClay: '409, 410', notes: 'Ideal para detalles rústicos.' },
    { id: 'FF09', name: 'Espejo Azul', isDecorative: false, isFoodSafe: true, viscosity: 'Fluido', opacity: 'Transparente', finish: 'Brillante', surface: 'Lisa', temperature: 'Alta', recommendedThickness: '3 capas', recommendedFiring: 'Cone 8', recommendedClay: '410', notes: 'Aporta profundidad en superficies lisas.' },
    { id: 'FF10', name: 'Niebla Gris', isDecorative: true, isFoodSafe: true, viscosity: 'Estable', opacity: 'Translucido', finish: 'Satinado', surface: 'Lisa', temperature: 'Media', recommendedThickness: '2 capas', recommendedFiring: 'Cone 5', recommendedClay: '411', notes: 'Efecto de veladura al aplicar fino.' },
    { id: 'FF11', name: 'Cobre Antiguo', isDecorative: true, isFoodSafe: false, viscosity: 'Semi-Fluido', opacity: 'Opaco', finish: 'Mate', surface: 'Texturizada', temperature: 'Alta', recommendedThickness: '2 capas', recommendedFiring: 'Cone 7', recommendedClay: '412', notes: 'Reacciona con reducción generando verde-azul.' },
    { id: 'FF12', name: 'Turquesa Claro', isDecorative: false, isFoodSafe: true, viscosity: 'Estable', opacity: 'Translucido', finish: 'Brillante', surface: 'Lisa', temperature: 'Alta', recommendedThickness: '2 capas', recommendedFiring: 'Cone 7', recommendedClay: '413', notes: 'Resalta en arcillas rojas y oscuras.' },
    { id: 'FF13', name: 'Vino Profundo', isDecorative: true, isFoodSafe: true, viscosity: 'Fluido', opacity: 'Opaco', finish: 'Brillante', surface: 'Lisa', temperature: 'Alta', recommendedThickness: '2 capas', recommendedFiring: 'Cone 7', recommendedClay: '414', notes: 'Genera matices púrpuras en reducción.' },
    { id: 'FF14', name: 'Ceniza Blanca', isDecorative: true, isFoodSafe: false, viscosity: 'Fluido', opacity: 'Transparente', finish: 'Mate', surface: 'Texturizada', temperature: 'Alta', recommendedThickness: '3 capas', recommendedFiring: 'Cone 7', recommendedClay: '415', notes: 'Imita los efectos de ceniza natural.' },
    { id: 'FF15', name: 'Piedra Lunar', isDecorative: true, isFoodSafe: true, viscosity: 'Estable', opacity: 'Opaco', finish: 'Satinado', surface: 'Lisa', temperature: 'Baja', recommendedThickness: '2 capas', recommendedFiring: 'Cone 3', recommendedClay: '400, 411', notes: 'Sutiles reflejos metálicos en cocciones largas.' },
    { id: 'FF16', name: 'Jade Verde', isDecorative: false, isFoodSafe: true, viscosity: 'Semi-Fluido', opacity: 'Translucido', finish: 'Brillante', surface: 'Lisa', temperature: 'Baja', recommendedThickness: '2 capas', recommendedFiring: 'Cone 4', recommendedClay: '400, 412', notes: 'Profundidad vítrea en aplicaciones gruesas.' },
    { id: 'FF17', name: 'Amarillo Solar', isDecorative: true, isFoodSafe: true, viscosity: 'Estable', opacity: 'Opaco', finish: 'Brillante', surface: 'Lisa', temperature: 'Baja', recommendedThickness: '2 capas', recommendedFiring: 'Cone 4', recommendedClay: '400, 418', notes: 'Intenso color que no se desvanece.' },
    { id: 'FF18', name: 'Coral Suave', isDecorative: true, isFoodSafe: true, viscosity: 'Fluido', opacity: 'Transparente', finish: 'Satinado', surface: 'Lisa', temperature: 'Baja', recommendedThickness: '2 capas', recommendedFiring: 'Cone 4', recommendedClay: '418, 419', notes: 'Toques cálidos y suaves transiciones.' }  
];
  
  constructor() { }

  // Get all glazes from mock data emulating a database
  getAllGlazes(): Glaze[] {
    return this.glazes;
  }

  getGlazeById(id: string): Glaze | undefined {
    return this.glazes.find(glaze => glaze.id === id);
  }

}
