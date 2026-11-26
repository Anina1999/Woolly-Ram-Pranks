import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AuthFooter from '../components/auth/AuthFooter';
import AuthLayout from '../components/auth/AuthLayout';
import BarnBackground from '../components/auth/BarnBackground';
import GameButton from '../components/common/GameButton';
import GameInput from '../components/common/GameInput';
import MailIcon from '../components/icons/MailIcon';
import PasswordIcon from '../components/icons/PasswordIcon';

import { colors, fonts } from '../styles/theme';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlePressBack = () => {
        navigation.goBack();
    };

    const handlePressRegister = () => {
        navigation.replace('Register');
    };

    return (
        <AuthLayout
            title='Welcome back'
            background={<BarnBackground door='open' />}
            onBack={handlePressBack}
        >
            <View style={styles.tagline}>
                <Text style={styles.taglineText}>The sheep missed you.</Text>
                <Text style={styles.taglineAccent}>Probably.</Text>
            </View>
            <GameInput
                label='Email'
                icon={<MailIcon />}
                value={email}
                onChangeText={setEmail}
                placeholder='bramble@farm.io'
                keyboardType='email-address'
                autoCapitalize='none'
                autoComplete='email'
            />
            <GameInput
                label='Password'
                icon={<PasswordIcon />}
                value={password}
                onChangeText={setPassword}
                placeholder='Your password'
                secureTextEntry
                autoCapitalize='none'
                autoComplete='password'
            />
            <GameButton title='Log in' />
            <AuthFooter question='New here?' linkTitle='Register' onPress={handlePressRegister} />
        </AuthLayout>
    );
}

const styles = StyleSheet.create({
    tagline: {
        gap: 2,
    },
    taglineText: {
        fontFamily: fonts.extraBold,
        fontSize: 17,
        lineHeight: 22,
        color: colors.text,
    },
    taglineAccent: {
        fontFamily: fonts.boldItalic,
        fontSize: 15,
        lineHeight: 20,
        color: colors.taglineAccent,
    },
});
