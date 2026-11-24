export default function getRoomStatus(players, host, isHost, isReady, hasEnoughPlayers) {
    if (!isHost && !isReady) {
        return 'Tap “I’m ready” when you’re set.';
    }

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

    return `Waiting for ${host.name} to start…`;
}
