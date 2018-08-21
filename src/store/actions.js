const actions = api => store => ({
    async fetchList(state, filter) {
        store.setState({ isListLoading: true });

        const list = api.getList(filter);

        store.setState({ isListLoading: false, list });
    },
});
