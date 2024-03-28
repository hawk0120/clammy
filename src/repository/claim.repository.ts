import { Claim } from '../model/claim.interface';
import { pool }  from '../utils/database';


export default class ClaimsRepository {
				
// Create
async createClaim(claim: Claim): Promise<void> {

    const { id, policyType, description, isResolved, policyNumber } = claim;
    const query = `
      INSERT INTO claim (id, policyType, description, isResolved, policyNumber)
      VALUES (${claim.id}, ${claim.policyType}, ${claim.description}, ${claim.isResolved},${claim.policyNumber})
    `;
    await pool.query(query, [id, policyType, description, isResolved, policyNumber]);
  }

// Read
async findAll(): Promise<void>  {
				const query = `
				SELECT * FROM claim;
				`;
				await pool.query(query);
}

async find(id: number): Promise<Claim | null> {
				
				const query = `
				SELECT * FROM claim WHERE id = ${id}
				`;
try {
				const res = await pool.query(query, [id]);
				if( res.rows.length > 0) {
								return res.rows[0] as Claim;
				} else {
								return null;
				}

} catch(e) {
				throw new Error(`Error fetching user:  $(error)`);
				}	
}

async updateClaim(id: number, updateClaim: Claim): Promise<Claim> {
				const query = `
				UPDATE claim
				SET (id = ${updateClaim.id}, policyType = ${updateClaim.policyType}, description = ${updateClaim.description}, isResolved = ${updateClaim.isResolved}, policyNumber = ${updateClaim.policyNumber}
				WHERE id = ${id};

				`;

				try{
				} catch(e) {
				throw new Error(`Error updating claim: $(error)`);
				}


}





	// Delete Claim
async deleteClaim(id: number): Promise<void> {
		const query = ` 
			DELETE * FROM claim WHERE id = $1
				`;

		try {
			const res = await pool.query(query, [id]);

		} catch (e) {
		throw new Error(`Error fetching claim: $(error)`);
				}	
}


} // End of ClaimRepository
