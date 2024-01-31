// export const BMI = (weight:number,height:number):number =>{
//     return weight/Math.pow(height,2);
// }

export function recommendedCalories(age: number, weight: number, height: number,
  gender:number): number {
    // Constants for calorie calculation
    const BMR_CONSTANT = 10; // Basal Metabolic Rate constant
    const WEIGHT_CONSTANT = 6.25; // Weight constant
    const HEIGHT_CONSTANT = 5; // Height constant
    const AGE_CONSTANT = 5; // Age constant
    // const MALE_CONSTANT = 5; // Male constant
    const FEMALE_CONSTANT = -161; // Female constant
  
    let BMR: number;
  
    // Calculate Basal Metabolic Rate (BMR) based on gender
    if (gender === 1) {
      BMR = (WEIGHT_CONSTANT * weight) + (HEIGHT_CONSTANT * height) - (AGE_CONSTANT * age)
       + BMR_CONSTANT;
    } else if (gender === 2) {
      BMR = (WEIGHT_CONSTANT * weight) + (HEIGHT_CONSTANT * height) - (AGE_CONSTANT * age) 
      + FEMALE_CONSTANT;
    } else {
      throw new Error('Invalid gender');
    }
    return BMR;
  }
  
  // Helper function to calculate recommended calories based on activity level
  export function activityFactor(BMR: number, activityLevel: number): number {
    let recommendedCalories: number;
  
    // Activity factors:
    // 1. Sedentary (little to no exercise)
    // 2. Lightly active (light exercise/sports 1-3 days/week)
    // 3. Moderately active (moderate exercise/sports 3-5 days/week)
    // 4. Very active (hard exercise/sports 6-7 days/week)
    // 5. Super active (very hard exercise/sports & physical job or 2x training)
  
    switch (activityLevel) {
      case 1:
        recommendedCalories = BMR * 1.2;
        break;
      case 2:
        recommendedCalories = BMR * 1.375;
        break;
      case 3:
        recommendedCalories = BMR * 1.55;
        break;
      case 4:
        recommendedCalories = BMR * 1.725;
        break;
      case 5:
        recommendedCalories = BMR * 1.9;
        break;
      default:
        throw new Error('Invalid activity level');
    }
  
    return recommendedCalories;
  }

  export function recommendedProtein(weight: number): number {
    // Protein recommendation in grams per kilogram of body weight
    const PROTEIN_RECOMMENDATION = 0.8;
    return weight * PROTEIN_RECOMMENDATION;
  }
  
  export function recommendedTotalFat(calories: number): number {
    // Percentage of total calories from fat
    const FAT_PERCENTAGE = 0.25;
    return (calories * FAT_PERCENTAGE) / 9; // 9 calories per gram of fat
  }
  
  export function recommendedCholesterol(): number {
    // Cholesterol recommendation in milligrams
    const CHOLESTEROL_RECOMMENDATION = 300;
    return CHOLESTEROL_RECOMMENDATION;
  }
  
  export function recommendedSodium(): number {
    // Sodium recommendation in milligrams
    const SODIUM_RECOMMENDATION = 2300;
    return SODIUM_RECOMMENDATION;
  }
  
  export function recommendedCarbohydrates(calories: number): number {
    // Percentage of total calories from carbohydrates
    const CARBOHYDRATES_PERCENTAGE = 0.45;
    return (calories * CARBOHYDRATES_PERCENTAGE) / 4; // 4 calories per gram of carbohydrates
  }
  
  export function recommendedSugar(): number {
    // Sugar recommendation in grams
    const SUGAR_RECOMMENDATION = 25;
    return SUGAR_RECOMMENDATION;
  }
  
 export function recommendedFiber(age: number): number {
    // Fiber recommendation in grams based on age
    if (age < 50) {
      return 38;
    } else if (age >= 50) {
      return 30;
    } else {
      throw new Error('Invalid age');
    }
  }
  export function recocommendedWater(age: number, weight: number, sportLevel: number,gender:number):number{
   
      // חישוב הכמות המומלצת של מים
      let recommendedIntake = 0;
  
      // ניתוח מין
      if (gender ==1) {
        // גברים
        recommendedIntake = (weight * 35) ;
      } else if (gender ==2) {
        // נשים
        recommendedIntake = (weight * 31) ;
      }
  
      // ניתוח גיל
      if (age <= 30) {
        recommendedIntake += 40;
      } else if (age > 30 && age <= 55) {
        recommendedIntake += 35;
      } else {
        recommendedIntake += 30;
      }
  
      // ניתוח רמת ספורט
      recommendedIntake += sportLevel * 250;
  
   return recommendedIntake;
   
  }
  
  