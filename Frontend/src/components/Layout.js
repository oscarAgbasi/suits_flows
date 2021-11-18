import React from 'react'
import { 
    StyleSheet, 
    View,
    SafeAreaView,
    Text,
    ScrollView
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useWindowDimensions } from 'react-native';


export const Layout = ({children}) => {
    // return(
    //     <View style={tw `flex h-full w-full relative bg-white font-sans`}>
    //         <SafeAreaView style={tw `h-full items-center mx-4 `}>
    //             {children}
    //         </SafeAreaView>
    //     </View>
    // )
    return(
        <View style={tw `flex h-full w-full relative bg-white px-4`}>
            <SafeAreaView style= {tw `h-full w-full relative`}>
                {children}
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',

    }
})
