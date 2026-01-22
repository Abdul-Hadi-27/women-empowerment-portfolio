import logo from "./images/logo.png";
import hero from "./images/hero.webp";
import work from "./images/work.png";
import gallery1 from "./images/gallery1.png";
import gallery2 from "./images/gallery2.png";
import gallery3 from "./images/allery3.png";
import gallery4 from "./images/gallery4.png";
import gallery5 from "./images/gallery5.png";
import gallery6 from "./images/gallery6.jpg";
import grid1 from "./images/grid1.png";
import grid2 from "./images/grid2.png";
import user from "./images/user.jpeg";
import footerlogo from "./images/footerlogo.png";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";

const App = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <>
      {/* Page 1 */}
      {/* top nav blue bar */}
      <div className="top">
        <div className="top-left">
          <h4>Follow us:</h4>
          <span>
            {" "}
            <i class="ri-facebook-line"></i>
          </span>
          <span>
            {" "}
            <i class="ri-linkedin-line"></i>
          </span>
          <span>
            {" "}
            <i class="ri-twitter-line"></i>
          </span>
          <span>
            <i class="ri-instagram-line"></i>
          </span>
        </div>
        <div className="top-right">
          <span>
            <i class="ri-phone-fill"></i>+91 987654321
          </span>
          <span>
            <i class="ri-mail-line"></i> adbd@gmail.com
          </span>
          <span>
            <i class="ri-map-pin-2-line"></i>Location
          </span>
        </div>
      </div>
      {/* main nav bar */}
      <div className="main-nav">
        <div className="left-nav">
          <img src={logo} alt="" className="logoImg" />
        </div>
        <div className="center-nav">
          <a href="#">Home</a>
          <a href="#">AboutUs</a>
          <a href="#">StoriesChange</a>
          <a href="#">Volunteers</a>
        </div>
        <div className="right-nav">
          <button>
            <span>
              <i className="ri-phone-fill"></i>ContactUs
            </span>
          </button>

         <div className="nav-burger">
  <h4
    className="menu-btn"
    onClick={() => setisOpen(prev => !prev)}
  >
    <i className="ri-menu-line"></i>
  </h4>

  {isOpen && (
    <div className="icons">
      <p>Home</p>
      <p>AboutUs</p>
      <p>StoriesChange</p>
      <p>Volunteers</p>

    </div>
  )}
</div>
        </div>
      </div>
     <div className={`contact ${isOpen ? "contact-shift" : ""}`}>
  <button>
    <span>
      <i className="ri-phone-fill"></i>ContactUs
    </span>
  </button>
</div>

      {/* container */}
      <div className="container">
        <div className="card">
          <img src={hero} alt="" className="cardImg" />
          <div className="cardContainer">
            <h6>WELCOME TO WOMEN FLY</h6>
            <h1>
              EMPOWER HER CHANGE <br />
              THE WORLD
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt,
              ipsa.
            </p>
          </div>
          <div className="box">
            <div className="hero">
              <h3>Every Life Matters</h3>
              <p>
                Join us in our mission to uplift, educate, and inspire — because
                when women fly, humanity rises.
              </p>
              <p>“Where there is woman, there is magic.” — Ntozake Shange</p>
              <div className="btn">Get In Touch</div>
            </div>
          </div>
        </div>
      </div>

      {/* Page 2 */}
      <div className="page2">
        <div className="wrapper">
          <div className="wrapper-box">
            <img src={work} alt="" />
            <div className="work">
              <div className="work-box">
                <i class="ri-medal-line"></i>
                <p>
                  15+ years of <br /> experience
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="page2right">
          <h4>
            <span>//</span>ABOUT US
          </h4>
          <h1>
            Every Women <br /> Deserves A Voice
          </h1>
          <p className="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
            molestias animi voluptatem voluptatum est? Sunt nesciunt vel a
            voluptates at fugit? Atque odit nesciunt, sequi sint et enim
            similique ad nemo, aut fuga, culpa illum consequatur ipsum nostrum?
            Iste vel, fugiat sint ea ut fuga consectetur! Dignissimos, vero
            quas? Rem?
          </p>

          <div>
            Lorem ipsum dolor sit <br />
            Lorem ipsum dolor sit
          </div>

          <p>join our 5000+ lorem ipsum</p>

          <div className="readBtn">Read More</div>
        </div>
      </div>

      {/* certificate */}
      <div className="certificate">
        <h1>Certificate of Appreciation Honoring Women’s Empowerment</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Fames mauris accumsan netus
          turpis. Odio placerat maecenas amet viverra at dignissim est porttitor
          donec. Erat <br />
          accumsan molestie pellentesque sed eu pharetra eget dui amet.
        </p>
        <button className="certified">Get Certified</button>
        <div className="gradient"></div>
      </div>

      {/* page 3 */}
      <div className="gallery">
        <div className="media">
          <p>// Social Media //</p>
          <h2>
            From <span>Instagram</span> Gallery
          </h2>
          <div className="image-wrapper">
            <div className="box1">
              <img src={gallery1} alt="" />
            </div>
            <div className="box2">
              <img src={gallery2} alt="" />
            </div>
            <div className="box3">
              <img src={gallery3} alt="" />
            </div>
            <div className="box4">
              <img src={gallery4} alt="" />
            </div>
            <div className="box5">
              <img src={gallery5} alt="" />
            </div>
            <div className="box6">
              <img src={gallery6} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* page4 */}
      <div className="page4">
        <div className="testimonial">
          <div className="test">
            <p>TESTIMONIALS</p>
            <h1>What People Say About Us</h1>
          </div>
          <div className="review">
            <div className="review-box">
              <p>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i> <span>4.6</span>
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste,
                molestias autem! Iste repellat odit neque debitis itaque
                laboriosam vero sed! Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Omnis libero quibusdam, quidem inventore
                aliquid laudantium blanditiis perspiciatis ducimus qui dicta.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
                perferendis nulla temporibus ipsum reiciendis cumque corporis
                non, earum eaque quae?
              </p>
              <div className="profile">
                <div className="circle">
                  <img src={user} alt="" />
                </div>
                <div>
                  <h2>Akram Singh</h2>
                  <small>Donner</small>
                </div>
              </div>
            </div>
            <div className="review-box">
              <p>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i> <span>4.6</span>
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste,
                molestias autem! Iste repellat odit neque debitis itaque
                laboriosam vero sed! Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Omnis libero quibusdam, quidem inventore
                aliquid laudantium blanditiis perspiciatis ducimus qui dicta.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
                perferendis nulla temporibus ipsum reiciendis cumque corporis
                non, earum eaque quae?
              </p>
              <div className="profile">
                <div className="circle">
                  <img src={user} alt="" />
                </div>
                <div>
                  <h2>Akram Singh</h2>
                  <small>Donner</small>
                </div>
              </div>
            </div>
            <div className="review-box">
              <p>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i> <span>4.6</span>
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste,
                molestias autem! Iste repellat odit neque debitis itaque
                laboriosam vero sed! Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Omnis libero quibusdam, quidem inventore
                aliquid laudantium blanditiis perspiciatis ducimus qui dicta.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
                perferendis nulla temporibus ipsum reiciendis cumque corporis
                non, earum eaque quae?
              </p>
              <div className="profile">
                <div className="circle">
                  <img src={user} alt="" />
                </div>
                <div>
                  <h2>Akram Singh</h2>
                  <small>Donner</small>
                </div>
              </div>
            </div>
            <div className="review-box">
              <p>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i> <span>4.6</span>
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste,
                molestias autem! Iste repellat odit neque debitis itaque
                laboriosam vero sed! Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Omnis libero quibusdam, quidem inventore
                aliquid laudantium blanditiis perspiciatis ducimus qui dicta.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
                perferendis nulla temporibus ipsum reiciendis cumque corporis
                non, earum eaque quae?
              </p>
              <div className="profile">
                <div className="circle">
                  <img src={user} alt="" />
                </div>
                <div>
                  <h2>Akram Singh</h2>
                  <small>Donner</small>
                </div>
              </div>
            </div>
            <div className="review-box">
              <p>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i> <span>4.6</span>
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste,
                molestias autem! Iste repellat odit neque debitis itaque
                laboriosam vero sed! Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Omnis libero quibusdam, quidem inventore
                aliquid laudantium blanditiis perspiciatis ducimus qui dicta.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
                perferendis nulla temporibus ipsum reiciendis cumque corporis
                non, earum eaque quae?
              </p>
              <div className="profile">
                <div className="circle">
                  <img src={user} alt="" />
                </div>
                <div>
                  <h2>Akram Singh</h2>
                  <small>Donner</small>
                </div>
              </div>
            </div>
            <div className="review-box">
              <p>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i> <span>4.6</span>
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste,
                molestias autem! Iste repellat odit neque debitis itaque
                laboriosam vero sed! Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Omnis libero quibusdam, quidem inventore
                aliquid laudantium blanditiis perspiciatis ducimus qui dicta.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
                perferendis nulla temporibus ipsum reiciendis cumque corporis
                non, earum eaque quae?
              </p>
              <div className="profile">
                <div className="circle">
                  <img src={user} alt="" />
                </div>
                <div>
                  <h2>Akram Singh</h2>
                  <small>Donner</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* page 5 */}
      <div className="map-wrapper">
        <div className="contact-box">
          <div className="map-box">
            <MapContainer
              center={[10.9777, 76.2837]}
              zoom={10}
              scrollWheelZoom={false}
              className="map"
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[10.9777, 76.2837]}>
                <Popup>Malappuram</Popup>
              </Marker>
            </MapContainer>
          </div>

          <div className="form-box">
            <p className="sub-title">// Contact US //</p>
            <h1 className="main-title">
              Get In <span className="blue-text">Touch</span>
            </h1>

            <input placeholder="Your Name" className="input" />
            <input placeholder="Phone Number" className="input" />
            <textarea
              placeholder="Your Message"
              className="textarea"
            ></textarea>

            <button
              className="map-btn"
              onClick={() => window.location.reload()}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
      <div className="page6">
        <div className="grid1">
          <img src={grid1} alt="" />
        </div>
        <div className="grid2">
          <h4>
            <span>//</span>SUBSCRIBE <span>//</span>
          </h4>
          <h2>
            New Things Will <br className="break" /> Always Update <br className="break" /> Regularly
          </h2>
          <div className="email-box">
            <i class="ri-mail-fill"></i>{" "}
            <input type="email" placeholder="Enter Your Email" />{" "}
            <button>Subscribe</button>
          </div>
        </div>
        <div className="grid3">
          <img src={grid2} alt="" />
        </div>
      </div>
      {/* footer */}
      <div className="footer">
        <div className="footer-wrapper">
        <div className="footer1">
          <img src={footerlogo} alt="" />
          <p>
            A grassroots non-profit initiative dedicated to transforming the
            lives of women and girls through empowerment, education, healthcare,
            legal awareness, and livelihood support.
          </p>
        </div>
        <div className="footer2">
        <div className="explore">
            <div className="links-head">Explore</div>
          <div className="links">
            <a href="#">Home</a>
            <a href="#founder">Founder Stories</a>
            <a href="#about">About</a>
            <a href="#media">Media &Updates</a>
          </div>
        </div>
        </div>
        <div className="footer3">
          <div className="links-head">Links</div>
          <div className="links">
            <a href="#donations">Donations</a>
            <a href="#fs">Founder Stories</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms &Conditions</a>
          </div>
        </div>
        <div className="footer4">
          <div className="links-head">Contact</div>
          <div className="links">
            <h4>
              40/1,NS Road , Rishra, <br />
              Hooghly
            </h4>
            <h4>support@support.com</h4>
            <h4>+91 9876543210</h4>
          </div>
        </div>
        </div>
      </div>

    </>
  );
};

export default App;
