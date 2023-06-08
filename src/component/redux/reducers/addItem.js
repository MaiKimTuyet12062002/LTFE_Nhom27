const addItem = [];

const addItems = (state = addItem, action) => {
    switch (action.type) {
        case "ADDITEM" :
            return [
                ...state,
                action.payload
            ]
            break;

        case "DELITEM" :
            return state = state.filter((x) => {
                return x.id !== action.payload.id
            })
            break;

        case "DEC_ITEM":
            const item = action.payload;
            const index = state.findIndex(x => x.id === item.id);
            if (index >= 0) {
                const quantity = state[index].quantity - 1;
                if (quantity > 0) {
                    return [...state.slice(0, index), {...item, quantity}, ...state.slice(index + 1)];
                } else {
                    return [...state.slice(0, index), ...state.slice(index + 1)];
                }
            } else {
                return state;
            }
        default:
            return state;
            break;


    }
}

export default addItems;