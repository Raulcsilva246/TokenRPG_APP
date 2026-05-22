import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/app.routes';

export default function App() {
  return (
    <>
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  
    </>
  );
}
