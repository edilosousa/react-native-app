import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ListItem from './listItem';

export default function Swipe(){

    const tarefas = [
        {id: '1', tarefa:'Comprar Doritos'},
        {id: '2', tarefa:'Estudar React native'},
        {id: '3', tarefa:'Criar api node'},
        {id: '4', tarefa:'Angular'},
        {id: '5', tarefa:'Php 8'},
        {id: '6', tarefa:'React version 16'},
    ];

    return(
        <View style={styles.container}>
            <FlatList
                data={tarefas}
                keyExtractor={item => item.id}
                renderItem={ ({item}) => (
                    <ListItem
                        data={item}
                        handleLeft={()=>alert('tarefa concluida com sucesso!')}
                        handleRight={()=>alert('tarefa excluída com sucesso!')}
                    />
                )}
                ItemSeparatorComponent={()=> <Separator/>}
            />
        </View>
    )
}
const Separator = () => <View style={{flex:1, height:1, backgroundColor:'#DDD'}}></View>

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFF'
    }
});