import React, { Fragment } from 'react';
import "./desktop.css"
const Desktop_en = () => {
  return <Fragment>

{/* <head>
  <title>nosthes</title>
  <link rel="stylesheet" href="desktop.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
    integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@300&display=swap" rel="stylesheet">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
    crossorigin="anonymous"></script>
  <script src="https://kit.fontawesome.com/9a3d93deeb.js" crossorigin="anonymous"></script>
</head> */}


<body>

  {/* <!--NAVBAR--> */}
  <header class=" bg-white fixed-top navbar-expand-lg navbar-light shadow-sm p-0 mb-2">
    <nav class="navbar">
      <a class="navbar-brand mr-auto" href="#">
        <img src="../photos/GreenLeave.png" width="30" height="30" alt=""/>
      </a>
      <img class="mr-auto" src="../photos/Black-Txt.png" height="40" href="#"></img>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>


      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav ml-4 mr-auto mt-lg-2">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              menu
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#boissons">drinks</a>
              <a class="dropdown-item" href="#repas">food</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" href="#apropos">about us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" href="#livraison">delivery</a>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto mt-lg-2">
          <li class="nav-item">
            <a class="nav-link text-dark" href="#nousjoindre">
              <i class="fas fa-map-marker-alt text-success"></i> join us
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" href="desktop_fr.html">
              | Fran&ccedil;ais
            </a>
          </li>
        </ul>
      </div>

    </nav>
  </header>

  {/* <!--CONTENT--> */}


  {/* <!--Menu--> */}

  {/* <!--About--> */}



  {/* <!--Caroussel ../photos--> */}
  <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" tabindex="0">




    <div class="container px-4 px-md-3 pt-5 mt-5">
      <div class="card overflow-hidden border-0 rounded-0 text-center">
        <img src="../photos/background.png" class="card-img rounded-0 img-fluid" alt=""/>
        <div class="card-img-overlay d-flex flex-column justify-content-center">
          <div class="row">
            <div class="col">
              <h1 class="card-title text-uppercase align-items-start boldonly">montreal's pioneers in authentic
                taiwanese tea</h1>
              <a href="#menu" class="btn btn-outline-dark btn-lg description ">see our menu</a>
            </div>
            <div class="col"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="container px-4 px-md-3 py-5">
      <h1 class="text-center">qualiTEA only.</h1>
      <div class="border-top "/>
      <p class="text-center">committed to continuously provide quality products that add a bit fun and mix a little
        flavor in your life </p>
    </div>


    <div id="menu" class="container px-4 px-md-3 mt-5 pt-5">
      <div class="row align-items-lg-center">
        <div class="container text-center">
          <div class="border-top"></div>
          <h1 class="boldonly">MENU</h1>
        </div>
      </div>
    </div>


    <div id="boissons" class="container ">
      <div class="row align-items-lg-center">
        <div class="col-6 pr-0">
          <div id="carouselExampleSlidesOnly" class="carousel slide carousel-fade" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">

                <img class="d-block w-100 img-fluid" src="../photos/hot.png" alt="First slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100 img-fluid" src="../photos/matcha.png" alt="Second slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100 img-fluid" src="../photos/Taro.png" alt="Third slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100 img-fluid" src="../photos/green_bean.png" alt="Fourth slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100 img-fluid" src="../photos/red_bean.png" alt="Fifth slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100 img-fluid" src="../photos/Taro.png" alt="Sixth slide"/>
              </div>
            </div>
          </div>
        </div>

        <div class="col text-center">
          <h1 class="text-left boldunderline"> taste NOS signatures</h1>
          <h2 class="text-left"> classic creamy milk tea</h2>
            <h2 class="text-left"> fruity iced tea </h2>
              <h2 class="text-left"> jazz iced tea</h2>
                <p class="text-left">*vegan option available </p>
                <div class="container pl-0 text-left">
                  <a href="#opendrinks" class="btn btn-outline-dark btn-lmd mx-auto description"
                    data-toggle="collapse">NOS drinks</a>
                </div>
        </div>

      </div>
    </div>
  </div>

  <div id="opendrinks" class="collapse container position-center">
    <img class=" img-fluid" src="../photos/english drinks.png" alt=""/>
  </div>


  <div id="repas" class="container ">
    <div class="row align-items-lg-center">
      <div class="col-6 text-center ">
        <h1 class="text-right boldunderline"> savour NOS cuisine</h1>
        <h2 class="text-right"> taiwanese stir-fry</h2>
          <h2 class="text-right"> noodles </h2>
            <h2 class="text-right"> snacks </h2>
              <div class="container pr-0 text-right">
                <a href="#openfood" class="btn btn-outline-dark btn-md  mx-auto text-left description"
                  data-toggle="collapse">NOS food</a>
              </div>
      </div>

      <div class="col-6 pl-0">
        <div id="carouselExampleSlidesOnly" class="carousel slide carousel-fade" data-ride="carousel">

          <div class="carousel-item active">
            <img class="d-block w-100 img-fluid" src="../photos/noodles.png" alt="First slide"/>
          </div>

          <div class="carousel-item">
            <img class="d-block w-100 img-fluid" src="../photos/dumplings.png" alt="Second slide"/>
          </div>

          <div class="carousel-item">
            <img class="d-block w-100 img-fluid" src="../photos/iron_plate.png" alt="Third slide"/>
          </div>
        </div>
      </div>

      <div id="openfood" class="container position-center collapse">
        <img src="../photos/english food.png" class="img-fluid" alt=""/>
      </div>
    </div>

    <div id="apropos" class="container px-4 px-md-3 py-5 my-5">
      <div class="border-top"></div>
      <h1 class="text-center boldonly">ABOUT US</h1>
      <div class="row align-items-lg-center">
        <div class="col text-center pt-5">
          <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100 img-fluid" src="../photos/leaves.png" alt="First slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100 img-fluid" src="../photos/main_floor_.png" alt="Second slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100 img-fluid" src="../photos/chairtable.png" alt="Third slide"/>
              </div>
            </div>
          </div>
        </div>
        <div class="col text-center pt-5">
          <h1 class="text-right description">
            Welcome to NosTh&eacute;s Bistro Montreal, where we serve a great variety of exotic tea beverages and
            authentique Taiwanese cuisine. NosTh&eacute;s is proud to provide you with something new and different from
            anywhere else in Montreal. Our delicious concoctions of milk and tea based beverages complimented by
            Taiwanese gourmet style cooking are sure to charm you! Come and taste our signature pearl tea that made us
            popular. NosTh&eacute;s is committed to continuously provide quality products that add a bit fun and mix a
            little flavor in your life.</h1>
        </div>
      </div>
    </div>

    <div id="livraison" class="container px-4 px-md-3 py-5 my-5">
      <div class="">
      <h1 class="text-center boldonly">DELIVERY</h1>
      <div class="row align-items-lg-center">
        <div class="mx-auto" style="width: 6rem;">
          <a href="https://ubereats.com">
            <img class="card-img-top" src="../photos/uber_eats.png" alt="Card image cap"/>
          </a>
        </div>
        <div class="mx-auto" style="width: 15rem;">
          <a href="https://fantuan.ca">
            <img class="card-img-top" src="../photos/fantuan.png" alt="Card image cap"/>
          </a>
        </div>
        <div class="mx-auto" style="width: 15rem;">
          <a href="https://www.skipthedishes.com/">
            <img class="card-img-top" src="../photos/skip.png" alt="Card image cap"/>
          </a>
        </div>
      </div>
      <div class="row mx-auto mt-5">
        <div class="card mx-auto" style="width: 10rem;">
          <a href="https://doordash.com">
            <img class="card-img-top" src="../photos/doordash.png" alt="Card image cap"/>
          </a>
        </div>
        <div class="mx-auto" style="width: 10rem;">
          <a href="https://hungrypanda.co">
            <img class="card-img-top" src="../photos/hungry_panda.png" alt="Card image cap"/>
          </a>
        </div>
        <div class="mx-auto" style="width: 10rem;">
          <a href="https://foodhwy.com">
            <img class="card-img-top" src="../photos/foodhwy.png" alt="Card image cap"/>
          </a>
        </div>
      </div>
    </div>


    {/* <!--join us--> */}
    <div id="nousjoindre" class="container px-4 px-md-3 py-5 my-5">
      <h1 class="text-center boldonly">JOIN US</h1>
      <div class="row align-items-lg-center">
        <div class="col text-center pt-5">
          <div class="text-left">
            <h1 class="description"> 1609 Rue Sainte-Catherine Ouest,</h1>
            <h1 class="description"> Montreal, Quebec H3H 1L8</h1>
            <h1 class="description"> Metro Guy-Concordia (Guy exit)</h1>
            <div class="border-top"></div>
          </div>
        </div>
        <div class="col">
          <div class="container px-4 px-md-3 pt-5 pb-5">
            <div class="row align-items-lg-center">
              <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img class="d-block w-100 img-fluid" src="../photos/front_store.png" alt="First slide"/>
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100 img-fluid" src="../photos/front_store_2(2).png" alt="Second slide"/>
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100 img-fluid" src="../photos/front_store_3(2).png" alt="Third slide"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row align-items-lg-center">
        <div class="col">
          <div class="text-left">
            <h1 class="text-center"> OPEN HOURS</h1>
            <div class="border-top"/>
            <h1 class="description"> MON &ndash; THU 12:00 PM &ndash; 9:00 PM</h1>
            <h1 class="description"> FRI &ndash; SAT  12:00 PM &ndash; 9:00 PM</h1>
            <h1 class="description"> SUN  12:00 PM
              &ndash; 9:00 PM</h1>
            <div class="border-top"></div>
            <div class="border-top"/>
            <h1 class="description"> TEL. (514) 904-0246</h1>
          </div>
        </div>
      </div>
    </div>


  </div>



  {/* <!--Footer--> */}
  <footer class="bd-footer p-3 p-md-5 mt-5 bg-light text-center text-sm-start">
    <p class="mb-0">
      &#169;JoshuaCastillo2021
    </p>
  </footer>
  </div>
</body>


</Fragment>
};

export default Desktop_en;