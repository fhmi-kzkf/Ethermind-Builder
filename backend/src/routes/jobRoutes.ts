import { Router } from 'express';
import { JobController } from '../controllers/jobController';
import { authenticate } from '../middleware/auth';

const router = Router();

// The browser's EventSource cannot set headers, so the stream also accepts the token as ?token=.
// It is still verified like any other request, and the job must belong to the caller.
router.get('/:id/events', authenticate, JobController.streamEvents);

router.get('/:id', authenticate, JobController.getJob);
router.post('/:id/cancel', authenticate, JobController.cancelJob);
router.post('/:id/resume', authenticate, JobController.resumeJob);
router.post('/:id/retry', authenticate, JobController.retryJob);
router.get('/:id/gates', authenticate, JobController.getGates);

export default router;
