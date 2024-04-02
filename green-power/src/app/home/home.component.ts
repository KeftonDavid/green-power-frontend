import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  text!: string;
  words: string[] = ["INSTALAÇÃO", "MONTAGEM", "MANUTENÇÃO", "INSPEÇÃO", "CONSULTORIA"];

  ngOnInit(): void {
    this.text = this.words[0];
    setInterval(() => {
      this.updateText();
    }, 750)
  }

  updateText(){
    const current = this.words.indexOf(this.text);
    const next = (current + 1) % this.words.length;
    this.text = this.words[next];
  }
}
