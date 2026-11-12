/* ==========================================================
    ✏️ DATOS DE TU CAFETERÍA: edita solo este bloque y toda la web se actualiza
   ========================================================== */
const CONFIG = {
    nombre: "Elefante Amarillo",
    whatsapp: "+505 8918 4448",
    instagram: "https://www.instagram.com/elefanteamarillonicaragua?vrfl=OW9zeHBzM3JnNDZ1",
    facebook: "https://www.facebook.com/share/1FhHpvQw1k/",
    moneda: "C$",
    supabaseUrl: "https://glvaybicxmgxxeszsvzz.supabase.co",
    supabaseAnonKey: "sb_publishable_cBKx25c4r5_0udP70yJv4g_mtYuTBq4",
    transferencia: {
        banco: "BAC",
        cuenta: "368499471",
        moneda: "Córdobas"
    },
    categorias: [
        "Desayunos", "Platos fuertes", "Cafés calientes", "Infusiones",
        "Drinks calientes", "Cafés fríos", "Smoothies", "Limonadas", "Postres", "Promociones"
    ],
    promociones: "No hay promociones publicadas por el momento. Escríbenos por WhatsApp para consultar las promociones disponibles.",
    locales: [
        {
            nombre: "Elefante Amarillo Carretera Sur",
            direccion: "Cafetería Elefante Amarillo, kilómetro 12.5, Carretera Sur, contiguo al Salón Vanity",
            maps: "https://maps.app.goo.gl/iL9VMry4ecxjkxFN6?g_st=aw",
            waze: "https://waze.com/ul?q=km%2012.5%20Carretera%20Sur%20contiguo%20al%20Salon%20Vanity%2C%20Nicaragua&navigate=yes"
        },
        {
            nombre: "Elefante Galerías Santo Domingo",
            direccion: "Galerías Santo Domingo",
            whatsapp: "+505 81433012",
            maps: "https://maps.app.goo.gl/rfJgQGXpPxSRphpJ9?g_st=aw",
            waze: "https://waze.com/ul?q=Elefante%20Galerias%20Santo%20Domingo%2C%20Managua%2C%20Nicaragua&navigate=yes"
        }
    ],
    horario: [                           // Lunes a Domingo
        ["Lunes", "7:00 AM – 08:00 PM"], ["Martes", "7:00 AM – 08:00 PM"], ["Miércoles", "7:00 AM – 08:00 PM"],
        ["Jueves", "7:00 AM – 08:00 PM"], ["Viernes", "7:00 AM – 08:00 PM"], ["Sábado", "7:00 AM – 08:00 PM"],
        ["Domingo", "8:00 AM – 08:00 PM"]
    ],
    // Los precios y tamaños se transcriben del menú impreso.
    menu: [
        { cat: "Desayunos", emoji: "🍳", nombre: "Turkish breakfast", desc: "Huevo frito, tomate, jamón de pavo, queso feta, aceitunas, jalea, mantequilla con miel, pan y chile turco.", variantes: [{ nombre: "Una persona", precio: 320 }, { nombre: "Para compartir", precio: 540 }] },
        { cat: "Desayunos", emoji: "🍳", nombre: "Breakfast plate europeo", desc: "Hash browns de papa, labneh, huevo revuelto y ensalada. Elige una opción: bacon, aguacate o jamón de pavo.", precio: 390 },
        { cat: "Desayunos", emoji: "🧇", nombre: "Hashbrown waffles de yuca y parmesano", desc: "Crujiente waffle de yuca con queso parmesano, ensalada de la casa y chile turco.", variantes: [{ nombre: "Sin extra", precio: 250 }, { nombre: "Extra huevo (+C$ 60)", precio: 310 }, { nombre: "Extra huevo benedictino (+C$ 150)", precio: 400 }] },
        { cat: "Desayunos", emoji: "🧇", nombre: "Bono waffles", desc: "Waffles de masa madre de bono a base de yuca y queso; acompañados con mermelada de guayaba y leche condensada.", precio: 280 },
        { cat: "Desayunos", emoji: "🥞", nombre: "Syrniki", desc: "Panqueques rusos de ricotta con caramelo salado o compota de fresa.", precio: 250 },
        { cat: "Desayunos", emoji: "🍞", nombre: "Tostada francesa Suzette", desc: "Pan brioche bañado en caramelo de naranja; servido con ricotta y notas cítricas frescas.", precio: 390 },
        { cat: "Desayunos", emoji: "🍔", nombre: "Breakfast burger", desc: "Pan brioche tostado, bacon crujiente, huevo, queso cheddar, salsa especial y ensalada.", precio: 390 },
        { cat: "Desayunos", emoji: "🥐", nombre: "Everything croissant", desc: "Cama de aguacate, huevos pochados, salsa holandesa y salmón.", precio: 450 },
        { cat: "Desayunos", emoji: "🥐", nombre: "Arma tu croissant", desc: "Croissant con el relleno que prefieras.", variantes: [{ nombre: "Solo croissant", precio: 150 }, { nombre: "Jalea y mantequilla", precio: 220 }, { nombre: "Queso mixto", precio: 230 }, { nombre: "Nutella", precio: 230 }, { nombre: "Jamón de pavo y queso", precio: 300 }, { nombre: "Huevo y queso", precio: 280 }] },
        { cat: "Desayunos", emoji: "🍞", nombre: "Tartine de masa madre", desc: "Pan de masa madre con el acompañamiento que prefieras.", variantes: [{ nombre: "Solo tartine", precio: 50 }, { nombre: "Jalea y mantequilla", precio: 120 }, { nombre: "Queso mixto", precio: 130 }, { nombre: "Nutella", precio: 130 }, { nombre: "Jamón de pavo y queso", precio: 200 }, { nombre: "Huevo y queso", precio: 180 }] },
        { cat: "Desayunos", emoji: "🍳", nombre: "Omelette de la casa", desc: "Omelette receta de la casa, preparado con tomate, acompañado con pan, mantequilla y ensalada verde.", precio: 220 },
        { cat: "Desayunos", emoji: "🍳", nombre: "Omelette Margarita", desc: "Dos huevos, queso mozzarella, albahaca y tomate; acompañado con pan, mantequilla y ensalada verde.", precio: 260 },
        { cat: "Desayunos", emoji: "🍳", nombre: "Huevos con queso feta", desc: "Dos huevos fritos al gusto con queso feta; acompañados con pan, mantequilla y ensalada verde.", precio: 250 },
        { cat: "Desayunos", emoji: "🍳", nombre: "Huevos al curry", desc: "Dos huevos fritos sobre una cama de cebollas caramelizadas en salsa de curry; acompañados con pan y ensalada verde.", precio: 260 },
        { cat: "Desayunos", emoji: "🍳", nombre: "Shakshuka", desc: "Dos huevos cocidos en salsa de tomate, chile dulce y especias, queso feta y perejil.", precio: 290 },
        { cat: "Desayunos", emoji: "🥣", nombre: "Parfait del Elefante", desc: "Bowl de yogurt griego con granola de la casa, banana, granos de cacao y miel de abejas.", precio: 230 },
        { cat: "Desayunos", emoji: "🥣", nombre: "Smoothie bowl", desc: "Pitahaya, salty caramel y piña colada.", precio: 280 },

        { cat: "Platos fuertes", emoji: "🍲", nombre: "Sopa Borsh", desc: "Sopa clásica de remolacha servida con yogurt griego, tocineta y pan de masa madre. Contiene res, eneldo y betabel.", precio: 250 },
        { cat: "Platos fuertes", emoji: "🍲", nombre: "Sopa de lentejas", desc: "Receta de la casa servida con mantequilla derretida en chile turco y tostada de masa madre.", precio: 230 },
        { cat: "Platos fuertes", emoji: "🥗", nombre: "Ensalada con queso feta", desc: "Mix de lechugas crujientes con trocitos de queso feta, jamón caramelizado y semillas de sésamo; con aderezo balsámico, repollo morado, pan y tomate.", variantes: [{ nombre: "Ensalada", precio: 370 }, { nombre: "Agregar pollo (+C$ 90)", precio: 460 }] },
        { cat: "Platos fuertes", emoji: "🥗", nombre: "Ensalada de atún", desc: "Mix de lechugas, cebollas marinadas, zanahoria rallada, alcaparras, pepino, huevo cocido, tomate, aderezo de la casa y pan.", variantes: [{ nombre: "Ensalada", precio: 390 }, { nombre: "Agregar aguacate (+C$ 40)", precio: 430 }] },
        { cat: "Platos fuertes", emoji: "🥪", nombre: "Sándwich con jamón y queso", desc: "Lascas de masa madre con jamón de pechuga de pavo, queso suizo y aderezo de pepinillo, bacon y chile rojo turco.", precio: 370 },
        { cat: "Platos fuertes", emoji: "🍕", nombre: "Sándwich Margarita", desc: "Todos tus ingredientes favoritos de una clásica pizza Margarita entre dos rebanadas de pan y chile turco.", precio: 370 },
        { cat: "Platos fuertes", emoji: "🥪", nombre: "Sándwich pollo pesto", desc: "Pan integral o blanco con salsa pesto receta de la casa, pollo a la plancha, rodajas de tomates frescos y queso. Acompañado de ensalada verde y chile turco.", precio: 370 },
        { cat: "Platos fuertes", emoji: "🥪", nombre: "Sándwich Tuna Melt", desc: "Pan integral o blanco, atún, queso cheddar, cebolla, ajo, rodajas de tomate, mozzarella. Acompañado de ensalada verde y chile turco.", precio: 370 },
        { cat: "Platos fuertes", emoji: "🥪", nombre: "Sándwich Ismail Baba", desc: "Sándwich de queso fundido en pan integral o blanco con una mezcla de queso cheddar, mozzarella y chile turco.", precio: 190 },
        { cat: "Platos fuertes", emoji: "🥧", nombre: "Quiche de pollo y espinaca", desc: "Acompañado de ensalada de la casa y chile rojo turco.", precio: 350 },
        { cat: "Platos fuertes", emoji: "🥣", nombre: "Hummus", desc: "Pasta de garbanzos con tahini, acompañada con tiras vegetales.", variantes: [{ nombre: "Para uno", precio: 320 }, { nombre: "Para compartir", precio: 520 }] },
        { cat: "Platos fuertes", emoji: "🍛", nombre: "Butter chicken", desc: "Pollo en salsa curry acompañado de arroz basmati, chutney y pan pita.", precio: 430 },
        { cat: "Platos fuertes", emoji: "🍄", nombre: "Julienne de champiñones", desc: "Champiñones y pollo en crema, gratinados con queso.", precio: 350 },
        { cat: "Platos fuertes", emoji: "🍽️", nombre: "Plato con kofta y bulgur", desc: "Kofta de res especiada, servida con bulgur, ensalada de vegetales frescos, pan pita y chile rojo turco.", precio: 430 },
        { cat: "Platos fuertes", emoji: "🍽️", nombre: "Iskender kebab", desc: "Carne especiada sobre pan pita, bañada en salsa de tomate, yogurt natural y mantequilla con chile turco.", precio: 430 },
        { cat: "Platos fuertes", emoji: "🥟", nombre: "Raviolis", desc: "Raviolis con topping de yogurt griego y salsa de mantequilla, hojuelas de chile (picor leve).", precio: 350 },
        { cat: "Platos fuertes", emoji: "🥟", nombre: "Wonton", desc: "Wonton de cerdo o pollo con salsa asiática.", precio: 310 },
        { cat: "Platos fuertes", emoji: "🍞", nombre: "Tostada de salmón", desc: "Lascas de salmón curado sobre una cama de queso mozzarella, aguacate según disponibilidad en pan tartine, eneldo y alcaparras.", precio: 340 },
        { cat: "Platos fuertes", emoji: "🍞", nombre: "Tostada mediterránea", desc: "Dos rodajas de pan tartine tostadas con ajo, pepinillo, sardinas, chile rojo turco, rábano y chips de puerro.", precio: 250 },

        { cat: "Cafés calientes", emoji: "☕", nombre: "Espresso lungo (2 oz)", desc: "Café espresso largo.", precio: 90 },
        { cat: "Cafés calientes", emoji: "☕", nombre: "Espresso doble (2 oz)", desc: "Doble espresso.", precio: 120 },
        { cat: "Cafés calientes", emoji: "☕", nombre: "Café turco (4 oz)", desc: "Café preparado al estilo turco.", precio: 120 },
        { cat: "Cafés calientes", emoji: "☕", nombre: "Cortadito / Macchiato", desc: "Espresso cortado con un toque de leche.", precio: 90 },
        { cat: "Cafés calientes", emoji: "☕", nombre: "Long black (Americano)", desc: "Café americano.", variantes: [{ nombre: "6 oz", precio: 100 }, { nombre: "12 oz", precio: 130 }, { nombre: "16 oz", precio: 160 }] },
        { cat: "Cafés calientes", emoji: "☕", nombre: "Capuchino", desc: "Espresso con leche y espuma.", variantes: [{ nombre: "6 oz", precio: 110 }, { nombre: "12 oz", precio: 140 }, { nombre: "16 oz", precio: 160 }] },
        { cat: "Cafés calientes", emoji: "☕", nombre: "Latte", desc: "Espresso con leche vaporizada.", variantes: [{ nombre: "6 oz", precio: 110 }, { nombre: "12 oz", precio: 140 }, { nombre: "16 oz", precio: 160 }] },
        { cat: "Cafés calientes", emoji: "☕", nombre: "Flat white", desc: "Espresso con leche texturizada.", variantes: [{ nombre: "6 oz", precio: 120 }, { nombre: "12 oz", precio: 140 }, { nombre: "16 oz", precio: 160 }] },
        { cat: "Cafés calientes", emoji: "☕", nombre: "Latte salty caramel", desc: "Latte con caramelo salado.", variantes: [{ nombre: "6 oz", precio: 150 }, { nombre: "12 oz", precio: 180 }, { nombre: "16 oz", precio: 220 }] },
        { cat: "Cafés calientes", emoji: "☕", nombre: "Chai latte", desc: "Té chai con leche.", variantes: [{ nombre: "6 oz", precio: 150 }, { nombre: "12 oz", precio: 180 }] },
        { cat: "Cafés calientes", emoji: "☕", nombre: "Mocha", desc: "Espresso, chocolate y leche.", variantes: [{ nombre: "6 oz", precio: 150 }, { nombre: "12 oz", precio: 180 }] },

        { cat: "Infusiones", emoji: "🍵", nombre: "Calala", desc: "Pulpa de calala, jugo de naranja y mix de especias, endulzado con miel de abeja.", variantes: [{ nombre: "500 ml", precio: 190 }, { nombre: "1000 ml", precio: 290 }] },
        { cat: "Infusiones", emoji: "🍵", nombre: "Manzana", desc: "Rodajas de manzana y té de manzanilla, endulzado con miel de abeja.", variantes: [{ nombre: "500 ml", precio: 190 }, { nombre: "1000 ml", precio: 290 }] },
        { cat: "Infusiones", emoji: "🍵", nombre: "Té marroquí", desc: "A base de jengibre y menta, endulzado con miel de abeja.", variantes: [{ nombre: "500 ml", precio: 190 }, { nombre: "1000 ml", precio: 290 }] },
        { cat: "Infusiones", emoji: "🍵", nombre: "Jamaica con especias", desc: "Jamaica con especias, naranja y miel de abeja.", variantes: [{ nombre: "500 ml", precio: 190 }, { nombre: "1000 ml", precio: 290 }] },
        { cat: "Infusiones", emoji: "🍵", nombre: "Indian masala chai", desc: "Té negro en leche, jengibre y mix de especias.", variantes: [{ nombre: "8 oz", precio: 170 }, { nombre: "12 oz", precio: 200 }] },

        { cat: "Drinks calientes", emoji: "🍫", nombre: "Chocolate caliente 100% natural", desc: "Chocolate caliente preparado con chocolate natural.", variantes: [{ nombre: "6 oz", precio: 180 }, { nombre: "12 oz", precio: 200 }] },
        { cat: "Drinks calientes", emoji: "🍫", nombre: "Chocolate caliente (bebida de chocolate)", desc: "Bebida de chocolate.", variantes: [{ nombre: "6 oz", precio: 150 }, { nombre: "12 oz", precio: 190 }] },
        { cat: "Drinks calientes", emoji: "🥛", nombre: "Golden latte", desc: "Bebida caliente especiada.", variantes: [{ nombre: "6 oz", precio: 180 }, { nombre: "12 oz", precio: 200 }] },
        { cat: "Drinks calientes", emoji: "🍵", nombre: "Matcha latte", desc: "Matcha preparado con leche.", variantes: [{ nombre: "6 oz", precio: 180 }, { nombre: "12 oz", precio: 200 }] },
        { cat: "Drinks calientes", emoji: "🍷", nombre: "Glühwein", desc: "Vino caliente con especias.", precio: 230 },
        { cat: "Drinks calientes", emoji: "🍵", nombre: "Té turco (4 oz)", desc: "Té turco.", precio: 80 },

        { cat: "Cafés fríos", emoji: "🧊", nombre: "Cold brew", desc: "Café infusionado en frío.", precio: 150 },
        { cat: "Cafés fríos", emoji: "🧊", nombre: "Cold brew con leche", desc: "Cold brew con leche.", precio: 180 },
        { cat: "Cafés fríos", emoji: "🧊", nombre: "Almond cold brew", desc: "Cold brew con almendra.", precio: 220 },
        { cat: "Cafés fríos", emoji: "🧊", nombre: "Chai frío", desc: "Chai frío.", precio: 200 },
        { cat: "Cafés fríos", emoji: "🧊", nombre: "Caramelo frío", desc: "Bebida fría con caramelo.", precio: 200 },
        { cat: "Cafés fríos", emoji: "🧊", nombre: "Mocha frío", desc: "Bebida fría de café y chocolate.", precio: 200 },
        { cat: "Cafés fríos", emoji: "🧊", nombre: "Honey almond matcha", desc: "Matcha frío con miel y almendra.", precio: 230 },
        { cat: "Cafés fríos", emoji: "🧊", nombre: "Iced latte", desc: "Latte frío.", variantes: [{ nombre: "Leche regular", precio: 150 }, { nombre: "Leche de almendra o avena (+C$ 80)", precio: 230 }] },
        { cat: "Cafés fríos", emoji: "🥤", nombre: "Frappe", desc: "Frappe con el sabor que prefieras.", variantes: [{ nombre: "Sin extra", precio: 160 }, { nombre: "Oreo (+C$ 40)", precio: 200 }, { nombre: "Caramelo salado (+C$ 60)", precio: 220 }, { nombre: "Caramelo (+C$ 60)", precio: 220 }, { nombre: "Maní (+C$ 60)", precio: 220 }, { nombre: "Mocha (+C$ 60)", precio: 220 }, { nombre: "Nutella (+C$ 60)", precio: 220 }, { nombre: "Maple (+C$ 70)", precio: 230 }] },

        { cat: "Smoothies", emoji: "🥤", nombre: "Lite green", desc: "Mix verde de la casa, piña, jengibre, semillas y jugo de naranja.", precio: 100 },
        { cat: "Smoothies", emoji: "🥤", nombre: "Triple berries", desc: "Mix de moras, banano y jugo de naranja.", precio: 190 },
        { cat: "Smoothies", emoji: "🥤", nombre: "Chunky monkey", desc: "Banano, mantequilla de maní, chocolate 100% y leche de almendra.", precio: 200 },
        { cat: "Smoothies", emoji: "🥤", nombre: "Manzana avena", desc: "Avena integral con manzana en leche de almendra, mantequilla de almendra y canela.", precio: 220 },
        { cat: "Smoothies", emoji: "🥤", nombre: "Banana fresa", desc: "Banano, fresa y jugo de naranja.", variantes: [{ nombre: "Receta de la casa", precio: 150 }, { nombre: "Leche de almendra o avena (+C$ 60)", precio: 210 }] },
        { cat: "Smoothies", emoji: "🥤", nombre: "Piña jengibre", desc: "Piña y jengibre en jugo de naranja.", precio: 150 },
        { cat: "Smoothies", emoji: "🥤", nombre: "Piña colada", desc: "Batido de yogurt griego, coco y piña, receta de la casa.", precio: 180 },
        { cat: "Smoothies", emoji: "🥤", nombre: "Anti-inflamatorio", desc: "Cúrcuma, jugo de naranja, piña, pimienta negra y jengibre.", precio: 190 },
        { cat: "Smoothies", emoji: "🥤", nombre: "Extra de proteína vegetal", desc: "Agrega proteína vegetal a tu smoothie.", precio: 75 },
        { cat: "Smoothies", emoji: "🥤", nombre: "Malteada", desc: "Malteada del sabor que prefieras.", variantes: [{ nombre: "Oreo", precio: 170 }, { nombre: "Chocolate", precio: 170 }, { nombre: "Vainilla", precio: 170 }, { nombre: "Fresa", precio: 170 }] },

        { cat: "Limonadas", emoji: "🍋", nombre: "Limonada tradicional", desc: "Jugo de limón, limón, hierbabuena y agua.", precio: 110 },
        { cat: "Limonadas", emoji: "🍋", nombre: "Limonada con menta", desc: "Hierbabuena y jugo de limón.", precio: 130 },
        { cat: "Limonadas", emoji: "🍋", nombre: "Limonada de jengibre", desc: "Jengibre y jugo de limón natural.", precio: 130 },
        { cat: "Limonadas", emoji: "🍋", nombre: "Limonada de calala", desc: "Pulpa de calala y jugo de limón.", precio: 130 },
        { cat: "Limonadas", emoji: "🍓", nombre: "Limonada de fresa", desc: "Pulpa de fresa y jugo de limón.", precio: 130 },
        { cat: "Limonadas", emoji: "🍋", nombre: "Limonada de pitahaya", desc: "Pulpa de pitahaya y jugo de limón.", precio: 150 },
        { cat: "Limonadas", emoji: "🍵", nombre: "Matchalada", desc: "Matcha y jugo de limón.", precio: 150 },
        { cat: "Limonadas", emoji: "🥤", nombre: "Ginger ale natural", desc: "Jengibre, miel, limón y soda.", precio: 160 }
    ]
};

/* ==========================================================
    CÓDIGO (ya funciona; cuando avances, empieza a modificarlo)
   ========================================================== */
const $ = id => document.getElementById(id);
const C$ = $;
const translations = {
    es: {
        navMenu: "Menú", navStory: "Historia", navGallery: "Galería", navLocation: "Ubicación", navContact: "Contacto",
        navOpinions: "Opiniones",
        languageLabel: "Idioma", eyebrow: "Café de especialidad", heroTitle: "Somos Únicos<br>una familia",
        heroLead: "Cada plato, café o postre tiene como ingrediente principal el amor de cada uno de nosotros.",
        viewMenu: "Ver el menú", directions: "Cómo llegar", menuTitle: "Nuestro menú", storyTitle: "Nuestra historia",
        story2018: "Nace el sueño: un carrito de café en el mercado local.", story2020: "Abrimos nuestro primer local con tostado propio.",
        story2023: "Trabajamos directamente con pequeños productores.", today: "Hoy",
        storyToday: "Un espacio acogedor para trabajar, charlar y disfrutar.", galleryTitle: "Galería",
        locationsTitle: "Ubicación y horarios", hoursTitle: "Horarios", contactTitle: "Escríbenos",
        yourName: "Tu nombre", messageOrder: "Tu mensaje o pedido", sendWhatsApp: "Enviar por WhatsApp",
        footerMessage: "Hecho con el amor de cada uno de nosotros", openCart: "Abrir carrito", cart: "Carrito",
        yourOrder: "Tu pedido", close: "Cerrar", subtotal: "Subtotal", tipPrompt: "¿Deseas agregar propina?",
        noTip: "Sin propina", tip: "Propina", total: "Total", pickup: "Recoger en tienda", delivery: "A domicilio",
        deliveryAddress: "Dirección de entrega", useLocation: "Usar mi ubicación actual",
        deliveryOrigin: "Punto de partida del repartidor",
        viewMap: "Ver ubicación en Google Maps", orderNotes: "Notas (sin azúcar, leche de avena...)",
        onlinePayment: "El pago de pedidos en línea es por transferencia bancaria.",
        whatsAppHelp: "Se abrirá WhatsApp con el pedido listo. Para enviarlo, presiona Enviar en WhatsApp.",
        continueWhatsApp: "Continuar a WhatsApp", clearCart: "Vaciar carrito", branches: "Sucursales",
        chooseBranch: "Elige el local", categoryLabel: "Categorías del menú", add: "+ Agregar",
        optionLabel: "Tamaño / opción", emptyCart: "Tu carrito está vacío ☕<br>Agrega algo del menú.",
        promotions: "Promociones", noPromotions: "No hay promociones publicadas por el momento. Escríbenos por WhatsApp para consultar las promociones disponibles.",
        askPromotions: "Hola, quisiera consultar las promociones disponibles.", consultWhatsApp: "Consultar por WhatsApp",
        glutenFree: "Consulta disponibilidad. Opciones gluten free.",
        comingSoon: "Próximamente agregaremos productos a esta categoría.",
        useLocationError: "No se pudo obtener tu ubicación. Puedes escribir la dirección manualmente.",
        locationUnsupported: "Tu navegador no permite compartir la ubicación. Puedes escribir la dirección manualmente.",
        locationSecure: "Para compartir la ubicación, abre la web con HTTPS o desde localhost.",
        locationFound: "Ubicación obtenida. Confirma que el punto sea correcto antes de continuar.",
        locationConfirmNeeded: "Confirma la ubicación para incluir las coordenadas en el pedido.",
        locationConfirmed: "Ubicación confirmada.",
        locationInvalid: "El navegador devolvió coordenadas inválidas. Puedes escribir la dirección manualmente.",
        confirmDeliveryLocation: "Confirmo que esta ubicación es correcta",
        confirmLocationError: "Confirma la ubicación obtenida antes de continuar.",
        gettingLocation: "Obteniendo tu ubicación…", chooseBranchError: "Elige el local para tu pedido",
        emptyOrderError: "Agrega al menos un producto 🙂", addressError: "Escribe la dirección o comparte tu ubicación",
        noName: "Sin nombre", orderTitle: "Nuevo pedido", customer: "Cliente", orderType: "Tipo",
        paymentMethod: "Forma de pago: Transferencia bancaria", bank: "Banco", account: "Número de cuenta",
        address: "Dirección", coordinates: "Coordenadas", accuracy: "Precisión aproximada",
        mapLocation: "Abrir en Google Maps", wazeLocation: "Abrir en Waze", notes: "Notas",
        theme: "Cambiar modo", openMenu: "Abrir menú", whatsApp: "Abrir WhatsApp",
        contactGreeting: "Hola, soy", transferAccount: "Cuenta en",
        opinionsTitle: "Comparte tu opinión", opinionsIntro: "Tus comentarios nos ayudan a mejorar.",
        opinionType: "Tipo de opinión", suggestion: "Sugerencia", complaint: "Queja", compliment: "Felicitación",
        yourNameOptional: "Nombre (opcional)", contactOptional: "Teléfono o correo (opcional)",
        contactPlaceholder: "Teléfono o correo", yourOpinion: "Tu opinión",
        opinionPlaceholder: "Escribe tu sugerencia, queja o felicitación", sendOpinion: "Enviar opinión",
        customerOpinions: "Opiniones de nuestros clientes", opinionsLoading: "Cargando opiniones…",
        opinionsEmpty: "Todavía no hay opiniones publicadas.",
        opinionsLoadError: "No se pudieron cargar las opiniones. Inténtalo más tarde.",
        opinionMissingConfig: "Falta configurar Supabase. Agrega la URL del proyecto y la clave pública anon en java.js.",
        opinionSending: "Enviando tu opinión…", opinionSent: "¡Gracias! Recibimos tu opinión.",
        opinionSendError: "No se pudo enviar la opinión. Inténtalo de nuevo más tarde.",
        languageEnglish: "English (US)", languageSpanish: "Español"
    },
    en: {
        navMenu: "Menu", navStory: "Our story", navGallery: "Gallery", navLocation: "Locations", navContact: "Contact",
        navOpinions: "Feedback",
        languageLabel: "Language", eyebrow: "Specialty coffee", heroTitle: "We are unique<br>we are family",
        heroLead: "Every dish, coffee, and dessert is made with our love as its main ingredient.",
        viewMenu: "View the menu", directions: "Get directions", menuTitle: "Our menu", storyTitle: "Our story",
        story2018: "The dream begins: a coffee cart at the local market.", story2020: "We open our first location with our own roasting.",
        story2023: "We work directly with small producers.", today: "Today",
        storyToday: "A welcoming place to work, chat, and enjoy.", galleryTitle: "Gallery",
        locationsTitle: "Locations & hours", hoursTitle: "Hours", contactTitle: "Contact us",
        yourName: "Your name", messageOrder: "Your message or order", sendWhatsApp: "Send via WhatsApp",
        footerMessage: "Made with love by all of us", openCart: "Open cart", cart: "Cart",
        yourOrder: "Your order", close: "Close", subtotal: "Subtotal", tipPrompt: "Would you like to add a tip?",
        noTip: "No tip", tip: "Tip", total: "Total", pickup: "Pickup", delivery: "Delivery",
        deliveryAddress: "Delivery address", useLocation: "Use my current location",
        deliveryOrigin: "Courier starting point",
        viewMap: "View location on Google Maps", orderNotes: "Notes (no sugar, oat milk...)",
        onlinePayment: "Online orders are paid by bank transfer.",
        whatsAppHelp: "WhatsApp will open with your order ready. Press Send in WhatsApp to place it.",
        continueWhatsApp: "Continue to WhatsApp", clearCart: "Clear cart", branches: "Locations",
        chooseBranch: "Choose a location", categoryLabel: "Menu categories", add: "+ Add",
        optionLabel: "Size / option", emptyCart: "Your cart is empty ☕<br>Add something from the menu.",
        promotions: "Specials", noPromotions: "No specials are posted right now. Message us on WhatsApp to ask about available specials.",
        askPromotions: "Hello, I would like to ask about available specials.", consultWhatsApp: "Ask on WhatsApp",
        glutenFree: "Ask about availability. Gluten-free options.",
        comingSoon: "Items in this category are coming soon.",
        useLocationError: "Couldn't get your location. You can enter the address manually.",
        locationUnsupported: "Your browser can't share your location. You can enter the address manually.",
        locationSecure: "To share your location, open this website over HTTPS or localhost.",
        locationFound: "Location obtained. Confirm the point is correct before continuing.",
        locationConfirmNeeded: "Confirm the location to include coordinates with the order.",
        locationConfirmed: "Location confirmed.",
        locationInvalid: "The browser returned invalid coordinates. You can enter the address manually.",
        confirmDeliveryLocation: "I confirm this location is correct",
        confirmLocationError: "Confirm the obtained location before continuing.",
        gettingLocation: "Getting your location…", chooseBranchError: "Choose a location for your order",
        emptyOrderError: "Add at least one item 🙂", addressError: "Enter an address or share your location",
        noName: "No name", orderTitle: "New order", customer: "Customer", orderType: "Type",
        paymentMethod: "Payment method: Bank transfer", bank: "Bank", account: "Account number",
        address: "Address", coordinates: "Coordinates", accuracy: "Approximate accuracy",
        mapLocation: "Open in Google Maps", wazeLocation: "Open in Waze", notes: "Notes",
        theme: "Toggle color theme", openMenu: "Open menu", whatsApp: "Open WhatsApp",
        contactGreeting: "Hi, I'm", transferAccount: "Account in",
        opinionsTitle: "Share your feedback", opinionsIntro: "Your feedback helps us improve.",
        opinionType: "Feedback type", suggestion: "Suggestion", complaint: "Complaint", compliment: "Compliment",
        yourNameOptional: "Name (optional)", contactOptional: "Phone or email (optional)",
        contactPlaceholder: "Phone or email", yourOpinion: "Your feedback",
        opinionPlaceholder: "Write your suggestion, complaint, or compliment", sendOpinion: "Send feedback",
        customerOpinions: "Customer feedback", opinionsLoading: "Loading feedback…",
        opinionsEmpty: "There are no reviews yet.",
        opinionsLoadError: "Couldn't load feedback. Please try again later.",
        opinionMissingConfig: "Supabase isn't configured yet. Add your project URL and public anon key in java.js.",
        opinionSending: "Sending your feedback…", opinionSent: "Thank you! We received your feedback.",
        opinionSendError: "Couldn't send your feedback. Please try again later.",
        languageEnglish: "English (US)", languageSpanish: "Spanish"
    }
};
let idioma = "es";
function texto(clave) {
    return translations[idioma][clave];
}
let opinionesPublicas = [];
function pintarOpiniones() {
    const status = $("opinions-status");
    const entries = $("opinions-entries");
    if (!status || !entries) return;

    entries.replaceChildren();
    status.classList.remove("error");
    if (!opinionesPublicas.length) {
        status.textContent = texto("opinionsEmpty");
        return;
    }

    status.textContent = "";
    const tipos = idioma === "en"
        ? { "Sugerencia": "Suggestion", "Queja": "Complaint", "Felicitación": "Compliment" }
        : { "Sugerencia": "Sugerencia", "Queja": "Queja", "Felicitación": "Felicitación" };
    opinionesPublicas.forEach(opinion => {
        const card = document.createElement("article");
        card.className = "feedback-entry";
        const head = document.createElement("div");
        head.className = "feedback-entry-head";
        const type = document.createElement("strong");
        type.textContent = tipos[opinion.tipo] || opinion.tipo;
        const date = document.createElement("time");
        date.className = "feedback-entry-date";
        date.dateTime = opinion.created_at;
        date.textContent = new Intl.DateTimeFormat(idioma === "en" ? "en-US" : "es-NI", {
            dateStyle: "medium"
        }).format(new Date(opinion.created_at));
        const message = document.createElement("p");
        message.className = "feedback-entry-comment";
        message.textContent = opinion.mensaje;
        head.append(type, date);
        card.append(head, message);
        entries.append(card);
    });
}
function traducirPagina() {
    document.documentElement.lang = idioma === "en" ? "en-US" : "es";
    document.title = idioma === "en" ? `${CONFIG.nombre} | Coffee Shop` : `${CONFIG.nombre} | Cafetería de especialidad`;
    document.querySelectorAll("[data-i18n]").forEach(element => {
        element.innerHTML = texto(element.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
        element.placeholder = texto(element.dataset.i18nPlaceholder);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(element => {
        element.setAttribute("aria-label", texto(element.dataset.i18nAria));
    });
    $("tabs").setAttribute("aria-label", texto("categoryLabel"));
    $("branches").setAttribute("aria-label", texto("branches"));
    $("o-local").setAttribute("aria-label", texto("chooseBranch"));
    pintarOpcionesLocales();
    $("transfer-details").innerHTML =
        `<strong>${CONFIG.transferencia.banco}</strong> · ${texto("transferAccount")} ${CONFIG.transferencia.moneda}<br>` +
        `<span class="account-number">${CONFIG.transferencia.cuenta}</span>`;
    $("o-location-status").textContent = "";
    pintarSucursales();
    pintarMenu(categoriaActual);
    pintarHoras();
    pintarCarrito();
    pintarOpiniones();
}
try {
    const idiomaGuardado = localStorage.getItem("idioma");
    if (idiomaGuardado === "en" || idiomaGuardado === "es") idioma = idiomaGuardado;
} catch (error) {
    console.warn("No se pudo recuperar el idioma guardado:", error);
}
const numeroWhatsApp = CONFIG.whatsapp.replace(/\D/g, "");
function abrirWhatsApp(texto, numero = CONFIG.whatsapp) {
    const url = `https://wa.me/${numero.replace(/\D/g, "")}?text=${encodeURIComponent(texto)}`;
    const nuevaVentana = window.open(url, "_blank");
    if (!nuevaVentana) window.location.href = url;
}
const formatoNumero = new Intl.NumberFormat("es-NI");
const precio = n => `${CONFIG.moneda} ${formatoNumero.format(n)}`;

// Textos desde CONFIG
document.title = CONFIG.nombre + " | Cafetería";
const brand = $("brand");
if (brand) brand.textContent = CONFIG.nombre;
$("brand2").textContent = CONFIG.nombre;
function pintarOpcionesLocales() {
    const localSeleccionado = $("o-local").value;
    $("o-local").innerHTML = `<option value="" disabled>${texto("chooseBranch")}</option>` +
        CONFIG.locales.map((local, i) => `<option value="${i}">${local.nombre}</option>`).join("");
    if (localSeleccionado) $("o-local").value = localSeleccionado;
}
$("transfer-details").innerHTML =
    `<strong>${CONFIG.transferencia.banco}</strong> · ${texto("transferAccount")} ${CONFIG.transferencia.moneda}<br>` +
    `<span class="account-number">${CONFIG.transferencia.cuenta}</span>`;
function pintarSucursales() {
    $("branches").innerHTML = CONFIG.locales.map(local =>
        `<article class="branch">
            <h3>${local.nombre}</h3>
            <p>${local.direccion}</p>
            <div class="branch-links">
                <a href="${local.maps}" target="_blank" rel="noopener">Google Maps</a>
                <a href="${local.waze}" target="_blank" rel="noopener">Waze</a>
            </div>
        </article>`).join("");
}
pintarOpcionesLocales();
$("ig").href = CONFIG.instagram;
$("fb").href = CONFIG.facebook;
$("wa").href = "https://wa.me/" + numeroWhatsApp;
$("year").textContent = new Date().getFullYear();

// Menú con pestañas
const cats = CONFIG.categorias;
const categoriasEn = {
    "Desayunos": "Breakfast", "Platos fuertes": "Main dishes", "Cafés calientes": "Hot coffee",
    "Infusiones": "Teas & infusions", "Drinks calientes": "Hot drinks", "Cafés fríos": "Iced coffee",
    "Smoothies": "Smoothies", "Limonadas": "Lemonades", "Postres": "Desserts", "Promociones": "Specials"
};
const descripcionesMenuEn = [
    "Fried egg, tomato, turkey ham, feta cheese, olives, jam, honey butter, bread, and Turkish chili.",
    "Potato hash browns, labneh, scrambled eggs, and salad. Choose bacon, avocado, or turkey ham.",
    "Crispy yuca waffle with Parmesan, house salad, and Turkish chili.",
    "Sourdough bono waffles made with yuca and cheese, served with guava jam and condensed milk.",
    "Russian ricotta pancakes with salted caramel or strawberry compote.",
    "Brioche French toast with orange caramel, ricotta, and fresh citrus notes.",
    "Toasted brioche, crispy bacon, egg, cheddar, special sauce, and salad.",
    "Avocado, poached eggs, hollandaise sauce, and salmon.",
    "Croissant with your choice of filling.",
    "Sourdough tartine with your choice of topping.",
    "House-style omelet made with tomato, served with bread, butter, and green salad.",
    "Two eggs with mozzarella, basil, and tomato, served with bread, butter, and green salad.",
    "Two eggs cooked your way with feta cheese, served with bread, butter, and green salad.",
    "Two fried eggs over caramelized onions in curry sauce, served with bread and green salad.",
    "Two eggs cooked in tomato and sweet pepper sauce with spices, feta cheese, and parsley.",
    "Greek yogurt bowl with house-made granola, banana, cacao nibs, and honey.",
    "Dragon fruit, salted caramel, and piña colada.",
    "Classic beet soup served with Greek yogurt, bacon, and sourdough bread. Contains beef, dill, and beet.",
    "House-made lentil soup served with melted butter and Turkish chili, with sourdough toast.",
    "Crisp mixed greens with feta, caramelized ham, sesame seeds, balsamic dressing, red cabbage, bread, and tomato.",
    "Mixed greens with marinated onions, shredded carrot, capers, cucumber, boiled egg, tomato, house dressing, and bread.",
    "Sourdough slices with turkey breast ham, Swiss cheese, pickle dressing, bacon, and Turkish red chili.",
    "A classic Margherita pizza-inspired sandwich with your favorite toppings and Turkish chili.",
    "Whole-wheat or white bread with house-made pesto, grilled chicken, fresh tomato, and cheese. Served with green salad and Turkish chili.",
    "Whole-wheat or white bread with tuna, cheddar, onion, garlic, tomato, and mozzarella. Served with green salad and Turkish chili.",
    "Melted cheddar, mozzarella, and Turkish chili on whole-wheat or white bread.",
    "Served with house salad and Turkish red chili.",
    "Chickpea and tahini spread served with vegetable sticks.",
    "Chicken in curry sauce, served with basmati rice, chutney, and pita bread.",
    "Mushrooms and chicken in cream sauce, topped with melted cheese.",
    "Spiced beef kofta served with bulgur, fresh vegetable salad, pita bread, and Turkish red chili.",
    "Spiced meat over pita bread, topped with tomato sauce, plain yogurt, and butter with Turkish chili.",
    "Ravioli topped with Greek yogurt, butter sauce, and mildly spicy chili flakes.",
    "Pork or chicken wontons with Asian-style sauce.",
    "Slices of cured salmon on mozzarella and, when available, avocado, served on tartine bread with dill and capers.",
    "Two toasted tartine slices with garlic, pickles, sardines, Turkish red chili, radish, and leek chips.",
    "Long espresso.",
    "Double espresso.",
    "Coffee prepared Turkish-style.",
    "Espresso with a splash of milk.",
    "Classic Americano.",
    "Espresso with milk and foam.",
    "Espresso with steamed milk.",
    "Espresso with textured milk.",
    "Latte with salted caramel.",
    "Chai tea with milk.",
    "Espresso, chocolate, and milk.",
    "Calala fruit pulp, orange juice, and spices, sweetened with honey.",
    "Apple slices and chamomile tea, sweetened with honey.",
    "Ginger and mint tea, sweetened with honey.",
    "Hibiscus tea with spices, orange, and honey.",
    "Black tea with milk, ginger, and a blend of spices.",
    "Hot chocolate made with natural chocolate.",
    "Chocolate drink.",
    "A warm, spiced drink.",
    "Matcha prepared with milk.",
    "Mulled wine with spices.",
    "Turkish tea.",
    "Cold-brewed coffee.",
    "Cold brew with milk.",
    "Cold brew with almond.",
    "Iced chai.",
    "Chilled caramel drink.",
    "Chilled coffee and chocolate drink.",
    "Iced matcha with honey and almond.",
    "Iced latte.",
    "Frappé with your choice of flavor.",
    "House green blend with pineapple, ginger, seeds, and orange juice.",
    "Mixed berries, banana, and orange juice.",
    "Banana, peanut butter, 100% chocolate, and almond milk.",
    "Whole-grain oats with apple, almond milk, almond butter, and cinnamon.",
    "Banana, strawberry, and orange juice.",
    "Pineapple and ginger blended with orange juice.",
    "House-made Greek yogurt smoothie with coconut and pineapple.",
    "Turmeric, orange juice, pineapple, black pepper, and ginger.",
    "Add plant-based protein to your smoothie.",
    "Milkshake in your favorite flavor.",
    "Lemon juice, lemon, spearmint, and water.",
    "Spearmint and lemon juice.",
    "Ginger and fresh lemon juice.",
    "Calala fruit pulp and lemon juice.",
    "Strawberry pulp and lemon juice.",
    "Dragon fruit pulp and lemon juice.",
    "Matcha and lemon juice.",
    "Ginger, honey, lemon, and soda water."
];
const nombresPlatosEn = {
    "Breakfast plate europeo": "European breakfast plate",
    "Hashbrown waffles de yuca y parmesano": "Yuca and Parmesan hash brown waffles",
    "Tostada francesa Suzette": "Suzette French toast",
    "Arma tu croissant": "Build your own croissant",
    "Tartine de masa madre": "Sourdough tartine",
    "Omelette de la casa": "House omelet",
    "Omelette Margarita": "Margarita omelet",
    "Huevos con queso feta": "Eggs with feta",
    "Huevos al curry": "Curry eggs",
    "Parfait del Elefante": "Elefante parfait",
    "Sopa Borsh": "Borscht",
    "Sopa de lentejas": "Lentil soup",
    "Ensalada con queso feta": "Feta cheese salad",
    "Ensalada de atún": "Tuna salad",
    "Sándwich con jamón y queso": "Ham and cheese sandwich",
    "Sándwich Margarita": "Margherita sandwich",
    "Sándwich pollo pesto": "Chicken pesto sandwich",
    "Sándwich Tuna Melt": "Tuna melt sandwich",
    "Sándwich Ismail Baba": "Ismail Baba sandwich",
    "Quiche de pollo y espinaca": "Chicken and spinach quiche",
    "Plato con kofta y bulgur": "Kofta and bulgur plate",
    "Tostada de salmón": "Salmon toast",
    "Tostada mediterránea": "Mediterranean toast",
    "Café turco (4 oz)": "Turkish coffee (4 oz)",
    "Cortadito / Macchiato": "Cortado / Macchiato",
    "Capuchino": "Cappuccino",
    "Té marroquí": "Moroccan tea",
    "Jamaica con especias": "Spiced hibiscus tea",
    "Chocolate caliente 100% natural": "100% natural hot chocolate",
    "Chocolate caliente (bebida de chocolate)": "Hot chocolate drink",
    "Té turco (4 oz)": "Turkish tea (4 oz)",
    "Cold brew con leche": "Cold brew with milk",
    "Chai frío": "Iced chai",
    "Caramelo frío": "Iced caramel",
    "Mocha frío": "Iced mocha",
    "Manzana avena": "Apple and oat smoothie",
    "Banana fresa": "Banana strawberry smoothie",
    "Piña jengibre": "Pineapple ginger smoothie",
    "Piña colada": "Piña colada smoothie",
    "Anti-inflamatorio": "Anti-inflammatory smoothie",
    "Extra de proteína vegetal": "Plant-based protein add-on",
    "Malteada": "Milkshake",
    "Limonada tradicional": "Classic lemonade",
    "Limonada con menta": "Mint lemonade",
    "Limonada de jengibre": "Ginger lemonade",
    "Limonada de calala": "Calala lemonade",
    "Limonada de fresa": "Strawberry lemonade",
    "Limonada de pitahaya": "Dragon fruit lemonade",
    "Ginger ale natural": "Homemade ginger ale"
};
const opcionesMenuEn = {
    "Una persona": "For one",
    "Para compartir": "For sharing",
    "Sin extra": "No extras",
    "Extra huevo (+C$ 60)": "Add an egg (+C$ 60)",
    "Extra huevo benedictino (+C$ 150)": "Add a poached egg with hollandaise (+C$ 150)",
    "Solo croissant": "Croissant only",
    "Jalea y mantequilla": "Jam and butter",
    "Queso mixto": "Mixed cheese",
    "Jamón de pavo y queso": "Turkey ham and cheese",
    "Huevo y queso": "Egg and cheese",
    "Solo tartine": "Tartine only",
    "Ensalada": "Salad",
    "Agregar pollo (+C$ 90)": "Add chicken (+C$ 90)",
    "Agregar aguacate (+C$ 40)": "Add avocado (+C$ 40)",
    "Leche regular": "Regular milk",
    "Leche de almendra o avena (+C$ 80)": "Almond or oat milk (+C$ 80)",
    "Caramelo salado (+C$ 60)": "Salted caramel (+C$ 60)",
    "Caramelo (+C$ 60)": "Caramel (+C$ 60)",
    "Maní (+C$ 60)": "Peanut (+C$ 60)",
    "Maple (+C$ 70)": "Maple (+C$ 70)",
    "Receta de la casa": "House recipe",
    "Leche de almendra o avena (+C$ 60)": "Almond or oat milk (+C$ 60)",
    "Chocolate": "Chocolate",
    "Vainilla": "Vanilla",
    "Fresa": "Strawberry"
};
let categoriaActual = cats[0];
function pintarMenu(cat) {
    categoriaActual = cat;
    C$("tabs").innerHTML = cats.map(c =>
        `<button class="tab ${c === cat ? 'on' : ''}" data-c="${c}" role="tab" aria-selected="${c === cat}">${idioma === "en" ? categoriasEn[c] : c}</button>`).join("");
    if (cat === "Promociones") {
        const consulta = encodeURIComponent(texto("askPromotions"));
        C$("grid").innerHTML = `<article class="card promotion-card">
            <div class="e">🎉</div><h3>${texto("promotions")}</h3>
            <p>${idioma === "en" ? texto("noPromotions") : CONFIG.promociones}</p>
            <a class="btn promotion-link" href="https://wa.me/${numeroWhatsApp}?text=${consulta}" target="_blank" rel="noopener">${texto("consultWhatsApp")}</a>
        </article>`;
        return;
    }
    const productos = CONFIG.menu
        .map((p, i) => ({ ...p, i }))
        .filter(p => p.cat === cat);
    C$("grid").innerHTML = productos.length ? productos
        .map(p => {
            const nombre = idioma === "en" ? nombresPlatosEn[p.nombre] || p.nombre : p.nombre;
            const descripcion = idioma === "en" ? descripcionesMenuEn[p.i] : p.desc;
            const opciones = p.variantes
                ? `<label class="option-label">${texto("optionLabel")}
                    <select class="product-option" aria-label="${texto("optionLabel")} ${nombre}">
                        ${p.variantes.map((v, i) => `<option value="${i}">${idioma === "en" ? opcionesMenuEn[v.nombre] || v.nombre : v.nombre} — ${precio(v.precio)}</option>`).join("")}
                    </select>
                </label>` : "";
            const precioInicial = p.variantes ? p.variantes[0].precio : p.precio;
            return `<article class="card"><div class="e">${p.emoji}</div><h3>${nombre}</h3>
                <p>${descripcion}</p>${opciones}<div class="pr">${precio(precioInicial)}</div>
                <button class="add" data-add="${p.i}">${texto("add")}</button></article>`;
        }).join("")
        : `<p class="empty-category">${cat === "Postres" ? texto("glutenFree") : texto("comingSoon")}</p>`;
}
C$("tabs").addEventListener("click", e => { if (e.target.dataset.c) pintarMenu(e.target.dataset.c); });
pintarMenu(cats[0]);
C$("grid").addEventListener("change", e => {
    if (!e.target.matches(".product-option")) return;
    const producto = CONFIG.menu[Number(e.target.closest(".card").querySelector("[data-add]").dataset.add)];
    e.target.closest(".card").querySelector(".pr").textContent =
        precio(producto.variantes[Number(e.target.value)].precio);
});

// Horarios (resalta el día de hoy)
function pintarHoras() {
    const hoy = (new Date().getDay() + 6) % 7;
    const diasEn = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    C$("hours").innerHTML = CONFIG.horario.map((h, i) =>
        `<li class="${i === hoy ? 'today' : ''}"><span>${idioma === "en" ? diasEn[i] : h[0]}</span><span>${h[1]}</span></li>`).join("");
}

// Modo oscuro (recuerda la elección)
function setTema(t) {
    document.documentElement.dataset.theme = t;
    C$("theme").textContent = t === "dark" ? "☀️" : "🌙";
    try { localStorage.setItem("tema", t); } catch (e) { }
}
let guardado = null; try { guardado = localStorage.getItem("tema"); } catch (e) { }
setTema(guardado || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
$("theme").onclick = () => setTema(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
$("language").value = idioma;
$("language").addEventListener("change", () => {
    idioma = $("language").value;
    try { localStorage.setItem("idioma", idioma); } catch (error) {
        console.warn("No se pudo guardar el idioma elegido:", error);
    }
    traducirPagina();
});

// Menú hamburguesa (celular)
C$("burger").onclick = () => {
    const abierto = C$("links").classList.toggle("open");
    C$("burger").setAttribute("aria-expanded", abierto);
};
C$("links").onclick = () => {
    C$("links").classList.remove("open");
    C$("burger").setAttribute("aria-expanded", "false");
};

// Animación al hacer scroll
const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add("show")),
    { threshold: .2 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

// Formulario → WhatsApp
C$("send").onclick = () => {
    const nombre = C$("f-name").value.trim();
    const saludo = idioma === "en" ? `Hi, I'm ${nombre || "a customer"}.` : `Hola, soy ${nombre || "un cliente"}.`;
    const txt = `${saludo} ${C$("f-msg").value}`;
    abrirWhatsApp(txt);
};

// Opiniones de clientes → Supabase
if ($("feedback-form")) {
    function mostrarEstadoFeedback(message, isError = false) {
        const status = $("feedback-status");
        status.textContent = message;
        status.classList.toggle("error", isError);
    }

    async function cargarOpiniones() {
        const status = $("opinions-status");
        const url = CONFIG.supabaseUrl.trim().replace(/\/+$/, "");
        const anonKey = CONFIG.supabaseAnonKey.trim();
        if (!url.startsWith("https://") || url.includes("TU-PROJECT-REF") ||
            !anonKey || anonKey.includes("PEGA_AQUI")) {
            status.textContent = texto("opinionMissingConfig");
            status.classList.add("error");
            return;
        }

        status.textContent = texto("opinionsLoading");
        status.classList.remove("error");
        try {
            const pageSize = 1000;
            const resultados = [];
            for (let offset = 0; ; offset += pageSize) {
                const response = await fetch(
                    `${url}/rest/v1/opiniones?select=created_at,tipo,mensaje&order=created_at.desc`,
                    {
                        headers: {
                            apikey: anonKey,
                            "Range-Unit": "items",
                            Range: `${offset}-${offset + pageSize - 1}`
                        }
                    }
                );
                if (!response.ok) {
                    const details = await response.text();
                    throw new Error(`Supabase respondió ${response.status}: ${details}`);
                }
                const pagina = await response.json();
                resultados.push(...pagina);
                if (pagina.length < pageSize) break;
            }
            opinionesPublicas = resultados;
            pintarOpiniones();
        } catch (error) {
            console.error("No se pudieron cargar las opiniones públicas:", error);
            status.textContent = texto("opinionsLoadError");
            status.classList.add("error");
        }
    }

    $("feedback-form").addEventListener("submit", event => {
        event.preventDefault();
        const url = CONFIG.supabaseUrl.trim();
        const anonKey = CONFIG.supabaseAnonKey.trim();
        if (!url.startsWith("https://") || url.includes("TU-PROJECT-REF") ||
            !anonKey || anonKey.includes("PEGA_AQUI")) {
            mostrarEstadoFeedback(texto("opinionMissingConfig"), true);
            return;
        }

        const mensaje = $("feedback-comment").value.trim();
        if (mensaje.length < 5 || mensaje.length > 1000) {
            mostrarEstadoFeedback(texto("opinionSendError"), true);
            $("feedback-comment").focus();
            return;
        }

        const submit = $("feedback-submit");
        submit.disabled = true;
        mostrarEstadoFeedback(texto("opinionSending"));
        fetch(`${url.replace(/\/+$/, "")}/rest/v1/opiniones`, {
            method: "POST",
            headers: {
                apikey: anonKey,
                Authorization: `Bearer ${anonKey}`,
                "Content-Type": "application/json",
                Prefer: "return=minimal"
            },
            body: JSON.stringify({
                tipo: $("feedback-type").value,
                nombre: $("feedback-name").value.trim() || null,
                contacto: $("feedback-contact").value.trim() || null,
                mensaje
            })
        }).then(response => {
            if (!response.ok) {
                return response.text().then(details => {
                    throw new Error(`Supabase respondió ${response.status}: ${details}`);
                });
            }
            $("feedback-form").reset();
            mostrarEstadoFeedback(texto("opinionSent"));
            cargarOpiniones();
        }).catch(error => {
            console.error("No se pudo guardar la opinión en Supabase:", error);
            mostrarEstadoFeedback(texto("opinionSendError"), true);
        }).finally(() => {
            submit.disabled = false;
        });
    });
    cargarOpiniones();
}


/* ==========================================================
    CARRITO DE COMPRAS
    carrito = { indiceDelProducto: cantidad }
   ========================================================== */
let carrito = {};
try { carrito = JSON.parse(localStorage.getItem("carrito-v2")) || {}; } catch (e) { }
const detalleProducto = clave => {
    const [indice, opcion] = clave.split(":").map(Number);
    const producto = CONFIG.menu[indice];
    if (!producto) return null;
    const variante = opcion >= 0 ? producto.variantes && producto.variantes[opcion] : null;
    return {
        producto, variante, precio: variante ? variante.precio : producto.precio,
        nombre: variante ? `${producto.nombre} (${variante.nombre})` : producto.nombre
    };
};
function pintarCarrito() {
    const ids = Object.keys(carrito).filter(i => detalleProducto(i) && carrito[i] > 0);
    let subtotal = 0, cuenta = 0;
    $("cart-items").innerHTML = ids.length ? ids.map(i => {
        const { producto, precio: precioUnitario, nombre } = detalleProducto(i), q = carrito[i];
        subtotal += precioUnitario * q; cuenta += q;
        return `<div class="row"><span style="font-size:1.8rem">${producto.emoji}</span>
        <div class="nm">${nombre}<small>${precio(precioUnitario)} c/u</small></div>
        <div class="qty"><button data-m="${i}">−</button><b>${q}</b><button data-p="${i}">+</button></div></div>`;
    }).join("") : `<p class="empty">${texto("emptyCart")}</p>`;
    const propina = calcularPropina(subtotal);
    $("cart-subtotal").textContent = precio(subtotal);
    $("cart-tip").textContent = precio(propina);
    $("cart-total").textContent = precio(subtotal + propina);
    $("cart-count").textContent = cuenta;
    try { localStorage.setItem("carrito-v2", JSON.stringify(carrito)); } catch (e) { }
}
function cambiar(clave, d) {
    carrito[clave] = Math.max(0, (carrito[clave] || 0) + d);
    if (!carrito[clave]) delete carrito[clave];
    pintarCarrito();
}
const porcentajePropina = () => Number($("o-tip").value) || 0;
const calcularPropina = subtotal => Math.round(subtotal * porcentajePropina() / 100);
function abrir(v) {
    C$("cart").classList.toggle("open", v);
    $("overlay").classList.toggle("on", v);
}

$("grid").addEventListener("click", e => {
    if (e.target.dataset.add === undefined) return;
    const indice = Number(e.target.dataset.add);
    const opcion = e.target.closest(".card").querySelector(".product-option");
    const variante = opcion ? Number(opcion.value) : -1;
    cambiar(`${indice}:${variante}`, 1);
    $("cart-btn").classList.remove("bump"); void $("cart-btn").offsetWidth; $("cart-btn").classList.add("bump");
});
$("cart-items").addEventListener("click", e => {
    if (e.target.dataset.p !== undefined) cambiar(e.target.dataset.p, 1);
    if (e.target.dataset.m !== undefined) cambiar(e.target.dataset.m, -1);
});
$("cart-btn").onclick = () => abrir(true);
$("cart-close").onclick = $("overlay").onclick = () => abrir(false);
$("o-clear").onclick = () => { carrito = {}; pintarCarrito(); };
$("o-tip").onchange = pintarCarrito;
$("o-type").onchange = () => {
    const domicilio = $("o-type").value === "A domicilio";
    $("o-addr").hidden = !domicilio;
    $("o-location").hidden = !domicilio;
    $("o-map").hidden = !domicilio || !ubicacionEntrega;
    $("o-location-confirm-wrap").hidden = !domicilio || !ubicacionEntrega;
    if (!domicilio) {
        $("o-map").hidden = true;
        $("o-location-status").textContent = "";
    }
};

let ubicacionEntrega = "";
$("o-location-confirm").onchange = () => {
    if (!ubicacionEntrega) return;
    ubicacionEntrega.confirmada = $("o-location-confirm").checked;
    $("o-location-status").textContent = ubicacionEntrega.confirmada
        ? texto("locationConfirmed")
        : texto("locationConfirmNeeded");
};
$("o-location").onclick = () => {
    if (!navigator.geolocation) {
        $("o-location-status").textContent = texto("locationUnsupported");
        return;
    }
    if (!window.isSecureContext) {
        $("o-location-status").textContent = texto("locationSecure");
        return;
    }

    $("o-location").disabled = true;
    ubicacionEntrega = "";
    $("o-location-confirm").checked = false;
    $("o-location-confirm-wrap").hidden = true;
    $("o-map").hidden = true;
    $("o-location-status").textContent = texto("gettingLocation");
    navigator.geolocation.getCurrentPosition(position => {
        const latitud = position.coords.latitude;
        const longitud = position.coords.longitude;
        if (!Number.isFinite(latitud) || latitud < -90 || latitud > 90 ||
            !Number.isFinite(longitud) || longitud < -180 || longitud > 180) {
            $("o-location").disabled = false;
            $("o-location-status").textContent = texto("locationInvalid");
            return;
        }
        const coordenadas = `${latitud}, ${longitud}`;
        const consultaMapa = encodeURIComponent(`${latitud},${longitud}`);
        const precision = Math.round(position.coords.accuracy);
        ubicacionEntrega = {
            latitud,
            longitud,
            coordenadas,
            precision,
            confirmada: false,
            googleMaps: `https://www.google.com/maps/search/?api=1&query=${consultaMapa}`,
            waze: `https://waze.com/ul?ll=${consultaMapa}&navigate=yes`
        };
        $("o-addr").value = coordenadas;
        $("o-map").href = ubicacionEntrega.googleMaps;
        $("o-map").hidden = false;
        $("o-location-confirm-wrap").hidden = false;
        $("o-location-status").textContent =
            `${texto("locationFound")} (${texto("accuracy")}: ±${precision} m) ${texto("locationConfirmNeeded")}`;
        $("o-location").disabled = false;
    }, error => {
        $("o-location").disabled = false;
        $("o-location-status").textContent = texto("useLocationError");
        console.error("No se pudo obtener la ubicación del cliente:", error);
    }, { enableHighAccuracy: true, timeout: 30000, maximumAge: 0 });
};
$("o-addr").addEventListener("input", () => {
    if (!ubicacionEntrega) return;
    ubicacionEntrega = "";
    $("o-map").hidden = true;
    $("o-location-confirm").checked = false;
    $("o-location-confirm-wrap").hidden = true;
});

// Enviar el pedido al WhatsApp del negocio
$("o-send").onclick = () => {
    const ids = Object.keys(carrito).filter(i => detalleProducto(i));
    if (!ids.length) return alert(texto("emptyOrderError"));
    if ($("o-local").value === "") return alert(texto("chooseBranchError"));
    const local = CONFIG.locales[Number($("o-local").value)];
    const domicilio = $("o-type").value === "A domicilio";
    if (domicilio && !$("o-addr").value.trim()) return alert(texto("addressError"));
    if (domicilio && ubicacionEntrega &&
        (!Number.isFinite(ubicacionEntrega.latitud) || ubicacionEntrega.latitud < -90 ||
            ubicacionEntrega.latitud > 90 || !Number.isFinite(ubicacionEntrega.longitud) ||
            ubicacionEntrega.longitud < -180 || ubicacionEntrega.longitud > 180)) {
        return alert(texto("locationInvalid"));
    }
    if (domicilio && ubicacionEntrega && !ubicacionEntrega.confirmada) {
        return alert(texto("confirmLocationError"));
    }
    let subtotal = 0;
    const lineas = ids.map(i => {
        const { precio: precioUnitario, nombre } = detalleProducto(i), q = carrito[i];
        subtotal += precioUnitario * q;
        return `• ${q} x ${nombre} — ${precio(precioUnitario * q)}`;
    });
    const porcentaje = porcentajePropina();
    const propina = calcularPropina(subtotal);
    const total = subtotal + propina;
    const msg = [`☕ *${texto("orderTitle")} — ${CONFIG.nombre}*`,
    `🏬 ${texto("chooseBranch")}: ${local.nombre} — ${local.direccion}`,
    `👤 ${texto("customer")}: ${$("o-name").value.trim() || texto("noName")}`,
    `📦 ${texto("orderType")}: ${$("o-type").selectedOptions[0].textContent}`,
    `💳 ${texto("paymentMethod")}`,
    `🏦 ${texto("bank")}: ${CONFIG.transferencia.banco} — ${CONFIG.transferencia.moneda}`,
    `🔢 ${texto("account")}: ${CONFIG.transferencia.cuenta}`,
    domicilio ? `🚴 ${texto("deliveryOrigin")}: ${local.nombre} — ${local.direccion} (${local.maps})` : "",
    domicilio ? `📍 ${texto("address")}: ${$("o-addr").value.trim()}` : "",
    domicilio && ubicacionEntrega ? `📌 ${texto("coordinates")}: ${ubicacionEntrega.coordenadas}` : "",
    domicilio && ubicacionEntrega ? `🎯 ${texto("accuracy")}: ±${ubicacionEntrega.precision} m` : "",
    domicilio && ubicacionEntrega ? `🗺️ ${texto("mapLocation")}: ${ubicacionEntrega.googleMaps}` : "",
    domicilio && ubicacionEntrega ? `🚗 ${texto("wazeLocation")}: ${ubicacionEntrega.waze}` : "",
        "", ...lineas, "", `Subtotal: ${precio(subtotal)}`,
    `${texto("tip")}${porcentaje ? ` (${porcentaje}%)` : ""}: ${precio(propina)}`,
    `💰 *Total: ${precio(total)}*`,
    $("o-note").value.trim() ? `📝 ${texto("notes")}: ${$("o-note").value.trim()}` : ""
    ].filter((l, k, a) => l !== "" || (a[k - 1] !== "" && k)).join("\n");
    abrirWhatsApp(msg, local.whatsapp || CONFIG.whatsapp);
};
pintarCarrito();
traducirPagina();