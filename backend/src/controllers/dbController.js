const { Client } = require('pg')

// Atualizar dados de login do BD conforme a configuração do PostgreSQL na máquina local ou servidor
const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'stm_ongs',
    user: 'postgres', 
    password: '12345'
})

class dbController {
    async connect() {
        await client.connect()
    }

    async insert(table, columns, values) {
        console.log(table)
        console.log(columns)
        console.log(values)
        const query = `INSERT INTO ${table} (${columns}) VALUES (${values});`
        console.log(query)
        try {
            await client.query(query).then(() => client.end())
        } catch (err) {
            console.log(err.stack)
            client.end()
        }
    }

    async disconnect() {
        await client.end()
    }
}

module.exports = new dbController()