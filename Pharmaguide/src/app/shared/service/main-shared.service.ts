import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainSharedService {

  private sidenavFlag = signal<boolean>(false);

  constructor() {
    this.sidenavFlag.apply(false);
  }

  // Méthode pour obtenir tous les todos (Signal accessible pour la vue)
  getSidenavFlag(): boolean {
    return this.sidenavFlag();
  }

  enable() {
    this.sidenavFlag.set(true);
  };

  disable() {
    this.sidenavFlag.set(false);
  };
}
