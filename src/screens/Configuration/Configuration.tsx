import * as React from 'react';

import Axios from 'axios';

import { View, Text, TextInput, SafeAreaView } from 'react-native';

import { Button } from '../../components/shared/button/Button';

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
            <SafeAreaView style={configurationScreenStyle.container}>
                <Text style={configurationScreenStyle.title}>Sup boi, enter LulIot device IP, pliz</Text>

                <View style={configurationScreenStyle.enterContainer}>
                    <TextInput
                        value={ip}
                        placeholder={'Enter device IP'}
                        onChangeText={this.onIpChange}
                        style={configurationScreenStyle.input}
                    />
                    <Button
                        title={'So, let\'s search this ip'}
                        style={configurationScreenStyle.button}
                        onPress={this.onSearchPress}
                    />
                </View>
            </SafeAreaView>
        );
    }
}
