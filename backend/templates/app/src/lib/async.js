/** Wraps an async route handler so a thrown error reaches the central error middleware. */
export const wrap = (handler) => (req, res, next) => {
  Promise.resolve(handler(req, res, next)).catch(next);
};
