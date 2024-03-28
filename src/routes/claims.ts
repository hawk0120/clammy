import express, { Request, Response } from 'express';
import * as claimService from '../service/claim.service';
import { Claim } from '../model/claim.interface';


const claimsRouter = express.Router();

//DELETE //claims/:id
claimsRouter.delete("/claims/:id", async (req: Request, res: Response) => {

    try{

			  const id = parseInt(req.params.id, 10);	
				await claimService.remove(id);


				res.status(204).send("Claim deleted");

		} catch(e) {
								res.status(500).send(e.message);
				}
}); 



/* Read
GET //claims
*/
claimsRouter.get("/claims/", async (req: Request, res: Response) => {
	

    try{
	
				const claims: Claim[] = await claimService.findAll();
				if(!(claims.length == 0)){ 			
				return res.status(200).send(claims);
				}	
		} catch(e) {
				res.status(500).send(e.message);
		}
});

/* Update
 * Put //claims/update/:id
 */	
claimsRouter.put("/claims/update/:id", async (req: Request, res: Response) => {

				try{
							const id = parseInt(req.params.id, 10);
				      const claimUpdate: Claim = req.body;
							
							const claim: Claim = await claimService.find(id);
				      if(claim) {

							const updatedClaim = claimService.update(id, claimUpdate);
				      return res.status(200).json(updatedClaim);
								}

								const newClaim = await claimService.create(claimUpdate);
								res.status(201).json(newClaim);

				} catch(e){
								res.status(500).send(e.message);
				}
});

//******************* GET /:id
claimsRouter.get("/claims/:id", async (req: Request, res: Response) => {
		
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

//POST //claim
claimsRouter.post("/claims/create/:id", async (req: Request, res: Response) => {

		try{

				const claim: Claim = req.body;
				const newClaim = await claimService.create(claim);
	

				res.status(201).json(newClaim)
		} catch(e) {
				res.status(500).send(e.message);
		}

});

export default claimsRouter;
