import { useState } from 'react';
import { StyleSheet } from 'react-native';

import AuthFooter from '../components/auth/AuthFooter';
import AuthLayout from '../components/auth/AuthLayout';
import BarnBackground from '../components/auth/BarnBackground';
import GameButton from '../components/common/GameButton';
import GameInput from '../components/common/GameInput';

export default function RegisterScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handlePressBack = () => {
        navigation.goBack();
    };

    const handlePressLogIn = () => {
        navigation.replace('Login');
    };

    return (
        <AuthLayout
            title='Register'
            background={<BarnBackground door='closed' />}
            style={styles.panel}
            onBack={handlePressBack}
        >
            <GameInput
                label='Username'
                value={username}
                onChangeText={setUsername}
                placeholder='Your player name'
                autoCapitalize='none'
                autoComplete='username'
            />
            <GameInput
                label='Email'
                value={email}
                onChangeText={setEmail}
                placeholder='you@example.com'
                keyboardType='email-address'
                autoCapitalize='none'
                autoComplete='email'
            />
            <GameInput
                label='Password'
                value={password}
                onChangeText={setPassword}
                placeholder='At least 8 characters'
                secureTextEntry
                autoCapitalize='none'
                autoComplete='new-password'
            />
            <GameInput
                label='Confirm password'
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder='Repeat password'
                secureTextEntry
                autoCapitalize='none'
                autoComplete='new-password'
            />
            <GameButton title='Create account' />
            <AuthFooter question='Already have a ram?' linkTitle='Log in' onPress={handlePressLogIn} />
        </AuthLayout>
    );
}

const styles = StyleSheet.create({
    panel: {
        gap: 10,
        paddingTop: 14,
        paddingBottom: 14,
    },
});
