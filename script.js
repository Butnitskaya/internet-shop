const items = [
    {
      title: "Ретро ваза «Винтаж»",
      description: "Идеально подходит для интерьера в стиле ретро.",
      price: 2500,
      img: "./img/1.jpg", // Изображение 1.jpg
    },
    {
      title: "Ваза «Цветочный узор»",
      description: "Ручная роспись, уникальный дизайн.",
      price: 3200,
      img: "./img/2.jpg", // Изображение 2.jpg
    },
    {
      title: "Ваза «Золотой век»",
      description: "Элегантная ваза с позолотой.",
      price: 4500,
      img: "./img/3.jpg", // Изображение 3.jpg
    },
    {
      title: "Ваза «Ретро минимализм»",
      description: "Простота и стиль в одном изделии.",
      price: 2800,
      img: "./img/4.jpg", // Изображение 4.jpg
    },
    {
      title: "Ваза «Классика»",
      description: "Традиционный дизайн для вашего дома.",
      price: 3700,
      img: "./img/5.jpg", // Изображение 5.jpg
    },
  ];
  
  let filteredItems = [...items]; // Копия массива для фильтрации и сортировки
  
  // Функция для отображения товаров
  function renderItems(itemsToRender) {
    const shopItemsContainer = document.getElementById("shop-items");
    const itemTemplate = document.getElementById("item-template");
  
    // Очищаем контейнер перед добавлением новых элементов
    shopItemsContainer.innerHTML = "";
  
    if (itemsToRender.length === 0) {
      document.getElementById("nothing-found").textContent = "Ничего не найдено";
      return;
    }
  
    itemsToRender.forEach((item) => {
      const itemElement = itemTemplate.content.cloneNode(true);
      itemElement.querySelector("img").src = item.img;
      itemElement.querySelector("h1").textContent = item.title;
      itemElement.querySelector("p").textContent = item.description;
      itemElement.querySelector(".price").textContent = `${item.price} руб.`;
      shopItemsContainer.appendChild(itemElement);
    });
  
    document.getElementById("nothing-found").textContent = "";
  }
  
  // Функция для поиска товаров
  function searchItems(query) {
    const normalizedQuery = query.trim().toLowerCase();
  
    if (!normalizedQuery) {
      filteredItems = [...items];
    } else {
      filteredItems = items.filter((item) =>
        item.title.toLowerCase().includes(normalizedQuery)
      );
    }
  
    // Сбрасываем сортировку
    document.getElementById("sort-select").value = "default";
    renderItems(filteredItems);
  }
  
  // Функция для сортировки товаров
  function sortItems(criteria) {
    const sortedItems = [...filteredItems];
  
    if (criteria === "price-asc") {
      sortedItems.sort((a, b) => a.price - b.price);
    } else if (criteria === "price-desc") {
      sortedItems.sort((a, b) => b.price - a.price);
    }
  
    renderItems(sortedItems);
  }
  
  // Обработчики событий
  document.getElementById("search-btn").addEventListener("click", () => {
    const searchInput = document.getElementById("search-input");
    searchItems(searchInput.value);
  });
  
  document.getElementById("search-input").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      searchItems(e.target.value);
    }
  });
  
  document.getElementById("sort-select").addEventListener("change", (e) => {
    sortItems(e.target.value);
  });
  
  // Инициализация: отображаем все товары при загрузке страницы
  renderItems(items);