import {Text, StyleSheet, Platform} from 'react-native';

function Title({children}){
    return <Text style={styles.title}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontFamily: 'open-sans-bold',
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        padding: 12,
       // borderWidth: Platform.OS === 'android' ? 2 : 0,
        borderWidth: Platform.select({ios: 0, android: 2}),
        borderColor: 'white',
        maxWidth: '80%', //to fit smaller screens
        width: 300
    }
})