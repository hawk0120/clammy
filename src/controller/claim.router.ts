//External Modules
import express, { Request, Response } from "express";
import * as claimService from "../service/claim.service";
import { Claim } from "../model/claim.interface";

//Router definition
export const claimsRouter = express.Router();

//Controller
//DELETE /api/claims/:id
claimsRouter.delete("/api/claims/:id", async (req: Request, res: Response) => {

    try{

			  const id = parseInt(req.params.id, 10);	
				await claimService.remove(id);


				res.status(204).send("Claim deleted");

		} catch(e) {
								res.status(500).send(e.message);
				}
}); 



/* Read
GET /api/claims
*/
claimsRouter.get("/api/claims/", async (req: Request, res: Response) => {
	

    try{
	
				const claims: Claim[] = await claimService.findAll();
				if(!(claims.length == 0)){ 			
				return res.status(200).send(claims);
				}	
		} catch(e) {
				res.status(500).send(e.message);
		}
});



//******************* GET /:id
claimsRouter.get("/api/claims/:id", async (req: Request, res: Response) => {
		
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
claimsRouter.post("/api/claims/create", async (req: Request, res: Response) => {

		try{

				const claim: Claim = req.body;
				const newClaim = await claimService.create(claim);
	

				res.status(201).json(newClaim)
		} catch(e) {
				res.status(500).send(e.message);
		}

});
