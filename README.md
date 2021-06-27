# Work in progres...

## About

A very basic app which demonstrates different strategies to implement pagination, filtering and sorting in rest apis.

### How to run?

1. Run the dependencies using `docker-compose up` - This will run postgres on port 5432 and pgadmin on `http://localhost:8080` (username, password, db details in `docker-compose.yml`).
2. Run the app using `node index.js` - App will run on `http://localhost:3000`

## Pagination strategies

#### **Offset** or **page** based pagination
`ORDER` by a field and use `LIMIT` and `OFFSET` to fetch data. Use `http://localhost:3000/page?limit=20&offset=0` to see it in action.

**PROS:**

1. Easy to implement specially when using an RDBMS.
2. Stateless.
3. Works regardless of custom sort by parameters.
4. You can jump to any page and request as many rows using offset and limit.

CONS:

1. Poor performance on large datasets e.g. if your offset value is a million or 10 million then the DB will first have to scan all the rows starting from 0 and then return the result.
2. Inconsistent results possible when something new is added in the rows already seen or something is deleted from the rows already seen. Depending on the action you may see some rows again or skip some rows.


