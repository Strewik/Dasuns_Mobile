import {Stack} from "expo-router";

export default function Layout(){

  const userType = 'client';

    return (
        <Stack screenOptions={{headerShown:false}}>
           
         {userType === 'admin' && (
           <Stack.Screen name="AdminDashScreen"/>
         )}
         {userType === 'serviceProvider' && (
           <Stack.Screen name="SPDashScreen"  />
         )}
         {userType === 'client' && (
           <Stack.Screen name="DashboardScreen" 
          //  options={{ title: 'Dashboard' }} 
           />
         )}
       </Stack>
    )
}