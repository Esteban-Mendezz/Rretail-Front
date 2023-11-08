import { MoneyList } from './../models/moneyList';
import { LangList } from './../models/langList';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  showMenu = true;


  inputSearch: string = '';

  langList: LangList[] | undefined;
  selectedLang: LangList | undefined;


  MoneyList: MoneyList[] | undefined;
  selectedMoney: MoneyList | undefined;





  ngOnInit() {
    this.langList = [
      { name: 'Español', code: 'ES', },
      { name: 'Ingles', code: 'EN', },
      { name: 'Portugues', code: 'PT', },
      { name: 'Frances', code: 'FR', },
      { name: 'Aleman', code: 'DE', },
    ];

    this.MoneyList = [
      { name: 'Peso Colombiano', code: 'COP', },
      { name: 'Dolar', code: 'USD', },
      { name: 'Euro', code: 'EURO', },
      { name: 'Libra Esterlina', code: 'GBP', },
      { name: 'Peso Mexicano', code: 'MXN', },

    ];

    this.selectedLang = this.langList[0];
    this.selectedMoney = this.MoneyList[0];



  }






}
