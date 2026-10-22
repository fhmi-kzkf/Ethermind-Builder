import request from 'supertest';
import { createApp } from '../../src/app.js';
import { initDatabase } from '../../src/db.js';

let app = null;

/** One shared app instance per test file. */
export async function testApp() {
  if (!app) {
    await initDatabase();
    app = createApp();
  }
  return app;
}

export async function client() {
  return request(await testApp());
}

export { request };
