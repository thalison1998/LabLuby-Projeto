import React from 'react'

import { useAuth } from '../../context/AuthProvider/useAuth'

export const ProtectLayout = ({ProtectComponent}) => {
    
    const { loginIsOk, token, } = useAuth();
    if(!loginIsOk && !token ) return <h1>Você não possui acesso</h1>

    return (
        <>
          {ProtectComponent}        
        </>
    )
}
