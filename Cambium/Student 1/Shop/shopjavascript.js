// Keep track of the visible dom
let isInCheckoutPage = true;

// Array to store the cart states
let cartList = [];
let cart = null;
let shopCategory1 = null;
let shopCategory2 = null;
let shopCategory3 = null;
let shopCategory4 = null;
let shopCategory5 = null;

// Keep track slideshow states
let largeImagesCount = 0;
let activeImage = 0;
let largeImages = null;
let smallImages = null;

// Initial renders
document.getElementById("container-wrapper").innerHTML = RenderShopDom();
// Add eventlisteners to the rendered DOM
addEventListenersToTheShopDOM();

// ----------------------------------------------------------------------------------------------------

// Function to eventlisteners to the Shop page
function addEventListenersToTheShopDOM() {
  // Select the Slideshow elements
  largeImages = document.querySelectorAll(".large-image");
  smallImages = document.querySelectorAll(".small-image");

  cart = document.querySelector(".cart");
  shopCategory1 = document.querySelector(".shopCategory1");
  shopCategory2 = document.querySelector(".shopCategory2");
  shopCategory3 = document.querySelector(".shopCategory3");
  shopCategory4 = document.querySelector(".shopCategory4");
  shopCategory5 = document.querySelector(".shopCategory5");

  // Set the number of largeImages
  largeImagesCount = largeImages.length;

  console.log("largeImagesCount: ", largeImagesCount);

  smallImages.forEach((image, index) => {
    image.addEventListener("click", () => {
      activeImage = index;
      slideShow();
    });
  });
}

//Changing the current(active) image in the slideshow.
function slideShow() {
  if (largeImagesCount != 0) {
    let oldActiveLarge = document.querySelector(".large-image.active");
    let oldActiveSmall = document.querySelector(".small-image.active");

    if (oldActiveLarge) oldActiveLarge.classList.remove("active");
    if (oldActiveSmall) oldActiveSmall.classList.remove("active");

    largeImages[activeImage].classList.add("active");
    smallImages[activeImage].classList.add("active");

    clearInterval(autoSwitchImage);
    autoSwitchImage = setInterval(() => {
      nextSlide();
    }, 5000);
  }
}

// Auto switch to the next slide
let autoSwitchImage = setInterval(() => {
  nextSlide();
}, 5000);

// Function to show next slid
function nextSlide() {
  activeImage = (activeImage + 1) % largeImagesCount;
  slideShow();
}

// Function to show previous slide
function prevSlide() {
  activeImage = (activeImage - 1 + largeImagesCount) % largeImagesCount;
  slideShow();
}

// Handle Cart icon click
function openCart() {
  if (cart.style.right == "-100%") {
    cart.style.right = "0";
    shopCategory1.style.transform = "translateX(-400px)";
    shopCategory2.style.transform = "translateX(-400px)";
    shopCategory3.style.transform = "translateX(-400px)";
    shopCategory4.style.transform = "translateX(-400px)";
    shopCategory5.style.transform = "translateX(-400px)";
  } else {
    cart.style.right = "-100%";
    shopCategory1.style.transform = "translateX(0)";
    shopCategory2.style.transform = "translateX(0)";
    shopCategory3.style.transform = "translateX(0)";
    shopCategory4.style.transform = "translateX(0)";
    shopCategory5.style.transform = "translateX(0)";
  }
}

// Handle Cart close button click
function closeCart() {
  cart.style.right = "-100%";
  shopCategory1.style.transform = "translateX(0)";
  shopCategory2.style.transform = "translateX(0)";
  shopCategory3.style.transform = "translateX(0)";
  shopCategory4.style.transform = "translateX(0)";
  shopCategory5.style.transform = "translateX(0)";
}

// Functions to Render the product in the shop page
let products1 = [
  {
    id: 1,
    name: "Banana plant",
    price: 500,
    image: "images/plant-images/bananaplant.jpg",
    alt: "a banana plant",
  },
  {
    id: 2,
    name: "Mango plant",
    price: 600,
    image: "images/plant-images/mangotplant.webp",
    alt: "a mango plant",
  },
  {
    id: 3,
    name: "Jackfruit plant",
    price: 600,
    image: "images/plant-images/jackfruit.webp",
    alt: "a jackfruit plant",
  },
  {
    id: 4,
    name: "Nutmeg plant",
    price: 600,
    image: "images/plant-images/nutmegplant.webp",
    alt: "a nutmeg plant",
  },
  {
    id: 5,
    name: "Thiththa aguna plant",
    price: 700,
    image: "images/plant-images/thittaagunaplant.webp",
    alt: "a thiththa aguna plant",
  },
  {
    id: 6,
    name: "Coconut husks 1kg packet",
    price: 300,
    image: "images/plant-images/coconuthusks_1kg.webp",
    alt: "a coconut husk packet",
  },
  {
    id: 7,
    name: "Compost fertilizer 10kg bag",
    price: 1200,
    image: "images/plant-images/compost_10kg.webp",
    alt: "a compost fertilizer bag of 10kg",
  },
  {
    id: 8,
    name: "Compost fertilizer 20kg bag",
    price: 2200,
    image: "images/plant-images/compost_20kg.webp",
    alt: "a compost fertilizer bag of 20kg",
  },
];

let products2 = [
  {
    id: 9,
    name: "Bamboo cutlery set",
    price: 3000,
    image: "images/utensils-images/reusablebamboocutlery.webp",
    alt: "a bamboo cutlery set",
  },
  {
    id: 10,
    name: "Coconut shell container",
    price: 800,
    image: "images/utensils-images/coconutshellcontainer.jpg",
    alt: "a coconut shell container",
  },
  {
    id: 11,
    name: "Clay mug",
    price: 1200,
    image: "images/utensils-images/claymug.jpg",
    alt: "a clay mug",
  },
  {
    id: 12,
    name: "Coconutshell bowl with spoon",
    price: 1000,
    image: "images/utensils-images/coconutshellbowlandspoon.jpg",
    alt: "a coconut bowl with a spoon",
  },
  {
    id: 13,
    name: "Recycled Paper bags (10pcs)",
    price: 500,
    image: "images/utensils-images/paperbags.jpg",
    alt: "a set of recycled paper bags",
  },
  {
    id: 14,
    name: "Tote bag - green",
    price: 1300,
    image: "images/utensils-images/totebag1.jpg",
    alt: "a green tote bag",
  },
  {
    id: 15,
    name: "Tote bag - coffee brown",
    price: 1300,
    image: "images/utensils-images/totebag2.png",
    alt: "a coffee brown tote bag",
  },
];

let products3 = [
  {
    id: 16,
    name: "Camping tent (2 Person)",
    price: 6500,
    image: "images/camping-images/2persontent.jpg",
    alt: "a 2 person camping tent",
  },
  {
    id: 17,
    name: "Camping tent (6 Person)",
    price: 15000,
    image: "images/camping-images/6persontent.webp",
    alt: "a 6 person camping tent",
  },
  {
    id: 18,
    name: "Camping sleeping bag",
    price: 6000,
    image: "images/camping-images/camping sleeping bag.jpg",
    alt: "a camping sleeping bag",
  },
  {
    id: 19,
    name: "Camping mat",
    price: 5000,
    image: "images/camping-images/campingmat.jpg",
    alt: "a camping mat",
  },
  {
    id: 20,
    name: "Camping rope (10m)",
    price: 3500,
    image: "images/camping-images/campingropes.jpg",
    alt: "a camping rope of 10 metres",
  },
  {
    id: 21,
    name: "Camping torch",
    price: 3000,
    image: "images/camping-images/campingtorch.jpg",
    alt: "a camping torch",
  },
  {
    id: 22,
    name: "Portable gas stove",
    price: 3100,
    image: "images/camping-images/portable gas stove.jpg",
    alt: "a portable gas stove",
  },
];

let products4 = [
  {
    id: 23,
    name: "An Immense World",
    price: 1500,
    image: "images/books-images/animmensewildlife.webp",
    alt: "a book named an immense world",
  },
  {
    id: 24,
    name: "A Complete Handbook of Garden Plants",
    price: 2300,
    image: "images/books-images/completehandbookofgardenplants.jpg",
    alt: "a book named a complete handbook of garden plants",
  },
  {
    id: 25,
    name: "How to Grow a Garden",
    price: 2000,
    image: "images/books-images/howtogrowagarden.jpg",
    alt: "a book named how to grow a garden",
  },
  {
    id: 26,
    name: "Plants Are My Friends",
    price: 1500,
    image: "images/books-images/plantsaremyfriends.jpeg",
    alt: "a book named plants are my friends",
  },
  {
    id: 27,
    name: "Sustainability Starts At Home",
    price: 1700,
    image: "images/books-images/Sustainability starts at home.jpg",
    alt: "a book named sustainability starts at home",
  },
  {
    id: 28,
    name: "The Sustainability Handbook",
    price: 2100,
    image: "images/books-images/theSustainabilityHandbookjpg.jpg",
    alt: "a book named the sustainabiliy handbook",
  },
  {
    id: 29,
    name: "Wild Life Whispers",
    price: 1900,
    image: "images/books-images/wildlifewhispers.jpg",
    alt: "a book named wild life whispers",
  },
];

let products5 = [
  {
    id: 30,
    name: "Rs.1000/= Gift Voucher",
    price: 1000,
    image: "images/Giftvoucher-images/gift1000.jpg",
    alt: "a Rs.1000 worth gift voucher",
  },
  {
    id: 31,
    name: "Rs.5000/= Gift Voucher",
    price: 5000,
    image: "images/Giftvoucher-images/gift5000.jpg",
    alt: "a Rs.5000 worth gift voucher",
  },
  {
    id: 32,
    name: "Rs.10000/= Gift Voucher",
    price: 10000,
    image: "images/Giftvoucher-images/gift10000.jpg",
    alt: "a Rs.10000 worth gift voucher",
  },
];

function updateHTML1() {
  let productListHTML = document.querySelector(".productList");
  productListHTML.innerHTML = "";

  if (products1 != null) {
    products1.forEach((product) => {
      let addingProduct = document.createElement("div");
      addingProduct.classList.add("product");
      addingProduct.innerHTML = `<img src="${product.image}" alt="${product.alt}">
                <h2>${product.name}</h2>
                <div class= "price">Rs.${product.price}</div>
                <button onclick="addtoCart(${product.id})">Add to Cart</button>`;
      productListHTML.appendChild(addingProduct);
    });
  }
}

function updateHTML2() {
  let productListHTML = document.querySelector(".productList2");
  productListHTML.innerHTML = "";

  if (products2 != null) {
    products2.forEach((product) => {
      let addingProduct = document.createElement("div");
      addingProduct.classList.add("product");
      addingProduct.innerHTML = `<img src="${product.image}" alt="${product.alt}">
                <h2>${product.name}</h2>
                <div class= "price">Rs.${product.price}</div>
                <button onclick="addtoCart(${product.id})">Add to Cart</button>`;
      productListHTML.appendChild(addingProduct);
    });
  }
}

function updateHTML3() {
  let productListHTML = document.querySelector(".productList3");
  productListHTML.innerHTML = "";

  if (products3 != null) {
    products3.forEach((product) => {
      let addingProduct = document.createElement("div");
      addingProduct.classList.add("product");
      addingProduct.innerHTML = `<img src="${product.image}" alt="${product.alt}">
                <h2>${product.name}</h2>
                <div class= "price">Rs.${product.price}</div>
                <button onclick="addtoCart(${product.id})">Add to Cart</button>`;
      productListHTML.appendChild(addingProduct);
    });
  }
}

function updateHTML4() {
  let productListHTML = document.querySelector(".productList4");
  productListHTML.innerHTML = "";

  if (products4 != null) {
    products4.forEach((product) => {
      let addingProduct = document.createElement("div");
      addingProduct.classList.add("product");
      addingProduct.innerHTML = `<img src="${product.image}" alt="${product.alt}">
                <h2>${product.name}</h2>
                <div class= "price">Rs.${product.price}</div>
                <button onclick="addtoCart(${product.id})">Add to Cart</button>`;
      productListHTML.appendChild(addingProduct);
    });
  }
}

function updateHTML5() {
  let productListHTML = document.querySelector(".productList5");
  productListHTML.innerHTML = "";

  if (products5 != null) {
    products5.forEach((product) => {
      let addingProduct = document.createElement("div");
      addingProduct.classList.add("product");
      addingProduct.innerHTML = `<img src="${product.image}" alt="${product.alt}">
                <h2>${product.name}</h2>
                <div class= "price">Rs.${product.price}</div>
                <button onclick="addtoCart(${product.id})">Add to Cart</button>`;
      productListHTML.appendChild(addingProduct);
    });
  }
}

// Render the products to the shop DOM
updateHTML1();
updateHTML2();
updateHTML3();
updateHTML4();
updateHTML5();

// Add Items to the array
function addtoCart($idProduct) {
  let copyOfProducts = [
    ...products1,
    ...products2,
    ...products3,
    ...products4,
    ...products5,
  ];

  if (!cartList[$idProduct]) {
    cartList[$idProduct] = copyOfProducts.find(
      (product) => product.id == $idProduct
    );
    cartList[$idProduct].quantity = 1;
  } else {
    cartList[$idProduct].quantity++;
  }

  updateCartHTML();

}

updateCartHTML();

// Update the Cart section
function updateCartHTML() {
  let cartListHTML = document.querySelector(".cartList");
  cartListHTML.innerHTML = "";

  let totalQuantityHTML = document.querySelector(".quantity");
  let totalQuantity = 0;

  if (cartList) {
    cartList.forEach((product) => {
      if (product) {
        let newItem = document.createElement("div");
        newItem.classList.add("product");
        newItem.innerHTML = `<img src="${product.image}" alt="${product.alt}">
                    <div class = "content">
                    <div class = "name">${product.name}</div>
                    <div class = "price">Rs.${product.price} </div>
                    </div>
                    <div class = "productquantity">
                        <button onclick="quantityChange(${product.id}, '-')">-</button>
                        <span class = "value">${product.quantity}</span>
                        <button onclick="quantityChange(${product.id}, '+')">+</button>
                    </div>`;
        cartListHTML.appendChild(newItem);
        totalQuantity = totalQuantity + product.quantity;
      }
    });
  }
  totalQuantityHTML.innerHTML = totalQuantity;
}

function quantityChange($idProduct, $type) {
  switch ($type) {
    case "+":
      cartList[$idProduct].quantity++;
      break;
    case "-":
      cartList[$idProduct].quantity--;
      if (cartList[$idProduct].quantity <= 0) {
        delete cartList[$idProduct];
      }
      break;
    default:
      break;
  }

  updateCartHTML();
}

// ------------------------------------------------------------------------------------------------------

// Function to update the checkout page
function updateCheckoutPage() {
  if (isInCheckoutPage) {
    let userCartHTML = document.querySelector(".userCart .userCartList");
    userCartHTML.innerHTML = "";

    let finalQuantityHTML = document.querySelector(".totalQuantity");
    let finalPriceHTML = document.querySelector(".totalPrice");
    let finalQuantity = 0;
    let finalPrice = 0;

    if (cartList && cartList.length > 0) {
      cartList.forEach((product) => {
        if (product) {
          let newPurchase = document.createElement("div");
          newPurchase.classList.add("product");
          newPurchase.innerHTML = `<img src = "${product.image}" alt="${product.alt}">
                  <div class = "productDetails">
                      <div class = "name"> ${product.name}</div>
                      <div class = "price">${product.price}</div>
                  </div>
                  <div class = "amount">${product.quantity}</div>
                  <div class = "productTotalPrice">Rs.${
                    product.price * product.quantity
                  }</div>`;
          userCartHTML.appendChild(newPurchase);
          finalQuantity = finalQuantity + product.quantity;
          finalPrice = finalPrice + product.price * product.quantity;
        }
      });
    } else {
      let cartEmpty = document.createElement("div");
      cartEmpty.textContent = "Your cart is empty.";
      userCartHTML.appendChild(cartEmpty);
    }
    finalQuantityHTML.innerHTML = finalQuantity;
    finalPriceHTML.innerHTML = "Rs." + finalPrice;
  }
}

// Handle Checkout button click
function goToCheckout() {

    if (cartList.length==0){
        alert("Your cart is empty.")
    }
    else{
  // Render the Checkout DOM
  document.getElementById("container-wrapper").innerHTML = RenderCheckoutDom();

  //Update the page state
  isInCheckoutPage = true;

  // Populate the DOM with data
  updateCheckoutPage();}
}

// Handle Go back button click
function goBackToShop() {
  // Render the Shop DOM
  document.getElementById("container-wrapper").innerHTML = RenderShopDom();

  //Update the page state
  isInCheckoutPage = false;

  // Reset the states accordingly when returning back to shop page
  updateHTML1();
  updateHTML2();
  updateHTML3();
  updateHTML4();
  updateHTML5();
  updateCartHTML();

  // Add necessary eventListeners
  addEventListenersToTheShopDOM();
}

function checkoutConfirmation(){
    window.alert("Thank you for the purchase.")
}

// HTML DOMs ----------------------------------------------------------------------

// Shop DOM
function RenderShopDom() {
  return `      <div id="shop-dom">
        <div class="categories-slider">
          <div class="large-image-tiles">
            <div class="large-image active">
              <img
                src="images/plantingtrees1.jpg"
                alt="a photo of a lady planting a tree." />
              <div class="large-tile-content">
                <h1>Cambium</h1>
                <h2>Plant Green</h2>
                <p>
                  From lively plants to nutrient-rich compost and a variety of
                  seeds, we have everything to make your backyard a green
                  heaven.
                </p>
              </div>
            </div>
            <div class="large-image">
              <img
                src="images/Utensils1.jpg"
                alt="a bag with environmentally friendly utensils." />
              <div class="large-tile-content">
                <h1>Cambium</h1>
                <h2>Use Green</h2>
                <p>
                  We provide a wide range of eco-friendly products, including
                  fashionable tote bags, a variety of clay products, and
                  reusable mugs. We promote sustainable living by selling a
                  collection of biodegradable products, YOU WILL LOVE IT!
                </p>
              </div>
            </div>
            <div class="large-image">
              <img src="images/camping1.jpg" alt="A camp site" />
              <div class="large-tile-content">
                <h1>Cambium</h1>
                <h2>Camp Green</h2>
                <p>
                  Make your next outdoor adventure exciting with us. Explore our
                  collection of camping utensils including different packages of
                  tents. Gear up, get ready and make your next trip
                  unforgettable!
                </p>
              </div>
            </div>
            <div class="large-image">
              <img
                src="images/books1.jpg"
                alt="a book on grass surrounded by flowers." />
              <div class="large-tile-content">
                <h1>Cambium</h1>
                <h2>Read Green</h2>
                <p>
                  Our collection of books expands from informative guids to
                  topics such as wildlife conservation, sustainable living and
                  many more. These books will inspire you to connect with the
                  nature.
                </p>
              </div>
            </div>
            <div class="large-image">
              <img src="images/giftvoucher1.jpg" alt="a gift voucher." />
              <div class="large-tile-content">
                <h1>Cambium</h1>
                <h2>Gift Green</h2>
                <p>
                  Make the gift you are giving to someone truly valuable. Let
                  them have the opportunity to select from our range of items
                  that will benefit them as well as the planet.
                </p>
              </div>
            </div>
          </div>
          <div class="arrows">
            <button onclick="prevSlide()" id="prev"><</button>
            <button onclick="nextSlide()" id="next">></button>
          </div>
          <div class="small-image-tiles">
            <a href="#plants">
              <div class="small-image active">
                <img
                  src="images/plantingtrees1.jpg"
                  alt="a photo of a lady planting a tree." />
                <div class="small-tile-content">Plants.</div>
              </div>
            </a>
            <a href="#utensils">
              <div class="small-image">
                <img
                  src="images/Utensils1.jpg"
                  alt="a bag with environmentally friendly utensils." />
                <div class="small-tile-content">Utensils.</div>
              </div>
            </a>
            <a href="#camping">
              <div class="small-image">
                <img src="images/camping1.jpg" alt="A camp site." />
                <div class="small-tile-content">Camping Gear.</div>
              </div>
            </a>
            <a href="#books">
              <div class="small-image">
                <img
                  src="images/books1.jpg"
                  alt="a book on grass surrounded by flowers." />
                <div class="small-tile-content">Books.</div>
              </div>
            </a>
            <a href="#gift">
              <div class="small-image" id="voucher">
                <img src="images/giftvoucher1.jpg" alt="A gift voucher." />
                <div class="small-tile-content">Gift Vouchers.</div>
              </div>
            </a>
          </div>
        </div>

        <div class="shop">
        <!-- Cart icon -->
        <div onclick="openCart()" class="cartIcon">
          <img
            src="images/shopping-cart-icon.png"
            alt="icon of a shopping cart." />
          <div class="quantity">0</div>
        </div>
        
          <div class="shopCategory1">
            <header>
              <h1 id="plants">- Plants -</h1>
              
            </header>
            <div class="productList">
              <div class="product">
                <img
                  src="images/plant-images/bananaplant.jpg"
                  alt="a banana plant" />
                <h2>Banana plant</h2>
                <div class="price">Rs.500</div>
                <button>Add to cart</button>
              </div>
            </div>
          </div>
          <div class="shopCategory2">
            <header>
              <h1 id="utensils">- Utensils -</h1>
            </header>
            <div class="productList2">
              <div class="product">
                <img
                  src="images/utensils-images/reusablebamboocutlery.webp"
                  alt="a reusable bamboo cutlery set" />
                <h2>Reusable Bamboo cutlery set</h2>
                <div class="price">Rs.3000</div>
                <button>Add to cart</button>
              </div>
            </div>
          </div>
          <div class="shopCategory3">
            <header>
              <h1 id="camping">- Camping gear -</h1>
            </header>
            <div class="productList3">
              <div class="product">
                <img
                  src="images/camping-images/2persontent.jpg"
                  alt="a camping tent for 2 persons." />
                <h2>Camping Tent (2 Person)</h2>
                <div class="price">Rs.6500</div>
                <button>Add to cart</button>
              </div>
            </div>
          </div>
          <div class="shopCategory4">
            <header>
              <h1 id="books">- Books -</h1>
            </header>
            <div class="productList4">
              <div class="product">
                <img
                  src="images/books-images/animmensewildlife.webp"
                  alt="a book named an immense world" />
                <h2>An Immense World book</h2>
                <div class="price">Rs.1500</div>
                <button>Add to cart</button>
              </div>
            </div>
          </div>
          <div class="shopCategory5">
            <header>
              <h1 id="gift">- Gift Vouchers -</h1>
            </header>
            <div class="productList5">
              <div class="product">
                <img
                  src="images/Giftvoucher-images/gift1000.jpg"
                  alt="a Rs.1000 gift voucher" />
                <h2>Rs.1000/= Gift Voucher</h2>
                <div class="price">Rs.1000</div>
                <button>Add to cart</button>
              </div>
            </div>
          </div>
        </div>

        <div class="cart">
          <h2>-Shopping Cart-</h2>

          <div class="cartList">
            <div class="product">
              <img
                src="images/plant-images/bananaplant.jpg"
                alt="a banana plant." />
              <div class="content">
                <div class="name">Banana plant</div>
                <div class="price">Rs.500</div>
              </div>
              <div class="productquantity">
                <button>-</button>
                <span class="value">3</span>
                <button>+</button>
              </div>
            </div>
          </div>

          <div class="buttons">
            <button class="checkout" onclick="goToCheckout()">Checkout</button>
            <div onclick="closeCart()" class="close">Close</div>
          </div>
        </div>
      </div>`;
}

// Checkout page DOM
function RenderCheckoutDom() {
  return `  
    <div class="cartView">
    <div class="checkoutScreen">
      <div class="userCart">
      <button onclick="goBackToShop()">Go back</button>
        <h1>Your Shopping Cart</h1>
        <div class="userCartList">
          <div class="product">
            <img
              src="images/plant-images/bananaplant.jpg"
              alt="a banana plant" />
            <div class="produtDetails">
              <div class="name">Banana plant</div>
              <div class="price">Rs.500</div>
            </div>
            <div class="amount">3</div>
            <div class="productTotalPrice">Rs.1500.0</div>
          </div>
        </div>
      </div>

      <div class="userInfo">
        <h1>Checkout</h1>
        <form class="form" action="#">
          <div class="info">
            <label for="fname">First name</label>
            <input type="text" name="fname" id="fname" />
          </div>
          <div class="info">
            <label for="sname">Surname</label>
            <input type="text" name="sname" id="sname" />
          </div>
          <div class="info">
            <label for="tele">Phone number</label>
            <input type="tel" name="tele" id="tele" />
          </div>
          <div class="info">
            <label for="address">Billing Address</label>
            <input type="text" name="address" id="address" />
          </div>
          <div class="info">
            <label for="country">Country</label>
            <select name="country" id="country">
              <option value="Choose">Select Country</option>
              <option value="srilanka">Sri Lanka</option>
              <option value="india">India</option>
              <option value="maldives">Maldives</option>
            </select>
          </div>
        </form>

        <div class="purchaseInfo">
          <div class="pInfo">
            <p>Total Quantity</p>
            <div class="totalQuantity">8</div>
          </div>
          <div class="pInfo">
            <p>Total Bill Amount</p>
            <div class="totalPrice">Rs.1000</div>
          </div>
        </div>

        <button class="checkoutButton" onclick="checkoutConfirmation()">Checkout</button>
      </div>
    </div>
  </div>
  `;
}
