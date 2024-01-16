import { createContext} from "react";


const UserContext=createContext({
    UserLoggedIn:"Default User",
});

export default UserContext;