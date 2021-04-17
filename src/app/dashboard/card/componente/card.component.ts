import { Component, OnInit, Input } from '@angular/core';
import { CardService } from '../service/card.service';
import toastr from "toastr";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card;
  serverErrorMessages: string[] = null;
  submittingForm: boolean = false;

  constructor(private cardService: CardService) { }

  ngOnInit() {}

  onLike(card: any){
    card.likes += 1;
    this.cardService.create(card)
    .subscribe(
      error => this.actionsForError(error)
    )
  }

  onShare(){
    window.open('https://www.linkedin.com/in/denis-guedes-b42b20aa/', "_blank");
  }

  protected actionsForError(error){
    toastr.error("Ocorreu um erro ao processar a sua solicitação!");
    this.submittingForm = false;
    if(error.status === 422)
      this.serverErrorMessages = JSON.parse(error._body).errors;
    else
      this.serverErrorMessages = ["Falha na comunicação com o servidor. Por favor, tente mais tarde."]
  }

}
