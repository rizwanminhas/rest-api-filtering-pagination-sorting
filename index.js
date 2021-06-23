const app = require('express')()
const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'demo_user',
  host: 'localhost',
  database: 'demo_app',
  password: 'demo_password',
  port: 5432,
})
const port = process.env.PORT || 3000

app.get('/*', (req, res) => {
    pool.query('SELECT * from products', (err, dbres) => {
        if (err) {
            throw err
        }
        res.status(200).json(dbres.rows)
    })
})

app.listen(port, () => console.log(`listing on ${port}...`))