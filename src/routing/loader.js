export const createLoader = store => {
    loadTransactionList: (offset, limit, filter) => {
        store.loadTransactionList(offset, limit, filter);
    }
};

