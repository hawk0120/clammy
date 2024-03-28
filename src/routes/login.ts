// loginRouter.ts

import express from 'express';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

const loginRouter = express.Router();

// POST /login
loginRouter.post('/', (req: Request, res: Response) => {
  // Example authentication logic
  const { username, password } = req.body;
  if (username === 'example' && password === 'password') {
    // Generate JWT token upon successful login
    const token = jwt.sign({ username }, process.env.SECRET_KEY || 'default_secret_key', { expiresIn: '1h' });
    res.status(200).json({ token });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

export default loginRouter;

