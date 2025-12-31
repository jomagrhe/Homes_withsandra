// 1. LEER LA MEMORIA (Prioridad para que el idioma se mantenga)
let currentLang = localStorage.getItem('selectedLang') || 'en';

// 2. OBJETO DE TRADUCCIONES UNIFICADO (Home, Gallery y About Me)
const translations = {
    "en": {
        "nav-real": "Real Estate Services",
        "nav-contact": "Contact Me",
        "about-title": "About Me",
        "about-p1": "I provide tailored real estate services, guiding clients through the buying and selling process with market-leading expertise and a commitment to ensuring every transaction is seamless and successful.",
        "about-p2": "As a residential real estate specialist, I am committed to delivering transparent, high-impact solutions through a strictly client-focused approach.",
        "btn-contact": "Contact Me",
        "bread-view": "Property view",
        "prop-features": "Property Features",
        "prop-beds": "3 Bedrooms",
        "prop-baths": "2.5 Bathrooms",
        "prop-pool": "Swimming Pool",
        "prop-garage": "2-car covered carport",
        "btn-inquire": "Inquire Now",
        "btn-tour": "Schedule a Tour",
        "footer-copy": "© 2026 Homes_withsandra - All rights reserved.",
        "wa-message-inquire": "Hello Sandra! I'm interested in more details about this property.",
        "wa-message-tour": "Hello Sandra! I would like to schedule a tour for a property that I saw in your page.",
        "wa-message-general": "Hello Sandra! I'm visiting your website and I have a question.",
        "wa-message-contact": "Hello Sandra! I'm interested in your services. Can we talk?",
        "wa-message-general": "Hello Sandra! I'm visiting your website and I have a question.",
        "why-title": "Why Work With Me?",
        "why-local-title": "Local Market Expertise",
        "why-local-desc": "I have in-depth knowledge of every neighborhood and real market values to ensure you the best negotiation and profitability.",
        "why-service-title": "Personalized Full Support",
        "why-service-desc": "You are not just another number. I provide close and constant guidance, from the first viewing to the final closing, solving every doubt along the way.",
        "why-bilingual-title": "Bilingual & Global Service",
        "why-bilingual-desc": "I eliminate language barriers by offering full support in English and Spanish, facilitating communication and expanding opportunities for local and international buyers.",
        "sell-title": "Elevating the Sale of Your Property",
        "sell-text": "Your home deserves more than just a listing; it deserves a bespoke strategy. I combine local market intelligence with global reach to ensure your property is positioned to attract the right buyers and the best possible value.",
        "btn-sell": "List Your Property with Me",
        "wa-message-sell": "Hello Sandra! I am interested in selling my property. I would like to receive a professional valuation and more information about your services."
        
    },
    "es": {
        "nav-real": "Servicios Inmobiliarios",
        "nav-contact": "Contáctame",
        "about-title": "Sobre Mí",
        "about-p1": "Ofrezco servicios inmobiliarios a medida, guiando a los clientes a través del proceso de compra y venta con experiencia líder en el mercado y el compromiso de garantizar que cada transacción sea fluida y exitosa.",
        "about-p2": "Como especialista en bienes raíces residenciales, me comprometo a brindar soluciones transparentes y de alto impacto a través de un enfoque estrictamente centrado en el cliente.",
        "btn-contact": "Contáctame",
        "bread-view": "Vista de propiedad",
        "prop-features": "Características",
        "prop-beds": "3 Habitaciones",
        "prop-baths": "2.5 Baños",
        "prop-pool": "Piscina",
        "prop-garage": "Cochera cubierta para 2 autos",
        "btn-inquire": "Consultar Ahora",
        "btn-tour": "Agendar Visita",
        "footer-copy": "© 2026 Homes_withsandra - Todos los derechos reservados.",
        "wa-message-inquire": "¡Hola Sandra! Me interesa obtener más detalles sobre esta propiedad.",
        "wa-message-tour": "¡Hola Sandra! Me gustaría agendar una visita para una propiedad en tu página.",
        "wa-message-general": "¡Hola Sandra! Estoy viendo tu página web y tengo una consulta.",
        "wa-message-contact": "¡Hola Sandra! Estoy interesado en tus servicios. ¿Podemos hablar?",
        "wa-message-general": "¡Hola Sandra! Estoy viendo tu página web y tengo una consulta.",
        "why-title": "¿Por qué trabajar conmigo?",
        "why-local-title": "Experticia en el Mercado Local",
        "why-local-desc": "Conozco a fondo cada barrio y el valor real de las propiedades para asegurarte la mejor negociación y rentabilidad.",
        "why-service-title": "Asesoría Integral y Personalizada",
        "why-service-desc": "No eres un número más. Te brindo un acompañamiento cercano y constante, desde la primera visita hasta la firma del cierre, resolviendo cada duda en el camino.",
        "why-bilingual-title": "Servicio Bilingüe y Global",
        "why-bilingual-desc": "Elimino las barreras del idioma. Ofrezco atención completa en inglés y español, facilitando la comunicación y ampliando las oportunidades para compradores locales e internacionales.",
        "sell-title": "Elevando la Venta de su Propiedad",
        "sell-text": "Su hogar merece más que un simple anuncio; merece una estrategia a la medida. Combino inteligencia de mercado local con alcance global para asegurar que su propiedad esté posicionada para atraer a los compradores adecuados y obtener el mejor valor posible.",
        "btn-sell": "Venda su Propiedad Conmigo",
        "wa-message-sell": "¡Hola Sandra! Estoy interesado en vender mi propiedad. Me gustaría recibir una valoración profesional y más información sobre sus servicios."
    }
};

// 3. FUNCIÓN PARA CAMBIAR IDIOMA
function changeLanguage() {
    currentLang = (currentLang === 'en') ? 'es' : 'en';
    localStorage.setItem('selectedLang', currentLang);
    updateContent();
}

// 4. ACTUALIZAR TODO EL CONTENIDO VISIBLE
function updateContent() {
    // A. Traducir elementos con data-en / data-es (Estilo Home)
    document.querySelectorAll('[data-en]').forEach(el => {
        const text = el.getAttribute(`data-${currentLang}`);
        if (text) el.innerText = text;
    });

    // B. Traducir elementos con data-key (Estilo About / Gallery)
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[currentLang][key]) {
            el.innerText = translations[currentLang][key];
        }
    });

    // C. Actualizar visualmente el switch de idioma
    const langBtn = document.querySelector(".lang-switch");
    if (langBtn) {
        langBtn.innerText = currentLang === "en" ? "ES / EN" : "EN / ES";
    }

    updateWhatsAppLinks();
}


// 5. ACTUALIZAR LINKS DE WHATSAPP
function updateWhatsAppLinks() {
    const phoneNumber = "19543769759"; // Reemplaza con tu número real
    const waLinks = document.querySelectorAll(".whatsapp-link");

    waLinks.forEach(link => {
        const key = link.getAttribute("data-key");
        let messageKey = "wa-message-general"; // Por defecto

        if (key) {
            // Extraemos la parte después de "btn-" (ej: de "btn-sell" sacamos "sell")
            const action = key.replace("btn-", "");
            const potentialMessageKey = `wa-message-${action}`;

            // Si existe una traducción para ese mensaje, la usamos
            if (translations[currentLang][potentialMessageKey]) {
                messageKey = potentialMessageKey;
            }
        }

        const message = encodeURIComponent(translations[currentLang][messageKey]);
        link.href = `https://wa.me/${phoneNumber}?text=${message}`;
    });
}

// 6. INICIALIZAR AL CARGAR CUALQUIER PÁGINA
document.addEventListener("DOMContentLoaded", updateContent);