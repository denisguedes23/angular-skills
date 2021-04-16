import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLike(card: any){
    card.likes += 1;
  }

  onShare(){
    window.open('https://www.linkedin.com/in/denis-guedes-b42b20aa/', "_blank");
  }

}
