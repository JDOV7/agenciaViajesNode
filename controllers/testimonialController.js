import { Testimonial } from "../models/Testimonial.js";

const guardarTestimonial = async (req, res) => {
  // console.log('conectando');
  //   console.log(req.body);
  //alternativas express validator

  const errores = [];

  const { nombre, correo, mensaje } = req.body;
  if (nombre.trim() === "") {
    errores.push({ mensaje: "nombre vacio" });
  }

  if (correo.trim() === "") {
    errores.push({ mensaje: "correo vacio" });
    // console.log("correo vacio");
  }

  if (mensaje.trim() === "") {
    errores.push({ mensaje: "mensaje vacio" });
    // console.log("mensaje vacio");
  }
  console.log(errores);
  if (errores.length > 0) {
    //consultar teminmoniales existentes
    const testimoniales = await Testimonial.findAll();
    //mostrar la vista conerrores
    res.render("testimoniales", {
      pagina: "Testimoniales",
      errores,
      nombre,
      correo,
      mensaje,
      testimoniales,
    });
  } else {
    //alamacenar el la BD
    try {
      await Testimonial.create({ nombre, correo, mensaje });
      res.redirect("/testimoniales");
    } catch (error) {
      console.log(error);
    }
  }
};

export { guardarTestimonial };
