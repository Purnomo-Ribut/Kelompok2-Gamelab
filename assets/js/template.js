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
            <span>MahiraCraft.id</span>
        </div>
        <div class="nav-link bg-light">
            <a href="index.html">Home</a>
            <a href="Katalog.html">Katalog</a>
            <a href="customOrder.html">Custom Order</a>
            <a href="aboutUs.html">About</a>
            <a href="TipsnTrick.html">Tips & Trick</a>
        </div>
    </nav>
  `);
  }

  header();
});
