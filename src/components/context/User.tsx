import { useContext } from "react"
import { UserContext} from "./UserContext"

function User() {
  const userContext = useContext(UserContext)

  const handleLogin = () => {
    userContext.setUser({
      name: "Jom",
      email: "jomkarlov@gmail.com"
    })
  }
  const handleLogout = () => {
    userContext.setUser(null)
  }

  return (
    <>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {userContext.user 
        ? <>
          <div>Name: {userContext.user?.name}</div>
          <div>Email: {userContext.user?.email}</div>
        </>
        : <div>User not logged in</div>
      }
    </>
    
  )
}

export default User