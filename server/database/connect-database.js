const { Client } = require('cassandra-driver');
// const dotenv = require('dotenv');
// dotenv.config()
const config = require('../config.json')
const connectDB = async () => {
    const client = new Client({
        cloud: {
            secureConnectBundle: "../secure-connect-netflux.zip",
        },
        credentials: {
            username: "",
            password: "",
        },
    });

    await client.connect();

    // Execute a Query
    try {
        const rs = await client.execute("SELECT * FROM system.local");
        console.log(`Your cluster returned ${rs.rowLength} row(s)`);
    }catch(err) {
        console.error(err)
    }

    await client.shutdown();
}
connectDB();
// module.exports = connectDB;