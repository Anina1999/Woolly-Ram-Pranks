export default function getRoomPlayers(players, roomId) {
    return players.filter((player) => player.roomId === roomId);
}
