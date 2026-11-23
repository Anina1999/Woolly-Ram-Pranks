export const JOIN_ERROR_TEXTS = {
    ROOM_NOT_FOUND: 'This room is gone. Refresh the list and pick another one.',
    CODE_NOT_FOUND: 'Wrong code. Check with the host and try again.',
    ROOM_PRIVATE: 'This room is private.',
    ROOM_PLAYING: 'This game is already running. You can join when it ends.',
    ROOM_FULL: 'This room is full.',
};

export default function getJoinErrorText(error) {
    if (error.code === '23505') {
        return "You're already in a room. Leave it first, then try again.";
    }

    if (error.code === 'P0001') {
        return JOIN_ERROR_TEXTS[error.message];
    }

    return "Couldn't reach the farm. Check your connection and try again.";
}
