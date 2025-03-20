import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'personalsite';
  @ViewChild('mobilemenu') mobilemenu!: ElementRef;
  lastElement = false;

  constructor(private router: Router) {}
  
  ngOnInit() {
    let menu = document.getElementsByClassName("navigation-menu")[0];
  }

  openMenu() {
    console.log('toggleMenu()');
    let menu = document.getElementsByClassName("navigation-menu")[0];
    // TODO: refactor and get menu only once
    menu.classList.add("active");
    // TODO: trap focus!!!

    // this.trapFocus();
  }

  closeMenu() {
    let menu = document.getElementsByClassName("navigation-menu")[0];
    menu.classList.remove("active");
  }

  navigateTo(page: String) {
    this.router.navigate(['/', page]);
    this.closeMenu();
  }

  @HostListener('keyup', ['$event'])
  trapFocus(event: KeyboardEvent) {
    let menu = document.getElementsByClassName("navigation-menu")[0];
    if (event.key == 'Tab') {
      let allFocusableMenu = this.mobilemenu.nativeElement.querySelectorAll("a, button");
      if (this.lastElement) {
        allFocusableMenu[0].focus();
        this.lastElement = false;
      }
      if (event.target == allFocusableMenu[allFocusableMenu.length - 1]) {
        this.lastElement = true;
      }
    }
    
  }

}
