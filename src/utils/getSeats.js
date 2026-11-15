const SEATS = 5;

export default function getSeats(players, maxPlayers) {
    return Array.from({ length: SEATS }, (_, index) => {
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
