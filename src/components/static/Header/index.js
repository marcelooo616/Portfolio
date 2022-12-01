import { NavLink } from "react-router-dom";
import { AppBar, Menu, Item, Logo} from "./styles";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import MenuMobile from "../../MenuMobile";
import { IoClose } from "react-icons/io5";

export default function Header(){
    const [menuIsVisible, setMenuIsVisible] = useState(false);
    
    const menu = [
        {nome:"Home"},
        {nome:"Contato"},
        {nome:"Sobre"},
        {nome: "Projetos"}
    ]


    return(
        <AppBar>
            <Logo >
                <Item variant="secundary">Logo</Item>
            </Logo>
            <MenuMobile
                menuIsVisible={menuIsVisible}
                setMenuIsVisible={setMenuIsVisible}
            />
            <Menu variant="menu-mobile">
                {menuIsVisible 
                ? <IoClose onClick={() => setMenuIsVisible(false) } size={30}/>
                : <MenuIcon onClick={() => setMenuIsVisible(true) }/>}
                
            </Menu>
            <Menu variant="manu-desktop">
                {menu.map((item) => {
                    return(
                        <NavLink to={`/${item.nome}`}  className="link" key={item.nome}>
                            <Item variant="primary" >{item.nome}</Item>
                        </NavLink>
                        
                    )
                })}
            </Menu>
        </AppBar>
    );
};