import React from "react";
import {Container,Title} from './styles'
import {Image,StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    img:{
        width:80,
        height:80,
        margin:20,
    }
})

export function Home({route, navigation}){
    const {username,picture} = route.params;
    return(
        <Container>
            <Title>Hello {username}!</Title>
            <Image
                style ={styles.img}
                source={{uri: picture}}
            />
        </Container>
    )
}