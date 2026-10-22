import express, { Router } from 'express';
import { AttachmentController } from '../controllers/attachmentController';
import { ChatController, sendMessageSchema } from '../controllers/chatController';
import { ExportController } from '../controllers/exportController';
import { LiveController, publishSchema } from '../controllers/liveController';
import { PaymentController } from '../controllers/paymentController';
import { createProjectSchema, ProjectController } from '../controllers/projectController';
import { createRevisionSchema, RevisionController } from '../controllers/revisionController';
import { SpecController } from '../controllers/specController';
import { authenticate } from '../middleware/auth';
import { validateBody } from '../middleware/validator';

const router = Router();

// Projects CRUD
router.get('/', authenticate, ProjectController.listProjects);
router.post('/', authenticate, validateBody(createProjectSchema), ProjectController.createProject);
router.get('/:id', authenticate, ProjectController.getProject);
router.delete('/:id', authenticate, ProjectController.deleteProject);
router.post('/:id/preview/start', authenticate, ProjectController.startPreview);
router.get('/:id/credentials', authenticate, ProjectController.getCredentials);
router.post('/:id/attachments', authenticate, express.json({ limit: '6mb' }), AttachmentController.upload);
router.get('/:id/attachments/:attId', authenticate, AttachmentController.download);
router.get('/:id/versions', authenticate, ProjectController.listVersions);
router.post('/:id/versions/:versionId/restore', authenticate, ProjectController.restoreVersion);

// Chat & Clarification
router.get('/:id/messages', authenticate, ChatController.getMessages);
router.post('/:id/messages', authenticate, validateBody(sendMessageSchema), ChatController.sendMessage);

// Specs & Build trigger
router.get('/:id/spec', authenticate, SpecController.getSpec);
router.post('/:id/spec/approve', authenticate, SpecController.approveSpec);

// Revision requests
router.post('/:id/revisions', authenticate, validateBody(createRevisionSchema), RevisionController.createRevision);

// Paying for the source download (QRIS)
router.get('/:id/payment', authenticate, PaymentController.getState);
router.post('/:id/payment', authenticate, PaymentController.createOrder);
router.post('/:id/payment/report', authenticate, PaymentController.report);

// Live link: publish a version under a public name, with its own data
router.get('/:id/live', authenticate, LiveController.getState);
router.post('/:id/live', authenticate, validateBody(publishSchema), LiveController.publish);
router.delete('/:id/live', authenticate, LiveController.unpublish);

// Export ZIP
router.get('/:id/export', authenticate, ExportController.exportProject);

export default router;
