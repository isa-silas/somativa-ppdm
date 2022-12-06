import React from "react";
import * as Expo from 'expo';
import { Container, Title, Btn, BtnText, LoginContainer, UserField, UserContainer, LogoIcon, UserLabel } from "./styles";
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
import * as AuthSession from 'expo-auth-session';

export function Login({ navigation }) {

  async function handleGoogleSignIn() {
    try {
      // configurações básicas OAuth 2.0
      const CLIENT_ID = "628250412500-v95d8376s54c7p5jti24dre5ks4cm5md.apps.googleusercontent.com";
      const REDIRECT_URI = "https://auth.expo.io/@isa_silas2003/ppdm-app";
      const SCOPE = encodeURI("profile email");
      const RESPONSE_TYPE = "token";

      // obtenção do token
      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
      const { type, params } = await AuthSession.startAsync({ authUrl });
      
      // utilizando token para obter as informações do usuário
      if(type==="success"){
        const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params["access_token"]}`);
        const user = await response.json();
        console.log(user);
        // envio das informações do usuário para a próxima página
        navigation.navigate('Home', {username: user.given_name,picture:user.picture})
      }
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <Container>
      <Title>Login</Title>
      {/* <UserContainer>
                <UserLabel>Username</UserLabel>
                <UserField/>
                <UserLabel>Password</UserLabel>
                <UserField/>
            </UserContainer> */}
      <LoginContainer>
        <Btn
          onPress={handleGoogleSignIn}
        >
          <BtnText>BTN</BtnText>
        </Btn>
      </LoginContainer>
    </Container>
  )
}