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

app.get('/page', (req, res) => {
    const limit = req.query.limit || 10
    const offset = req.query.offset || 0
    const query = 'SELECT * FROM products ORDER BY product_id LIMIT $1 OFFSET $2'
    const values = [limit, offset]
    pool.query(query, values, (err, dbres) => {
        if (err) {
            throw err
        }
        res.status(200).json(dbres.rows)
    })
})

app.listen(port, () => console.log(`listing on ${port}...`))