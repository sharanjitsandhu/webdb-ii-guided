Roles Table

- id, integer, primary key, not null, auto-increment
- name, varchar(255), unique, not null

[ API <> Query Builder ] <> [ Driver <> DB ]

whereas (Production dependencies)
** Query Builder: knex
** Driver: sqlite3

NOTE: yarn add knex sqlite3 to install them

A Query Builder translates from JS TO SQL

ORM = Object Relational Mapper { } <> [ ]
