import { StyleSheet } from 'react-native';

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const Styles = StyleSheet.create({
    page: {
        flex: 20,
        backgroundColor: getRandomColor(),
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'lightblue',
        borderRadius: 10,
        padding: 20,
    },
    clearButton: {
    backgroundColor: 'lightblue',
    borderRadius: 10,
    padding: 20,
    },
    input: {

        backgroundColor: 'white',
        height: 40,
        margin: 10,
        borderWidth: 2,
        padding: 20,
    },
});

export default Styles;