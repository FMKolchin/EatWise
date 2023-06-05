import mongoose from "mongoose";

class Week {
    weekId:number = 0;
    sunday:number = 0;
    monday:number = 0;
    tuesday:number = 0;
    wednesday:number = 0;
    thursday:number = 0;
    friday:number = 0;
    saturday:number = 0;
}

const weekSchema = new mongoose.Schema<Week>({
  weekId:{ type: Number, required: true },
  sunday:{ type: Number, required: true },
  monday:{ type: Number, required: true },
  tuesday:{ type: Number, required: true },
  wednesday:{ type: Number, required: true },
  thursday:{ type: Number, required: true },
  friday:{ type: Number, required: true },
  saturday:{ type: Number, required: true },
  

});

const WeekModel = mongoose.model<Week>("Example", weekSchema);

export { Week, WeekModel };