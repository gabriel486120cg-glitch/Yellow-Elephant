/* ==========================================================
    ✏️ DATOS DE TU CAFETERÍA: edita solo este bloque y toda la web se actualiza
   ========================================================== */
const CONFIG = {
    nombre: "Elefante Amarillo",
    whatsapp: "+505 8918 4448",
    instagram: "https://www.instagram.com/elefanteamarillonicaragua?vrfl=OW9zeHBzM3JnNDZ1",
    facebook: "https://www.facebook.com/share/1FhHpvQw1k/",
    moneda: "C$",
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
            nombre: "Elefante Sur",
            direccion: "Kilómetro 12.5, Carretera Sur, contiguo al Salón Vanity",
            maps: "https://maps.app.goo.gl/iL9VMry4ecxjkxFN6?g_st=aw",
            waze: "https://waze.com/ul?q=km%2012.5%20Carretera%20Sur%20contiguo%20al%20Salon%20Vanity%2C%20Nicaragua&navigate=yes"
        },
        {
            nombre: "Elefante Galerías Santo Domingo",
            direccion: "Galerías Santo Domingo",
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
const numeroWhatsApp = CONFIG.whatsapp.replace(/\D/g, "");
function abrirWhatsApp(texto) {
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
    const nuevaVentana = window.open(url, "_blank");
    if (!nuevaVentana) window.location.href = url;
}
const formatoNumero = new Intl.NumberFormat("es-NI");
const precio = n => `${CONFIG.moneda} ${formatoNumero.format(n)}`;

// Textos desde CONFIG
document.title = CONFIG.nombre + " | Cafetería";
$("brand").textContent = $("brand2").textContent = CONFIG.nombre;
$("transfer-details").innerHTML =
    `<strong>${CONFIG.transferencia.banco}</strong> · Cuenta en ${CONFIG.transferencia.moneda}<br>` +
    `<span class="account-number">${CONFIG.transferencia.cuenta}</span>`;
$("branches").innerHTML = CONFIG.locales.map(local =>
    `<article class="branch">
        <h3>${local.nombre}</h3>
        <p>${local.direccion}</p>
        <div class="branch-links">
            <a href="${local.maps}" target="_blank" rel="noopener">Google Maps</a>
            <a href="${local.waze}" target="_blank" rel="noopener">Waze</a>
        </div>
    </article>`).join("");
$("o-local").innerHTML = `<option value="" selected disabled>Elige el local</option>` +
    CONFIG.locales.map((local, i) => `<option value="${i}">${local.nombre}</option>`).join("");
$("ig").href = CONFIG.instagram;
$("fb").href = CONFIG.facebook;
$("wa").href = "https://wa.me/" + numeroWhatsApp;
$("year").textContent = new Date().getFullYear();

// Menú con pestañas
const cats = CONFIG.categorias;
function pintarMenu(cat) {
    C$("tabs").innerHTML = cats.map(c =>
        `<button class="tab ${c === cat ? 'on' : ''}" data-c="${c}" role="tab" aria-selected="${c === cat}">${c}</button>`).join("");
    if (cat === "Promociones") {
        const consulta = encodeURIComponent("Hola, quisiera consultar las promociones disponibles.");
        C$("grid").innerHTML = `<article class="card promotion-card">
            <div class="e">🎉</div><h3>Promociones</h3>
            <p>${CONFIG.promociones}</p>
            <a class="btn promotion-link" href="https://wa.me/${numeroWhatsApp}?text=${consulta}" target="_blank" rel="noopener">Consultar por WhatsApp</a>
        </article>`;
        return;
    }
    const productos = CONFIG.menu
        .map((p, i) => ({ ...p, i }))
        .filter(p => p.cat === cat);
    C$("grid").innerHTML = productos.length ? productos
        .map(p => {
            const opciones = p.variantes
                ? `<label class="option-label">Tamaño / opción
                    <select class="product-option" aria-label="Tamaño u opción de ${p.nombre}">
                        ${p.variantes.map((v, i) => `<option value="${i}">${v.nombre} — ${precio(v.precio)}</option>`).join("")}
                    </select>
                </label>` : "";
            const precioInicial = p.variantes ? p.variantes[0].precio : p.precio;
            return `<article class="card"><div class="e">${p.emoji}</div><h3>${p.nombre}</h3>
                <p>${p.desc}</p>${opciones}<div class="pr">${precio(precioInicial)}</div>
                <button class="add" data-add="${p.i}">+ Agregar</button></article>`;
        }).join("")
        : `<p class="empty-category">${cat === "Postres" ? "Consulta disponibilidad. Opciones gluten free." : "Próximamente agregaremos productos a esta categoría."}</p>`;
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
const hoy = (new Date().getDay() + 6) % 7;  // lunes = 0
C$("hours").innerHTML = CONFIG.horario.map((h, i) =>
    `<li class="${i === hoy ? 'today' : ''}"><span>${h[0]}</span><span>${h[1]}</span></li>`).join("");

// Modo oscuro (recuerda la elección)
function setTema(t) {
    document.documentElement.dataset.theme = t;
    C$("theme").textContent = t === "dark" ? "☀️" : "🌙";
    try { localStorage.setItem("tema", t); } catch (e) { }
}
let guardado = null; try { guardado = localStorage.getItem("tema"); } catch (e) { }
setTema(guardado || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
$("theme").onclick = () => setTema(document.documentElement.dataset.theme === "dark" ? "light" : "dark");

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
    const txt = `Hola, soy C${C$("f-name").value || "un cliente"}. ${C$("f-msg").value}`;
    abrirWhatsApp(txt);
};

// Quejas y sugerencias (se conservan en este navegador)
if ($("feedback-form")) {
    const FEEDBACK_STORAGE_KEY = "elefante-amarillo-feedback-v1";
    let feedbackEntries = [];
    let feedbackStorageReady = true;
    let feedbackRating = 0;

    function mostrarEstadoFeedback(message, isError = false) {
        const status = $("feedback-status");
        status.textContent = message;
        status.classList.toggle("error", isError);
    }

    function pintarFeedback() {
        $("feedback-count").textContent = feedbackEntries.length;
        const container = $("feedback-entries");
        container.replaceChildren();

        if (!feedbackEntries.length) {
            const empty = document.createElement("p");
            empty.className = "feedback-empty";
            empty.textContent = "Todavía no hay opiniones. ¡Sé la primera persona en compartir la tuya!";
            container.append(empty);
            return;
        }

        [...feedbackEntries].reverse().forEach(entry => {
            const card = document.createElement("article");
            card.className = "feedback-entry";

            const head = document.createElement("div");
            head.className = "feedback-entry-head";
            const author = document.createElement("strong");
            author.textContent = entry.name || "Cliente";
            const stars = document.createElement("span");
            stars.className = "feedback-entry-stars";
            stars.setAttribute("aria-label", `${entry.rating} de 5 estrellas`);
            stars.textContent = `${"★".repeat(entry.rating)}${"☆".repeat(5 - entry.rating)}`;
            head.append(author, stars);

            const date = document.createElement("time");
            date.className = "feedback-entry-date";
            date.dateTime = entry.createdAt;
            date.textContent = new Date(entry.createdAt).toLocaleString("es-NI");

            const comment = document.createElement("p");
            comment.className = "feedback-entry-comment";
            comment.textContent = entry.comment;
            card.append(head, date, comment);
            container.append(card);
        });
    }

    try {
        const savedFeedback = localStorage.getItem(FEEDBACK_STORAGE_KEY);
        if (savedFeedback) {
            const parsedFeedback = JSON.parse(savedFeedback);
            if (!Array.isArray(parsedFeedback) || parsedFeedback.some(entry =>
                !entry || typeof entry.name !== "string" || typeof entry.comment !== "string" ||
                !Number.isInteger(entry.rating) || entry.rating < 1 || entry.rating > 5 ||
                typeof entry.createdAt !== "string")) {
                throw new Error("Los datos guardados no tienen el formato esperado.");
            }
            feedbackEntries = parsedFeedback;
        }
        pintarFeedback();
    } catch (error) {
        feedbackStorageReady = false;
        $("feedback-submit").disabled = true;
        mostrarEstadoFeedback("No se pudieron leer las opiniones guardadas. No se aceptarán nuevos registros para proteger esos datos.", true);
        console.error("No se pudieron cargar las opiniones guardadas:", error);
    }

    $("feedback-rating").addEventListener("click", event => {
        const star = event.target.closest("[data-rating]");
        if (!star) return;
        feedbackRating = Number(star.dataset.rating);
        $("feedback-rating").querySelectorAll(".star").forEach(button => {
            const selected = Number(button.dataset.rating) <= feedbackRating;
            button.classList.toggle("selected", selected);
            button.setAttribute("aria-pressed", String(Number(button.dataset.rating) === feedbackRating));
        });
        mostrarEstadoFeedback("");
    });

    $("feedback-form").addEventListener("submit", event => {
        event.preventDefault();
        if (!feedbackStorageReady) return;
        if (!feedbackRating) {
            mostrarEstadoFeedback("Selecciona una calificación de 1 a 5 estrellas.", true);
            return;
        }

        const entry = {
            name: $("feedback-name").value.trim(),
            rating: feedbackRating,
            comment: $("feedback-comment").value.trim(),
            createdAt: new Date().toISOString()
        };
        if (!entry.comment) {
            $("feedback-comment").focus();
            mostrarEstadoFeedback("Escribe tu comentario antes de guardar.", true);
            return;
        }

        const updatedEntries = [...feedbackEntries, entry];
        try {
            localStorage.setItem(FEEDBACK_STORAGE_KEY, JSON.stringify(updatedEntries));
        } catch (error) {
            mostrarEstadoFeedback("No se pudo guardar la opinión en este navegador. Inténtalo de nuevo.", true);
            console.error("No se pudo guardar la opinión:", error);
            return;
        }

        feedbackEntries = updatedEntries;
        pintarFeedback();
        $("feedback-form").reset();
        feedbackRating = 0;
        $("feedback-rating").querySelectorAll(".star").forEach(button => {
            button.classList.remove("selected");
            button.setAttribute("aria-pressed", "false");
        });
        mostrarEstadoFeedback("¡Gracias! Tu opinión quedó guardada en este navegador.");
    });
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
    }).join("") : `<p class="empty">Tu carrito está vacío ☕<br>Agrega algo del menú.</p>`;
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
$("o-type").onchange = () => { $("o-addr").hidden = $("o-type").value !== "A domicilio"; };

// Enviar el pedido al WhatsApp del negocio
$("o-send").onclick = () => {
    const ids = Object.keys(carrito).filter(i => detalleProducto(i));
    if (!ids.length) return alert("Agrega al menos un producto 🙂");
    if ($("o-local").value === "") return alert("Elige el local para tu pedido");
    const local = CONFIG.locales[Number($("o-local").value)];
    const domicilio = $("o-type").value === "A domicilio";
    if (domicilio && !$("o-addr").value.trim()) return alert("Escribe la dirección de entrega");
    let subtotal = 0;
    const lineas = ids.map(i => {
        const { precio: precioUnitario, nombre } = detalleProducto(i), q = carrito[i];
        subtotal += precioUnitario * q;
        return `• ${q} x ${nombre} — ${precio(precioUnitario * q)}`;
    });
    const porcentaje = porcentajePropina();
    const propina = calcularPropina(subtotal);
    const total = subtotal + propina;
    const msg = [`☕ *Nuevo pedido — ${CONFIG.nombre}*`,
    `🏬 Local: ${local.nombre}`,
    `👤 Cliente: ${$("o-name").value.trim() || "Sin nombre"}`,
    `📦 Tipo: ${$("o-type").value}`,
        "💳 Forma de pago: Transferencia bancaria",
    `🏦 Banco: ${CONFIG.transferencia.banco} — ${CONFIG.transferencia.moneda}`,
    `🔢 Número de cuenta: ${CONFIG.transferencia.cuenta}`,
    domicilio ? `📍 Dirección: ${$("o-addr").value.trim()}` : "",
        "", ...lineas, "", `Subtotal: ${precio(subtotal)}`,
    `Propina${porcentaje ? ` (${porcentaje}%)` : ""}: ${precio(propina)}`,
    `💰 *Total: ${precio(total)}*`,
    $("o-note").value.trim() ? `📝 Notas: ${$("o-note").value.trim()}` : ""
    ].filter((l, k, a) => l !== "" || (a[k - 1] !== "" && k)).join("\n");
    abrirWhatsApp(msg);
};
pintarCarrito();