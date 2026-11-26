import { useState } from 'react';
import { Keyboard } from 'react-native';

import AuthFooter from '../components/auth/AuthFooter';
import AuthLayout from '../components/auth/AuthLayout';
import BarnBackground from '../components/auth/BarnBackground';
import GameButton from '../components/common/GameButton';
import GameInput from '../components/common/GameInput';
import MailIcon from '../components/icons/MailIcon';
import PasswordIcon from '../components/icons/PasswordIcon';

import validateLogin from '../utils/validateLogin';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const errors = validateLogin({ email, password });

    const handlePressBack = () => {
        navigation.goBack();
    };

    const handlePressRegister = () => {
        navigation.replace('Register');
    };

    const handlePressLogIn = () => {
        Keyboard.dismiss();
        setIsSubmitted(true);
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
                error={isSubmitted ? errors.email : ''}
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
                error={isSubmitted ? errors.password : ''}
                value={password}
                onChangeText={setPassword}
                placeholder='Your password'
                secureTextEntry
                autoCapitalize='none'
                autoComplete='password'
            />
            <GameButton title='Log in' onPress={handlePressLogIn} />
            <AuthFooter question='New here?' linkTitle='Register' onPress={handlePressRegister} />
        </AuthLayout>
    );
}
