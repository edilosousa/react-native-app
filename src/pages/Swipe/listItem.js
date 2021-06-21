import React from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export default function ListItem({ data, handleLeft, handleRight }) {
    function leftActions(progress, dragX) {
        const scales = dragX.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 1],
            extrapolate: 'clamp'
        })
        return (
            <View style={styles.leftAction}>
                <Animated.Text
                    style={[styles.actionText, { transform: [{ scale: scales }] }]}>
                    Concluir
                </Animated.Text>
            </View>
        )
    }
    function rightAction(progress, dragX) {
        const scales = dragX.interpolate({
            inputRange: [-100, 0],
            outputRange: [1, 0],
            extrapolate: 'clamp'
        })
        return (
            <TouchableOpacity onPress={handleRight}>
                <View style={styles.rightAction}>
                    <Animated.Text
                        style={[styles.actionText, { transform: [{ scale: scales }] }]}>
                        Excluir
                    </Animated.Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <Swipeable
            renderLeftActions={leftActions}
            onSwipeableLeftOpen={handleLeft}
            renderRightActions={rightAction}
        >
            <View style={styles.container}>
                <Text style={styles.text}>{data.tarefa}</Text>
            </View>
        </Swipeable>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    text: {
        fontSize: 17,
        color: '#222'
    },
    leftAction: {
        backgroundColor: '#388e3C',
        justifyContent: 'center',
        flex: 1
    },
    rightAction: {
        backgroundColor: '#FF0000',
        justifyContent: 'center',
    },
    actionText: {
        fontSize: 17,
        color: '#FFF',
        padding: 20,
    }
});