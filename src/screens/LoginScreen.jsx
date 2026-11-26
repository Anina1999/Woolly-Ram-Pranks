import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

import AuthFooter from '../components/auth/AuthFooter';
import AuthLayout from '../components/auth/AuthLayout';
import GameButton from '../components/common/GameButton';

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
        <AuthLayout title='Welcome back' subtitle='The sheep missed you. Probably.' onBack={handlePressBack}>
            <View>
                <Text>Email</Text>
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder='bramble@farm.io'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoComplete='email'
                />
            </View>
            <View>
                <Text>Password</Text>
                <TextInput
                    value={password}
                    onChangeText={setPassword}
                    placeholder='Your password'
                    secureTextEntry
                    autoCapitalize='none'
                    autoComplete='password'
                />
            </View>
            <Text>Forgot password?</Text>
            <GameButton title='Log in' />
            <AuthFooter question='New here?' linkTitle='Register' onPress={handlePressRegister} />
        </AuthLayout>
    );
}
