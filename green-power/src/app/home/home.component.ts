import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  text!: string;
  words: string[] = ["O&M", "MANUTENÇÕES PREVENTIVAS", "MANUTENÇÕES CORRETIVAS", "CONSULTORIA"];

  ngOnInit(): void {
    this.text = this.words[0];
    setInterval(() => {
      this.updateText();
    }, 1500)
  }

  updateText(){
    const current = this.words.indexOf(this.text);
    const next = (current + 1) % this.words.length;
    this.text = this.words[next];
  }
}
