export const CHANGE_PAGE = 'CHANGE_PAGE';

export const pageNumberSelector = state => state.paginations.pageNumber;
export const offsetSelector = state => state.paginations.offset;
export const pageLimitSelector = state => state.paginations.pageLimit;

export const ACTION_CHANGE_PAGE = (pageNumber) => ({
    type: CHANGE_PAGE,
    pageNumber,
    offset: (pageNumber - 1) * 10
});

export const initialPaginationsState = {
    pageNumber: 1,
    offset: 0,
    pageLimit: 10
};

export const paginationsReducer = (state = initialPaginationsState, action) => {
    switch (action.type) {
        case CHANGE_PAGE:
            return { ...state, pageNumber: action.pageNumber, offset: action.offset }
        default:
            return { ...state };
    }

};