import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

//Her gemmes user fra login
export const UserContextProvider = (props) => {
    const [userData, setUserData] = useState();

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {props.children}
        </UserContext.Provider>
    );
};