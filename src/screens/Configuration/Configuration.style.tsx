import { StyleSheet } from 'react-native';

import { ThemeConfig } from '../../config/theme';

export const configurationScreenStyle = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        marginTop: 32,
        textAlign: 'center',
        fontSize: 16,
    },
    enterContainer: {
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        marginTop: 16,
    },
    input: {
        borderColor: ThemeConfig.colors.secondaryColor,
        width: '100%',
        borderWidth: 1,
        padding: 16,
    },
});
