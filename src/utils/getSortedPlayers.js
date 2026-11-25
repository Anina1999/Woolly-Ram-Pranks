export default function getSortedPlayers(players, sortBy) {
    const sortedPlayers = [...players];

    if (sortBy === 'wins') {
        sortedPlayers.sort((a, b) => b.wins - a.wins);
    } else {
        sortedPlayers.sort((a, b) => a.bestTimeSeconds - b.bestTimeSeconds);
    }

    return sortedPlayers;
}
