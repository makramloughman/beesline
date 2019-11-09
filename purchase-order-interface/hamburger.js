function hamburgerFunction() {
  var tmp = document.querySelector('.hamburger');
  var tmp2 = document.querySelector('.responsive');
  var welcome = document.querySelector('.welcome');
  var nav = document.querySelector('.nav');
  console.log()
  if (tmp2 === null) {
    welcome.classList.remove('tmp-unvisible');
    nav.classList.remove('tmp-unvisible');
    tmp.classList.add('responsive');
    console.log(tmp);
  } else {
    welcome.classList.add('tmp-unvisible');
    nav.classList.add('tmp-unvisible');
    tmp.classList.remove('responsive');
  }
};
