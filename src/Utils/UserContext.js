import { createContext } from "react";

const UserContext = createContext({
    user:{
        name:'Dummy Name',
        email:'dummyEmail@xyz.com'
    }
})

export default UserContext;