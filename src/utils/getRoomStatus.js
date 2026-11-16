export default function getRoomStatus(players, isHost, hasEnoughPlayers) {
    if (!hasEnoughPlayers) {
        return 'Invite at least one friend to start.';
    }

    const notReadyNames = players
        .filter((player) => !player.ready)
        .map((player) => player.name);

    if (notReadyNames.length > 0) {
        return `Waiting for ${notReadyNames.join(', ')} to be ready…`;
    }

    if (isHost) {
        return `Everyone is ready. Start with ${players.length} players!`;
    }

    const host = players.find((player) => player.host);

    return `Waiting for ${host.name} to start…`;
}
