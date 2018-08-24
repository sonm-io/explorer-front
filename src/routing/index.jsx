import Router from 'universal-router';
import { createNavigate } from './navigate';
import { createRoutes } from './routes';
import { createLoader } from './loader';
import { createNavigator } from './navigator';
import { createHashHistory } from 'history';

export const history = createHashHistory();
export const navigate = createNavigate(history);
export const loader = createLoader(store);
export const navigator = createNavigator(loader)(navigate);
export const routes = createRoutes(loader)(navigator);

const router = new Router(routes, {});

export const resolve = router.resolve.bind(router);
