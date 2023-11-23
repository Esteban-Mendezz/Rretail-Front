import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { MoneyList } from './../models/moneyList';
import { LangList } from './../models/langList';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  isUserLoggedIn: boolean = false;
  showMenu = false;
  user = JSON.parse(localStorage.getItem('user') || '{}');
  inputSearch: string = '';
  langList: LangList[] | undefined;
  selectedLang: LangList | undefined;
  MoneyList: MoneyList[] | undefined;
  selectedMoney: MoneyList | undefined;
  private authSubcription: Subscription;
  mostrarModal: boolean = false;

  constructor(private router: Router, private authService: AuthService) {
    this.authSubcription = this.authService.isLoggedIn$.subscribe(
      (isLoggedIn: boolean) => {
        this.isUserLoggedIn = isLoggedIn;
      }
    );
  }

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

    if (localStorage.getItem('token')) {
      this.isUserLoggedIn = true;
    }

  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  cerrarSesion(){
    this.authService.logout();

    this.isUserLoggedIn = false;

    this.router.navigate(['/login']);
  }

  ngOnDestroy() {
    this.authSubcription.unsubscribe();
  }

  mostrarOcultarModal(){
    this.mostrarModal = !this.mostrarModal;
  }
}
