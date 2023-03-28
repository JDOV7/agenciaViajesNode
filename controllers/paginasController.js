import { Viaje } from "../models/Viaje.js";
import { Testimonial } from "../models/Testimonial.js";
const paginaInicio = async (req, res) => {
  //consultar 3 viajes del modleo viaje
  const promisesDB = [];
  try {
    promisesDB.push(Viaje.findAll({ limit: 3 }));
    promisesDB.push(Testimonial.findAll({ limit: 3 }));
    const resultado = await Promise.all(promisesDB);
    res.render("inicio", {
      pagina: "Inicio",
      clase: "home",
      viajes: resultado[0],
      testimoniales: resultado[1],
    });
  } catch (error) {
    console.log(error);
  }
};

const paginaNosotros = (req, res) => {
  const viajes = "cambiando el texto";
  const nombreTurista = "Nadia P";
  res.render("nosotros", {
    //pasando parametros al pug
    pagina: "Nosotros",
  }); //este nosotros es una referencia al archivo de /views/nosotros
};

const paginaViajes = async (req, res) => {
  //consultar BD
  const viajes = await Viaje.findAll();

  console.log(viajes);

  res.render("viajes", {
    //pasando parametros al pug
    pagina: "Proximos Viajes",
    viajes,
  }); //este nosotros es una referencia al archivo de /views/nosotros
};

const paginaTestimoniales = async (req, res) => {
  try {
    const testimoniales = await Testimonial.findAll();
    res.render("testimoniales", {
      //pasando parametros al pug
      pagina: "Testimoniales",
      testimoniales,
    }); //este nosotros es una referencia al archivo de /views/nosotros
  } catch (error) {
    console.log(error);
  }
};

const paginaContacto = (req, res) => {
  res.send("Contacto");
};

//muestra un viaje por su slug

const paginaDetalleViaje = async (req, res) => {
  // console.log(req.params.viaje);
  const { slug } = req.params;
  try {
    const resultado = await Viaje.findOne({
      where: {
        slug,
      },
    });
    res.render("viaje", {
      pagina: "Informacion viaje",
      resultado,
    });
  } catch (error) {
    console.log(error);
  }
};

export {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimoniales,
  paginaContacto,
  paginaDetalleViaje,
};
