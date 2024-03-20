//External Modules
import express, { Request, Response } from "express";
import * as claimService from "../service/claim.service";
import { Claim } from "../model/claim.interface";

//Router definition
export const claimsRouter = express.Router();

//Controller
/* Read
GET /api/claim/:id
GET /api/claims
*/
claimsRouter.get("api/claims", async (req: Request, res: Response) => {
		
		try{
				const claims: Claim[] = await claimService.findAll();

		} catch(e) {
				res.status(500).send(e.message);
		}
});

claimsRouter.get("/:id", async (req: Request, res: Response) => {
		
		const id: number = parseInt(req.params.id, 10);
		
		try{

				const claim: Claim = await claimService.find(id);

				if(claim){
						return res.status(200).send(claim);
				}

				res.status(404).send("claim not found");
				
		} catch(e) {
				res.status(500).send(e.message);
		}
});

// Create
//POST /api/claim
claimsRouter.post("/", async (req: Request, res: Response) => {

		try{

				const claim: Claim = req.body;
				const newClaim = await claimService.create(claim);
				

				res.status(201).json(newClaim)
		} catch(e) {
				res.status(500).send(e.message);
		}

});

// Delete
//DELETE /api/claims/:id
