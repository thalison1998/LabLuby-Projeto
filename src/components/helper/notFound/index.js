import React from 'react'
import { Header } from '../../header'
import { Container } from './styles'

export const NotFound = () => {
    return (
        <>
        <Header />
        <Container>
            <div>
                <h1>ERRO: 404</h1>
                <p>página não encontrada :c</p>
            </div>
        </Container>
        </>
    )
}
