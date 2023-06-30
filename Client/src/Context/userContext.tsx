import React, { Dispatch, SetStateAction, createContext, useState } from 'react';
import { User } from '../Models/User';

interface UserContext{
    user:User;
    setUser:Dispatch<SetStateAction<User>>;
}

export const UserContextStore = createContext<UserContext>({user:new User(),setUser:()=>{}});

export const DataProvider = (props: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User>(new User());

    return (
        <UserContextStore.Provider value={{ user, setUser,}}>
            {props.children}
        </UserContextStore.Provider>
    );
};

