import { StyleSheet } from "react-native"

const style =  StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    }, 
    text:{
        fontSize : 20, 
        fontWeight: 'bold',
    }
})

const styleSplashScreen = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'black',
    }, 
    logo: {
        width: 150, 
        height: 150,
        // backgroundColor: 'blue'
    },
    logoContainer:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        color: 'white',
        fontSize: 20,
    }
})

export {style, styleSplashScreen};