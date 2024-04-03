import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, RouterLink, RouterLinkActive, RouterOutlet, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  navbarOpen: boolean = false;

  toggleNavbar(){
    if(this.navbarOpen == false){
      this.navbarOpen = true;
    }
    else{
      this.navbarOpen = false;
    }

  }

  menu(){
    let buttonGroup = document.getElementById("button-group");
    if(buttonGroup?.className === "button-group bg-primary/90 navbar-center sm:bg-transparent z-10"){
      buttonGroup.className += " button-group-open";
    } else{
      buttonGroup!.className = "button-group bg-primary/90 navbar-center sm:bg-transparent z-10"
    }
  
    let menu = document.getElementById("menu");
    let clear = document.getElementById("clear");

    
    menu!.classList.toggle("change");
    clear!.classList.toggle("change")
  }
}
