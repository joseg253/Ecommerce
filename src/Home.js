import React from "react";
import Header from "./Header";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__image">
        <img src="https://www.wellingtonsstores.com/wp-content/uploads/2020/01/Home-banner-5superuser09-08-2018_04-04-23.png" />
      </div>

      {/* Product it, title, price, rating, img,  */}
      <div className="home__row">
        <Product
          id="16"
          title="TApple iPad (10.2-inch, Wi-Fi, 128GB) - Silver (Latest Model)"
          price={399.98}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61J6uczVvJL._AC_UL200_SR200,200_.jpg"
        ></Product>

        <Product
          id="17"
          title="Kindle Paperwhite – Now Waterproof with more than 2x the Storage 
          – Ad-Supported + Kindle Unlimited"
          price={129.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/61eAq6gg-XL._AC_UL200_SR200,200_.jpg"
        ></Product>
      </div>

      <div className="home__row">
        <Product
          id="14"
          title="Ring Indoor Cam, Compact Plug-In HD security camera with two-way talk"
          price={73.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/41Ggoy6fE2L._AC_UL200_SR200,200_.jpg"
        ></Product>

        <Product
          id="13"
          title="Apple Watch Series 3 (GPS, 38mm) - Space Gray Aluminum Case with Black Sport Band"
          price={169.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71fwbMm1NBL._AC_UL200_SR200,200_.jpg"
        ></Product>
        <Product
          id="15"
          title="TNETGEAR Nighthawk Smart WiFi Router (R6700) - AC1750 Wireless Speed (up to 1750 Mbps)"
          price={86.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61FA9BbugzL._AC_UL200_SR200,200_.jpg"
        ></Product>
      </div>

      <div className="home__row">
        <Product
          id="12"
          title="Samsung - 65 Class - 7 Series - 4K UHD TV - Smart - LED - with HDR"
          price={499.99}
          rating={4}
          image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401722_sd.jpg"
        ></Product>
      </div>
    </div>
  );
}

export default Home;
