import {useContext} from 'react';
import { UserContext, useUser } from "../Components/User"

const Admin = () => {
    const user = useContext(UserContext)
    console.log(user)
    return(
        <>
            <h1>Hi {user.name}</h1>
            <p>Wlecome to admin dashboard</p>
        </>
    )
}

export async function getStaticProps(context){
    return {
        props: {
            protected: true,
            userTypes: ['admin']
        }
    }
}

export default Admin;