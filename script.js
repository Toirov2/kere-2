    // Mahsulotlar ro'yxati
    const products = [
        { id: 1, name: "Smartfon", price: 1500000, category: "Elektronika", image: "https://via.placeholder.com/150/FF0000", description: "Zamonaviy smartfon, 4G, 128GB xotira.", keywords: ["smartfon", "telefon", "4G", "128GB", "mobil", "uyali"], stock: 10 },
        { id: 2, name: "Limonad", price: 5000, category: "Ichimlik", image: "https://via.placeholder.com/150/00FF00", description: "Sovuq ichimlik, tabiiy limon ta'mi.", keywords: ["limonad", "ichimlik", "sovuq", "limon", "suv", "gazli"], stock: 100 },
        { id: 3, name: "Olma", price: 3000, category: "Meva", image: "https://via.placeholder.com/150/0000FF", description: "Yangi olma, organik.", keywords: ["olma", "meva", "yangi", "organik", "yashil olma", "qizil olma"], stock: 200 },
        { id: 4, name: "Televizor OLED", price: 5000000, category: "Elektronika", image: "https://via.placeholder.com/150/FFFF00", description: "4K OLED televizor, 55 inch smart TV.", keywords: ["televizor", "4K", "OLED", "smart TV", "55 inch", "tv", "tele"], stock: 5 }
    ];

    // Zaxira javoblar
    const fallbackResponses = {
        uz: {
            greeting: "Assalomu Alaykum! SavdoGo platformasida xush kelibsiz. Sizga qanday yordam bera olaman?",
            notFound: "Savolingizni tushunmadim. Iltimos, aniqroq yozing yoki tezkor tugmalardan foydalaning.",
            error: "Texnik xato yuz berdi. Keyinroq urinib ko‘ring yoki tezkor tugmalardan foydalaning.",
            catalog: "Katalogni ko‘rish uchun 'Katalog' tugmasini bosing yoki quyidagi mahsulotlarni ko‘ring:<br>" +
                    products.map(p => `${p.name} - ${p.price.toLocaleString('uz-UZ')} so‘m`).join('<br>'),
            help: "Mavjud komandalar: Smartfonlar, Kredit, Manzil, Registratsiya, Katalog, Platforma haqida, To‘lovlar, Narxlar ro‘yxati, Aksiya, Savat holati, Buyurtma holati, Mahsulot tavsifi, Bog‘lanish, Yetkazib berish muddati, Mahsulot qaytarish, Chegirmalar, Mahsulot mavjudligi, To‘lov holati, Shikoyat, Kategoriyalar, Eng arzon, Savatni tozalash, Ishlash uchun bog‘lanish, Promokod, Mahsulot solishtirish, Sayt foydalanish qo‘llanmasi, Buyurtma bekor qilish, Mahsulot sifati, Yordam."
        },
        ru: {
            greeting: "Здравствуйте! Добро пожаловать на платформу SavdoGo. Чем могу помочь?",
            notFound: "Не понял ваш запрос. Пожалуйста, напишите точнее или используйте быстрые кнопки.",
            error: "Произошла техническая ошибка. Попробуйте позже или используйте быстрые кнопки.",
            catalog: "Для просмотра каталога нажмите кнопку 'Каталог' или ознакомьтесь с товарами:<br>" +
                    products.map(p => `${p.name} - ${p.price.toLocaleString('ru-RU')} сум`).join('<br>'),
            help: "Доступные команды: Смартфоны, Кредит, Адрес, Регистрация, Каталог, О платформе, Оплаты, Список цен, Акция, Состояние корзины, Статус заказа, Описание товара, Контакты, Срок доставки, Возврат товара, Скидки, Наличие товара, Статус оплаты, Жалоба, Категории, Самый дешевый, Очистить корзину, Связь для работы, Промокод, Сравнение товаров, Руководство по сайту, Отмена заказа, Качество товара, Помощь."
        }
    };

    // Platforma konteksti
    const getPlatformContext = (lang = 'uz') => `
    SavdoGo - bu turli mahsulotlar va xizmatlar taqdim etuvchi onlayn savdo platformasi. 
    Mahsulotlar: ${products.map(p => `${p.name} (${p.price.toLocaleString(lang === 'uz' ? 'uz-UZ' : 'ru-RU')} so‘m, ${p.description}, ${lang === 'uz' ? 'mavjud' : 'в наличии'}: ${p.stock})`).join(', ')}.
    Xizmatlar:
    - Registratsiya: Telefon raqami, SMS kod, ism, familiya, email kiritish.
    - Manzil: Shaxsiy kabinetda shahar, ko‘cha, uy raqami kiritish.
    - Kredit: Onlayn ariza, pasport va daromad ma’lumotlari bilan skoring.
    - Katalog: "Katalog" tugmasi yoki chatbot orqali ko‘rish.
    - To‘lov turlari: Naqd, karta (Visa, Mastercard), kredit orqali to‘lov.
    - Yetkazib berish: Toshkent bo‘yicha 20,000 so‘m, boshqa viloyatlarga 50,000 so‘m.
    - Yetkazib berish muddati: Toshkent ichida 1-2 kun, viloyatlarga 3-5 kun.
    - Aksiya: Smartfon uchun 10% chegirma (30/06/2025 gacha amal qiladi).
    - Mahsulot qaytarish: 14 kun ichida, agar mahsulot ishlatilmagan bo‘lsa.
    - Platforma haqida: SavdoGo 2025-yilda tashkil topgan, foydalanuvchilarga qulay onlayn savdo tajribasi taqdim etadi.
    - Bog‘lanish: Telefon: +998 (93) 857-33-11, Email: support@savdogo.com.
    - Ishlash uchun bog‘lanish: Hamkorlik uchun hr@savdogo.com ga yozing.
    - Shikoyat: Shikoyat yoki taklif uchun support@savdogo.com ga yozing yoki +998 (93) 857-33-11 raqamiga qo‘ng‘iroq qiling.
    - Promokod: Chegirma olish uchun shaxsiy kabinetda promokod kiritish mumkin.
    - Mahsulot solishtirish: Ikki mahsulot nomini kiriting, solishtirish uchun.
    - Sayt foydalanish qo‘llanmasi: Saytdan foydalanish bo‘yicha qo‘llanma shaxsiy kabinetda mavjud.
    - Buyurtma bekor qilish: Buyurtmani bekor qilish uchun support@savdogo.com ga yozing.
    - Mahsulot sifati: Barcha mahsulotlar sifat sertifikatlariga ega.
    Tezkor tugmalar: "Smartfonlar", "Kredit", "Manzil", "Registratsiya", "Katalog", "Platforma haqida", "To‘lovlar", "Narxlar ro‘yxati", "Aksiya", "Savat holati", "Buyurtma holati", "Mahsulot tavsifi", "Bog‘lanish", "Yetkazib berish muddati", "Mahsulot qaytarish", "Chegirmalar", "Mahsulot mavjudligi", "To‘lov holati", "Shikoyat", "Kategoriyalar", "Eng arzon", "Savatni tozalash", "Ishlash uchun bog‘lanish", "Promokod", "Mahsulot solishtirish", "Sayt foydalanish qo‘llanmasi", "Buyurtma bekor qilish", "Mahsulot sifati", "Yordam".
    Javoblar ${lang === 'uz' ? 'o‘zbek' : 'rus'} tilida, qisqa va aniq bo‘lsin. Tushunarsiz yoki noto‘g‘ri so‘rovlar uchun aniqroq savol so‘rashni taklif et yoki tezkor tugmalarni eslat.
    `;

    // Holat o'zgaruvchilari
    let cart = [];
    let isChatbotOpen = false;
    let greeted = false;
    let chatHistory = [];
    let lastOrder = null; // Oxirgi buyurtma ma'lumotlari
    const API_KEY = "YOUR_API_KEY"; // Haqiqiy xAI API kalitini qo‘ying

    // DOM elementlari
    const productsContainer = document.getElementById('products');
    const cartModal = document.getElementById('cartModal');
    const cartItems = document.getElementById('cartItems');
    const totalPrice = document.getElementById('totalPrice');
    const cartCount = document.getElementById('cartCount');
    const chatInput = document.getElementById('chatInput');
    const chatBody = document.getElementById('chatBody');
    const receiptModal = document.getElementById('receiptModal');

    // Mahsulotlarni ko'rsatish
    function renderProducts(productList = products) {
        if (!productsContainer) return console.error('Products container not found');
        const fragment = document.createDocumentFragment();
        productList.forEach(product => {
            const quantity = cart.find(c => c.id === product.id)?.quantity || 0;
            const div = document.createElement('div');
            div.className = 'product';
            div.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h4>${product.name}</h4>
                <p>${product.price.toLocaleString('uz-UZ')} so'm</p>
                ${quantity === 0 ? `<button onclick="addToCart(${product.id})"><i class="material-icons">add_shopping_cart</i></button>` : `
                    <div class="quantity-selector">
                        <button onclick="updateQuantity(${product.id}, -1)">−</button>
                        <span>${quantity}</span>
                        <button onclick="updateQuantity(${product.id}, 1)">+</button>
                    </div>
                `}
            `;
            fragment.appendChild(div);
        });
        productsContainer.innerHTML = '';
        productsContainer.appendChild(fragment);
    }

    // Savatga qo'shish
    function addToCart(id) {
        const product = products.find(p => p.id === id);
        if (product && product.stock > 0) {
            updateQuantity(id, 1);
            product.stock -= 1; // Omborda mahsulot sonini kamaytirish
        } else {
            const lang = document.getElementById('languageSelect')?.value || 'uz';
            appendChatMessage('bot', lang === 'uz' ? `${product.name} omborda mavjud emas.` : `Товар ${product.name} отсутствует на складе.`);
        }
    }

    // Savat miqdorini yangilash
    function updateQuantity(productId, change) {
        let item = cart.find(c => c.id === productId);
        const product = products.find(p => p.id === productId);
        if (item) {
            item.quantity += change;
            if (item.quantity <= 0) {
                cart = cart.filter(c => c.id !== productId);
                product.stock += 1; // Omborga qaytarish
            }
        } else if (change > 0 && product.stock > 0) {
            cart.push({ id: productId, name: product.name, price: product.price, quantity: 1 });
            product.stock -= 1;
        }
        updateCart();
        renderProducts();
        if (cartCount) cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    }

    // Savatni yangilash
    function updateCart() {
        if (!cartItems || !totalPrice) return console.error('Cart elements not found');
        const fragment = document.createDocumentFragment();
        let total = 0;
        cart.forEach(item => {
            const div = document.createElement('div');
            div.className = 'cart-item';
            div.innerHTML = `
                <span>${item.name} x ${item.quantity}</span>
                <span>${(item.price * item.quantity).toLocaleString('uz-UZ')} so‘m</span>
            `;
            fragment.appendChild(div);
            total += item.price * item.quantity;
        });
        cartItems.innerHTML = '';
        cartItems.appendChild(fragment);
        totalPrice.textContent = `Jami: ${total.toLocaleString('uz-UZ')} so‘m`;
    }

    // Savat modalini ko'rsatish/yashirish
    function showCartModal() {
        if (!cartModal) return console.error('Cart modal not found');
        updateCart();
        cartModal.classList.add('active');
    }

    function closeCartModal() {
        if (!cartModal) return console.error('Cart modal not found');
        cartModal.classList.remove('active');
    }

    // Buyurtmani tasdiqlash
    function submitCart() {
        if (!cart.length) {
            alert('Savat bo‘sh!');
            return;
        }
        const receiptContent = document.getElementById('receiptContent');
        if (!receiptContent) return console.error('Receipt content not found');
        lastOrder = {
            items: cart.map(item => ({ name: item.name, quantity: item.quantity, price: item.price })),
            total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
            date: new Date().toLocaleString('uz-UZ')
        };
        receiptContent.innerHTML = `
            <p><strong>Buyurtma:</strong> ${cart.map(item => `${item.name} x ${item.quantity}`).join(', ')}</p>
            <p><strong>Jami:</strong> ${lastOrder.total.toLocaleString('uz-UZ')} so‘m</p>
            <p><strong>Sana:</strong> ${lastOrder.date}</p>
        `;
        cartModal.classList.remove('active');
        receiptModal.classList.add('active');
        cart = [];
        updateCart();
        renderProducts();
        if (cartCount) cartCount.textContent = '0';
    }

    function closeReceiptModal() {
        if (!receiptModal) return console.error('Receipt modal not found');
        receiptModal.classList.remove('active');
    }

    // Katalogni ko'rsatish
    async function showCatalog() {
        renderProducts(products);
        const lang = document.getElementById('languageSelect')?.value || 'uz';
        try {
            const catalogResponse = await getBotResponse('Katalog');
            appendChatMessage('bot', catalogResponse);
        } catch {
            appendChatMessage('bot', fallbackResponses[lang].catalog);
        }
    }

    // Chatbot funksiyalari
    function toggleChatbot() {
        isChatbotOpen = !isChatbotOpen;
        const chatbotContainer = document.getElementById('chatbotContainer');
        if (!chatbotContainer) return console.error('Chatbot container not found');
        chatbotContainer.classList.toggle('active', isChatbotOpen);
        document.querySelector('.chatbot-header button').textContent = isChatbotOpen ? '−' : '+';
        if (isChatbotOpen && !greeted) {
            greeted = true;
            appendChatMessage('bot', fallbackResponses[document.getElementById('languageSelect')?.value || 'uz'].greeting);
        }
    }

    function sendChatMessage() {
        if (!chatInput || !chatBody) return console.error('Chat input or body not found');
        const message = chatInput.value.trim();
        if (!message) {
            appendChatMessage('bot', fallbackResponses[document.getElementById('languageSelect')?.value || 'uz'].notFound);
            return;
        }
        appendChatMessage('user', message);
        chatHistory.push({ role: 'user', content: message });
        getBotResponse(message).then(response => {
            appendChatMessage('bot', response);
            chatHistory.push({ role: 'bot', content: response });
            chatInput.value = '';
        }).catch(() => appendChatMessage('bot', fallbackResponses[document.getElementById('languageSelect')?.value || 'uz'].error));
    }

    function sendQuickReply(message) {
        appendChatMessage('user', message);
        chatHistory.push({ role: 'user', content: message });
        getBotResponse(message).then(response => {
            appendChatMessage('bot', response);
            chatHistory.push({ role: 'bot', content: response });
        }).catch(() => appendChatMessage('bot', fallbackResponses[document.getElementById('languageSelect')?.value || 'uz'].error));
    }

    function appendChatMessage(type, message) {
        if (!chatBody) return console.error('Chat body not found');
        const messageDiv = document.createElement('div');
        messageDiv.className = `chatbot-message ${type}`;
        messageDiv.innerHTML = message;
        chatBody.appendChild(messageDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    // Savatni tozalash
    function clearCart() {
        cart.forEach(item => {
            const product = products.find(p => p.id === item.id);
            if (product) product.stock += item.quantity; // Omborga qaytarish
        });
        cart = [];
        updateCart();
        renderProducts();
        if (cartCount) cartCount.textContent = '0';
        const lang = document.getElementById('languageSelect')?.value || 'uz';
        appendChatMessage('bot', lang === 'uz' ? 'Savat tozalandi.' : 'Корзина очищена.');
    }

    // Chat AI logikasi
    async function getBotResponse(message) {
        const lang = document.getElementById('languageSelect')?.value || 'uz';
        const currentDateTime = new Date().toLocaleString(lang === 'uz' ? 'uz-UZ' : 'ru-RU', { timeZone: 'Asia/Tashkent' });

        // Bo‘sh yoki noto‘g‘ri so‘rovlar
        if (!message || message.trim().length === 0) {
            return `${fallbackResponses[lang].notFound} ${currentDateTime}`;
        }

        // Tezkor javoblar
        const quickReplyResponses = {
            Smartfonlar: products
                .filter(p => p.category === 'Elektronika')
                .map(p => `${p.name} - ${p.price.toLocaleString(lang === 'uz' ? 'uz-UZ' : 'ru-RU')} so‘m (${p.description})`)
                .join('<br>'),
            Kredit: lang === 'uz'
                ? 'Kredit olish uchun onlayn ariza to‘ldiring, pasport va daromad ma’lumotlarini kiriting.'
                : 'Для получения кредита заполните онлайн-заявку, указав паспорт и данные о доходах.',
            Manzil: lang === 'uz'
                ? 'Manzilni shaxsiy kabinetda shahar, ko‘cha va uy raqami kiritib qo‘shing.'
                : 'Добавьте адрес в личном кабинете, указав город, улицу и номер дома.',
            Registratsiya: lang === 'uz'
                ? 'Telefon raqami orqali ro‘yxatdan o‘ting, SMS kod bilan tasdiqlang, ism, familiya va email kiriting.'
                : 'Зарегистрируйтесь по номеру телефона, подтвердите кодом из SMS, укажите имя, фамилию и email.',
            Katalog: fallbackResponses[lang].catalog,
            'Platforma haqida': lang === 'uz'
                ? 'SavdoGo - 2025-yilda tashkil topgan onlayn savdo platformasi bo‘lib, turli mahsulotlar va qulay xizmatlar taqdim etadi. Qo‘shimcha ma’lumot uchun support@savdogo.com ga yozing.'
                : 'SavdoGo - онлайн-платформа для торговли, основанная в 2025 году, предлагает различные товары и удобные услуги. Для подробностей пишите на support@savdogo.com.',
            'To‘lovlar': lang === 'uz'
                ? 'To‘lov turlari: naqd, karta (Visa, Mastercard), kredit. To‘lov shartlari uchun shaxsiy kabinetni tekshiring.'
                : 'Способы оплаты: наличные, карта (Visa, Mastercard), кредит. Условия оплаты проверьте в личном кабинете.',
            'Narxlar ro‘yxati': products
                .map(p => `${p.name}: ${p.price.toLocaleString(lang === 'uz' ? 'uz-UZ' : 'ru-RU')} so‘m`)
                .join('<br>'),
            Aksiya: lang === 'uz'
                ? 'Hozirda Smartfon uchun 10% chegirma mavjud (30/06/2025 gacha). Narxi: 1,350,000 so‘m.'
                : 'Сейчас действует скидка 10% на смартфон (до 30/06/2025). Цена: 1,350,000 сум.',
            'Savat holati': cart.length > 0
                ? `${lang === 'uz' ? 'Savatdagi mahsulotlar' : 'Товары в корзине'}: ${cart.map(item => `${item.name} x ${item.quantity} - ${(item.price * item.quantity).toLocaleString(lang === 'uz' ? 'uz-UZ' : 'ru-RU')} so‘m`).join(', ')}.<br>${lang === 'uz' ? 'Jami' : 'Итого'}: ${cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toLocaleString(lang === 'uz' ? 'uz-UZ' : 'ru-RU')} so‘m`
                : lang === 'uz' ? 'Savat bo‘sh.' : 'Корзина пуста.',
            'Buyurtma holati': lastOrder
                ? `${lang === 'uz' ? 'Oxirgi buyurtma' : 'Последний заказ'}: ${lastOrder.items.map(item => `${item.name} x ${item.quantity}`).join(', ')}.<br>${lang === 'uz' ? 'Jami' : 'Итого'}: ${lastOrder.total.toLocaleString(lang === 'uz' ? 'uz-UZ' : 'ru-RU')} so‘m.<br>${lang === 'uz' ? 'Sana' : 'Дата'}: ${lastOrder.date}`
                : lang === 'uz' ? 'Hozircha buyurtmalar yo‘q.' : 'Пока заказов нет.',
            'Mahsulot tavsifi': lang === 'uz'
                ? 'Mahsulot nomini kiriting (masalan, "Smartfon" yoki "Televizor OLED") haqida batafsil ma’lumot olish uchun.'
                : 'Введите название товара (например, "Смартфон" или "Телевизор OLED") для получения подробной информации.',
            'Bog‘lanish': lang === 'uz'
                ? 'Bog‘lanish uchun: Telefon: +998 (93) 857-33-11, Email: support@savdogo.com.'
                : 'Для связи: Телефон: +998 (93) 857-33-11, Email: support@savdogo.com.',
            'Yetkazib berish muddati': lang === 'uz'
                ? 'Yetkazib berish muddati: Toshkent ichida 1-2 kun, viloyatlarga 3-5 kun.'
                : 'Срок доставки: по Ташкенту 1-2 дня, в регионы 3-5 дней.',
            'Mahsulot qaytarish': lang === 'uz'
                ? 'Mahsulotni 14 kun ichida, agar ishlatilmagan bo‘lsa, qaytarishingiz mumkin. Qaytarish uchun support@savdogo.com ga yozing.'
                : 'Вы можете вернуть товар в течение 14 дней, если он не использовался. Для возврата пишите на support@savdogo.com.',
            Chegirmalar: lang === 'uz'
                ? 'Hozirda Smartfon uchun 10% chegirma (30/06/2025 gacha) va Televizor OLED uchun 5% chegirma mavjud.'
                : 'Сейчас действует скидка 10% на смартфон (до 30/06/2025) и 5% на телевизор OLED.',
            'Mahsulot mavjudligi': lang === 'uz'
                ? 'Mahsulot nomini kiriting, mavjudligini tekshiramiz (masalan, "Smartfon").'
                : 'Введите название товара, проверим наличие (например, "Смартфон").',
            'To‘lov holati': lang === 'uz'
                ? 'To‘lov holatini shaxsiy kabinetda tekshirishingiz mumkin yoki support@savdogo.com ga yozing.'
                : 'Статус оплаты можно проверить в личном кабинете или написать на support@savdogo.com.',
            Shikoyat: lang === 'uz'
                ? 'Shikoyat yoki taklif uchun support@savdogo.com ga yozing yoki +998 (93) 857-33-11 raqamiga qo‘ng‘iroq qiling.'
                : 'Для жалоб или предложений пишите на support@savdogo.com или звоните по номеру +998 (93) 857-33-11.',
            Kategoriyalar: [...new Set(products.map(p => p.category))]
                .map(c => `${c}: ${products.filter(p => p.category === c).map(p => p.name).join(', ')}`)
                .join('<br>'),
            'Eng arzon': (() => {
                const cheapest = products.reduce((prev, curr) => prev.price < curr.price ? prev : curr);
                return lang === 'uz'
                    ? `Eng arzon mahsulot: ${cheapest.name} - ${cheapest.price.toLocaleString('uz-UZ')} so‘m (${cheapest.description})`
                    : `Самый дешевый товар: ${cheapest.name} - ${cheapest.price.toLocaleString('ru-RU')} сум (${cheapest.description})`;
            })(),
            'Savatni tozalash': lang === 'uz'
                ? 'Savatni tozalash uchun "Savatni tozalash" tugmasini bosing.'
                : 'Чтобы очистить корзину, нажмите кнопку "Очистить корзину".',
            'Ishlash uchun bog‘lanish': lang === 'uz'
                ? 'Hamkorlik yoki ish uchun hr@savdogo.com ga yozing yoki +998 (93) 857-33-11 raqamiga qo‘ng‘iroq qiling.'
                : 'Для сотрудничества или работы пишите на hr@savdogo.com или звоните по номеру +998 (93) 857-33-11.',
            Promokod: lang === 'uz'
                ? 'Promokodni shaxsiy kabinetda kiritib, chegirmalardan foydalaning (masalan, PROMO2025).'
                : 'Введите промокод в личном кабинете, чтобы получить скидку (например, PROMO2025).',
            'Mahsulot solishtirish': lang === 'uz'
                ? 'Ikkita mahsulot nomini kiriting (masalan, "Smartfon va Televizor OLED").'
                : 'Введите названия двух товаров для сравнения (например, "Смартфон и Телевизор OLED").',
            'Sayt foydalanish qo‘llanmasi': lang === 'uz'
                ? 'Saytdan foydalanish bo‘yicha qo‘llanma shaxsiy kabinetda yoki support@savdogo.com orqali mavjud.'
                : 'Руководство по использованию сайта доступно в личном кабинете или через support@savdogo.com.',
            'Buyurtma bekor qilish': lang === 'uz'
                ? 'Buyurtmani bekor qilish uchun support@savdogo.com ga yozing yoki +998 (93) 857-33-11 ga qo‘ng‘iroq qiling.'
                : 'Для отмены заказа пишите на support@savdogo.com или звоните по номеру +998 (93) 857-33-11.',
            'Mahsulot sifati': lang === 'uz'
                ? 'Barcha mahsulotlar sifat sertifikatlariga ega. Qo‘shimcha ma’lumot uchun support@savdogo.com ga yozing.'
                : 'Все товары имеют сертификаты качества. Для подробностей пишите на support@savdogo.com.',
            Yordam: fallbackResponses[lang].help
        };

        // Tezkor javoblar tekshiruvi
        const quickReply = Object.keys(quickReplyResponses).find(key => message.toLowerCase().includes(key.toLowerCase()));
        if (quickReply) {
            // Maxsus mahsulot tavsifi yoki mavjudligi uchun qo‘shimcha tekshiruv
            if (quickReply === 'Mahsulot tavsifi' || quickReply === 'Mahsulot mavjudligi') {
                const productName = message.toLowerCase().replace(/mahsulot tavsifi|mahsulot mavjudligi|описание товара|наличие товара/gi, '').trim();
                const product = products.find(p => p.name.toLowerCase().includes(productName) || p.keywords.some(k => k.toLowerCase().includes(productName)));
                if (product) {
                    if (quickReply === 'Mahsulot tavsifi') {
                        return `${product.name}: ${product.price.toLocaleString(lang === 'uz' ? 'uz-UZ' : 'ru-RU')} so‘m. ${product.description}<br><img src="${product.image}" alt="${product.name}"><br>${currentDateTime}`;
                    } else {
                        return lang === 'uz'
                            ? `${product.name} omborda ${product.stock} dona mavjud.`
                            : `Товар ${product.name} в наличии: ${product.stock} шт.`;
                    }
                }
                return lang === 'uz'
                    ? `Bunday mahsulot topilmadi. Iltimos, aniq nom kiriting (masalan, "Smartfon").`
                    : `Товар не найден. Пожалуйста, укажите точное название (например, "Смартфон").`;
            }
            // Mahsulot solishtirish
            if (quickReply === 'Mahsulot solishtirish') {
                const productNames = message.toLowerCase().replace(/mahsulot solishtirish|сравнение товаров/gi, '').trim().split(/va|и|and/);
                const product1 = products.find(p => p.name.toLowerCase().includes(productNames[0]?.trim()));
                const product2 = products.find(p => p.name.toLowerCase().includes(productNames[1]?.trim()));
                if (product1 && product2) {
                    return lang === 'uz'
                        ? `${product1.name}: ${product1.price.toLocaleString('uz-UZ')} so‘m, ${product1.description}<br>` +
                        `${product2.name}: ${product2.price.toLocaleString('uz-UZ')} so‘m, ${product2.description}<br>${currentDateTime}`
                        : `${product1.name}: ${product1.price.toLocaleString('ru-RU')} сум, ${product1.description}<br>` +
                        `${product2.name}: ${product2.price.toLocaleString('ru-RU')} сум, ${product2.description}<br>${currentDateTime}`;
                }
                return lang === 'uz'
                    ? `Iltimos, ikkita mahsulot nomini aniq kiriting (masalan, "Smartfon va Televizor OLED").`
                    : `Пожалуйста, укажите точные названия двух товаров (например, "Смартфон и Телевизор OLED").`;
            }
            return `${quickReplyResponses[quickReply]}<br>${currentDateTime}`;
        }

        // Maxsus so‘rovlar
        if (message.toLowerCase().includes('yetkazib berish') || message.toLowerCase().includes('доставка')) {
            return lang === 'uz'
                ? `Yetkazib berish: Toshkent bo‘yicha 20,000 so‘m, boshqa viloyatlarga 50,000 so‘m.<br>${currentDateTime}`
                : `Доставка: по Ташкенту 20,000 сум, в регионы 50,000 сум.<br>${currentDateTime}`;
        }
        if (message.toLowerCase().includes('eng zor') || message.toLowerCase().includes('лучший')) {
            const bestProduct = products.reduce((prev, curr) => prev.price > curr.price ? prev : curr);
            const response = lang === 'uz'
                ? `Eng zo‘r mahsulot: ${bestProduct.name} - ${bestProduct.price.toLocaleString('uz-UZ')} so‘m (${bestProduct.description})`
                : `Лучший продукт: ${bestProduct.name} - ${bestProduct.price.toLocaleString('ru-RU')} сум (${bestProduct.description})`;
            return `${response}<br><img src="${bestProduct.image}" alt="${bestProduct.name}"><br>${currentDateTime}`;
        }
        if (message.toLowerCase().includes('assalomu alaykum') || message.toLowerCase().includes('здравствуйте') || message.toLowerCase().includes('salom')) {
            return `${fallbackResponses[lang].greeting}<br>${currentDateTime}`;
        }

        // API so‘rovi (xatolardan qochish uchun zaxira javoblar)
        try {
            const response = await fetch('https://api.x.ai/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_KEY}`
                },
                body: JSON.stringify({
                    model: 'grok-beta',
                    messages: [
                        { role: 'system', content: getPlatformContext(lang) },
                        { role: 'user', content: message }
                    ],
                    max_tokens: 500,
                    temperature: 0.7
                })
            });

            if (!response.ok) {
                return `${fallbackResponses[lang].notFound}<br>${lang === 'uz' ? 'Iltimos, tezkor tugmalardan foydalaning: Smartfonlar, Katalog, Aksiya, Yordam.' : 'Пожалуйста, используйте быстрые кнопки: Смартфоны, Каталог, Акция, Помощь.'}<br>${currentDateTime}`;
            }

            const data = await response.json();
            let botResponse = data.choices[0].message.content;
            botResponse += `<br>${lang === 'uz' ? 'Boshqa savollar uchun tezkor tugmalardan foydalaning.' : 'Для других вопросов используйте кнопки.'}<br>${currentDateTime}`;
            return botResponse;
        } catch (error) {
            console.error('API error:', error.message);
            return `${fallbackResponses[lang].error}<br>${lang === 'uz' ? 'Iltimos, tezkor tugmalardan foydalaning: Smartfonlar, Katalog, Aksiya, Yordam.' : 'Пожалуйста, используйте быстрые кнопки: Смартфоны, Каталог, Акция, Помощь.'}<br>${currentDateTime}`;
        }
    }

    // Qidiruv funksiyasi
    function performSearch() {
        const searchInput = document.getElementById('searchInput')?.value.toLowerCase() || '';
        const lang = document.getElementById('languageSelect')?.value || 'uz';
        const filteredProducts = products.filter(p =>
            p.name.toLowerCase().includes(searchInput) ||
            p.description.toLowerCase().includes(searchInput) ||
            p.keywords.some(k => k.toLowerCase().includes(searchInput))
        );
        renderProducts(filteredProducts);
        const searchMessage = filteredProducts.length > 0 ?
            `${lang === 'uz' ? 'Qidiruv natijalari:' : 'Результаты поиска:'} ${filteredProducts.map(p => `${p.name} - ${p.price.toLocaleString(lang === 'uz' ? 'uz-UZ' : 'ru-RU')} so‘m`).join(', ')}` :
            lang === 'uz' ? 'Hech narsa topilmadi.' : 'Ничего не найдено.';
        getBotResponse(searchMessage).then(response => appendChatMessage('bot', response)).catch(() => appendChatMessage('bot', fallbackResponses[lang].error));
    }

    // Tilni yangilash
    function updateLang() {
        const lang = document.getElementById('languageSelect')?.value || 'uz';
        renderProducts();
        updateCart();
        if (isChatbotOpen && !greeted) {
            greeted = true;
            appendChatMessage('bot', fallbackResponses[lang].greeting);
        }
    }

    // Dastlabki yuklash
    renderProducts();