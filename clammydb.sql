USE clammydb; 
CREATE TABLE claim {
				id SERIAL PRIMARY KEY, 
				policyType VARCHAR(25) NOT NULL, 
				description VARCHAR(1000) NOT NULL,
				isResolved BOOLEAN NOT NULL,
				policyNumber VARCHAR(10) REFERENCES policy(policyNumbber)

};

CREATE TABLE users { 
				username VARCHAR(25) PRIMARY KEY, 
				password VARCHAR(25), 
				email VARCHAR(100),
				firstName VARCHAR(25),
				lastName VARCHAR(50),
				address VARCHAR(100),
				phoneNumber VARCHAR(12),
};

CREATE TABLE policy { 
				policyNumber VARCHAR(10) NOT NULL PRIMARY KEY,
				startDate DATE NOT NULL,
				endDate DATE NOT NULL,
				premiumAmount INTEGER NOT NULL,
				status VARCHAR(10)
};

CREATE TABLE documents {
				documentId BIGINT NOT NULL PRIMARY KEY,
				claimNumber VARCHAR(10) REFERENCES claim(claimNumber),
				title VARCHAR(100),
				filePath VARCHAR(100) NOT NULL,
}

