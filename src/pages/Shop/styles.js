import styled from "styled-components";

export const bgShop = styled.div`
  background-color: #222327;
`;

export const CarouselContainer = styled.div`
  z-index: 1;
  margin-bottom: -20px;

  .carrousel {
    display: flex;
    width: 100%;
    height: 50vh;
    position: relative;
    overflow: hidden;
  }

  .slide {
    flex: 0 0 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center;
    animation: slide 80s infinite;
  }

  .slide1 {
    background-image: url("https://cdn.discordapp.com/attachments/1051225985443430481/1172246034177593455/tyL.png?ex=655f9e31&is=654d2931&hm=39216e4748942a51e8180e219d35d700b01b86f57156386f379c4f1cc8009bc1&");
  }

  .slide2 {
    background-image: url("https://cdn.discordapp.com/attachments/1051225985443430481/1172246034177593455/tyL.png?ex=655f9e31&is=654d2931&hm=39216e4748942a51e8180e219d35d700b01b86f57156386f379c4f1cc8009bc1&");
  }

  .slide3 {
    background-image: url("https://cdn.discordapp.com/attachments/1051225985443430481/1172246034177593455/tyL.png?ex=655f9e31&is=654d2931&hm=39216e4748942a51e8180e219d35d700b01b86f57156386f379c4f1cc8009bc1&");
  }

  @keyframes slide {
    0% {
      transform: translateX(0%);
    }
    33% {
      transform: translateX(-100%);
    }
    66% {
      transform: translateX(-200%);
    }
  }

  .left,
  .right {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 50px;
    cursor: pointer;
    color: #3ec20a;
    opacity: 1.5;
  }

  .left {
    left: 100px;
  }

  .right {
    right: 100px;
  }
`;

export const Indicators = styled.div`
  display: flex;
  justify-content: center;

  position: relative;
  margin-top: -10px;
  z-index: 2; /* Aumenta o índice z para sobrepor os outros elementos */

  .indicator {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #fff;
    margin: 0 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &.active {
      background-color: #3ec20a;
    }
  }
`;

export const ShopContainer = styled.div`
  position: relative;
  z-index: 0;
`;

export const Shop = styled.div`
  background-color: #222327;
  display: flex;
  justify-content: center;
  padding: 20px;

  .store-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 25px;
  }

  .description-clothes {
    border-radius: 10px;
    background-color: #131212;
    text-align: center;
    display: flex;
    flex-direction: column;
    padding: 15px;
    transition: box-shadow 0.3s ease; 
  
    &:hover {
      box-shadow: 0 0 10px rgba(4, 202, 30, 0.692);
      transform: scale(0.9); 
    }
  }
  .description-clothes:hover .img-clothe {
    transform: scale(0.9); 
  }

    .img-clothe {
      border-radius: 10px;
      margin-top: 6px;
      width: 100%;
      max-width: 100%;
      height: auto;
      object-fit: cover;
    }
    
    p {
      cursor: pointer;
      color: transparent;
      font-size: 20px;
      -webkit-background-clip: text;
      background-clip: none;
      background-image: linear-gradient(
        80deg,
        #f0f0f0,
        #e0e0e0,
        #d0d0d0,
        #c0c0c0,
        #a0a0a0
      );
      background-size: 400%;
      animation: animate 20s linear infinite;
      text-decoration: none;
      margin-top: 6px;
      
    }


    a {
      text-decoration: none;
      color: inherit;
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
    }

    i {
      color: #1b9410;
    }

    h5 {
      width: 100%;
      border-radius: 10px;
      cursor: pointer;
      color: transparent;
      text-transform: uppercase;
      text-decoration: none;
      -webkit-background-clip: text;
      background-clip: none;
      background-image: linear-gradient(
        80deg,
        #48ff00,
        #488d21,
        #4cf771,
        #1b9410,
        #64d816
      );

      background-size: 400%;
      animation: animate 20s linear infinite;
      margin: auto;
      font-size: 25px;
      margin-top: 10px;
    }

    .img-clothe-container {
      margin: 0 10px;
      flex: 1;
    }

    .img-clothe {
      margin-top: 6px;
      width: 100%;
      height: auto;
    }

    button {
      cursor: pointer;
      width: 30%;
      height: 45px;
      background: rgba(4, 202, 30, 0.596);
      border: none;
      outline: none;
      border-radius: 12px;
      box-shadow: 0 0 10px rgba(4, 202, 30, 0.692);
      font-size: 16px;
      color: #fff;
      font-weight: 600;
      margin-top: 10px;
    }

    button:hover {
      background: rgba(4, 202, 30, 0.1);
      box-shadow: 0 0 10px rgba(4, 202, 30, 10);
    }
  }

  @keyframes animate {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 300% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;
export const destaque = styled.div`

background-color: #222327;


h1{
text-align: center;
width: 100%;
border-radius: 10px;
cursor: pointer;
color: transparent;
text-decoration: none;
-webkit-background-clip: text;
background-clip: none;
background-image: linear-gradient(
  80deg,
  #48ff00,
  #488d21,
  #4cf771,
  #1b9410,
  #64d816
);
font-style: italic;
background-size: 400%;
animation: animate 20s linear infinite;
margin: auto;
font-size: 30px;
margin-top: 50px;
}
}
`;
