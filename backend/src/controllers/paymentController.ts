import { NextFunction, Request, Response } from 'express';
import prisma from '../db/prisma';
import * as payments from '../services/payments/paymentService';
import { PaymentError } from '../services/payments/paymentService';

const isElevated = (req: Request) => req.user!.role === 'admin' || req.user!.role === 'operator';

/** The project, only if the caller owns it (operators may see any). A stranger gets the same 404 as a missing id. */
async function ownedProject(req: Request) {
  const { id } = req.params;
  return prisma.project.findFirst({ where: isElevated(req) ? { id } : { id, userId: req.user!.id }, select: { id: true } });
}

const handle =
  (fn: (req: Request, res: Response) => Promise<void>) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await fn(req, res);
    } catch (error) {
      if (error instanceof PaymentError) {
        res.status(error.status).json({ success: false, error: error.message });
        return;
      }
      next(error);
    }
  };

export class PaymentController {
  public static getState = handle(async (req, res) => {
    const project = await ownedProject(req);
    if (!project) {
      res.status(404).json({ success: false, error: 'Proyek tidak ditemukan' });
      return;
    }
    res.json({ success: true, data: await payments.stateFor(project.id, req.user!) });
  });

  public static createOrder = handle(async (req, res) => {
    const project = await ownedProject(req);
    if (!project) {
      res.status(404).json({ success: false, error: 'Proyek tidak ditemukan' });
      return;
    }
    await payments.createOrder(project.id, req.user!);
    res.status(201).json({ success: true, data: await payments.stateFor(project.id, req.user!) });
  });

  public static report = handle(async (req, res) => {
    const project = await ownedProject(req);
    if (!project) {
      res.status(404).json({ success: false, error: 'Proyek tidak ditemukan' });
      return;
    }
    await payments.reportPaid(project.id, String(req.body?.orderId ?? ''));
    res.json({ success: true, data: await payments.stateFor(project.id, req.user!) });
  });

  /* ---------- operator side ---------- */

  public static adminList = handle(async (req, res) => {
    const status = typeof req.query.status === 'string' && req.query.status ? req.query.status : undefined;
    res.json({ success: true, data: await payments.listForAdmin(status) });
  });

  public static adminConfirm = handle(async (req, res) => {
    await payments.confirm(req.params.id, req.user!.id);
    res.json({ success: true });
  });

  public static adminReject = handle(async (req, res) => {
    await payments.reject(req.params.id);
    res.json({ success: true });
  });
}
