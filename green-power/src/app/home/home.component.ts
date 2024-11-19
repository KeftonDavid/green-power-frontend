import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit {

  text!: string;
  words: string[] = ["O&M", "MANUTENÇÕES PREVENTIVAS", "MANUTENÇÕES CORRETIVAS", "CONSULTORIA", "FORNECIMENTO DE EQUIPAMENTOS", "FORNECIMENTO DE MATERIAIS"];

  ngOnInit(): void {
    this.text = this.words[0];
    setInterval(() => {
      this.updateText();
    }, 1500)

  }

  ngAfterViewInit(): void {
    window.addEventListener('scroll', function() {
      const animatedText = document.getElementById('animated-text');
      const fadeInText = document.getElementById('fade-in-text');
      const animatedTextPosition = animatedText?.getBoundingClientRect().top;
      const fadeInTextPosition = fadeInText?.getBoundingClientRect().top;

      const screenPosition = window.innerHeight / 1.3;
  
      if (animatedTextPosition && (animatedTextPosition < screenPosition)) {
        animatedText.classList.add('animate-slideInLeft');
        animatedText.classList.remove('-translate-x-full')
      }

      if (fadeInTextPosition && (fadeInTextPosition < screenPosition)) {
        fadeInText.classList.add('animate-fadeIn');
        fadeInText.classList.remove('opacity-0')
      }
    });
  }

  updateText(){
    const current = this.words.indexOf(this.text);
    const next = (current + 1) % this.words.length;
    this.text = this.words[next];
  }
}
