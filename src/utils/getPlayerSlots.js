const PLAYER_SLOTS = 5;

export default function getPlayerSlots(players, maxPlayers) {
    return Array.from({ length: PLAYER_SLOTS }, (_, index) => {
        const id = String(index);

        if (index < players.length) {
            return { id, type: 'player', player: players[index] };
        }

        if (index < maxPlayers) {
            return { id, type: 'open' };
        }

        return { id, type: 'closed' };
    });
}
