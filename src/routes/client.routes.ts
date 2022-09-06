import { Router } from 'express';

import { ensureAuthenticateClient } from '../middlewares/ensureAuthenticateClient';
import { AuthenticateClientController } from '../modules/session/useCases/authenticateClient/AuthenticateClientController';
import { CreateClientController } from '../modules/clients/useCases/createClient/createClientController';
import { FindClientDeliveriesController } from '../modules/clients/useCases/findClientDeliveries/FindClientDeliveriesController';

const clientRoutes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const findClientDeliveriesController = new FindClientDeliveriesController();

clientRoutes.post('/', createClientController.handle);
clientRoutes.post('/authenticate', authenticateClientController.handle);
clientRoutes.get('/deliveries', ensureAuthenticateClient, findClientDeliveriesController.handle);

export { clientRoutes };