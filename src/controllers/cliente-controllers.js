const controller = {};
//muestra los datos que estan en la base de datos metodo GET
controller.list = (req, res) => {
  //conn es la conexion que hemos optenido del metodo getConnection
  req.getConnection((err, conn) => {
    if (err) {
      next(err);
    }
    conn.query("SELECT * FROM comprador", (err, comprador) => {
      if (err) {
        next(err);
      }

      res.render("clientes", {
        data: comprador,
      });
    });
  });
};
//guarda los datos del formulario metodo post
controller.save = (req, res) => {
  req.getConnection((err, conn) => {
    const data = req.body;
    if (err) {
      next(err);
    }
    conn.query("INSERT INTO comprador set ? ", [data], (err, comprador) => {
      if (err) {
        next(err);
      }
      res.redirect("/");
    });
  });
};
//muestra los datos en el formulario
controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    if (err) {
      next(err);
    }
    conn.query(
      "SELECT * FROM comprador WHERE id = ?",
      [id],
      (err, comprador) => {
        if (err) {
          next(err);
        }
        res.render("clienteedit", {
          data: comprador[0],
        });
      }
    );
  });
};
//edita los campos ya colocados en el formulario ok ok ok o ok ok
controller.editar = (req, res) => {
  const { id } = req.params;
  const DatosPintados = req.body;
  req.getConnection((err, conn) => {
    if (err) {
      next(err);
    }
    conn.query(
      "UPDATE comprador set ?  WHERE id = ?",
      [DatosPintados, id],
      (err, comprador) => {
        if (err) {
          next(err);
        }
        res.redirect("/");
      }
    );
  });
};
//Eliminar los datos que estan en la base de datos metodo deleted
controller.delete = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) {
      next(err);
    }
    const { id } = req.params;
    conn.query("DELETE FROM comprador WHERE id = ?", [id], (err, comprador) => {
      if (err) {
        next(err);
      }
      res.redirect("/");
    });
  });
};

module.exports = controller;
