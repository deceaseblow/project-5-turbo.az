const carData = [
    {
        id: 1,
        price: "10 500 AZN",
        make: "Mercedes",
        model: "w202",
        year: 1998,
        engine: "2.0 L",
        color: "silver",
        mileage: "234,000 km",
        transmission: "Automatic",
        fuel: "Gasoline",
        location: "Baku",
        description: "Well maintained Mercedes w202. New tires, recently serviced, all documents in order. Second owner.",
        features: ["Air conditioning", "Leather seats", "Power windows", "Central locking"],
        image: "imgs/1.webp"
    },
    {
        id: 2,
        price: "21 000 AZN",
        make: "Kia",
        model: "Rio",
        year: 2014,
        engine: "1.4 L",
        color: "silver",
        mileage: "112,000 km",
        transmission: "Manual",
        fuel: "Gasoline",
        location: "Ganja",
        description: "Reliable Kia Rio in excellent condition. Fuel efficient and low maintenance costs. Perfect for city driving.",
        features: ["Bluetooth", "USB", "ABS", "Airbags"],
        image: "imgs/2.jpg"
    },
    {
        id: 3,
        price: "12 000 AZN",
        make: "Hyundai",
        model: "Tucson",
        year: 2014,
        engine: "2.0 L",
        color: "black",
        mileage: "156,000 km",
        transmission: "Automatic",
        fuel: "Diesel",
        location: "Sumgait",
        description: "Spacious Hyundai Tucson SUV. Great for family trips and daily commute. Excellent condition.",
        features: ["Roof rails", "Heated seats", "Rear camera", "Cruise control"],
        image: "imgs/3.jpg"
    },
    {
        id: 4,
        price: "35 000 AZN",
        make: "LADA (VAZ)",
        model: "2107",
        year: 2010,
        engine: "1.6 L",
        color: "black",
        mileage: "45,000 km",
        transmission: "Manual",
        fuel: "Gasoline",
        location: "Baku",
        description: "Classic LADA in mint condition. Low mileage, regularly serviced, no accidents.",
        features: ["New tires", "Custom stereo", "Alarm system"],
        image: "imgs/4.webp"
    },
    {
        id: 5,
        price: "28 700 AZN",
        make: "BMW",
        model: "M5 e39",
        year: 1998,
        engine: "4.4 L",
        color: "blue",
        mileage: "220,000 km",
        transmission: "Automatic",
        fuel: "Gasoline",
        location: "Baku",
        description: "Legendary BMW M5 E39. Powerful V8 engine. Recently maintained with new parts.",
        features: ["Sport suspension", "Leather interior", "Premium sound system", "Xenon headlights"],
        image: "imgs/5.jpg"
    },
    {
        id: 6,
        price: "86 500 AZN",
        make: "Mercedes",
        model: "CLS",
        year: 2019,
        engine: "2.0 L",
        color: "silver",
        mileage: "32,000 km",
        transmission: "Automatic",
        fuel: "Diesel",
        location: "Baku",
        description: "Elegant Mercedes CLS with low mileage. Premium condition with full service history.",
        features: ["LED headlights", "Memory seats", "Navigation", "360 camera", "Lane assist"],
        image: "imgs/6.webp"
    },
    {
        id: 7,
        price: "54 000 AZN",
        make: "Toyota",
        model: "Camry",
        year: 2022,
        engine: "2.5 L",
        color: "white",
        mileage: "12,000 km",
        transmission: "Automatic",
        fuel: "Hybrid",
        location: "Baku",
        description: "Latest model Toyota Camry hybrid. Excellent fuel efficiency and comfortable ride.",
        features: ["JBL sound system", "Adaptive cruise control", "Wireless charging", "Apple CarPlay"],
        image: "imgs/7.jpg"
    },
    {
        id: 8,
        price: "118 400 AZN",
        make: "Porsche",
        model: "911 Carrera",
        year: 2023,
        engine: "4.4 L",
        color: "cyan",
        mileage: "3,000 km",
        transmission: "PDK",
        fuel: "Gasoline",
        location: "Baku",
        description: "Brand new Porsche 911 Carrera. Ultimate driving experience with all premium features.",
        features: ["Sports Chrono Package", "BOSE surround sound", "Carbon interior", "Sport exhaust"],
        image: "imgs/8.jpg"
    },
    {
        id: 9,
        price: "118 400 AZN",
        make: "Porsche",
        model: "911 Carrera",
        year: 2023,
        engine: "4.4 L",
        color: "cyan",
        mileage: "5,500 km",
        transmission: "PDK",
        fuel: "Gasoline",
        location: "Baku",
        description: "Nearly new Porsche 911 Carrera. All factory options included. Perfect condition.",
        features: ["Panoramic roof", "Ceramic brakes", "Adaptive suspension", "Premium audio"],
        image: "imgs/9.webp"
    },
    {
        id: 10,
        price: "118 400 AZN",
        make: "Porsche",
        model: "911 Carrera",
        year: 2023,
        engine: "4.4 L",
        color: "cyan",
        mileage: "4,200 km",
        transmission: "PDK",
        fuel: "Gasoline",
        location: "Baku",
        description: "Porsche 911 Carrera limited edition. Rare configuration with all options.",
        features: ["Premium package", "Sport design package", "GT steering wheel", "Full leather interior"],
        image: "imgs/10.jpg"
    }
];

let cart = [];
let favorites = [];
let currentlyDisplayed = 4; 
let itemsPerPage = 4;
let filteredCars = [...carData];

function createCarCard(car) {
    const isFavorite = favorites.some(item => item.id === car.id);
    return `
        <div class="card relative flex flex-col rounded-lg border-2 border-gray-200 bg-white hover:shadow-lg transition-shadow">
            <div class="relative flex h-60 overflow-hidden rounded-t-lg cursor-pointer car-card" data-car-id="${car.id}">
                <img class="object-cover w-full" src="${car.image}" alt="${car.make} ${car.model}">
                <button class="favorite-btn absolute top-2 right-2 rounded-full p-2 text-white hover:bg-gray-200/20" data-car-id="${car.id}">
                    <i class="${isFavorite ? 'fas' : 'far'} fa-heart ${isFavorite ? 'text-red-500' : ''}"></i>
                </button>
            </div>
            <div class="flex flex-col gap-3 p-4">
                <div class="flex items-center justify-between">
                    <h3 class="text-xl font-bold text-gray-900">${car.price}</h3>
                </div>
                <div class="cursor-pointer car-card" data-car-id="${car.id}">
                    <h4 class="text-lg font-semibold text-gray-700">${car.make} ${car.model}</h4>
                    <p class="text-sm text-gray-600">${car.year}, ${car.engine}, ${car.color}</p>
                </div>
                <div class="flex items-center gap-3">
                    <span class="inline-flex items-center rounded bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
                        ${car.engine}
                    </span>
                    <span class="inline-flex items-center rounded bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700">
                        ${car.year}
                    </span>
                </div>
                <button class="add-to-cart-btn mt-2 bg-green-600 hover:bg-green-700 text-white py-2 rounded-md flex items-center justify-center gap-2" data-car-id="${car.id}">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        </div>
    `;
}

function createModalContent(car) {
    const isFavorite = favorites.some(item => item.id === car.id);
    const isInCart = cart.some(item => item.id === car.id);
    
    const favoriteButtonText = isFavorite ? 
        '<i class="fas fa-heart"></i> Remove from Favorites' : 
        '<i class="far fa-heart"></i> Add to Favorites';
    const favoriteButtonClass = isFavorite ? 
        'bg-gray-600 hover:bg-gray-700' : 
        'bg-red-600 hover:bg-red-700';
        
    const cartButtonText = isInCart ? 
        '<i class="fas fa-shopping-cart"></i> Remove from Cart' : 
        '<i class="fas fa-shopping-cart"></i> Add to Cart';
    const cartButtonClass = isInCart ? 
        'bg-gray-600 hover:bg-gray-700' : 
        'bg-green-600 hover:bg-green-700';

    return `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="rounded-lg overflow-hidden">
                <img src="${car.image}" alt="${car.make} ${car.model}" class="w-full h-auto object-cover">
            </div>
            <div class="flex flex-col gap-4">
                <div>
                    <h3 class="text-2xl font-bold text-gray-900">${car.price}</h3>
                    <h4 class="text-xl font-semibold text-gray-700">${car.make} ${car.model} ${car.year}</h4>
                </div>
                
                <div class="grid grid-cols-2 gap-4">
                    <div class="flex flex-col">
                        <span class="text-sm text-gray-500">Year</span>
                        <span class="font-medium">${car.year}</span>
                    </div>
                    <div class="flex flex-col">
                        <span class="text-sm text-gray-500">Engine</span>
                        <span class="font-medium">${car.engine}</span>
                    </div>
                    <div class="flex flex-col">
                        <span class="text-sm text-gray-500">Mileage</span>
                        <span class="font-medium">${car.mileage}</span>
                    </div>
                    <div class="flex flex-col">
                        <span class="text-sm text-gray-500">Transmission</span>
                        <span class="font-medium">${car.transmission}</span>
                    </div>
                    <div class="flex flex-col">
                        <span class="text-sm text-gray-500">Fuel</span>
                        <span class="font-medium">${car.fuel}</span>
                    </div>
                    <div class="flex flex-col">
                        <span class="text-sm text-gray-500">Color</span>
                        <span class="font-medium">${car.color}</span>
                    </div>
                    <div class="flex flex-col">
                        <span class="text-sm text-gray-500">Location</span>
                        <span class="font-medium">${car.location}</span>
                    </div>
                </div>
                
                <div>
                    <h5 class="font-semibold mb-2">Description</h5>
                    <p class="text-gray-700">${car.description}</p>
                </div>
                
                <div>
                    <h5 class="font-semibold mb-2">Features</h5>
                    <ul class="grid grid-cols-2 gap-2">
                        ${car.features.map(feature => `<li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i>${feature}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="flex space-x-2 mt-4">
                    <button class="favorite-btn-modal ${favoriteButtonClass} text-white py-2 rounded-md flex-1 flex items-center justify-center gap-2" data-car-id="${car.id}">
                        ${favoriteButtonText}
                    </button>
                    <button class="cart-btn-modal ${cartButtonClass} text-white py-2 rounded-md flex-1 flex items-center justify-center gap-2" data-car-id="${car.id}">
                        ${cartButtonText}
                    </button>
                </div>
            </div>
        </div>
    `;
}
function createCartItem(car) {
    return `
        <div class="flex items-center p-3 border-b">
            <div class="w-16 h-16 rounded overflow-hidden mr-3">
                <img src="${car.image}" alt="${car.make} ${car.model}" class="w-full h-full object-cover">
            </div>
            <div class="flex-1">
                <h4 class="font-medium">${car.make} ${car.model}</h4>
                <p class="text-sm text-gray-600">${car.year}, ${car.engine}</p>
                <p class="font-bold">${car.price}</p>
            </div>
            <button class="remove-from-cart text-gray-400 hover:text-red-500" data-car-id="${car.id}">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>
    `;
}

function filterCars(searchTerm) {
    searchTerm = searchTerm.toLowerCase();
    
    if (!searchTerm) {
        filteredCars = [...carData];
    } else {
        filteredCars = carData.filter(car => {
            const searchableValues = [
                car.make,
                car.model,
                car.color,
                car.engine,
                car.price,
                car.year.toString(),
                car.fuel,
                car.transmission,
                car.location
            ];
            
            return searchableValues.some(value => 
                value && value.toLowerCase().includes(searchTerm)
            );
        });
    }
    
    currentlyDisplayed = Math.min(4, filteredCars.length);
    updateDisplay();
}

function updateDisplay() {
    const container = document.getElementById('carContainer');
    const noResults = document.getElementById('noResults');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    
    if (filteredCars.length === 0) {
        container.innerHTML = '';
        noResults.classList.remove('hidden');
        loadMoreBtn.classList.add('hidden');
    } else {
        noResults.classList.add('hidden');
        
        const carsToShow = filteredCars.slice(0, currentlyDisplayed);
        const carCards = carsToShow.map(car => createCarCard(car)).join('');
        container.innerHTML = carCards;
        
        if (currentlyDisplayed >= filteredCars.length) {
            if (filteredCars.length <= 4) {
                loadMoreBtn.classList.add('hidden');
            } else {
                loadMoreBtn.textContent = 'Show Less';
                loadMoreBtn.classList.remove('hidden');
            }
        } else {
            loadMoreBtn.textContent = 'Load More';
            loadMoreBtn.classList.remove('hidden');
        }
        
        addCardEventListeners();
    }
}

function addCardEventListeners() {
    document.querySelectorAll('.car-card').forEach(element => {
        element.addEventListener('click', function() {
            const carId = parseInt(this.getAttribute('data-car-id'));
            const car = carData.find(car => car.id === carId);
            if (car) {
                openModal(car);
            }
        });
    });
    
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const carId = parseInt(this.getAttribute('data-car-id'));
            toggleFavorite(carId);
        });
    });
    
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const carId = parseInt(this.getAttribute('data-car-id'));
            toggleCart(carId);
        });
    });
}

function openModal(car) {
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    const carModal = document.getElementById('carModal');
    
    modalTitle.textContent = `${car.make} ${car.model} ${car.year}`;
    modalContent.innerHTML = createModalContent(car);
    carModal.classList.remove('hidden');
    
    document.querySelector('.favorite-btn-modal').addEventListener('click', function() {
        const carId = parseInt(this.getAttribute('data-car-id'));
        toggleFavorite(carId);
    });
    
    document.querySelector('.cart-btn-modal').addEventListener('click', function() {
        const carId = parseInt(this.getAttribute('data-car-id'));
        toggleCart(carId);
    });
    
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const carModal = document.getElementById('carModal');
    carModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function toggleFavorite(carId) {
    const favoriteIndex = favorites.findIndex(item => item.id === carId);
    const car = carData.find(car => car.id === carId);
    
    if (favoriteIndex === -1 && car) {
        favorites.push(car);
    } else {
        favorites.splice(favoriteIndex, 1);
    }
    
    updateFavoriteButtons(carId);
    applyFilters(); // Refresh the display when favorites change
}

function toggleCart(carId) {
    const cartIndex = cart.findIndex(item => item.id === carId);
    const car = carData.find(car => car.id === carId);
    
    if (cartIndex === -1 && car) {
        cart.push(car);
    } else {
        cart.splice(cartIndex, 1);
    }
    
    updateCart();
    updateCartButtons(carId);
}

function updateFavoriteButtons(carId) {
    const isFavorite = favorites.some(item => item.id === carId);
    
    document.querySelectorAll(`.favorite-btn[data-car-id="${carId}"]`).forEach(btn => {
        const icon = btn.querySelector('i');
        
        if (isFavorite) {
            icon.classList.remove('far');
            icon.classList.add('fas', 'text-red-500');
        } else {
            icon.classList.remove('fas', 'text-red-500');
            icon.classList.add('far');
        }
    });
    
    const modalBtn = document.querySelector(`.favorite-btn-modal[data-car-id="${carId}"]`);
    if (modalBtn) {
        if (isFavorite) {
            modalBtn.innerHTML = '<i class="fas fa-heart"></i> Remove from Favorites';
            modalBtn.classList.add('bg-gray-600', 'hover:bg-gray-700');
            modalBtn.classList.remove('bg-red-600', 'hover:bg-red-700');
        } else {
            modalBtn.innerHTML = '<i class="far fa-heart"></i> Add to Favorites';
            modalBtn.classList.add('bg-red-600', 'hover:bg-red-700');
            modalBtn.classList.remove('bg-gray-600', 'hover:bg-gray-700');
        }
    }
}

function updateCartButtons(carId) {
    const isInCart = cart.some(item => item.id === carId);
    
    document.querySelectorAll(`.add-to-cart-btn[data-car-id="${carId}"]`).forEach(btn => {
        if (isInCart) {
            btn.innerHTML = '<i class="fas fa-shopping-cart"></i> Remove from Cart';
            btn.classList.add('bg-gray-600', 'hover:bg-gray-700');
            btn.classList.remove('bg-green-600', 'hover:bg-green-700');
        } else {
            btn.innerHTML = '<i class="fas fa-shopping-cart"></i> Add to Cart';
            btn.classList.add('bg-green-600', 'hover:bg-green-700');
            btn.classList.remove('bg-gray-600', 'hover:bg-gray-700');
        }
    });
    
    const modalBtn = document.querySelector(`.cart-btn-modal[data-car-id="${carId}"]`);
    if (modalBtn) {
        if (isInCart) {
            modalBtn.innerHTML = '<i class="fas fa-shopping-cart"></i> Remove from Cart';
            modalBtn.classList.add('bg-gray-600', 'hover:bg-gray-700');
            modalBtn.classList.remove('bg-green-600', 'hover:bg-green-700');
        } else {
            modalBtn.innerHTML = '<i class="fas fa-shopping-cart"></i> Add to Cart';
            modalBtn.classList.add('bg-green-600', 'hover:bg-green-700');
            modalBtn.classList.remove('bg-gray-600', 'hover:bg-gray-700');
        }
    }
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const cartCount = document.getElementById('cartCount');
    
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="text-gray-500 text-center py-4">No cars saved yet</p>';
        cartTotal.textContent = 'Total: 0 AZN';
        cartCount.classList.add('hidden');
    } else {
        let total = 0;
        cart.forEach(car => {
            const priceValue = parseInt(car.price.replace(/\D/g, ''));
            total += priceValue;
            cartItems.innerHTML += createCartItem(car);
        });
        
        cartTotal.textContent = `Total: ${total.toLocaleString()} AZN`;
        cartCount.textContent = cart.length;
        cartCount.classList.remove('hidden');
        
        document.querySelectorAll('.remove-from-cart').forEach(btn => {
            btn.addEventListener('click', function() {
                const carId = parseInt(this.getAttribute('data-car-id'));
                toggleCart(carId); // Fixed: now calling toggleCart instead of toggleFavorite
            });
        });
    }
}

function toggleCartSidebar() {
    const cartSidebar = document.getElementById('cartSidebar');
    cartSidebar.classList.toggle('translate-x-full');
    
    if (cartSidebar.classList.contains('translate-x-full')) {
        document.body.style.overflow = 'auto';
    } else {
        document.body.style.overflow = 'hidden';
    }
}

function init() {
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    const closeModalBtn = document.getElementById('closeModal');
    closeModalBtn.addEventListener('click', closeModal);
    
    const carModal = document.getElementById('carModal');
    carModal.addEventListener('click', (e) => {
        if (e.target === carModal) {
            closeModal();
        }
    });

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    
    updateDisplay();
    
    const searchInput = document.getElementById('searchInput');
    let debounceTimeout;
    
    searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => {
            filterCars(e.target.value);
        }, 300); 
    });
    
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    loadMoreBtn.addEventListener('click', () => {
        if (loadMoreBtn.textContent === 'Show Less') {
            currentlyDisplayed = 4;
        } else {
            currentlyDisplayed += itemsPerPage;
            if (currentlyDisplayed > filteredCars.length) {
                currentlyDisplayed = filteredCars.length;
            }
        }
        updateDisplay();
    });

    // Fix: Changed from toggleCart to toggleCartSidebar
    const cartBtn = document.getElementById('cartBtn');
    cartBtn.addEventListener('click', toggleCartSidebar);
    
    const closeCart = document.getElementById('closeCart');
    closeCart.addEventListener('click', toggleCartSidebar); // Fix: Changed from toggleCart to toggleCartSidebar
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const carModal = document.getElementById('carModal');
            const cartSidebar = document.getElementById('cartSidebar');
            
            if (!carModal.classList.contains('hidden')) {
                closeModal();
            } else if (!cartSidebar.classList.contains('translate-x-full')) {
                toggleCartSidebar(); // Fix: Changed from toggleCart to toggleCartSidebar
            }
        }
    });
    addFilterHTML();
    populateFilters();
    
}
function addFilterHTML() {
    const filtersHTML = `
      <div class="bg-gray-200 py-3">
        <div class="container mx-auto px-4">
          <div id="filterContainer" class="flex flex-wrap gap-3 items-center">
            <span class="font-medium text-gray-700">Filter by:</span>
            <div class="flex items-center space-x-2">
              <input id="minYearFilter" type="number" placeholder="Min Year" min="1900" max="2025" class="px-3 py-2 rounded-md text-sm bg-white border border-gray-300 w-24">
              <span>-</span>
              <input id="maxYearFilter" type="number" placeholder="Max Year" min="1900" max="2025" class="px-3 py-2 rounded-md text-sm bg-white border border-gray-300 w-24">
            </div>
            <select id="fuelFilter" class="px-3 py-2 rounded-md text-sm bg-white border border-gray-300">
                <option value="">All Fuels</option>
            </select>
            <select id="transmissionFilter" class="px-3 py-2 rounded-md text-sm bg-white border border-gray-300">
                <option value="">All Transmissions</option>
            </select>
            <select id="colorFilter" class="px-3 py-2 rounded-md text-sm bg-white border border-gray-300">
                <option value="">All Colors</option>
            </select>
            <div class="flex items-center space-x-2">
              <input type="checkbox" id="favoritesFilter" class="rounded text-red-600">
              <label for="favoritesFilter" class="text-sm">Show Favorites Only</label>
            </div>
          </div>
        </div>
      </div>
    `;
    
    const header = document.querySelector('header');
    header.insertAdjacentHTML('afterend', filtersHTML);
}
function populateFilters() {
    // Keep your existing code for fuel, transmission, and color
    // Remove the year filter population code since we're using min/max inputs now
    
    const fuels = [];
    for (let i = 0; i < carData.length; i++) {
      if (!fuels.includes(carData[i].fuel)) {
        fuels.push(carData[i].fuel);
      }
    }
    fuels.sort();
    
    const transmissions = [];
    for (let i = 0; i < carData.length; i++) {
      if (!transmissions.includes(carData[i].transmission)) {
        transmissions.push(carData[i].transmission);
      }
    }
    transmissions.sort();
    
    const colors = [];
    for (let i = 0; i < carData.length; i++) {
      if (!colors.includes(carData[i].color)) {
        colors.push(carData[i].color);
      }
    }
    colors.sort();
    
    const fuelFilter = document.getElementById('fuelFilter');
    for (let i = 0; i < fuels.length; i++) {
      const option = document.createElement('option');
      option.value = fuels[i];
      option.textContent = fuels[i];
      fuelFilter.appendChild(option);
    }
    
    const transmissionFilter = document.getElementById('transmissionFilter');
    for (let i = 0; i < transmissions.length; i++) {
      const option = document.createElement('option');
      option.value = transmissions[i];
      option.textContent = transmissions[i];
      transmissionFilter.appendChild(option);
    }
    
    const colorFilter = document.getElementById('colorFilter');
    for (let i = 0; i < colors.length; i++) {
      const option = document.createElement('option');
      option.value = colors[i];
      option.textContent = colors[i];
      colorFilter.appendChild(option);
    }
    
    // Set up the new filter event listeners
    document.getElementById('minYearFilter').addEventListener('input', applyFilters);
    document.getElementById('maxYearFilter').addEventListener('input', applyFilters);
    fuelFilter.addEventListener('change', applyFilters);
    transmissionFilter.addEventListener('change', applyFilters);
    colorFilter.addEventListener('change', applyFilters);
    document.getElementById('favoritesFilter').addEventListener('change', applyFilters);
}
function applyFilters() {
    const minYearValue = document.getElementById('minYearFilter').value;
    const maxYearValue = document.getElementById('maxYearFilter').value;
    const fuelValue = document.getElementById('fuelFilter').value;
    const transmissionValue = document.getElementById('transmissionFilter').value;
    const colorValue = document.getElementById('colorFilter').value;
    const showFavoritesOnly = document.getElementById('favoritesFilter').checked;
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    filteredCars = carData.filter(car => {
        // Check favorites filter first
        if (showFavoritesOnly && !favorites.some(fav => fav.id === car.id)) {
            return false;
        }
        
        // Check year range
        if (minYearValue && car.year < parseInt(minYearValue)) {
            return false;
        }
        
        if (maxYearValue && car.year > parseInt(maxYearValue)) {
            return false;
        }
        
        // Check other filters
        if (fuelValue !== '' && car.fuel !== fuelValue) {
            return false;
        }
        
        if (transmissionValue !== '' && car.transmission !== transmissionValue) {
            return false;
        }
        
        if (colorValue !== '' && car.color !== colorValue) {
            return false;
        }
        
        // Check search term
        if (searchTerm) {
            const searchableValues = [
                car.make,
                car.model,
                car.color,
                car.engine,
                car.price,
                car.year.toString(),
                car.fuel,
                car.transmission,
                car.location
            ];
            
            return searchableValues.some(value => 
                value && value.toLowerCase().includes(searchTerm)
            );
        }
        
        return true;
    });
    
    currentlyDisplayed = Math.min(4, filteredCars.length);
    updateDisplay();
}

function filterCars(searchTerm) {
    // Update the search input value
    document.getElementById('searchInput').value = searchTerm;
    // Apply all filters including the search
    applyFilters(); 
}
    document.addEventListener('DOMContentLoaded', init);