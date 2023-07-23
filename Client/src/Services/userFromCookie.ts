import Cookies from 'js-cookie';
import { User } from '../Models/User';
import { getUserFromToken } from '../API/token.ts';
import { nutritionById } from '../API/nutrition.ts';
import { Nutrition } from '../Models/Nutrition.ts';

export const anyToUser = async (tempUser: any): Promise<User> => {
    let user: User = new User();
    user.id = tempUser._id;
    user.username = tempUser.username;
    user.email = tempUser.email;
    user.password = tempUser.password;
    user.age = tempUser.age;
    user.height = tempUser.height;
    user.weight = tempUser.weight;
    user.sportLevel = tempUser.sportLevel;
    user.gender = tempUser.gender;
    try {
        user.averageConsumption = await nutritionById(tempUser.averageConsumption) ?? new Nutrition("", 0, 0, 0, 0, 0, 0, 0);
        user.dailyConsumption = await nutritionById(tempUser.dailyConsumption) ?? new Nutrition("", 0, 0, 0, 0, 0, 0, 0);
        user.recommendedConsumption = await nutritionById(tempUser.recommendedConsumption) ?? new Nutrition("", 0, 0, 0, 0, 0, 0, 0);
        user.weeklyConsumption = [];
        for (let i = 0; i < 7; i++) {
            let nutValueByDay: Nutrition
            try {
                nutValueByDay = await nutritionById(tempUser.weeklyConsumption[i]) ?? new Nutrition("", 0, 0, 0, 0, 0, 0, 0);
            }
            catch {
                nutValueByDay = new Nutrition("", 0, 0, 0, 0, 0, 0, 0);
            }

            user.weeklyConsumption.push(nutValueByDay);

        }
    user.recommendedWater=tempUser.recommendedWater;
    user.dailyWater=tempUser.dailyWater;
    }
    catch {
    }

    user.daysUpdated = tempUser.daysUpdated;
    user.lastUpdate = tempUser.lastUpdate;
    return user;

}
export const userFromCookie = async (): Promise<User> => {
    const token: string = Cookies.get()['jwt'];
    let tempUser: any = await getUserFromToken(token);
    let user: User = await anyToUser(tempUser);
    return user;
}