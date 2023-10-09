$(document).ready(function () {
  function header() {
    $('header').append(`
    <nav class="shadow fixed-top">
        <div class="d-none d-md-block w-100 bg-dark text-light">
          <div class="container">
            <div class="d-flex justify-content-between align-items-center py-1">
              <small class="contact">
                <a href="https://wa.me/+628871408198">+628871408198</a>
              </small>
              <div class="medsos">
                <a href="https://instagram.com/mahircraft.id?igshid=MzRlODBiNWFlZA" target="_blank">
                  <img
                    src="./assets/icons/instagram-50.png"
                    alt="logo"
                    class="logo-header"
                  />
                <a href="https://tiktok.com/@mahircraftbyalma" target="_blank">
                  <img
                    src="./assets/icons/tiktok-50.png"
                    alt="logo"
                    class="logo-header"
                  />
                <a href="http://shopee.co.id/mahircrafts.id" target="_blank">
                  <img
                    src="./assets/icons/shopee-50.png"
                    alt="logo"
                    class="logo-header"
                  />
                </a>
              </div>
              <small class="email">
                <a href="mailto:mahircraft8@gmail.com">mahircraft8@gmail.com</a>
              </small>
            </div>
          </div>
        </div>

        <div class="navbar-brand text-center fw-semibold bg-light">
          <a href="index.html"><span>MahirCraft.id</span></a>
        </div>
        <div class="nav-link bg-light d-none flex-column d-md-flex flex-md-row">
          <a href="index.html" id="link" class="home">Home</a>
          <a href="Katalog.html" id="link">Katalog</a>
          <a href="customOrder.html" id="link">Custom Order</a>
          <a href="aboutUs.html" id="link">About</a>
          <a href="TipsnTrick.html" id="link">Tips & Trick</a>
        </div>

        <div class="hamburger bg-light d-md-none">
          <span class="bar1"></span>
          <span class="bar2"></span>
          <span class="bar3"></span>
        </div>
      </nav>
  `);

    $('.hamburger').click(function () {
      $('.nav-link').toggleClass('d-none');
      $('span').toggleClass('active');
    });

    const navLink = document.querySelectorAll('#link');
    const winPath = window.location.pathname;

    navLink.forEach(function (navLinkEl) {
      if (navLinkEl.href.includes(winPath)) {
        navLinkEl.classList.add('navbar-active');
      }
      console.log(winPath);
      if (winPath == '/' || winPath == '/Kelompok2-Gamelab/') {
        navLinkEl.classList.remove('navbar-active');
        if (navLinkEl.href.includes('index.html')) {
          navLinkEl.classList.add('navbar-active');
        }
      }
    });
  }

  function footer() {
    $('.footer').append(`
          <div class="container">
    <div class="row">
      <div class="col-lg-3">
        <h5>Alamat</h5>
        <p>Jln. Maulana Hassanuddin No.230, Tangerang</p>        
      </div>
      <div class="col-lg-3">
        <h5>Kategori</h5>
        <ul class="info ">
          <li><i class="fa-solid fa-circle" style="font-size: 10px;"></i> <a href="Katalog.html">  Bouquet</a></li>
          <li><i class="fa-solid fa-circle" style="font-size: 10px;"></i> <a href="Katalog.html"> Hampers</a></li>
          <li><i class="fa-solid fa-circle" style="font-size: 10px;"></i> <a href="Katalog.html"> Seserahan</a></li>  
          
        </ul>
      </div>
      <div class="col-lg-3">
        <h5>Kontak Kami</h5>
        <a href="https://wa.me/+628871408198"><i class="fa-brands fa-whatsapp"style="font-size: 35px;"></i></a>
        <a href="https://instagram.com/mahircraft.id?igshid=MzRlODBiNWFlZA=="><i class="fa-brands fa-instagram"style="font-size: 35px;"></i></a>
      </div>
      <div class="col-lg-3">
        <!-- Kolom keempat -->
        <h5>Pembayaran</h5>
        <img src="./assets/img/7.png" alt="Gambar" width="70" height="23" class="mx-2 mb-1">
        <img src="./assets/img/8.png" alt="Gambar" width="60" height="28" class="mx-2 mb-1"> <br>
        <img src="./assets/img/9.png" alt="Gambar" width="60" height="23" class="mx-2">
        <img src="./assets/img/10.png" alt="Gambar" width="60" height="23" class="mx-3">
      </div>
    </div>
  </div>
</div>
    `);
  }

  header();
  footer();
});
