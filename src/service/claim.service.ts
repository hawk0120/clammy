//Data Model Interfaces
import { Claim } from '../model/claim.interface';
import { Claims } from '../model/claims.interface';
import ClaimRepository from '../repository/claim.repository';

let claimList: Claims = {};
let claimsRepo = new ClaimRepository();

// Service methods

export const findAll = async (): Promise<Claim[]> => Object.values(claimList);

export const find = async (id: number): Promise<Claim | null> => {
	const claim = claimsRepo.find(id);

	if (!claim) {
		return null;
	}
	claimList.filter( e => id === claim.id);
	return claimList[id];
};

export const create = async (newClaim: Claim): Promise<Claim> => {
	const id = new Date().valueOf();

	claimsRepo.createClaim(newClaim);

	claimList[id] = {
		...newClaim,
	};

	return claimList[id];
};

export const remove = async (id: number): Promise<null | void> => {
	claimsRepo.deleteClaim(id);

	delete claimList[id];
};

export const update = async (
	id: number,
	claimUpdate: Claim
): Promise<Claim | null> => {
	const claim = await find(id);

	if (!claim) {
		return null;
	}
	claimsRepo.updateClaim(id, claimUpdate);

	claimList[id] = {
		...claimUpdate,
	};

	return claimList[id];
};
