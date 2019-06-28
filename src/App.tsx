import * as React from 'react';
import { View } from 'react-native';

import { ConfigurationScreen } from './screens/Configuration/Configuration';

interface IAppProps { }

export default class App extends React.Component<IAppProps> {
    render() {
        return (
            <View>
                <ConfigurationScreen />
            </View>
        );
    }
}
