import styled from "styled-components/native";
import icon from 'react-native-vector-icons/FontAwesome5'
import imgBtn from '../../assets/btn_google_signin_light_normal_web.png';


export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #fbf8cc;
`

export const LogoIcon = styled(icon)`
    height: 23px;
    font-size:23px;
    color: #000;
`

export const UserContainer=styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #fbf8cc;
    width:80%;
`

export const Title = styled.Text`
    color: #000;
    font-size: 32px;
`

export const UserField = styled.TextInput`
    background-color: white;
    // border-radius:2%;
    padding:5%;
    width: 90%;
`
export const UserLabel = styled.Text`
    color: #000;
    font-size: 20px;
    padding: 10%;
`
export const LoginContainer = styled.View`
    height:40%;
    width: 75%;
    align-items: center;
    justify-content: center;
    // background-color: #000;
    border-width: 2px;
    border-color:#faec6e;
    // border-radius: 2%;
    margin:10%;
`
export const Btn = styled.TouchableOpacity`
    // display: inline-block;
    background-image: url(${imgBtn});
    background-color:#000;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    height: 20%;
    width: 80%;
    align-items: center;
    justify-content: center;
`
export const BtnText = styled.Text`
    color: transparent;
`