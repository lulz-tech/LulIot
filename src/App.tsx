import * as React from 'react';

import { mapping } from '@eva-design/eva';
import { ApplicationProvider, Layout } from 'react-native-ui-kitten';
import { theme } from './config/theme';

import { ConfigurationScreen } from './screens/Configuration/Configuration';

interface IAppProps { }

export default class App extends React.Component<IAppProps> {
    render() {
        return (
            <ApplicationProvider
                mapping={mapping}
                theme={theme}
            >
                <ConfigurationScreen />
            </ApplicationProvider>
        );
    }
}
