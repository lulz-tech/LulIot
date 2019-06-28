import * as React from 'react';

import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { buttonStyle } from './Button.style';

interface IButtonProps extends TouchableOpacityProps {
    title: string;
}

export const Button: React.FC<IButtonProps> = (props) => {
    const { title, style, ...touchableProps } = props;
    return (
        <TouchableOpacity {...touchableProps} style={[buttonStyle.button, style]}>
            <Text style={buttonStyle.title}>{title}</Text>
        </TouchableOpacity>
    );
};
