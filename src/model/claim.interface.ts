

export interface Claim {
		id: number;
		description: string;
		policyType: string; 
		isResolved: boolean;
		policyNumber: string;
}

export interface User {
				username: string;
				password: string;
				email: string;
				firstName: string;
				lastName: string;
				address: string;
				phoneNumber: string;
}

export interface Policy {
				policyNumber: string;
				startDate: Date;
				endDate: Date;
				premiumAmount: number;
				status: string;
}

export interface Documents {
				documentId: number;
				claimNumber: number;
				title: string;
				description: string;
				filePath: string;
}
