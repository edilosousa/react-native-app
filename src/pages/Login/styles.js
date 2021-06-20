import styled from 'styled-components';


export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #DCDCDC;
`;

export const Logo = styled.View`
    padding-bottom: -100px;
`;

export const Input = styled.TextInput`
    background-color: #fff;
    width: 90%;
    margin-bottom: 15px;
    color: #222;
    font-size: 18px;
    border: 1px solid #c1c1c1;
    border-radius: 7px;
    padding:10px;
`;

export const ButtomForm = styled.TouchableOpacity`
    background-color: #F0F8FF;
    width: 90%;
    height: 40px;
    align-items: center;
    justify-content:center;
    border:1px solid #0d6efd;
    border-radius: 7px;
`;

export const TextForm = styled.Text`
    color: #0d6efd;
    font-size: 22px;
`;

export const View = styled.View`
    background-color: #FFF;
    width: 90%;
    height:50%;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
`;

