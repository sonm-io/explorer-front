import queryStr from 'query-string';
import get from 'lodash/fp/get';

const getLocation = get('location.pathname');
const getSearch = get('location.search');

export const createNavigate = history => ({
    path,
    query,
    mergeQuery,
}) => {
    if (path === undefined) {
        path = getLocation(history);
    }

    if (mergeQuery) {
        const existingQuery = queryStr.parse(getSearch(history));

        query = { ...existingQuery, ...mergeQuery };
    }

    if (query) {
        query = Object.keys(query).reduce((acc, key) => {
            if (query[key] !== undefined) {
                acc[key] = query[key];
            }

            return acc;
        }, {});
    }

    const url = (query instanceof Object && Object.keys(query).length > 0)
            ? `${path}?${queryStr.stringify(query)}`
            : path;

    history.push(url);

    return url;
}
