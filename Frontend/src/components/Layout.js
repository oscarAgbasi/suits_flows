import React from 'react'
import { 
    StyleSheet, 
    View,
    SafeAreaView,
    Text
} from 'react-native';
import tw from 'tailwind-react-native-classnames';

export const Layout = ({children}) => {
    return(
        <View style={tw `flex h-full relative bg-white font-sans`}>
            <SafeAreaView style={tw `h-full justify-center mx-4 `}>
                {children}
            </SafeAreaView>
        </View>
    )
}
