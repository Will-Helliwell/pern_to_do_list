CREATE DATABASE pern_to_do_list;

CREATE TABLE to_do(
    to_do_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);