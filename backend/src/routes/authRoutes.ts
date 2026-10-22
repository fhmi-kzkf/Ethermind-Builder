import { Router } from 'express';
import { AuthController, createStaffSchema, demoSchema, loginSchema, registerSchema } from '../controllers/authController';
import { authenticate, requireRole } from '../middleware/auth';
import { rateLimiter } from '../middleware/rateLimiter';
import { validateBody } from '../middleware/validator';

const router = Router();

// Credential endpoints get a much tighter limit than the rest of the API.
const credentialLimit = rateLimiter({ limit: 10, windowMs: 15 * 60 * 1000, keyPrefix: 'auth' });

router.post('/register', credentialLimit, validateBody(registerSchema), AuthController.register);
router.post('/login', credentialLimit, validateBody(loginSchema), AuthController.login);
router.post('/firebase-sso', credentialLimit, AuthController.firebaseSso);
router.post('/sso', credentialLimit, AuthController.firebaseSso);
router.post('/demo', credentialLimit, validateBody(demoSchema), AuthController.demo);
router.get('/me', authenticate, AuthController.me);
router.post('/staff', authenticate, requireRole('admin'), validateBody(createStaffSchema), AuthController.createStaff);

export default router;
