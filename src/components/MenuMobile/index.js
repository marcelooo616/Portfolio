/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container } from './styles';

import { IoClose } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { Item } from '../static/Header/styles';

export default function MenuMobile({ menuIsVisible, setMenuIsVisible }){

    const menu = [
        {nome:"Home"},
        {nome:"Contato"},
        {nome:"Sobre"},
        {nome: "Projetos"}
    ]
   

    return(
        <Container isVisible={menuIsVisible}>
            
            <nav>
            {menu.map((item) => {
                    return(
                        <NavLink to={`/${item.nome}`}  className="link" key={item.nome}>
                            <Item variant="primary">{item.nome}</Item>
                        </NavLink>
                        
                    )
                })}
                
            </nav>
        </Container>

    )
}