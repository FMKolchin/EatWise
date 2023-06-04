import { Food } from "../../Models/Food";

export const FoodOption = (props: any) => {
    const food:Food= props.food;
    return (
        <div>
            <p>{food.productName}</p>
        </div>
    )
}