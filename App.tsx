import { ActivityIndicator } from 'react-native'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'; 
import { ThemeProvider } from 'styled-components';

import { Groups } from '@screens/Groups';

import theme from '@theme/index';

export default function App() {
 const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

 if (!fontsLoaded) {
   return (
     <ThemeProvider theme={theme}>
       <ActivityIndicator />
     </ThemeProvider>
   );
 }

  return (
    <ThemeProvider theme={theme}>
      <Groups />
    </ThemeProvider>
  );
}