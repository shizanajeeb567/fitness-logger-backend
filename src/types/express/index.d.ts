// src/types/express/index.d.ts

import { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
        // Add more properties if needed, like name or email
      };
    }
  }
}
