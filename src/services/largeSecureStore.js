import 'react-native-get-random-values';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as aesjs from 'aes-js';
import * as SecureStore from 'expo-secure-store';

const KEY_SIZE_IN_BYTES = 32;

async function encrypt(key, value) {
    const encryptionKey = crypto.getRandomValues(new Uint8Array(KEY_SIZE_IN_BYTES));
    const cipher = new aesjs.ModeOfOperation.ctr(encryptionKey, new aesjs.Counter(1));
    const encryptedBytes = cipher.encrypt(aesjs.utils.utf8.toBytes(value));

    await SecureStore.setItemAsync(key, aesjs.utils.hex.fromBytes(encryptionKey));

    return aesjs.utils.hex.fromBytes(encryptedBytes);
}

async function decrypt(key, value) {
    const encryptionKeyHex = await SecureStore.getItemAsync(key);

    if (!encryptionKeyHex) {
        return null;
    }

    const encryptionKey = aesjs.utils.hex.toBytes(encryptionKeyHex);
    const cipher = new aesjs.ModeOfOperation.ctr(encryptionKey, new aesjs.Counter(1));
    const decryptedBytes = cipher.decrypt(aesjs.utils.hex.toBytes(value));

    return aesjs.utils.utf8.fromBytes(decryptedBytes);
}

const largeSecureStore = {
    getItem: async (key) => {
        const encryptedValue = await AsyncStorage.getItem(key);

        if (!encryptedValue) {
            return null;
        }

        return decrypt(key, encryptedValue);
    },
    setItem: async (key, value) => {
        const encryptedValue = await encrypt(key, value);

        await AsyncStorage.setItem(key, encryptedValue);
    },
    removeItem: async (key) => {
        await AsyncStorage.removeItem(key);
        await SecureStore.deleteItemAsync(key);
    },
};

export default largeSecureStore;
