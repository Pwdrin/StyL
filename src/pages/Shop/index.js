import React, { useState } from "react";
import * as C from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

const Shop = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 1 ? 3 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === 3 ? 1 : prev + 1));
  };

  const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
  };
  const clothesData = [
    {
      img: "https://s3.amazonaws.com/img.iluria.com/product/95E901/1817B25/850xN.jpg",
      name: "Anti Social Social Club Cracked",
      price: `$${Math.floor(Math.random() * (50 - 30 + 1)) + 30}`,
      buyLink:
        "https://api.whatsapp.com/send/?phone=%2B5521998220563&text&type=phone_number&app_absent=0",
    },
    {
      img: "https://s3.amazonaws.com/img.iluria.com/product/9554A0/17F657E/450xN.jpg",
      name: "Astroworld Tour - Wish Your Were Here",
      price: `$${Math.floor(Math.random() * (50 - 30 + 1)) + 30}`,
      buyLink:
        "https://api.whatsapp.com/send/?phone=%2B5521998220563&text&type=phone_number&app_absent=0",
    },
    {
      img: "https://s3.amazonaws.com/img.iluria.com/product/94F372/17E3440/850xN.jpg",
      name: "1of1 Exclusiviist Color",
      price: `$${Math.floor(Math.random() * (50 - 30 + 1)) + 30}`,
      buyLink:
        "https://api.whatsapp.com/send/?phone=%2B5521998220563&text&type=phone_number&app_absent=0",
    },
    {
      img: "https://s3.amazonaws.com/img.iluria.com/product/952B61/17EE769/850xN.jpg",
      name: "Nike x Stussy mini",
      price: `$${Math.floor(Math.random() * (50 - 30 + 1)) + 30}`,
      buyLink:
        "https://api.whatsapp.com/send/?phone=%2B5521998220563&text&type=phone_number&app_absent=0",
    },
    {
      img: "https://s3.amazonaws.com/img.iluria.com/product/95E8DE/1817ABE/850xN.jpg",
      name: "Palm Angels Butterfly Summer 2020",
      price: `$${Math.floor(Math.random() * (50 - 30 + 1)) + 30}`,
      buyLink:
        "https://api.whatsapp.com/send/?phone=%2B5521998220563&text&type=phone_number&app_absent=0",
    },
    {
      img: "https://s3.amazonaws.com/img.iluria.com/product/9085C8/16F19B7/850xN.jpg",
      name: "Vlone Plaiboy Carti Green",
      price: `$${Math.floor(Math.random() * (50 - 30 + 1)) + 30}`,
      buyLink:
        "https://api.whatsapp.com/send/?phone=%2B5521998220563&text&type=phone_number&app_absent=0",
    },
    {
      img: "https://s3.amazonaws.com/img.iluria.com/product/9554A5/17F6591/450xN.jpg",
      name: "Nike Hello Kitty",
      price: `$${Math.floor(Math.random() * (50 - 30 + 1)) + 30}`,
      buyLink:
        "https://api.whatsapp.com/send/?phone=%2B5521998220563&text&type=phone_number&app_absent=0",
    },
    {
      img: "https://s3.amazonaws.com/img.iluria.com/product/916E10/1722AA4/850xN.jpg",
      name: "Off-White x Nike Football",
      price: `$${Math.floor(Math.random() * (50 - 30 + 1)) + 30}`,
      buyLink:
        "https://api.whatsapp.com/send/?phone=%2B5521998220563&text&type=phone_number&app_absent=0",
    },
    {
      img: "https://s3.amazonaws.com/img.iluria.com/product/929CA4/1764405/850xN.jpg",
      name: "Cactus Jack x Nike Jordan",
      price: `$${Math.floor(Math.random() * (50 - 30 + 1)) + 30}`,
      buyLink:
        "https://api.whatsapp.com/send/?phone=%2B5521998220563&text&type=phone_number&app_absent=0",
    },
    {
      img: "https://images.stockx.com/360/Nike-Ja-1-Halloween/Images/Nike-Ja-1-Halloween/Lv2/img01.jpg",
      name: "Nike Ja 1 Halloween Zombie",
      price: `$${Math.floor(Math.random() * (50 - 30 + 1)) + 30}`,
      buyLink:
        "https://api.whatsapp.com/send/?phone=%2B5521998220563&text&type=phone_number&app_absent=0",
    },
    {
      img: "https://images.stockx.com/360/Nike-Air-Max-1-Travis-Scott-Baroque-Brown/Images/Nike-Air-Max-1-Travis-Scott-Baroque-Brown/Lv2/img01.jpg",
      name: "Nike Air Max 1 Travis Scott Cactus Jack Baroque Brown",
      price: `$${Math.floor(Math.random() * (50 - 30 + 1)) + 30}`,
      buyLink:
        "https://api.whatsapp.com/send/?phone=%2B5521998220563&text&type=phone_number&app_absent=0",
    },
    {
      img: "https://images.stockx.com/360/Crocs-Classic-Clog-Lightning-McQueen/Images/Crocs-Classic-Clog-Lightning-McQueen/Lv2/img01.jpg",
      name: "Crocs Classic Clog Lightning McQueen",
      price: `$${Math.floor(Math.random() * (50 - 30 + 1)) + 30}`,
      buyLink:
        "https://api.whatsapp.com/send/?phone=%2B5521998220563&text&type=phone_number&app_absent=0",
    },
    {
      img: "https://s3.amazonaws.com/img.iluria.com/product/889518/15678AD/850xN.jpg",
      name: "Moletom Nike Swoosh Double Logo",
      price: `$${Math.floor(Math.random() * (50 - 30 + 1)) + 30}`,
      buyLink:
        "https://api.whatsapp.com/send/?phone=%2B5521998220563&text&type=phone_number&app_absent=0",
    },
    {
      img: "https://s3.amazonaws.com/img.iluria.com/product/8A9465/15C26A4/850xN.jpg",
      name: "Moletom ASSC x Frenzy",
      price: `$${Math.floor(Math.random() * (50 - 30 + 1)) + 30}`,
      buyLink:
        "https://api.whatsapp.com/send/?phone=%2B5521998220563&text&type=phone_number&app_absent=0",
    },
    {
      img: "https://s3.amazonaws.com/img.iluria.com/product/8737E8/152A6E4/450xN.jpg",
      name: "Moletom Stussy x Nike",
      price: `$${Math.floor(Math.random() * (50 - 30 + 1)) + 30}`,
      buyLink:
        "https://api.whatsapp.com/send/?phone=%2B5521998220563&text&type=phone_number&app_absent=0",
    },
  ];

  return (
    <>
      <Header />
      <C.bgShop>
        <C.CarouselContainer>
          <div className="carrousel">
            <div className="slide slide1">
              <h1></h1>
            </div>
            <div className="slide slide2">
              <h1></h1>
            </div>
            <div className="slide slide3">
              <h1></h1>
            </div>
            <div className="left" onClick={handlePrevSlide}>
              <IoIosArrowDropleftCircle />
            </div>
            <div className="right" onClick={handleNextSlide}>
              <IoIosArrowDroprightCircle />
            </div>
          </div>
        </C.CarouselContainer>
        <C.Indicators>
          <div
            className={`indicator ${currentSlide === 1 ? "active" : ""}`}
            onClick={() => handleIndicatorClick(1)}
          ></div>
          <div
            className={`indicator ${currentSlide === 2 ? "active" : ""}`}
            onClick={() => handleIndicatorClick(2)}
          ></div>
          <div
            className={`indicator ${currentSlide === 3 ? "active" : ""}`}
            onClick={() => handleIndicatorClick(3)}
          ></div>
        </C.Indicators>
        <C.ShopContainer>
          <C.destaque>
            {" "}
            <h1>
              Flow de estilo inigualável, chegou o Drop do momento: $TyL
              representando nas ruas, vestindo atitude.
            </h1>
          </C.destaque>

          <C.Shop>
            <div className="store-container">
              {clothesData.map((clothe, index) => (
                <div className="description-clothes" key={index}>
                  <div className="img-clothe-container">
                    <img
                      src={clothe.img}
                      alt={`clothes ${index}`}
                      className="img-clothe"
                    />
                    <hr className="line-clothe-description" />
                    <p>{clothe.name}</p>
                  </div>
                  <div
                    className={`price-buy-container ${
                      clothe.buyLink.includes("whatsapp") ? "no-hover" : ""
                    }`}
                  >
                    <h5>{clothe.price}</h5>
                    <button
                      type="submit"
                      className="buy-button"
                      onClick={() => window.open(clothe.buyLink, "_blank")}
                    >
                      Buy
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </C.Shop>
        </C.ShopContainer>
      </C.bgShop>
      <Footer />
    </>
  );
};

export default Shop;
