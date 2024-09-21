const title = "Confecciones Isabella";
const email = ""; // Información no proporcionada
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy muy interesado en tus productos de " + title + " y me gustaría recibir más información sobre ellos. Espero poder hablar pronto contigo para aclarar algunas dudas. ¡Gracias!"
);
const numeroWhatsApp = ""; // Información no proporcionada

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "Confecciones Isabella ofrece una variedad de sudaderas y buzos, diseñados para que te sientas cómodo y estilizado en cualquier ocasión. Nuestro lema es 'Vístete como si fuera tu día', reflejando nuestro compromiso con la moda y la comodidad.",
        description2: "En Confecciones Isabella, nos dedicamos a crear prendas que no solo se adapten a tu estilo, sino que también te brinden una experiencia de uso excepcional. Descubre cómo nuestras confecciones pueden transformar tu guardarropa."
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan: {
            p1: "Vístete como si fuera tu día.",
            p2: ""
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
