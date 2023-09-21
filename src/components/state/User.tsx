import { useState } from "react"

type AuthUser = {
  name: string,
  email: string
}

function User() {
  // < AuthUser | null > tells useState that it can either be null or AuthUser
  // useful if your initial value is different type to its future value
  const [user, setUser] = useState< AuthUser | null >(null)

  const handleLogin = () => {
    setUser({
      name: "Jom",
      email: "jomkarlov@gmail.com"
    })
  }

  const handleLogout = () => {
    setUser(null);
  }

  return (
    <>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
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