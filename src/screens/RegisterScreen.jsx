import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

import AuthFooter from '../components/auth/AuthFooter';
import AuthLayout from '../components/auth/AuthLayout';
import GameButton from '../components/common/GameButton';

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
        <AuthLayout title='Join the farm' subtitle='Make a ram. Cause trouble.' onBack={handlePressBack}>
            <View>
                <Text>Username</Text>
                <TextInput
                    value={username}
                    onChangeText={setUsername}
                    placeholder='Your player name'
                    autoCapitalize='none'
                    autoComplete='username'
                />
                <Text>3–16 letters, numbers or _</Text>
            </View>
            <View>
                <Text>Email</Text>
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder='you@example.com'
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
                    placeholder='At least 8 characters'
                    secureTextEntry
                    autoCapitalize='none'
                    autoComplete='new-password'
                />
            </View>
            <View>
                <Text>Confirm password</Text>
                <TextInput
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    placeholder='Repeat password'
                    secureTextEntry
                    autoCapitalize='none'
                    autoComplete='new-password'
                />
            </View>
            <GameButton title='Create account' />
            <AuthFooter question='Already a player?' linkTitle='Log in' onPress={handlePressLogIn} />
        </AuthLayout>
    );
}
