// Routers
const AuthRouter = require('./auth.routes');

console.log('******************** 6-all-routes ********************');
function routes(app) {
	// Routes
	app.use('/api/auth', AuthRouter);
}

module.exports = routes;
console.log('-------------------- 6-all-routes --------------------');
