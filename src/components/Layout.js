import React from 'react'
import { 
    StyleSheet, 
    View, 
} from 'react-native';


export const Layout = ({children}) => {
    return(
        <View style={styles.container}>
            {children}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d1d1e0',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%"
    }
})
