module.exports = {
	plugins: {
		'posthtml-expressions': {
			locals: {
				MAPS_API: process.env.MAPS_API,
			},
		},
	},
};
