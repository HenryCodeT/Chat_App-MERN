const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const secretkey = 'secretkey';
console.log('********************** 4-auth-controller **********************');

/**
 * Register User
 * @param {*} request 
 * @param {*} response 
 */
const register = (request, response) => {
	console.log('request-body', request.body);
	User.create(request.body)
		.then((user) => {
			const payload = {
				id: user._id,
				email: user.email,
				firstName: user.firstName,
				lastName: user.lastName
			};

			const expiration = {
				expiresIn: '20m'
			};

			const newJwt = jwt.sign(payload, secretkey, expiration);

			response.statusMessage = 'Created success';
			response.status(200).json({ token: newJwt });
		})
		.catch((err) => {
			response.statusMessage = 'Something went Wrong';
			response.status(400).json({ error: err });
		});
};

/**
 * Login User
 * @param {*} request 
 * @param {*} response 
 */
const login = (request, response) => {
	console.log(request.body);
	const { email, password } = request.body;

	User.findOne({ email })
		.then((user) => {
			bcrypt
				.compare(password, user.password)
				.then((result) => {
					if (!result) {
						return response.status(400).json({
							message: 'Invalid credentials'
						});
					}
					const payload = {
						id: user._id,
						email: user.email,
						firstName: user.firstName,
						lastName: user.lastName
					};

					const expiration = {
						expiresIn: '20m'
					};
					const newJwt = jwt.sign(payload, secretkey, expiration);
					response.statusMessage = 'Created success';
					response.status(200).json({ token: newJwt });
          return response;
				})
				.catch((err) => {
					response.statusMessage = 'Something went Wrong With loggin';
					response.status(400).json({ error: err });
				});
		})
		.catch((err) => {
			response.statusMessage = 'Something went Wrong With loggin';
			response.status(400).json({ error: err });
		});
};

const AuthController = {
	register,
	login
};

module.exports = AuthController;

console.log('---------------------- 4-auth-controller ----------------------');
