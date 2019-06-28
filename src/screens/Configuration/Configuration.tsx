import * as React from 'react';

import Axios from 'axios';

import { View } from 'react-native';
import { Text, Layout, Input, Button } from 'react-native-ui-kitten';

import { configurationScreenStyle } from './Configuration.style';

interface IConfigurationScreenProps { }

interface IConfigurationScreenState {
    ip: string;
}

export class ConfigurationScreen extends React.Component<IConfigurationScreenProps, IConfigurationScreenState> {
    state: IConfigurationScreenState = {
        ip: '',
    };

    private onIpChange = (ip: string) => this.setState({ ip });

    private onSearchPress = async () => {
        const { ip } = this.state;
        if (ip) {
            try {
                const response = await Axios.get(ip);
                console.log(response);
            } catch (err) {
                console.log(err);
            }

        }
    }

    render() {
        const { ip } = this.state;
        return (
            <Layout style={configurationScreenStyle.container}>
                <Text category={'h1'} style={configurationScreenStyle.title}>Sup boi!</Text>
                <Text category={'h4'} style={configurationScreenStyle.subtitle}>Enter Lul-IoT device IP, pliz</Text>

                <View style={configurationScreenStyle.enterContainer}>
                    <Input
                        value={ip}
                        placeholder={'Enter device IP'}
                        onChangeText={this.onIpChange}
                    />
                    <Button
                        style={configurationScreenStyle.button}
                        onPress={this.onSearchPress}
                    >
                        So, let's search this ip
                    </Button>
                </View>
            </Layout>
        );
    }
}
