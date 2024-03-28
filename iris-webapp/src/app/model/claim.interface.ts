export interface Claim {
				id: number,
				policyType: string,
				description: string,
				isResolved: boolean,
				policyNumber: number
}

export interface user {
				username: string,
				email: string,
				firstName: string,
				lastName: string,
				address: string,
				phoneNumber: number
}

export interface policy {
				policyNumber: number;
				startDate: number;
				endDate: number;
				premiumAmount: number;
				status: string;
}

export interface documents {
				documentId: number;
				claimNumber: number;
				title: string;
				filePath: string;
}


