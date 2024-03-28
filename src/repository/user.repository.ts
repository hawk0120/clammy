import { randomUUID } from 'crypto';
import { User } from '../model/claim.interface';

export default class UserRepo {
				private id: string;

				constructor() {
								this.id = randomUUID();
				}


public async createUser(user: User): Promise<void> {}

public async deleteUser(user: User): Promise<void> {}


public async getUserBy( args: {id: string, matchField: string}) {

}

				


}
