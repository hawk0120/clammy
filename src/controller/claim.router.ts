//External Modules
import express, { Request, Response, NextFunction } from 'express';
import loginRouter from '../routes/login';
import claimsRouter from '../routes/claims';
import { verifyToken } from '../utils/authMiddleware';

const PORT = process.env.PORT || 6000;
const app = express();

const SECRET_KEY = process.env.SECRET_KEY || 'default_secret_key';

app.use('/login/', loginRouter);
app.use('/api', verifyToken(), claimsRouter);

app.listen(PORT, () => {
	
				console.log(`Server running on ${PORT}`);
});
