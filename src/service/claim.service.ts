//Data Model Interfaces
import {Claim} from "../model/claim.interface";
import {Claims} from "../model/claims.interface";
import { ClaimsRepository} from '../repository/claim.repository.ts';

let claimList: Claims = {};
let claimsRepo = new ClaimsRepository();


// Service methods


export const findAll = async (): Promise<Claim[]> => Object.values(claimList);
export const find = async (id: number): Promise<Claim> => {
				claimList[id] = claimsRepo.find(id); 

};

export const create = async (newClaim: Claim): Promise<Claim> => {

	const id = new Date().valueOf();
				
	claimsRepo.createClaim(newClaim);
	
	claimList[id] = {
		...newClaim
	}

	return claimList[id];
}

export const remove = async (id: number): Promise<null | void> => {

  claimsRepo.deletClaim(find(id));

	delete claimList[id];
}

export const update = async (id: number, claimUpdate: Claim): Promise<Claim | null> => {

	const claim = await find(id);

	if (!claim) {
		return null;
	}
  claimsRepo.updateClaim(id, claimUpdate);

	claimList[id] = {
					...claimUpdate
	};


	return claimList[id];



}
