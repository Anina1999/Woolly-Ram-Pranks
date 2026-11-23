import IconButton from './IconButton';

export default function RefreshButton({ isDisabled, accessibilityLabel, onPress }) {
    return (
        <IconButton
            icon='rotate-cw'
            isDisabled={isDisabled}
            accessibilityLabel={accessibilityLabel}
            onPress={onPress}
        />
    );
}
