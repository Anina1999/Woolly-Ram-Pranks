const players = [
    { id: '1', roomId: '1', name: 'Bramble', host: true, you: true, ready: true },
    { id: '2', roomId: '1', name: 'Curly', host: false, you: false, ready: true },
    { id: '3', roomId: '1', name: 'Fleecy', host: false, you: false, ready: false },
    { id: '4', roomId: '2', name: 'Curly', host: true, you: false, ready: true },
    { id: '5', roomId: '4', name: 'Fleecy', host: true, you: false, ready: true },
    { id: '6', roomId: '4', name: 'Hornsby', host: false, you: false, ready: false },
    { id: '7', roomId: '6', name: 'Lambo', host: true, you: false, ready: true },
    { id: '8', roomId: '6', name: 'Mutton_Mo', host: false, you: false, ready: false },
];

export default players;
