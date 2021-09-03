export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // REMOVE after finshed developing
    token: 'BQAiotLUTb2Ianr4ImYUZ9sd9FHWnTU-lxJDotheyZv6RK7aDk8H0pgFwo0WWfaR4bitgG78CgO-IXCmUFem9fG1M8jU86b1IBur9kC_1OGoBZZbP1VpoVw1kbQFX6iLTbht6ohx91XjX2aGn8cdGHUHggUERWIz4x9i8-gXrUbF5UiNWVHr'
};

const reducer = (state, action) => {
    // VERY IMPORTANT
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        default:
            return state;
    }
}

export default reducer;