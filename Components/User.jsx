import { createContext, useContext } from "react";

export const UserContext = createContext(null);

export const useUser = () => {
    console.log(UserContext)
    return useContext(UserContext);
}