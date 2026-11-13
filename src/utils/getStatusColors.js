const STATUS_COLORS = {
    WAITING: { background: '#DDF0E0', text: '#1F6B39', dot: '#2F8F4E' },
    PLAYING: { background: '#FBE7C2', text: '#7A4B12', dot: '#E39B17' },
};

export default function getStatusColors(status) {
    return STATUS_COLORS[status];
}
