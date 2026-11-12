import { Image, StyleSheet } from 'react-native';

export default function TabIcon({ source, color }) {
    return <Image source={source} style={[styles.icon, { tintColor: color }]} />;
}

const styles = StyleSheet.create({
    icon: {
        width: 22,
        height: 22,
    },
});
