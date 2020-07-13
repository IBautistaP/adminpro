import { SettingsService } from '../../services/service.index';
import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [],
})
export class AccountSettingsComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private _DOCUMENT,
    public _AJUSTES: SettingsService
  ) {}

  ngOnInit() {
    this.colocarChek();
  }
  cambiarColor(tema: string, link: any) {
    this.aplicarCheck(link);
    this._AJUSTES.aplicarTema(tema);
  }

  aplicarCheck(link: any) {
    const selectores: any = document.getElementsByClassName('selector');
    for (const ref of selectores) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  colocarChek() {
    const selectores: any = document.getElementsByClassName('selector');
    const tema = this._AJUSTES.ajustes.tema;
    for (const ref of selectores) {
      if (ref.getAttribute('data-theme') === tema) {
        ref.classList.add('working');
      } else {
        ref.classList.remove('working');
      }
    }
  }
}
