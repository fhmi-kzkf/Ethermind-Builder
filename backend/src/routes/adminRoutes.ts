import { Router } from 'express';
import { AdminController } from '../controllers/adminController';
import { PaymentController } from '../controllers/paymentController';
import { authenticate, requireRole } from '../middleware/auth';

const router = Router();

// Operator/Admin only
router.use(authenticate, requireRole('operator', 'admin'));

router.get('/jobs', AdminController.listAllJobs);
router.get('/metrics', AdminController.getMetrics);
router.get('/system', AdminController.system);
router.post('/maintenance/:task', AdminController.runMaintenance);
router.post('/jobs/:id/intervene', AdminController.intervene);

// QRIS orders wait here until an operator has seen the money arrive.
router.get('/payments', PaymentController.adminList);
router.post('/payments/:id/confirm', PaymentController.adminConfirm);
router.post('/payments/:id/reject', PaymentController.adminReject);

export default router;
