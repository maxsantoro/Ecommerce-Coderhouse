import { AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import CartWidget from "./CartWidget";

import {
  Wrapper,
  Logo,
  MenuItem,
  Left,
  Center,
  Right,
} from "./styledComponents";

const NavBar = () => {
  const { user } = useAuth();

  return (
    <AppBar color="secondary" position="relative">
      <Wrapper>
        <Left>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <Logo>AMAX</Logo>
          </Link>
        </Left>
        <Center>
          <Link
            to="/products"
            style={{ textDecoration: "none", color: "white" }}
          >
            <MenuItem>Productos</MenuItem>
          </Link>
          <Link
            to="/category/1"
            style={{ textDecoration: "none", color: "white" }}
          >
            <MenuItem>Audifonos</MenuItem>
          </Link>
          <Link
            to="/category/2"
            style={{ textDecoration: "none", color: "white" ,display:"inline-block",overflow:"hidden",whiteSpace:"nowrap"}}
          >
            <MenuItem>Equipos Audiologicos</MenuItem>
          </Link>
        </Center>
        <Right>
          {user ? (
            <>
              <MenuItem>
                <Link
                  to="/register"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "15px",
                  }}
                ></Link>
              </MenuItem>

              <MenuItem>
                <Link
                  to="/login"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "15px",
                  }}
                ></Link>
              </MenuItem>
            </>
          ) : (
            <>
              <MenuItem>
                <Link
                  to="/register"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "15px",
                  }}
                >
                  Registration
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  to="/login"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "15px",
                  }}
                >
                  Sign in
                </Link>
              </MenuItem>
            </>
          )}
            {user ? 
            <>
            <MenuItem>
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "15px",
                    marginRight:"15px"
                  }}
                >
                  Log Out
                </Link>
              </MenuItem>
          <MenuItem>
            <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
              <CartWidget />
            </Link>
          </MenuItem> 
          </>
          :
          <>
          <Link to="" style={{ textDecoration: "none", color: "white" }}>
              
            </Link>

            </>}
        </Right>
      </Wrapper>
    </AppBar>
  );
};

export default NavBar;
