import React,{useState,useEffect} from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet,Animated,Keyboard, Alert } from 'react-native';

export default function Login_() {
    const [offset] = useState( new Animated.ValueXY({x:0, y:80}));
    const [opacity] = useState( new Animated.Value(0));
    const [logo] = useState( new Animated.ValueXY({x:350, y:155}));

    useEffect(()=>{
        KeyboardDidShowListener = Keyboard.addListener('keyboardDidShow',keyboardDidShow);
        KeyboardDidHideListener = Keyboard.addListener('keyboardDidHide',keyboardDidHide);
        Animated.parallel([
            Animated.spring(offset.y, {
                toValue: 0,
                speed: 4,
                bounciness:20,
                useNativeDriver: true
            }),
            Animated.timing(opacity, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true
            })
        ]).start();
        
    },[])

    function keyboardDidShow(){
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 100,
                duration: 100,
                useNativeDriver: false
            }),
            Animated.timing(logo.y, {
                toValue: 100,
                duration: 100,
                useNativeDriver: false
            })
        ]).start();
    }
    function keyboardDidHide(){
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 350,
                duration: 100,
                useNativeDriver: false
            }),
            Animated.timing(logo.y, {
                toValue: 155,
                duration: 100,
                useNativeDriver: false
            })
        ]).start();
    }
    return (
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.containerLogo}>
                <Animated.Image
                    style={{
                        width: logo.x,
                        height:logo.y,
                    }} 
                    source={require('../../../assets/logo.png')}
                />
            </View>
            <Animated.View style={  
                    [styles.container,
                        {
                            opacity:opacity,
                            transform:[
                                {
                                    translateY: offset.y
                                }
                            ]
                        }
                    ]
            }>
                <TextInput 
                    style={styles.input}
                    placeholder="email" 
                    autoCorrect={false}
                    onChangeText={()=>{}}
                />
                <TextInput 
                    style={styles.input}
                    placeholder="senha" 
                    autoCorrect={false}
                    onChangeText={()=>{}}
                />
                <TouchableOpacity style={styles.btnSubmit}>
                    <Text style={styles.submitText}>Acessar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnRegister}>
                    <Text style={styles.registerText}>Criar conta gratuita</Text>
                </TouchableOpacity>
            </Animated.View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF'
    },
    containerLogo:{
        flex: 1,
        justifyContent: 'center'
    },
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width:'90%'
    },
    input:{
        backgroundColor: '#D3D3D3',
        width: '90%',
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        padding:10,
        borderRadius: 7
    },
    btnSubmit:{
        backgroundColor: '#35AAFF',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7
    }, 
    submitText:{
        color: '#FFF',
        fontSize: 18
    },
    btnRegister:{
        marginTop:10,
    },
    registerText:{
        color: '#35AAFF'
    } 

})