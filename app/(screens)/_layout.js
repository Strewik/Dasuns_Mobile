import {Stack} from "expo-router";

export default function Layout(){
    return (
        <Stack screenOptions={{headerShown:false}}>
            <Stack.Screen name="index"/>
            <Stack.Screen name="blogList"/>
            <Stack.Screen name="WalletDetails"/>
            <Stack.Screen name="appointmentDetails"/>
        </Stack>
    )
}