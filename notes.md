Roles Table

- id, integer, primary key, not null, auto-increment
- name, varchar(255), unique, not null

Client <> API <> knex <> adapter <> DB (Server)

[ API <> Query Builder ] <> [ Driver <> DB ]

whereas (Production dependencies)
** Query Builder: knex
** Driver: sqlite3

// objects
const student = {
name: '',
email:'',
cohorts: []
}

// relations
student row [ ]

name | email
'john' | 'email'

ORM = Object Relational Mapper { } <> [ ]

ORMs include a Query Builder.

A Query Builder translates from JS(programming language) TO SQL

## Roadmap

- [x] create a database
- [x] add a roles table to the DB
- [x] install knex and the adapter for sqlite3
- [x] configure knex to talk to our DB
- [x] list all roles
- [x] add a role
- [x] list a role by id
- [x] remove a role
- [x] update a role
