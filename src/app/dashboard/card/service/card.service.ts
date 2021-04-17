import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/service/base-resource.service';
import { Card } from '../model/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService extends BaseResourceService<Card> {

  constructor(protected injector: Injector) {
    super("api/cards", injector, Card.fromJson);
  }

}