import { StyleSheet } from 'react-native';
import { ThemeConfig } from '../../../config/theme';

export const buttonStyle = StyleSheet.create({
    button: {
        backgroundColor: ThemeConfig.colors.main,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16,
        borderRadius: 8,
    },
    title: {
        color: ThemeConfig.colors.lightGreen,
    },
});
