import { Pressable, Text, View, Image, Date } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import Styles from '../styles/page-styles';
import React, { useState, Component } from 'react';
import moment from 'moment';

export default function Page() {

   
    const params = useLocalSearchParams();
    const { name } = params;
    const { noun } = params;
    const { event } = params;

    return (
        <View style={Styles.page}>
            <Text style={Styles.title2}>MAD LIBS</Text>
            <Image source={require('./Cat.png')} style={Styles.img} resizeMode="cover"/>
            <Text style={Styles.date}>Today's Date:{"\n"}{ moment().format("MMM Do YYYY") } </Text>
            <Text style={Styles.title1} >Hall Pass</Text>
            <View style={Styles.space} />
            <Text style={Styles.text2}> {name} is too Cool {"\n"}for {noun} class. {"\n"}instead, she/he/they will be attending the {event}</Text>
            <View style={Styles.space} />
            <Text style={Styles.sign}> SIGNED: </Text>
            <View style={Styles.space} />
            
            <Link
                style={Styles.button}
                href={{
                    pathname: "/",
                    params: { name, noun, event },
                }} asChild
            >
                <Pressable >
                    <Text>Back</Text>
                </Pressable>
            </Link>

        </View>
    )
}
