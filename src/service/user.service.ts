import { User } from '../model/claim.interface';
import UserRepository from '../repository/user.repository';

let userRepo = new UserRepository();

export const login = async ( user: User): Promise<User> => {

  			const loggedInUsers = userRepo.login(user);
				if(!loggedInUsers) {
								return null;
				}
				return loggedInUsers;
} 
