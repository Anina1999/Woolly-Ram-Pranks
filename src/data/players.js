const players = [
    { id: '1', roomId: '1', name: 'Bramble', host: true, you: true, ready: true, wool: 'black', bandana: '#E04436' },
    { id: '2', roomId: '1', name: 'Curly', host: false, you: false, ready: true, wool: 'beige', bandana: '#3B7DDD' },
    { id: '3', roomId: '1', name: 'Fleecy', host: false, you: false, ready: false, wool: 'brown', bandana: '#F2C12E' },
    { id: '4', roomId: '2', name: 'Curly', host: true, you: false, ready: true, wool: 'beige', bandana: '#3B7DDD' },
    { id: '5', roomId: '4', name: 'Fleecy', host: true, you: false, ready: true, wool: 'brown', bandana: '#F2C12E' },
    { id: '6', roomId: '4', name: 'Hornsby', host: false, you: true, ready: false, wool: 'grey', bandana: '#4DAE45' },
    { id: '7', roomId: '6', name: 'Lambo', host: true, you: false, ready: true, wool: 'black', bandana: '#E04436' },
    { id: '8', roomId: '6', name: 'Mutton_Mo', host: false, you: false, ready: false, wool: 'rust', bandana: '#9558D3' },
];

export default players;
