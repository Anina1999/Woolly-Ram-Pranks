const BANDANA_NAMES = {
    '#E04436': 'Red',
    '#3B7DDD': 'Blue',
    '#F2C12E': 'Yellow',
    '#4DAE45': 'Green',
    '#9558D3': 'Purple',
};

export default function getBandanaName(bandana) {
    return BANDANA_NAMES[bandana];
}
