import { BaseResourceModel } from "src/app/shared/model/base-resource.model";

export class Card  extends BaseResourceModel {
    constructor(
      public id?:number,
      public name?: string,
      public description?: string,
      public pic?: string,
      public likes?: number
    ){
      super();
    }
  
    static fromJson(jsonData: any): Card {
      return Object.assign(new Card(), jsonData);
    }
  }