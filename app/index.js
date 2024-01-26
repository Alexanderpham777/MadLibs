import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, TextInput, SafeAreaView, } from 'react-native';
import Styles from '../styles/page-styles';
import { Link } from 'expo-router';

export default function Page() {
    const [name, onChangeName] = React.useState("");
    const [noun, onChangeNoun] = React.useState("");
    const [event, onChangeEvent] = React.useState("");
    const clearInputs = () => { onChangeName(""); onChangeNoun(""); onChangeEvent("");
        
    };
    return (
        <View style={Styles.page} >
            <Text style={Styles.title}>MAD LIBS </Text>
            <View style={Styles.space} />
            <Text style={Styles.text }>How to Play Mad Libs Hall Pass: Fill in the Blanks For the Hall Pass. </Text>
            <View style={Styles.space} />
            <SafeAreaView>
                <TextInput
                style={Styles.input}
                onChangeText={onChangeName}
                value={name}
                placeholder="Name"
                />
                <TextInput
                    style={Styles.input}
                    onChangeText={onChangeNoun}
                    value={noun}
                    placeholder="Noun"
                />
                <TextInput
                    style={Styles.input}
                    onChangeText={onChangeEvent}
                    value={event}
                    placeholder="an Event"
                />


            </SafeAreaView>
            <Link
                style={Styles.button}
                href={{
                    pathname: "/page2",
                    params: { name, noun, event },
                }} asChild
            >
                <Pressable >
                    <Text>Make Hall Pass</Text>
                </Pressable>
            </Link>
            <View style={Styles.space} />
                <Pressable style={Styles.clearButton} onPress={clearInputs}>
                    <Text>Clear</Text>
                </Pressable>
        </View>
    )
}

