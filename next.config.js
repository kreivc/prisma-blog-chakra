module.exports = {
	reactStrictMode: true,
	env: {
		SECRET: process.env.SECRET,
		GITHUB_ID: process.env.GITHUB_ID,
		GITHUB_SECRET: process.env.GITHUB_SECRET,
		DATABASE_URL: process.env.DATABASE_URL,
		NEXTAUTH_URL: process.env.NEXTAUTH_URL,
	},
};
