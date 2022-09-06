import { Router } from 'express';

import { ensureAuthenticateDeliveryman } from '../middlewares/ensureAuthenticateDeliveryman';
import { CreateDeliverymanController } from '../modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';
import { FindDeliverymanDeliveriesController } from '../modules/deliveryman/useCases/findDeliverymanDeliveries/FindDeliverymanDeliveriesController';
import { AuthenticateDeliverymanController } from '../modules/session/useCases/authenticateDeliveryman/AuthenticateDeliverymanController';

const deliverymanRoutes = Router();

const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();
const findDeliverymanDeliveriesController = new FindDeliverymanDeliveriesController();

deliverymanRoutes.post('/', createDeliverymanController.handle);
deliverymanRoutes.post('/authenticate', authenticateDeliverymanController.handle);
deliverymanRoutes.get('/deliveries', ensureAuthenticateDeliveryman, findDeliverymanDeliveriesController.handle);

export { deliverymanRoutes };