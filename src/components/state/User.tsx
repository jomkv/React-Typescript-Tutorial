import { useState } from "react"

type AuthUser = {
  name: string,
  email: string
}

function User() {
  // < AuthUser | null > tells useState that its state value can either be null or AuthUser
  // useful if your initial value is different type to its future value
  const [user, setUser] = useState< AuthUser >({} as AuthUser)

  const handleLogin = () => {
    setUser({
      name: "Jom",
      email: "jomkarlov@gmail.com"
    })
  }

  return (
    <>
      <button onClick={handleLogin}>Login</button>
      {user 
      ? <> 
        <div>User name is {user.name}</div>
        <div>User email is {user.email}</div>
      </>
      : <div>User is not logged in</div>}
      
    </> 
  )
}

export default User