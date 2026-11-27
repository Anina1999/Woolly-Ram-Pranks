import { useRef, useState } from 'react';
import { Keyboard, StyleSheet } from 'react-native';

import AuthFooter from '../components/auth/AuthFooter';
import AuthLayout from '../components/auth/AuthLayout';
import BarnBackground from '../components/auth/BarnBackground';
import GameButton from '../components/common/GameButton';
import GameInput from '../components/common/GameInput';

import validateRegister, { MAX_USERNAME_LENGTH } from '../utils/validateRegister';

export default function RegisterScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);
    const confirmPasswordInputRef = useRef(null);

    const errors = validateRegister({ username, email, password, confirmPassword });

    const handlePressBack = () => {
        navigation.goBack();
    };

    const handlePressLogIn = () => {
        navigation.replace('Login');
    };

    const handleSubmitUsername = () => {
        emailInputRef.current.focus();
    };

    const handleSubmitEmail = () => {
        passwordInputRef.current.focus();
    };

    const handleSubmitPassword = () => {
        confirmPasswordInputRef.current.focus();
    };

    const handlePressCreateAccount = () => {
        Keyboard.dismiss();
        setIsSubmitted(true);
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
                error={isSubmitted ? errors.username : ''}
                value={username}
                onChangeText={setUsername}
                maxLength={MAX_USERNAME_LENGTH}
                placeholder='Your player name'
                autoCapitalize='none'
                autoComplete='username'
                returnKeyType='next'
                submitBehavior='submit'
                onSubmitEditing={handleSubmitUsername}
            />
            <GameInput
                ref={emailInputRef}
                label='Email'
                error={isSubmitted ? errors.email : ''}
                value={email}
                onChangeText={setEmail}
                placeholder='you@example.com'
                keyboardType='email-address'
                autoCapitalize='none'
                autoComplete='email'
                returnKeyType='next'
                submitBehavior='submit'
                onSubmitEditing={handleSubmitEmail}
            />
            <GameInput
                ref={passwordInputRef}
                label='Password'
                error={isSubmitted ? errors.password : ''}
                value={password}
                onChangeText={setPassword}
                placeholder='8+ characters, no spaces'
                secureTextEntry
                autoCapitalize='none'
                autoComplete='new-password'
                returnKeyType='next'
                submitBehavior='submit'
                onSubmitEditing={handleSubmitPassword}
            />
            <GameInput
                ref={confirmPasswordInputRef}
                label='Confirm password'
                error={isSubmitted ? errors.confirmPassword : ''}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder='Repeat password'
                secureTextEntry
                autoCapitalize='none'
                autoComplete='new-password'
                returnKeyType='go'
                onSubmitEditing={handlePressCreateAccount}
            />
            <GameButton title='Create account' onPress={handlePressCreateAccount} />
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
