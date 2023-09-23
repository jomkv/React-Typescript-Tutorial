import Login from "./Login"
import { ProfileProps } from './Profile'

type PrivateProps = {
  isLoggedIn: boolean
  component: React.ComponentType<ProfileProps>
}

//                      component props renamed to Component
function Private({ isLoggedIn, component: Component }: PrivateProps) {
  if(isLoggedIn) {
    return <Component name="Jom"/>
  } 
  else {
    return <Login /> 
  }
}

export default Private