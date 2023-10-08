$(document).ready(function () {
  function header() {
    $('header').append(`
    <nav class="shadow fixed-top">
        <div class="d-none d-md-block w-100 bg-dark text-light">
          <div class="container">
            <div class="d-flex justify-content-between align-items-center py-1">
              <small>088273847932</small>
              <div class="medsos">
                <img
                  src="./assets/icons/instagram-50.png"
                  alt="logo"
                  class="logo-header"
                />
                <img
                  src="./assets/icons/tiktok-50.png"
                  alt="logo"
                  class="logo-header"
                />
                <img
                  src="./assets/icons/shopee-50.png"
                  alt="logo"
                  class="logo-header"
                />
              </div>
              <small>test@mail.com</small>
            </div>
          </div>
        </div>

        <div class="navbar-brand text-center fw-semibold bg-light">
          <span>MahirCraft.id</span>
        </div>
        <div class="nav-link bg-light d-none flex-column d-md-flex flex-md-row">
          <a href="index.html" id="link">Home</a>
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
    });
  }

  function footer() {
    $('.footer').append(`
        <div class="container">
            <div class="row">
                <div class="col-6 col-lg-3">
                    <h4>Alamat</h4>
                    <p>Jl Pelabuhan Yogyakarta No 3</p>
                </div>
                <div class="col-6 col-lg-3">
                    <h4>Kategori</h4>
                    <ul class="info">
                    <li>
                        <i class="fa-solid fa-circle" style="font-size: 10px"></i>
                        <a href=""> Bouquet</a>
                    </li>
                    <li>
                        <i class="fa-solid fa-circle" style="font-size: 10px"></i>
                        <a href=""> Hampers</a>
                    </li>
                    <li>
                        <i class="fa-solid fa-circle" style="font-size: 10px"></i>
                        <a href=""> Seserahan</a>
                    </li>
                    </ul>
                </div>
                <div class="col-6 col-lg-3">
                    <h4>Kontak Kami</h4>
                    <a href=""
                    ><i class="fa-brands fa-whatsapp" style="font-size: 35px"></i
                    ></a>
                    <a href=""
                    ><i class="fa-brands fa-instagram" style="font-size: 35px"></i
                    ></a>
                </div>
                <div class="col-6 col-lg-3">
                    <!-- Kolom keempat -->
                    <h4>Pembayaran</h4>
                    <img
                    src="./assets/img/7.png"
                    alt="Gambar"
                    width="80"
                    class="mx-1 mb-1"
                    />
                    <img
                    src="./assets/img/8.png"
                    alt="Gambar"
                    width="80"
                    class="mx-1 mb-1"
                    />
                    <br />
                    <img
                    src="./assets/img/9.png"
                    alt="Gambar"
                    width="80"
                    class="mx-1"
                    />
                    <img
                    src="./assets/img/10.png"
                    alt="Gambar"
                    width="80"
                    />
                </div>
            </div>
        </div>
    `);
  }

  header();
  footer();
});
