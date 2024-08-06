import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./scrollMin.css"; // Import your custom styles

const settings = {
  dots: true, // Show dots for navigation
  infinite: true, // Loop through slides
  speed: 1000, // Transition speed
  slidesToShow: 1, // Number of slides to show at once
  slidesToScroll: 1, // Number of slides to scroll at once
  autoplay: true, // Enable autoplay
  autoplaySpeed: 3000, // Time between transitions in ms
  arrows: true, // Show arrows for navigation
};

const Scroll = () => {
  return (
    <div className="outside">
      <div className="adjust">
        <Slider {...settings}>
          <div>
            <img
              src="https://wallpaper.forfun.com/fetch/0c/0cbfb3fa071b15330956efbb16e1b5d8.jpeg?w=600&r=0.5625"
              alt="Slide 1"
            />
          </div>
          <div>
            <img
              src="https://wallpaper.forfun.com/fetch/68/6874a45635e0392c790156c398071255.jpeg?w=1470&r=0.5625"
              alt="Slide 2"
            />
          </div>
          <div>
            <img
              src="https://wallpaper.forfun.com/fetch/85/858b5395c522b3bb3676a0615086066c.jpeg?w=1470&r=0.5625"
              alt="Slide 3"
            />
          </div>
          <div>
            <img
              src="https://wallpaper.forfun.com/fetch/82/822b35475c0a850ad8426a8f6cf9e1ad.jpeg?w=1470&r=0.5625"
              alt="Slide 4"
            />
          </div>
          <div>
            <img
              src="https://wallpaper.forfun.com/fetch/ce/ce23727745902ded87016f68ed51f7c1.jpeg?w=800&r=0.5625"
              alt="Slide 5"
            />
          </div>
          <div>
            <img
              src="https://wallpaper.forfun.com/fetch/4e/4ee38dfacebb935936d84d0e059f6ac1.jpeg?w=800&r=0.5625"
              alt="Slide 6"
            />
          </div>
        </Slider>
      </div>
      {/* Grid Component  */}
      <section className="section">
        <div className="cards">
          <a href="#" className="card card-1">
            <figure className="visual">
              <img
                className="card-img"
                src="https://wallpaper.forfun.com/fetch/8c/8c53ff0e675ff83e3aacf5de6c9644ab.jpeg?w=1470&r=0.5625"
                alt="Person with a game controller in hand"
              />
              <figcaption className="figcaption">Early Access</figcaption>
            </figure>
          </a>
          <a href="#" className="card card-2">
            <figure className="visual">
              <img
                className="card-img"
                src="https://wallpaper.forfun.com/fetch/d5/d5ecf14dc95ad17ba6ca98f59cc21a0c.jpeg?w=1470&r=0.5625"
                alt="Person with curly hair in neon lighting"
              />
              <figcaption className="figcaption">Top Sellers</figcaption>
            </figure>
          </a>
          <a href="#" className="card card-3">
            <figure className="visual">
              <img
                className="card-img"
                src="https://wallpaper.forfun.com/fetch/02/02cf655786879a2b8296a953c03d6471.jpeg?w=800&r=0.5625"
                alt="Person in vibrant neon lighting with abstract shapes"
              />
              <figcaption className="figcaption">New Releases</figcaption>
            </figure>
          </a>
          <a href="#" className="card card-4">
            <figure className="visual">
              <img
                className="card-img"
                src="https://wallpaper.forfun.com/fetch/cf/cf69e41b92b9b186c63ec92bfd6ec9e8.jpeg?w=1470&r=0.5625"
                alt="Person wearing a virtual reality headset in a blue-lit room"
              />
              <figcaption className="figcaption">Upcoming</figcaption>
            </figure>
          </a>
          <a href="#" className="card card-1">
            <figure className="visual">
              <img
                className="card-img"
                src="https://wallpaper.forfun.com/fetch/ba/baffb0cf3f3efb3289dbabfd3de6cf3f.jpeg"
                alt="Person in vibrant neon lighting with abstract shapes"
              />
              <figcaption className="figcaption">Most Viewed</figcaption>
            </figure>
          </a>
          <a href="#" className="card card-2">
            <figure className="visual">
              <img
                className="card-img"
                src="https://wallpaper.forfun.com/fetch/e3/e353f56587e241b7f28bef47202920fe.jpeg?w=800&r=0.5625"
                alt="Person in vibrant neon lighting with abstract shapes"
              />
              <figcaption className="figcaption">BestSellers</figcaption>
            </figure>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Scroll;
