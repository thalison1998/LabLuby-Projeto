import React from 'react'

import { useAuth } from '../../context/AuthProvider/useAuth'
import { Loading } from '../helper/loading';

export const ProtectLayout = ({ProtectComponent}) => {
    
    const { loginIsOk, token, loading } = useAuth();
    if(!loginIsOk && !token ) return <h1>Você não possui acesso</h1>

    if(loading) return <Loading />
    
    return (
        <>
          {ProtectComponent}        
        </>
    )
}
