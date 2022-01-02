import React from 'react'
import { Logo } from '../logo'
import { Button, Container, Wrapper } from './styles'
import logOut from '../../assets/log-out.svg'
import searchMobile from '../../assets/search-mobile.svg'
import {Search} from '../../components/search/index.jsx'
import { useAuth } from '../../context/AuthProvider/useAuth'
import useMediaResize from '../../hooks/useMediaResize'
import logOutMobile from "../../assets/log-out-mobile.svg"
import prevMobile from "../../assets/chevron-left.svg"
import { Link } from "react-router-dom";

export const Header = ({search, titleHead}) => {
    
     const {  logout } = useAuth();
     const mobile = useMediaResize('(max-width:920px)')
    
    return (
       <Container>
           <Wrapper>
               {mobile?<Link to="/LabLuby-Projeto/Home"><img src={prevMobile} alt="" />
               </Link>
               :<Link to="/LabLuby-Projeto/Home"><Logo /></Link>}

               {search && !mobile && <div className='search'> <Search /> </div>}

               {mobile && <h3>{titleHead}</h3>}
               <div className='log-out'>
                {mobile && <img src={searchMobile} alt="search" className='mobile-search'/>}
               <Button  onClick={logout}>
                   {!mobile && 'Sair' }
                   <img src={mobile?logOutMobile:logOut} alt="logout"/>
                </Button>
                </div>
           </Wrapper>
       </Container>

    )
}
