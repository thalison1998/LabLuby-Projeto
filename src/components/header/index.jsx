import React from 'react'
import { Logo } from '../logo'
import { Container, Wrapper } from './styles'
import logOut from '../../assets/log-out.svg'
import {Search} from '../../components/search/index.jsx'
import { useAuth } from '../../context/AuthProvider/useAuth'
export const Header = ({search}) => {
    
     const {  logout } = useAuth();

    return (
       <Container>
           <Wrapper>
               <Logo />
               <div>
                    {search && <Search />  }
               </div>
               <button onClick={logout}>Sair <img src={logOut} alt="logout"/></button>
           </Wrapper>
       </Container>

    )
}
