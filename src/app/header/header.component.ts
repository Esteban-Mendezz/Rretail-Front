import { Router } from '@angular/router';
import { MoneyList } from './../models/moneyList';
import { LangList } from './../models/langList';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  showMenu = false;

  inputSearch: string = '';

  langList: LangList[] | undefined;
  selectedLang: LangList | undefined;

  MoneyList: MoneyList[] | undefined;
  selectedMoney: MoneyList | undefined;

  constructor(private router: Router) { } 

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

  toggleMenu() {

    this.showMenu = !this.showMenu;
  }

  navigateToRegister() {
    console.log('Navigating to /register');
    this.router.navigate(['/register']);
  }
  
}
