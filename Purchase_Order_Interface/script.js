// The following data is extracted from the customer's and the distributor's server ///////////////////////////////////////////////
                                                                                                                                 //
const customer = 'Beesline';                                                                                                     //
                                                                                                                                 //
var products = {'Ultrascreen cream invisible': {price: 18, stock: 50, description: 'Ultrascreen Cream Invisible Protection SPF50 - 60ml', img_src: "Album 1.png"},
                'Suntan oil + after sun': {price: 20, stock: 50, description: 'Suntan Oil 200ml - A 100% natural, nutrient-rich', img_src: "Album 2.png"},
                'After sun repairing milk': {price: 14, stock: 50, description: 'This 100% vegetal milk soothes & cools sunburn & repairs & moisturises damaged,...', img_src: "Album 3.png"},
                'Kids sunscreen lotion spf 50': {price: 21, stock: 50, description: 'Easy-to-apply spray formula that provides full-strength water-resistant sun protection while soothing & repairing...', img_src: "Album 4.PNG"},
                'Ultrascreen cream invisible': {price: 18, stock: 50, description: 'Protects from sun damage & premature ageing by blocking UV rays. Especially suited...', img_src: "Album 5.png"},
                'Brown tan dry feel oil': {price: 28, stock: 50, description: 'A lightweight, transparent & non-greasy aerosol oil that is ideal for fast tanning....', img_src: "Album 6.png"},
                'Pure carrot suntan oil spf 10': {price: 18, stock: 50, description: 'A light-weight tanning enhancer with nourishing & moisturising properties. It protects the skin...', img_src: "Album 7.png"},
                'Suntan oil': {price: 20, stock: 50, description: 'A 100% natural, nutrient-rich formula abundant in fresh carrot extract, beeswax & precious...', img_src: "Album 8.png"},
                'Beesline X LTF beeslove bag': {price: 45, stock: 5, description: 'Carry golden ‘summer honey’ with you to the shores this summer in our...', img_src: "Album 9.png"},
                'Beesline X LTF beeslove pouch': {price: 30, stock: 5, description: 'Get dripped in ‘summer honey’ (a.k.a all-natural Suntan Oil) to get nature’s...', img_src: "Album 10.png"},
                'Beesline X LTF two bees t-shirt': {price: 30, stock: 5, description: 'Spread the BeesLove in this limited edition funky t-shirt designed by fashion label...', img_src: "Album 11.png"},
                'Beesline X LTF concert t-shirt': {price: 30, stock: 5, description: 'Spread the BeesLove in this limited edition funky t-shirt designed by fashion label...', img_src: "Album 12.png"},
                'Facial purifying soap': {price: 6, stock: 50, description: 'A bar that gently cleanses sensitive & acne-prone skin. Its anti-microbial, balancing & soothing properties from natural extracts reduce & prevent...', img_src: "Album 13.png"},
                'Dandruff shampoo': {price: 15.40, stock: 50, description: 'A natural, gentle shampoo that soothes the scalp & rebalances its sebum secretions while delivering moisture to combat the causes of dandruff.', img_src: "Album 14.png"},
                'Feet & heels repair kit': {price: 13, stock: 50, description: 'Intense healing properties repair & smooth the feet’s worn & tired skin while refreshing peppermint & eucalyptus provide cooling, calming...', img_src: "Album 15.png"},
                'Lip care kit': {price: 24, stock: 50, description: 'Love at first swipe - keep your lips soft & supple this season with 5 of our all-natural Lip Cares. What’s your favourite flavour?', img_src: "Album 16.png"},
                'Skin essentials kit': {price: 26, stock: 50, description: 'Moisturise, repair & protect skin this winter with beeswax & precious oils - nature’s ultimate cure for dry skin.', img_src: "Album 17.png"},
                'Whitening intimate zone kit': {price: 44.45, stock: 50, description: 'Whitening Sensitive Zone Soap 110g - A natural soothing soap that gently...', img_src: "Album 18.png"}};
                                                                                                                                 //
var items = Object.keys(products);                                                                                               //
                                                                                                                                 //
var order_no = 0; // this variable remains on the server's side                                                                  //
                                                                                                                                 //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function currencyFormat(num) {
  return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

function generateItems() {
  const shop = document.querySelector('.content-section');
  shop.innerHTML = `<div class="head"> <div class="head-inner"> <h2 class="section-header"> Products </h2> <input type="text" id="myInput" onkeyup="searchFunction()" placeholder="Search"> </div> </div>`;
  const head = document.querySelector('.head')
  head.innerHTML += `<div class="shop-sticky shop-row">
                       <div class="shop-item shop-header shop-column">ITEM</div>
                       <div class="shop-price shop-header shop-column">PRICE</div>
                       <div class="shop-quantity shop-header shop-column"> <span id='button'> PROCEED <i class="arrow right tmp-unvisible2"></i> </span> </div>
                     </div>`;
  for (var i = 0 ; i < Object.keys(products).length ; i++) {
    const item = items[i];
    shop.innerHTML += `<div class="shop-row">
                         <div class="shop-item shop-column">
                           <img class="shop-item-image" src="${products[item].img_src}">
                           <span class="shop-item-title">${item}</span>
                         </div>
                         <span class="shop-price shop-font shop-column">${currencyFormat(products[item].price)}</span>
                         <div class="shop-quantity shop-column">
                           <button class="btn btn-primary shop-item-button" type="button">ADD TO ORDER</button>
                         </div>
                       </div>`;
  };
};

generateItems();

if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
};

function ready() {
  var removeCartItemButtons = document.getElementsByClassName('btn-danger');
  for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    button.addEventListener('click', removeCartItem);
  };

  var quantityInputs = document.getElementsByClassName('cart-quantity-input');
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener('change', quantityChanged);
  };

  var addToCartButtons = document.getElementsByClassName('shop-item-button');
  for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener('click', addToCartClicked);
  };

  document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked);
};

function purchaseClicked() {
  var cartItems = document.getElementsByClassName('cart-items')[0];
  if (cartItems.innerHTML.length > 0) {
    submitOrder();
    // alert('Your order has been submitted.');
    // while (cartItems.hasChildNodes()) {
    //   cartItems.removeChild(cartItems.firstChild);
    // };
    // updateCartTotal();
    // updateTable();
  }
  else {
    alert('Your order is empty.');
  }
};

function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
  updateTable();
};

function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  };
  updateCartTotal();
  updateTable();
};

function addToCartClicked(event) {
  var button = event.target;
  var shopItem = button.parentElement.parentElement;
  var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
  var price = shopItem.getElementsByClassName('shop-price')[0].innerText;
  var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;
  addItemToCart(title, price, imageSrc);
  updateCartTotal();
  updateTable();
};

function addItemToCart(title, price, imageSrc) {
  var cartRow = document.createElement('div');
  cartRow.classList.add('cart-row');
  var cartItems = document.getElementsByClassName('cart-items')[0];
  var cartItemNames = cartItems.getElementsByClassName('cart-item-title');
  for (var i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
      alert('This item is already added to the cart');
      return;
    }
  };
  var cartRowContents = `<div class="cart-item cart-column">
                           <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
                           <span class="cart-item-title">${title}</span>
                         </div>
                         <span class="cart-price cart-font cart-column">${price}</span>
                         <div class="cart-quantity cart-column">
                           <input class="cart-quantity-input" type="number" value="1">
                           <button class="btn btn-danger" type="button">REMOVE</button>
                           <br><br> <span style="flex-grow:1"></span> <p class="stock"> ${products[title].stock} item(s) in stock </p>
                         </div>`;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged);
};

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName('cart-items')[0];
  var cartRows = cartItemContainer.getElementsByClassName('cart-row');
  var total = 0;
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName('cart-price')[0];
    var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
    var price = parseFloat(priceElement.innerText.replace('$', ''));
    var quantity = quantityElement.value;
    total = total + (price * quantity);
  };
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName('cart-total-price')[0].innerText = currencyFormat(total);
};

function submitOrder() {
  var form = document.createElement("form");
  form.style.display = "none";
  form.method = "POST";
  form.action = "submit.php";
  var cart = document.getElementsByClassName('cart-items')[0];
  var rows = cart.getElementsByClassName('cart-row');
  for (var z = 0; z < rows.length; z++) {
    var row = rows[z];
    var quantityElement = row.getElementsByClassName('cart-quantity-input')[0];
    var quantity = quantityElement.value;
    var item = row.getElementsByClassName('cart-item-title')[0].innerText;
    var element1 = document.createElement("input");
    var element2 = document.createElement("input");
    element1.name = "item";
    element1.value = item;
    console.log(element1.value);
    form.appendChild(element1);
    element2.name = "quantity";
    element2.value = quantity;
    console.log(element2.value);
    form.appendChild(element2);
  };
  document.body.appendChild(form);
  form.submit();
};

function updateTable() {
  var cartItemContainer = document.getElementsByClassName('cart-items')[0];
  var rows = cartItemContainer.getElementsByClassName('cart-row');
  var table = document.getElementsByClassName('POS');
  table[0].innerHTML = '';
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    var quantityElement = row.getElementsByClassName('cart-quantity-input')[0];
    var quantity = quantityElement.value;
    var item = row.getElementsByClassName('cart-item-title')[0].innerText;
    table[0].innerHTML += `<tr>
                             <td>${item}</td>
                             <td>${products[item].description}</td>
                             <td>${quantity}</td>
                           </tr>`;
  };
};

const pdf = document.getElementById('btnExport');
pdf.addEventListener('click', exportPDF);

function exportPDF() {
  var cartItems = document.getElementsByClassName('cart-items')[0];
  if (cartItems.innerHTML.length > 0) {
    var doc = new jsPDF();
    doc.autoTable({
      html: '#my-table',
      bodyStyles: {valign: 'top'},
      styles: {overflow: 'linebreak', columnWidth: 'wrap'},
      columnStyles: {1: {columnWidth: 'auto'}},
      theme: 'grid'
    });
    doc.save(`${customer}_${order_no}.pdf`);
  }
  else {
    alert('Your order is empty.');
  }
};

function searchFunction() {
  var input = document.getElementById('myInput');
  var filter = input.value.toUpperCase();
  var names = document.getElementsByClassName('shop-item-title');
  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    txtValue = name.textContent || name.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      name.parentElement.parentElement.style.display = "";
    } else {
      name.parentElement.parentElement.style.display = "none";
    }
  };
};

var button = document.getElementById('button');
button.addEventListener('click', arrowRight);

function arrowRight() {
  // var cartItems = document.getElementsByClassName('cart-items')[0];
  // if (cartItems.innerHTML.length > 0) {
  var box_left = document.querySelector('.box-left');
  var box_right = document.querySelector('.box-right');
  box_left.classList.add('tmp-unvisible');
  box_right.classList.remove('tmp-unvisible');
  window.scrollTo(0,0);
  //}
};

var button2 = document.getElementById('button2');
button2.addEventListener('click', arrowLeft);

function arrowLeft() {
  var box_left = document.querySelector('.box-left');
  var box_right = document.querySelector('.box-right');
  box_right.classList.add('tmp-unvisible');
  box_left.classList.remove('tmp-unvisible');
  window.scrollTo(0,0);
};
