import React,{useState} from "react";
import CartSummary from "./CartSummary";
import { Container,Menu,Image } from "semantic-ui-react";
import SignOut from "./SignOut";
import SignedIn from "./SignedIn";
import { useHistory } from "react-router";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const history=useHistory()
  function handleSignOut() {
    setIsAuthenticated(false)
    history.push("/")
  }
  function handleSingIn() {
    setIsAuthenticated(true)
  }
  return (
    <div>
      <Menu inverted>
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <CartSummary/>
            {isAuthenticated?<SignedIn signOut={handleSignOut}/>:<SignOut signIn={handleSingIn}/>}
           
           
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
