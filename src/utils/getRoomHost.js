import getRoomPlayers from './getRoomPlayers';

export default function getRoomHost(players, roomId) {
    return getRoomPlayers(players, roomId).find((player) => player.host);
}
