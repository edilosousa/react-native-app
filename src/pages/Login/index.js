import React from 'react';
import { ScrollView, Image, StyleSheet } from 'react-native';
import { Container, Logo, Input, ButtomForm, TextForm, View } from './styles';


export default function Login({ navigation }) {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Container>
                {/* <Logo>
                    <Image style={styles.tinyLogo} source={require('../../../assets/dealtech.png')} />
                </Logo> */}
                <View>
                    <Input
                        placeholder="Usuário"
                        autoCorrect={false}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />

                    <Input
                        placeholder="Senha"
                        autoCorrect={false}
                        secureTextEntry={true}
                    />

                    <ButtomForm onPress={()=>{navigation.navigate('Home')}}>
                        <TextForm>
                            Acessar
                    </TextForm>
                    </ButtomForm>
                </View>
            </Container>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 300,
        height: '50%',
        borderRadius: 7,
    }
});