import '../styles/globals.css'
import { UserContext } from "../Components/User";
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState({
    name: "shiroe",
    type: "test"
  });
  // console.log(user)
  // useEffect(() => {
  //   setUser({
  //     name: "shiroe",
  //     type: "admin"
  //   })
  // }, [])

  if(pageProps.protected && !user){
    return (
      <>Loading...</>
    )
  }

  console.log("pageProps", pageProps)

  if(
    pageProps.protected &&
    user &&
    pageProps.userTypes &&
    pageProps.userTypes.indexOf(user.type) === -1
  ){
    return(
    <>
      <p>Sorry, you dont have access</p>
    </>
    )
  }

  return(
    <UserContext.Provider value={user}>
      <Component {...pageProps} />
    </UserContext.Provider>
  )
}


export default MyApp
