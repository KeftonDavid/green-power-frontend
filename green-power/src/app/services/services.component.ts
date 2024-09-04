import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  details(index: number){

    let details = document.getElementsByClassName("details");
    let plus = document.getElementsByClassName("plus");
    let minus = document.getElementsByClassName("minus");
    let cards = document.getElementsByClassName("card");
    let detail = details[index] as HTMLElement;
    let card = cards[index] as HTMLElement;
    plus[index].classList.toggle("change");
    minus[index].classList.toggle("change");
  

    if(detail.style.maxHeight){
      detail.style.maxHeight = '';
      card.style.marginBottom = '';
    }
    else{
      detail.style.maxHeight = detail.scrollHeight + "px";
      card.style.marginBottom = '2rem'
    }

  }
}
