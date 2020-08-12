import React from 'react';

import { StatusBar } from 'react-native';
import AppStack from './routes/AppStack';

const App: React.FC = () => (
    <>
        <AppStack />
        <StatusBar barStyle="light-content" />
    </>
);

export default App;
