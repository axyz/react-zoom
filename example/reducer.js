export default (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE': return !state;
        case 'SHOW': return true;
        case 'HIDE': return false;
        default: return state;
    }
};
