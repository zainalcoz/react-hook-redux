import { GET_LIST_KONTAK, ADD_KONTAK, DELETE_KONTAK, DETAIL_KONTAK, UPDATE_KONTAK } from '../../actions/kontakAction'

const initialState = {
    getListKontakLoading: false,
    getListKontakData: false,
    getListKontakError: false,

    //addListKontakLoading: false,
    //addListKontakData: false,
    //addListKontakError: false,

    //deleteListKontakLoading: false,
    //deleteListKontakData: false,
    //deleteListKontakError: false,

    addKontakData: false,
    deleteKontakData: false,
    detailKontakData: false,
    updateKontakData: false,
}

const kontak = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_KONTAK:
            return {
                ...state,
                getListKontakLoading: action.payload.loading,
                getListKontakData: action.payload.data,
                getListKontakError: action.payload.errorMessage,
            }
        case ADD_KONTAK:
            return {
                ...state,
                //addListKontakLoading: action.payload.loading,
                //addListKontakData: action.payload.data,
                //addListKontakError: action.payload.errorMessage,
                addKontakData: action.payload.data
            }
        case DELETE_KONTAK:
            return {
                ...state,
                //deleteListKontakLoading: action.payload.loading,
                //deleteListKontakData: action.payload.data,
                //deleteListKontakError: action.payload.errorMessage,
                deleteKontakData: action.payload.data
            }
        case DETAIL_KONTAK:
            return {
                ...state,
                detailKontakData: action.payload.data
            }
        case UPDATE_KONTAK:
            return {
                ...state,
                updateKontakData: action.payload.data
            }
        default:
            return state;
    }
}

export default kontak