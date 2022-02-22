import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import {RecoilRoot} from 'recoil';
import {QueryClientProvider, QueryClient} from 'react-query';
import * as Fonts from 'expo-font';
import {useCallback, useState, useEffect} from 'react';
import {Layout, Spinner, Text} from '@ui-kitten/components'

// navigation Component
import NavigationRoot from './src/navigation';

export const queryClient = new QueryClient();

export default function App() {
  const [loaded, setLoaded] = useState(false);

  const loadFonts = useCallback( async() => {
    await Fonts.loadAsync({
      PoppinsBold: {
        uri: require('./assets/fonts/Poppins-Bold.ttf'),
        display: Fonts.FontDisplay.FALLBACK,
      },
      PoppinsSemiBold: {
        uri: require('./assets/fonts/Poppins-SemiBold.ttf'),
        display: Fonts.FontDisplay.FALLBACK,
      },
      RobotoRegular: {
        uri: require('./assets/fonts/Roboto-Regular.ttf'),
        display: Fonts.FontDisplay.FALLBACK,
      },
      RobotoLight: {
        uri: require('./assets/fonts/Roboto-Light.ttf'),
        display: Fonts.FontDisplay.FALLBACK,
      },
    });
    setLoaded(true);
  }, []);

  useEffect(() => {
    loadFonts();
  }, []);


  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          {!loaded && (
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Spinner status="info" size="large" />
              <Text>Loading...</Text>
            </Layout>
          )}
         {loaded &&  <NavigationRoot />}
        </QueryClientProvider>
      </RecoilRoot>
    </ApplicationProvider>
  );
}

