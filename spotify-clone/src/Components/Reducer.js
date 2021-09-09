export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // REMOVE after finshed developing
  token:
    "BQCYMZoE8GBQz0VPK9S7MiFbIUEhpVdyUrhH0opgy7OwxMwqKOuj-oTXHrGY0og6TUY-3TTVf5uUEF_HMmyGXOXIa_1F5-D6D3r4Bk_z_hxD-OBW305k53YOvk3nrNaRaph8u2Hl8aJ1c8NXgZmmBKI94S1uSakFAc86kqMa_pbLyAu4",
};

const reducer = (state, action) => {
  // VERY IMPORTANT
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_NORAH_JONES":
      return {
        ...state,
        norah_jones: action.norah_jones,
      };
    default:
      return state;
  }
};

export default reducer;
