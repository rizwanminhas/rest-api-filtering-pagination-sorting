-- SELECT 'CREATE DATABASE demo_app'
-- WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'demo_app')\gexec

-- USE DATABASE demo_app;

CREATE TABLE products (
  product_id SERIAL PRIMARY KEY,
  title varchar(100) NOT NULL,
  launch_date varchar(100) NOT NULL,
  inventory_count integer NOT NULL,
  price double precision NOT NULL
);