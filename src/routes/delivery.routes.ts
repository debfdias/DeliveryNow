import { Router } from 'express';

import { ensureAuthenticateDeliveryman } from '../middlewares/ensureAuthenticateDeliveryman';
import { ensureAuthenticateClient } from '../middlewares/ensureAuthenticateClient';

import { CreateDeliveryController } from '../modules/deliveries/useCases/createDelivery/CreateDeliveryController';
import { FindAllOpenDeliveriesController } from '../modules/deliveries/useCases/findAllOpenDeliveries/FindAllOpenDeliveriesController';
import { UpdateDeliverymanController } from '../modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController';
import { UpdateEndDateController } from '../modules/deliveries/useCases/updateEndDate/UpdateUseCaseController';

const deliveryRoutes = Router();

const createDeliveryController = new CreateDeliveryController();
const findAllOpenDeliveriesController = new FindAllOpenDeliveriesController();
const updateDeliverymanController = new UpdateDeliverymanController();
const updateEndDateController = new UpdateEndDateController();

deliveryRoutes.post('/', ensureAuthenticateClient, createDeliveryController.handle);
deliveryRoutes.get('/open', ensureAuthenticateDeliveryman, findAllOpenDeliveriesController.handle);
deliveryRoutes.put('/update-deliveryman/:delivery_id', ensureAuthenticateDeliveryman, updateDeliverymanController.handle);
deliveryRoutes.put('/update-enddate/:delivery_id', ensureAuthenticateDeliveryman, updateEndDateController.handle);

export { deliveryRoutes };