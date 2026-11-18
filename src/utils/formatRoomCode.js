export const ROOM_CODE_LENGTH = 8;

export default function formatRoomCode(text) {
    const characters = text.replace(/[^A-Za-z0-9]/g, '').toUpperCase().slice(0, ROOM_CODE_LENGTH - 1);

    if (characters.length <= 3) {
        return characters;
    }

    return `${characters.slice(0, 3)}-${characters.slice(3)}`;
}
