import { StyleSheet, Text, View } from 'react-native';

import CrownIcon from '../icons/CrownIcon';
import Ram from '../characters/Ram';

import { colors, fonts } from '../../styles/theme';

export default function PodiumPlace({ player, place, value }) {
    const isFirst = place === 1;
    const isSecond = place === 2;
    const isThird = place === 3;

    let ramSize = 84;
    if (isFirst) {
        ramSize = 96;
    } else if (isSecond) {
        ramSize = 88;
    }

    return (
        <View style={[styles.place, isFirst && styles.placeFirst]}>
            {isFirst && (
                <View style={styles.crown}>
                    <CrownIcon size={30} color={colors.winnerCrown} strokeColor={colors.winnerCrownEdge} />
                </View>
            )}
            <Ram wool={player.wool} bandana={player.bandana} pose='idle' size={ramSize} />
            <Text style={styles.name}>{player.name}</Text>
            <View
                style={[
                    styles.block,
                    isFirst && styles.blockFirst,
                    isSecond && styles.blockSecond,
                    isThird && styles.blockThird,
                ]}
            >
                <Text
                    style={[
                        styles.number,
                        isFirst && styles.numberFirst,
                        isSecond && styles.numberSecond,
                        isThird && styles.textThird,
                    ]}
                >
                    {place}
                </Text>
                <Text
                    style={[
                        styles.value,
                        isFirst && styles.valueFirst,
                        isSecond && styles.valueSecond,
                        isThird && styles.textThird,
                    ]}
                >
                    {value}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    place: {
        alignItems: 'center',
        width: 104,
    },
    placeFirst: {
        width: 96,
    },
    crown: {
        filter: 'drop-shadow(0px 0px 5px rgba(255, 214, 102, 0.95))',
    },
    name: {
        fontFamily: fonts.extraBold,
        fontSize: 13,
        color: colors.textOnScene,
        textShadowColor: colors.text,
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 1,
    },
    block: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 4,
        borderWidth: 3,
        borderBottomWidth: 0,
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
    },
    blockFirst: {
        height: 72,
        borderColor: colors.firstPlaceEdge,
        backgroundColor: colors.firstPlace,
        boxShadow: '0px 0px 18px rgba(255, 214, 102, 0.75)',
    },
    blockSecond: {
        height: 54,
        borderColor: colors.secondPlaceEdge,
        backgroundColor: colors.secondPlace,
    },
    blockThird: {
        height: 46,
        borderColor: colors.thirdPlaceEdge,
        backgroundColor: colors.thirdPlace,
    },
    number: {
        fontFamily: fonts.display,
        fontSize: 20,
    },
    numberFirst: {
        fontSize: 26,
        color: colors.firstPlaceText,
    },
    numberSecond: {
        fontSize: 22,
        color: colors.secondPlaceText,
    },
    value: {
        fontFamily: fonts.display,
        fontSize: 15,
    },
    valueFirst: {
        fontSize: 16,
        color: colors.firstPlaceText,
    },
    valueSecond: {
        color: colors.secondPlaceText,
    },
    textThird: {
        color: colors.thirdPlaceText,
    },
});
