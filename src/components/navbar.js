import { AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { Wrapper, Logo, MenuItem, Left, Center, Right } from './styledComponents';

const NavBar = () => {
    return (
        <AppBar color="secondary" position="relative">
            <Wrapper>
                <Left>
                    <Link to='/' style={{textDecoration: "none", color: "white"}}><Logo>AMAX</Logo></Link>
                </Left>
                <Center>
                    <Link to='/category/1' style={{textDecoration: "none", color: "white"}}><MenuItem>Accesibles</MenuItem></Link>
                    <Link to='/category/2' style={{textDecoration: "none", color: "white"}}><MenuItem>Medios</MenuItem></Link>
                    <Link to='/category/3' style={{textDecoration: "none", color: "white"}}><MenuItem>Caros</MenuItem></Link>                    
                </Center>
                <Right>
                    <MenuItem>Registrar</MenuItem>
                    <MenuItem>Loguearme</MenuItem>
                    <MenuItem><CartWidget /></MenuItem>
                </Right>
            </Wrapper>
        </AppBar>
    );
}

export default NavBar;