export const createNavigator = loader => navigate => ({
    toTransaction(id) {
        loader.loadTransaction(id);
        navigate('/transaction');
    }
});
