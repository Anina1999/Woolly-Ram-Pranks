import { colors } from '../styles/theme';

const STATUS_COLORS = {
    WAITING: { background: colors.waitingBackground, text: colors.waitingText, dot: colors.success },
    PLAYING: { background: colors.playingBackground, text: colors.playingText, dot: colors.warning },
    'YOU’RE IN': { background: colors.inRoomBackground, text: colors.inRoomText, dot: colors.inRoomDot },
};

export default function getStatusColors(status) {
    return STATUS_COLORS[status];
}
