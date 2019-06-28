import * as React from 'react';

import { Store, AnyAction } from 'redux';
import { Provider } from 'react-redux';

import { mapping } from '@eva-design/eva';
import { ApplicationProvider, Layout } from 'react-native-ui-kitten';
import { theme } from './config/theme';

import { ConfigurationScreen } from './screens/Configuration/Configuration';
import { StatusBar, View } from 'react-native';

import { configureApplicationStore } from './store';
import { IApplicationStore } from './store/interfaces/Store';

interface IAppProps { }
interface IAppState {
    isLoading: boolean;
    store: Store<IApplicationStore, AnyAction>;
}

export default class App extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);

        this.state = {
            isLoading: true,
            store: configureApplicationStore(this.onStoreConfigured),
        };

        (console as any).disableYellowBox = true;
    }

    private onStoreConfigured = () => {
        this.setState({
            isLoading: false,
        });
    }

    render() {
        return (
            <>
                <StatusBar backgroundColor="blue" barStyle="light-content" />
                <ApplicationProvider
                    mapping={mapping}
                    theme={theme}
                >
                    {
                        this.state.isLoading ?
                            (
                                <View />
                            )
                            :
                            (
                                <Provider store={this.state.store}>
                                    <ConfigurationScreen />
                                </Provider>
                            )
                    }
                </ApplicationProvider>
            </>
        );
    }
}
