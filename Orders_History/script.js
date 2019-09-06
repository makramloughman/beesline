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
var orders = {'Order#0015': {id: 'Order#0015', products: {'Ultrascreen cream invisible': 1, 'After sun repairing milk': 1}, price: 32, date: '25/07/2019'},
              'Order#0014': {id: 'Order#0014', products: {'Suntan oil + after sun': 1, 'Kids sunscreen lotion spf 50': 1}, price: 41, date: '30/06/2019'},
              'Order#0013': {id: 'Order#0013', products: {'Brown tan dry feel oil': 1, 'Pure carrot suntan oil spf 10': 1}, price: 46, date: '02/06/2019'},
              'Order#0012': {id: 'Order#0012', products: {'Whitening intimate zone kit': 1, 'Lip care kit': 1, 'Feet & heels repair kit': 1}, price: 81.45, date: '25/05/2019'},
              'Order#0011': {id: 'Order#0011', products: {'Dandruff shampoo': 1, 'Facial purifying soap': 1}, price: 21.4, date: '30/04/2019'},
              'Order#0010': {id: 'Order#0010', products: {'Brown tan dry feel oil': 1, 'Pure carrot suntan oil spf 10': 1, 'Suntan oil': 1}, price: 66, date: '07/04/2019'},
              'Order#0009': {id: 'Order#0009', products: {'Beesline X LTF beeslove bag': 1, 'Beesline X LTF beeslove pouch': 1, 'Beesline X LTF two bees t-shirt': 1, 'Beesline X LTF concert t-shirt': 1}, price: 135, date: '28/03/2019'},
              'Order#0008': {id: 'Order#0008', products: {'Lip care kit': 1, 'Facial purifying soap': 1, 'Skin essentials kit': 1}, price: 26, date: '28/02/2019'},
              'Order#0007': {id: 'Order#0007', products: {'Ultrascreen cream invisible': 1, 'Suntan oil + after sun': 1, 'After sun repairing milk': 1, 'Kids sunscreen lotion spf 50': 1, 'Ultrascreen cream invisible': 1, 'Brown tan dry feel oil': 1, 'Pure carrot suntan oil spf 10': 1, 'Suntan oil': 1, 'Beesline X LTF beeslove bag': 1, 'Beesline X LTF beeslove pouch': 1, 'Beesline X LTF two bees t-shirt': 1, 'Beesline X LTF concert t-shirt': 1, 'Facial purifying soap': 1, 'Dandruff shampoo': 1, 'Feet & heels repair kit': 1, 'Lip care kit': 1, 'Skin essentials kit': 1, 'Whitening intimate zone kit': 1}, price: 402.85, date: '02/01/2019'},
              'Order#0006': {id: 'Order#0006', products: {'Ultrascreen cream invisible': 1, 'After sun repairing milk': 1}, price: 32, date: '25/07/2018'},
              'Order#0005': {id: 'Order#0005', products: {'Suntan oil + after sun': 1, 'Kids sunscreen lotion spf 50': 1}, price: 41, date: '30/06/2018'},
              'Order#0004': {id: 'Order#0004', products: {'Brown tan dry feel oil': 1, 'Pure carrot suntan oil spf 10': 1}, price: 46, date: '02/06/2018'},
              'Order#0003': {id: 'Order#0003', products: {'Whitening intimate zone kit': 1, 'Lip care kit': 1, 'Feet & heels repair kit': 1}, price: 81.45, date: '25/05/2018'},
              'Order#0002': {id: 'Order#0002', products: {'Dandruff shampoo': 1, 'Facial purifying soap': 1}, price: 21.4, date: '30/04/2018'},
              'Order#0001': {id: 'Order#0001', products: {'Brown tan dry feel oil': 1, 'Pure carrot suntan oil spf 10': 1, 'Suntan oil': 1}, price: 66, date: '07/04/2018'}};
                                                                                                                                 //
var items = Object.keys(products);                                                                                               //
                                                                                                                                 //
var orders_id = Object.keys(orders);                                                                                             //
                                                                                                                                 //
var order_no = 0; // this variable remains on the server's side                                                                  //
                                                                                                                                 //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function currencyFormat(num) {
  return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

function generateItems() {
  const shop = document.querySelector('.content-section');
  shop.innerHTML = `<div class="head"> <div class="head-inner"> <h2 class="section-header"> Previous Orders </h2> <input type="text" id="myInput" onkeyup="searchFunction()" placeholder="Search"> </div> </div>`;
  const head = document.querySelector('.head')
  head.innerHTML += `<div class="shop-sticky shop-row">
                       <div class="shop-item shop-header shop-column">ORDER</div>
                       <div class="shop-price shop-header shop-column">PRICE</div>
                       <div class="shop-date shop-header shop-column">DATE</div>
                       <div class="shop-quantity shop-header shop-column">PROCEED</div>
                     </div>`;
  for (var i = 0 ; i < orders_id.length ; i++) {
    const order = orders_id[i];
    shop.innerHTML += `<div class="shop-row">
                         <div class="shop-item shop-column">
                           <span class="shop-item-title">${orders[order].id}</span>
                         </div>
                         <span class="shop-price shop-font shop-column">${currencyFormat(orders[order].price)}</span>
                         <span class="shop-date shop-font shop-column">${orders[order].date}</span>
                         <div class="shop-quantity shop-column">
                           <button class="btn btn-primary shop-item-button" type="button">VIEW ORDER</button>
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
  var addToCartButtons = document.getElementsByClassName('shop-item-button');
  for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener('click', vieworderClicked);
  };
};

function vieworderClicked() {
  var buttonClicked = event.target;
  if (buttonClicked.classList[3] == 'active-order') {
    alert('You are already viewing this order.');
    return;
  }
  var cartItems = document.getElementsByClassName('cart-items')[0];
  var tmp = document.querySelector('.active-order');
  if (tmp !== null) {
    tmp.classList.remove('active-order');
    while (cartItems.hasChildNodes()) {
      cartItems.removeChild(cartItems.firstChild);
    };
  }
  buttonClicked.classList.add('active-order');
  var parent = buttonClicked.parentElement.parentElement;
  var orderClicked = parent.getElementsByClassName('shop-item-title')[0].innerText;
  var tmp = orders[orderClicked].products
  var products_keys = Object.keys(tmp);
  for (var k = 0; k < products_keys.length; k++) {
    var cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');
    var product = products_keys[k];
    var imageSrc = products[product].img_src;
    var price = products[product].price;
    var quantity = orders[orderClicked].products[product]
    var cartRowContents = `<div class="cart-item cart-column">
                             <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
                             <span class="cart-item-title">${product}</span>
                           </div>
                           <span class="cart-price cart-font cart-column">${currencyFormat(price)}</span>
                           <div class="cart-quantity cart-font cart-column">
                             <div class="cart-quantity-input">${quantity}</div>
                           </div>`;
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
  }
  document.getElementsByClassName('cart-total-price')[0].innerText = currencyFormat(orders[orderClicked].price);
  updateTable()
};

function updateTable() {
  var cartItemContainer = document.getElementsByClassName('cart-items')[0];
  var rows = cartItemContainer.getElementsByClassName('cart-row');
  var table = document.getElementsByClassName('POS');
  table[0].innerHTML = '';
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    var quantityElement = row.getElementsByClassName('cart-quantity-input')[0];
    var quantity = quantityElement.innerText;
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
      styles: {overflow: 'linebreak', cellWidth: 'wrap'},
      columnStyles: {1: {cellWidth: 'auto'}},
      theme: 'grid'
    });
    doc.save(`${document.querySelector('.active-order').parentElement.parentElement.getElementsByClassName('shop-item-title')[0].innerText}.pdf`);
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

var arrows_right = document.querySelectorAll('.shop-item-button');
for (var i = 0; i < arrows_right.length; i++) {
  var arrow_right = arrows_right[i];
  arrow_right.addEventListener('click',arrowRight);
};

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
