
export class Nutrition{
    _id:string;
    calories:number =0;
    totalFat:number =0;
    // saturatedFat:number =0;
    // transFat:number =0;
    cholesterol:number =0;
    sodium:number =0;
    carbohydrates:number =0;
    sugars:number =0;
    proteins:number =0;
    constructor(_id:string,calories :number ,totalFat :number,cholesterol :number ,carbohydrates :number, sodium :number,sugars:number,proteins:number)
    {
        this._id = _id;
        this.calories=calories;
        this.totalFat=totalFat;
        // this.saturatedFat=saturatedFat;
        // this.transFat=transFat;
        this.cholesterol=cholesterol;
        this.carbohydrates=carbohydrates;
        this.sodium=sodium;
        this.sugars=sugars;
        this.proteins=proteins;
    }


}