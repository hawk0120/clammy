// Imports
import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { claimsRouter } from './controller/claim.router'

dotenv.config();

// App Variables
if(!process.env.PORT) {
		process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

// App Configs

app.use(helmet());
app.use(cors());
app.use(express.json());
// Server Activation

app.use('/', claimsRouter);




app.listen(PORT, () => {

		console.log(`Listening on port ${PORT}`);
});

