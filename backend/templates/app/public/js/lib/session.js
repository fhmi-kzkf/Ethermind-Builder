import { api } from './api.js';

export const session = { user: null };

export async function loadSession() {
  try {
    const { data } = await api.get('/api/auth/me');
    session.user = data;
  } catch {
    session.user = null;
  }
  return session.user;
}

export async function login(email, password) {
  const { data } = await api.post('/api/auth/login', { email, password });
  session.user = data;
  return data;
}

export async function logout() {
  try {
    await api.post('/api/auth/logout');
  } finally {
    session.user = null;
  }
}
