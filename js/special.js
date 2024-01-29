// const itemCardMain = document.querySelector(".discount__item__main");

// function getThisProductCard({
//   name,
//   category,
//   description,
//   price,
//   rating,
//   discount,
//   images,
// }) {
//   function getStar() {
//     if (rating == 5) {
//       return `../assets/images/index/5star.png`;
//     } else if (rating == 4.5) {
//       12;
//       return `../assets/images/index/4.5star.png`;
//     } else if (rating == 4) {
//       return `../assets/images/index/4star.png`;
//     } else if (rating == 3) {
//       return `../assets/images/index/3star.png`;
//     } else if (rating == 2.5) {
//       return `../assets/images/index/2.5star.png`;
//     } else if (rating == 2) {
//       return `../assets/images/index/2star.png`;
//     } else if (rating == 1) {
//       return `../assets/images/index/1star.svg`;
//     }
//   }
//   return `
//     <div class="discount__item__card">
//                   <img
//                     class="discount__item__image"
//                     src=${images[0]}
//                     alt=${name}
//                   />
//                   <img
//                     class="discount__item__heart"
//                     src="../assets/images/index/homeheart/feather-icon/heart.svg"
//                     alt="image"
//                   />
//                   <a href=""><h6>${discount}</h6></a>
//                   <div class="discount__details">
//                     <div class="discount__payment">
  
//                       <div class="discount__payment__right">
//                         <h2>${price}</h2>
//                         <p>${category}</p>
//                       </div>
//                       <div class="discount__payment__left">
//                         <h3>${price}</h3>
//                         <p>${category}</p>
//                       </div>
//                     </div>
//                     <p class="description">${name}</p>
//                     <h4>
//                       ${description}
//                     </h4>
//                     <img
//                       class="starimage"
//                       src=${getStar()}
//                       alt="star image"
//                     />
//                     <a href="#">В корзину</a>
//                   </div>
//                 </div>
//     `;
// }
// itemCardMain.innerHTML = " ";

// itemCardMain.innerHTML += getThisProductCard();

// getThisProductCard();
