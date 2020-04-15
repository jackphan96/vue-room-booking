<template>
  <div>
    <!--================Header Area =================-->
    <header class="header_area">
      <div>
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light">
            <!-- Brand and toggle get grouped for better mobile display -->
            <a class="navbar-brand logo_h" href="/">
              <img class="nav-logo" src="~/assets/image/Logo.png" alt style />
              <span>A1 Booking Service</span>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
              <ul class="nav navbar-nav menu_nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="index">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="room">Book Room</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
    <!--================Header Area =================-->
  </div>
</template>

<script>
export default {};
</script>

<style>
/*---------------------------------------------------- */
/*----------------------------------------------------*/
/*============== header css =============*/

.nav-logo {
  width: 55px;
  height: 55px;
}

.header_area {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
}

.header-top {
  padding: 3px 0px;
}

.header-top a {
  color: #fff;
  -webkit-transition: all 0.3s linear;
  -o-transition: all 0.3s linear;
  transition: all 0.3s linear;
}

.header-top a:hover {
  color: #f3c300;
}

.header-top ul {
  padding-left: 0px;
  margin-bottom: 0px;
}

.header-top ul li {
  display: inline-block;
  margin-right: 15px;
}

@media (max-width: 414px) {
  .header-top ul li {
    margin-right: 0px;
  }
}

.header-top .header-top-left a {
  margin-right: 8px;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  display: inline-block;
}

.header-top .header-top-right {
  text-align: right;
}

.header-top .header-top-right .header-social a {
  color: #fff;
  margin-left: 15px;
  -webkit-transition: all 0.3s linear;
  -o-transition: all 0.3s linear;
  transition: all 0.3s linear;
  font-size: 12px;
}

.header-top .header-top-right .header-social a:hover {
  color: #f3c300;
}

.navbar {
  padding: 0px;
  border: 0px;
  border-radius: 0px;
}

.navbar {
  background: #fff;
  padding: 0px 25px;
}

.navbar .logo_h {
  padding-top: 0px;
}

.navbar .menu_nav .nav-item .nav-link {
  font: 500 12px/80px "Poppins", sans-serif;
  color: #222222;
  text-transform: uppercase;
  padding: 0px;
}

.navbar .menu_nav .nav-item .nav-link:after {
  display: none;
}

.navbar .menu_nav .nav-item:hover .nav-link,
.navbar .menu_nav .nav-item.active .nav-link {
  color: #52c5fd;
}

.navbar .menu_nav .nav-item.submenu {
  position: relative;
}

.navbar .menu_nav .nav-item.submenu ul {
  border: none;
  padding: 0px;
  border-radius: 0px;
  -webkit-box-shadow: none;
  box-shadow: none;
  margin: 0px;
  background: transparent;
}

@media (min-width: 992px) {
  .navbar .menu_nav .nav-item.submenu ul {
    position: absolute;
    top: 100%;
    left: 0px;
    min-width: 220px;
    text-align: left;
    opacity: 0;
    -webkit-transition: all 300ms ease-in;
    -o-transition: all 300ms ease-in;
    transition: all 300ms ease-in;
    visibility: hidden;
    display: block;
    border: none;
    padding: 0px;
    border-radius: 0px;
  }
}

.navbar .menu_nav .nav-item.submenu ul:before {
  content: "";
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 10px 0 10px;
  border-color: #eeeeee transparent transparent transparent;
  position: absolute;
  right: 24px;
  top: 45px;
  z-index: 3;
  opacity: 0;
  -webkit-transition: all 400ms linear;
  -o-transition: all 400ms linear;
  transition: all 400ms linear;
}

.navbar .menu_nav .nav-item.submenu ul .nav-item {
  display: block;
  float: none;
  margin-right: 0px;
  border-bottom: 1px solid #ededed;
  margin-left: 0px;
  background: #fff;
  -webkit-transition: all 0.4s linear;
  -o-transition: all 0.4s linear;
  transition: all 0.4s linear;
}

@media (min-width: 992px) {
  .navbar .menu_nav .nav-item.submenu ul .nav-item {
    margin-top: 10px;
  }
}

.navbar .menu_nav .nav-item.submenu ul .nav-item .nav-link {
  line-height: 45px;
  color: #222222;
  padding: 0px 30px;
  -webkit-transition: all 150ms linear;
  -o-transition: all 150ms linear;
  transition: all 150ms linear;
  display: block;
}

.navbar .menu_nav .nav-item.submenu ul .nav-item:last-child {
  border-bottom: none;
}

.navbar .menu_nav .nav-item.submenu ul .nav-item:hover .nav-link {
  background: #f0f0f0;
  color: #52c5fd;
}

@media (min-width: 992px) {
  .navbar .menu_nav .nav-item.submenu:hover ul {
    visibility: visible;
    opacity: 1;
  }
}

.navbar .menu_nav .nav-item.submenu:hover ul .nav-item {
  margin-top: 0px;
}

.navbar .menu_nav .nav-item + li {
  margin-left: 30px;
}

.menu_two {
  background: rgba(255, 255, 255, 0.15);
}

.menu_two .menu_nav .nav-item .nav-link {
  line-height: 60px;
  color: #fff;
}

.navbar_fixed {
  position: fixed;
  width: 100%;
  left: 0;
  background: #fff;
  top: 0;
  top: -50px;
  -webkit-transform: translateY(50px);
  -ms-transform: translateY(50px);
  transform: translateY(50px);
  -webkit-box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  transition: transform 300ms ease, background 300ms ease,
    -webkit-transform 300ms ease;
}

.navbar_fixed .navbar {
  background: transparent;
}

.navbar_fixed .header-top {
  display: none;
}

.navbar_fixed.header_two {
  background: rgba(34, 34, 34, 0.9);
}

/*---------------------------------------------------- */
/*----------------------------------------------------*/
</style>
