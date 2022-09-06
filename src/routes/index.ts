import { Router } from 'express';

import { clientRoutes } from './client.routes';
import { deliverymanRoutes } from './deliveryman.routes';
import { deliveryRoutes } from './delivery.routes';

const routes = Router();

routes.use('/clients', clientRoutes);
routes.use('/deliveryman', deliverymanRoutes);
routes.use('/deliveries', deliveryRoutes);

export { routes };