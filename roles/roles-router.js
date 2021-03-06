const router = require("express").Router();
const knex = require("knex");

const knexConfig = {
  client: "sqlite3", // property specifying the adapter
  useNullAsDefault: true,
  connection: {
    // connection property can be a string or object
    filename: "./data/roles.db3" // from the root folder
  }
  // debug: true
};

const db = knex(knexConfig);

// select * from roles
router.get("/", (req, res) => {
  // get the roles from the database
  // res.send("Write code to retrieve all roles");

  // returns a promise with all records in the table
  db("roles")
    .then(roles => {
      res.status(200).json(roles);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// select * from roles where id = :id
router.get("/:id", (req, res) => {
  // retrieve a role by id
  // res.send("Write code to retrieve a role by id");

  // const { id } = req.params;
  const roleId = req.params.id;
  db("roles")
    // .where({ id })
    .where({ id: roleId })
    .first() // by adding first() method, it won't show array instead we should only get one object
    .then(role => {
      res.status(200).json(role);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// insert into roles () values (req.body)
router.post("/", (req, res) => {
  // add a role to the database
  // res.send("Write code to add a role");

  db("roles")
    .insert(req.body)
    .then(ids => {
      const id = ids[0];
      db("roles")
        .where({ id })
        .first()
        .then(role => {
          res.status(200).json(role);
        });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.put("/:id", (req, res) => {
  // update roles
  // res.send("Write code to modify a role");

  db("roles")
    .where({ id: req.params.id })
    .update(req.body)
    .then(count => {
      if (count > 0) {
        res
          .status(200)
          .json({
            message: `${count} ${count > 1 ? "records" : "record updated"}`
          });
      } else {
        res.status(404).json({ message: "Record not found." });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.delete("/:id", (req, res) => {
  // remove roles (inactivate the role)
  // res.send("Write code to remove a role");

  db("roles") // working with roles tables
    .where({ id: req.params.id }) // filter that to guarantee that I'm not affecting any other records during deleting
    .del() // this is delete command
    .then(count => {
      if (count > 0) {
        res.status(204).end(); //end means ending the request
      } else {
        res.status(404).json({ message: "Record not found!" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
