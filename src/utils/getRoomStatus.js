export default function getRoomStatus(players, isHost, canStart) {
    if (!canStart) {
        const notReadyNames = players
            .filter((player) => !player.ready)
            .map((player) => player.name);

        if (notReadyNames.length === 0) {
            return 'Waiting for more rams to join…';
        }

        return `Waiting for ${notReadyNames.join(', ')} to be ready…`;
    }

    if (isHost) {
        return `Everyone is ready. Start with ${players.length} rams!`;
    }

    const host = players.find((player) => player.host);

    return `Waiting for ${host.name} to start…`;
}
