import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { Glaze } from 'src/app/models/glaze';
import { CommonModule } from '@angular/common';
import { IonSearchbar, IonList, IonItem } from '@ionic/angular/standalone';
@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IonSearchbar, IonList, IonItem],
  selector: 'app-search-glaze',
  templateUrl: './search-glaze.component.html',
  styleUrls: ['./search-glaze.component.scss'],
})
export class SearchGlazeComponent  implements OnInit {

  @Input() glazes: Glaze[] = []; // Lista de esmaltes
  @Output() selectGlaze = new EventEmitter<Glaze>(); // Emitir el esmalte seleccionado
  
  @ViewChild('searchbar')
  searchbar!: IonSearchbar;
  
  // searchControl = new FormControl('');
  filteredGlazes: Glaze[] = [];

  constructor() {
    // Escuchar cambios y filtrar con un pequeño retraso (300ms)
    // this.searchControl.valueChanges.pipe(debounceTime(300)).subscribe((query) => {
    //   this.filterGlazes(query ?? '');
    // });
  }

  ngOnInit(): void {
    
  }

  filterGlazes(query: string) {
    if (!query) {
      this.filteredGlazes = [];
      return;
    }

    const lowerQuery = query.toLowerCase();
    this.filteredGlazes = this.glazes.filter(
      (glaze) =>
        glaze.name.toLowerCase().includes(lowerQuery) ||
        glaze.id.toLowerCase().includes(lowerQuery)
    );
  }

  handleInput(event: CustomEvent) {
    if (!event.detail.value) {
      this.filteredGlazes = [];
      return;
    }

    const target = event.target as HTMLIonSearchbarElement;
    const query = target.value?.toLowerCase() || '';
    this.filteredGlazes = this.glazes.filter(
      (d) => 
        d.name.toLowerCase().includes(query) || 
        d.id.toLowerCase().includes(query));
  }

  onClearSearchbar(event: CustomEvent) {
    console.log(event);
    this.filteredGlazes = [];
  }

  onSelect(glaze: Glaze) {
    this.selectGlaze.emit(glaze);
    // this.searchControl.setValue(''); // Limpiar búsqueda
    this.filteredGlazes = [];

    this.searchbar.value = ''; // Limpiar búsqueda
  }

}
