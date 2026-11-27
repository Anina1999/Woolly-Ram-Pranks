import { useState } from 'react';
import { Keyboard } from 'react-native';

import AuthFooter from '../components/auth/AuthFooter';
import AuthLayout from '../components/auth/AuthLayout';
import BarnBackground from '../components/auth/BarnBackground';
import FormError from '../components/common/FormError';
import GameButton from '../components/common/GameButton';
import GameInput from '../components/common/GameInput';
import MailIcon from '../components/icons/MailIcon';
import PasswordIcon from '../components/icons/PasswordIcon';
import ServerError from '../components/auth/ServerError';

import useAuthContext from '../contexts/auth-context/useAuthContext';

import validateLogin from '../utils/validateLogin';

export default function LoginScreen({ navigation }) {
    const { login } = useAuthContext();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const [isServerErrorVisible, setIsServerErrorVisible] = useState(false);

    const errors = validateLogin({ email, password });

    const handlePressBack = () => {
        navigation.goBack();
    };

    const handlePressRegister = () => {
        navigation.replace('Register');
    };

    const handlePressLogIn = async () => {
        Keyboard.dismiss();
        setIsSubmitted(true);
        setSubmitError('');
        setIsServerErrorVisible(false);

        if (errors.email || errors.password) {
            return;
        }

        setIsSubmitting(true);

        try {
            await login(email.trim(), password);
        } catch (loginError) {
            if (loginError.code === 'invalid_credentials') {
                setSubmitError('Wrong email or password.');
            } else {
                setIsServerErrorVisible(true);
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AuthLayout
            title='Log in'
            subtitle='The sheep missed you. Probably.'
            background={<BarnBackground door='open' />}
            onBack={handlePressBack}
        >
            {isServerErrorVisible && <ServerError />}
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
            <GameButton
                title={isServerErrorVisible ? 'Try again' : 'Log in'}
                isLoading={isSubmitting}
                loadingTitle='Logging in…'
                onPress={handlePressLogIn}
            />
            {submitError !== '' && <FormError message={submitError} />}
            <AuthFooter question='New here?' linkTitle='Register' onPress={handlePressRegister} />
        </AuthLayout>
    );
}
