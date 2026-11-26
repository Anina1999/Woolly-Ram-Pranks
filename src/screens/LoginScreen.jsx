import { useState } from 'react';

import AuthFooter from '../components/auth/AuthFooter';
import AuthLayout from '../components/auth/AuthLayout';
import BarnBackground from '../components/auth/BarnBackground';
import GameButton from '../components/common/GameButton';
import GameInput from '../components/common/GameInput';
import MailIcon from '../components/icons/MailIcon';
import PasswordIcon from '../components/icons/PasswordIcon';

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
            title='Log in'
            subtitle='The sheep missed you. Probably.'
            background={<BarnBackground door='open' />}
            onBack={handlePressBack}
        >
            <GameInput
                label='Email'
                icon={<MailIcon />}
                value={email}
                onChangeText={setEmail}
                placeholder='you@example.com'
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
