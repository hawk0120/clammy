
//Data Model Interfaces
import { Claim } from "../model/claim.interface";
import { Claims } from "../model/claims.interface";

// In-Memory Store
//***************Replace with Repository**********************/
let claimList: Claims = {

		1: {
		
			
			id: 1,
			description: "This is the first test",
			policyType: "This is the first test",
			isResolved: false

		},
		2: {
	
			id: 2,
			description: "This is the second test",
			policyType: "This is the second test",
			isResolved: false

	}

}
// Service methods


export const findAll = async (): Promise<Claim[]> => Object.values(claimList);

export const find = async (id: number): Promise<Claim> => claimList[id];

export const create = async(newClaim: Claim): Promise<Claim> => {

		const id = new Date().valueOf();



		claimList[id] = {
				...newClaim
		}

		return claimList[id];
}



