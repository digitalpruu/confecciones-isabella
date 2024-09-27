const title = "Confecciones Isabella";
const email = "astrid_27_26@hotmail.com";
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy interesado en conocer más sobre los productos de " + title + " y me gustaría obtener más información. ¡Gracias!"
);
const numeroWhatsApp = "+573112355134"; // Incluido el prefijo +57

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "En Confecciones Isabella, nos dedicamos a la confección de sudaderas y buzos que te harán sentir cómodo y con estilo. Nuestro lema 'Vístete como si fuera tu día' refleja nuestro compromiso con la moda y la calidad en cada prenda.",
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan: {
            p1: "Vístete como si fuera tu día.", // Slogan proporcionado
            p2: ""
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/profile.php?id=61555699916530&mibextid=ZbWKwL", // Enlace específico de Facebook
        instagram: "https://www.instagram.com/derpol51?igshid=MzRlODBiNWFlZA==", // Enlace específico de Instagram
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
