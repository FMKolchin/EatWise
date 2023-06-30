import { User } from "../Models/user.model";
import { getUser } from "./user.service";
const connectDB = require('../ConnectDB');

const jwt = require('jsonwebtoken');
const config = require('../Config/JWT')
//function gets a token, decodes it and returns the user.
export const decodeJWT = async (token: string): Promise<User> => {
    console.log("token before split :" + token);
    let splitToken = token.split(' ')[1];
    console.log("token after split :" + splitToken);
    const decodedToken = jwt.decode(splitToken, config.TOKEN_KEY) as { [key: string]: string };
    const { _id } = decodedToken;
    console.log("id :" + _id);
    const user: User = await getUser(_id);
    console.log("user from token :" + user)
    return user;
}
//function gets user details and returns token
export const codeJWT = (username: string, email: string, _id: string) => {
    let token = jwt.sign({
        "username": username,
        "email": email,
        "_id": _id
    }, config.TOKEN_KEY,
        {
            expiresIn: "720H"
        })
    token = "Bearer " + token;

    console.log("token :" + token);
    return token;

}



export const validateJwt = (token: string): boolean => {
    console.log('in validate jwt service')
    let secretKey: string = config.SECRET_KEY;
    try {

        // Remove the "Bearer " prefix if present
        if (token.startsWith('Bearer ')) {
            token = token.slice(7);
        }

        // Verify the token signature
        console.log('in try varify token ' + token);
        const decoded = jwt.verify(token, secretKey);

        // Check expiration time (optional)
        if (decoded.exp && Date.now() >= decoded.exp * 1000) {
            return false; // Token has expired
        }


        return true; // Token is valid
    } catch (error) {
        console.log('in catch varify token',)
        return false; // Token verification failed
    }
};



