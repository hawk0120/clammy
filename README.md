## Clammy Platform

# Insurance Claims Platform

This project is an insurance claims platform built using Angular for the frontend and Node.js with Express for the backend. It allows users to login, view, update, and submit new claims.

## Features

- User authentication: Users can login using their credentials.
- Dashboard: After logging in, users can view their claims on the dashboard.
- Claim management: Users can submit new claims and delete existing claims.

## Technologies Used

- Angular: Frontend framework for building the user interface.
- Express.js: Web framework for Node.js used for building the RESTful API.
- PostgreSQL: SQL database used for storing user and claim data.
- JSON Web Tokens (JWT): Used for user authentication and authorization.
- Typescript: Written in typescript.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository to your local machine:

```
git clone https://github.com/your-username/insurance-claims-platform.git
```

2. Install dependencies for both the frontend and backend:

```
cd insurance-claims-platform
cd iris-webapp
npm install
cd ../
npm install
```

3. Set up environment variables:
   - Create a `.env` file in the `root` directory and define environment variables like database connection string, JWT secret key, etc.

4. Start the backend server:

```
cd /
npm start
```

5. Start the frontend server:

```
cd iris-webapp
ng serve
```

6. Access the application in your browser at `http://localhost:4200`.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
