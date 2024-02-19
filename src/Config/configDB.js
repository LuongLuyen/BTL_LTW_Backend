const mongoose = require("mongoose")
require('dotenv').config()

mongoose.set("strictQuery", true)
const connectMongoDB = async () => {
	try {
        const uri =`${process.env.URI}`
		await mongoose.connect(
			uri,
		)
		console.log('[LOG]','MongoDB kết nối thành công')
	} catch (error) {
		console.log("[ERROR]",error.message)
		process.exit(1)
	}
}

module.exports = {
    connectMongoDB: connectMongoDB
}