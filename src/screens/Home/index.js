import React from "react";
import {Container,Title} from './styles'

export function Home({route, navigation}){
    const {username,picture} = route.params;
    return(
        <Container>
            <Title>Hello {username}!</Title>
            
        </Container>
    )
}