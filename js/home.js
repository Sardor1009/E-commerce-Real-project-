const itemCardMain = document.querySelector(".discount__item__main");
const searchInput = document.querySelector(".search-input");
let Search = "";
const ProductQuantity = document.querySelector(".products__quantity");
const Pagination = document.querySelector(".pagination");



let activePage = 1;


function getThisProductCard({
  name,
  category,
  description,
  price,
  rating,
  discount,
  images,
}) {
  function getStar() {
    if (rating == 5) {
      return `../assets/images/index/5star.png`;
    } else if (rating == 4.5) {
      12;
      return `../assets/images/index/4.5star.png`;
    } else if (rating == 4) {
      return `../assets/images/index/4star.png`;
    } else if (rating == 3) {
      return `../assets/images/index/3star.png`;
    } else if (rating == 2.5) {
      return `../assets/images/index/2.5star.png`;
    } else if (rating == 2) {
      return `../assets/images/index/2star.png`;
    } else if (rating == 1) {
      return `../assets/images/index/1star.svg`;
    }
  }
  return `
  <div class="discount__item__card">
                <img
                  class="discount__item__image"
                  src=${images[0]}
                  alt=${name}
                />
                <img
                  class="discount__item__heart"
                  src="../assets/images/index/homeheart/feather-icon/heart.svg"
                  alt="image"
                />
                <a href=""><h6>${discount}</h6></a>
                <div class="discount__details">
                  <div class="discount__payment">

                    <div class="discount__payment__right">
                      <h2>${price}</h2>
                      <p>${category}</p>
                    </div>
                    <div class="discount__payment__left">
                      <h3>${price}</h3>
                      <p>${category}</p>
                    </div>
                  </div>
                  <p class="description">${name}</p>
                  <h4>
                    ${description}
                  </h4>
                  <img
                    class="starimage"
                    src=${getStar()}
                    alt="star image"
                  />
                  <a href="#">В корзину</a>
                </div>
              </div>
  `;
}

function GetProducts() {
  let results = products.filter((pr) => pr.name.toLowerCase().includes(Search));
  let pages = Math.ceil(results.length / LIMIT);

  if (pages > 1) {
    Pagination.innerHTML = `<li class="page-item"><button onclick ="getPage('-')" class="page-link"><img src="../assets/images/index/left.svg" alt=""></button></li>`;

    for (let i = 1; i <= pages; i++) {
      Pagination.innerHTML += `<li class="page-item ${
        i === activePage ? "active" : ""
      }"><button class="page-link" onclick = "getPage(${i})">${i}</button></li>`;
    }

    Pagination.innerHTML += `<li class="page-item"><button onclick = "getPage('+')" class="page-link page-next"><img src="../assets/images/index/right.svg" alt=""></button></li>`;
  } else {
    Pagination.innerHTML = "";
  }
  itemCardMain.innerHTML = " ";
  ProductQuantity.textContent = results.length;
  let startProduct = activePage * LIMIT;
  let endProduct = (activePage - 1) * LIMIT;

  results.slice(endProduct, startProduct).map((product) => {
    let card = getThisProductCard(product);
    itemCardMain.innerHTML += card;
  });
  if (activePage === 1) {
    document.querySelector(".page-link").disabled = true;
  } else if (activePage === pages) {
    document.querySelector(".page-next").disabled = true;
  }
}

GetProducts();

searchInput.addEventListener("keyup", function () {
  Search = this.value.trim().toLowerCase();
  GetProducts();
});

function getPage(page) {
  if (page === "+") {
    activePage++;
  } else if (page === "-") {
    activePage--;
  } else {
    activePage = 1;
  }
  GetProducts();
}


// let discountCard = products.filter((product) => product.discount).slice(-4);

// discountCard.forEach((product)=>{
//   itemCardMain.innerHTML += getThisProductCard(product)
// })

// let discountCard = products.filter((el) => el.discount).slice(-4);

// discountCard.forEach((el) => {
//   itemCardMain.append(getThisProductCard(el));
// });

// function GetThisProduct({
//   id,
//   name,
//   category,
//   descripton,
//   price,
//   [0],
//   discount,
//   images,
// }) {
//   const discountItemCard = document.createElement("div");
//   const itemCardImg = document.createElement("img");
//   const itemCardHeart = document.createElement("img");
//   const itemCardDiscount = document.createElement("a");
//   const itemCardDetails = document.createElement("div");
//   const itemCardPayment = document.createElement("div");
//   const itemCardPaymentRight = document.createElement("div");
//   const itemCardPaymentRightH2 = document.createElement("h2");
//   const itemCardPaymentRightP = document.createElement("p");
//   const itemCardPaymentLeft = document.createElement("div");
//   const itemCardPaymentLeftH2 = document.createElement("h2");
//   const itemCardPaymentLeftP = document.createElement("p");
//   const itemCardDetailsH4 = document.createElement("h4");
//   const itemCardDetailsImg = doc.createElement("img");
//   const itemCardDetailsA = document.createElement("a");

//   discountItemCard.className = "discount__item__card";
//   itemCardImg.className = "discount__item__image";
//   itemCardHeart.className = "discount__item__heart";
//   itemCardDetails.className = "discount__details";
//   itemCardPayment.className = "discount__payment";
//   itemCardPaymentRight.className = "discount__payment__right";
//   itemCardPaymentLeft.className = "discount__payment__left";
//   itemCardDetailsImg.className = "starimage";

//   const itemCardDiscountText = document.createTextNode("-50%");
//   const itemCardPaymentRightH2Text = document.createTextNode("44,50 ₽");
//   const itemCardPaymentRightPText = document.createTextNode("С картой");
//   const itemCardPaymentLeftH2Text = document.createTextNode("50,50 ₽");
//   const itemCardPaymentLeftPText = document.createTextNode("Обычная");
//   const itemCardDetailsH4Text = document.createTextNode(
//     "Г/Ц Блинчики с мясом вес, <br /> Россия"
//   );
//   const itemCardDetailsAText = document.createTextNode("В корзину");

//   itemCardDetailsA.appendChild(itemCardDetailsAText);
//   itemCardDetailsH4.appendChild(itemCardDetailsH4Text);
//   itemCardPaymentLeftP.appendChild(itemCardPaymentLeftPText);
//   itemCardPaymentLeftH2.appendChild(itemCardPaymentLeftH2Text);
//   itemCardPaymentRightP.appendChild(itemCardPaymentRightPText);
//   itemCardPaymentRightH2.appendChild(itemCardPaymentRightH2Text);
//   itemCardDiscount.appendChild(itemCardDiscountText);
//   itemCardPaymentLeft.append(itemCardPaymentLeftH2, itemCardPaymentLeftP);
//   itemCardPaymentRight.append(itemCardPaymentRightH2, itemCardPaymentRightP);
//   itemCardPayment.append(itemCardPaymentRight, itemCardPaymentLeft);
//   itemCardDetails.append(
//     itemCardPayment,
//     itemCardDetailsH4,
//     itemCardDetailsImg,
//     itemCardDetailsA
//   );
//   discountItemCard.append(itemCardImg, itemCardHeart, itemCardDetails);
//   itemCardMain.appendChild(discountItemCard);
//   return itemCardMain;
// }
