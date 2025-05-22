import Image from "next/image";
import "./landing-page.css";

export default function Home() {
  return (
    <>
      <header>
        <nav>
          <div className="container">
            <Image
              src="/images/ac-logo-horizontal-brown.png"
              alt="Angela's Cakes"
              width={300}
              height={300}
            />
            <ul>
              <li>
                <a href="#cake-type-section">Cake Types</a>
              </li>
              <li>
                <a href="#benefit-section">Why us?</a>
              </li>
              <li>
                <a href="#footer-section">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <section className="header-section" id="hero-section">
          <div className="container">
            <section>
              <h1>Bring Your Cake Vision to Life</h1>
              <p>
                With our easy, step-by-step customization tools, create a cake
                that’s uniquely yours, crafted to match your vision perfectly.
              </p>
              <section>
                <a href={"/login"}>
                  <button>Get Started</button>
                </a>
              </section>
            </section>
            <div className="image-container">
              <Image
                src="/images/hero-cheesecake-img.png"
                width={500}
                height={500}
                alt=""
              />
            </div>
          </div>
        </section>
        <Image
          width={1000}
          height={1000}
          src="/images/creamy-background-vector.png"
          alt=""
        />
      </header>
      <main>
        <section id="cake-type-section">
          <div className="container">
            <h2>Crafted Cakes for Every Moment</h2>
            <section>
              <div>
                <div className="card">
                  <Image
                    src="/images/cake-type-cheesecake-img.png"
                    width={100}
                    height={100}
                    alt=""
                  />
                  <h3>Cheesecakes</h3>
                </div>
                <p>
                  Elevate your gatherings with a delightful dessert featuring
                  various toppings and crust options.
                </p>
              </div>
              <div>
                <div className="card">
                  <Image
                    src="/images/cake-type-birthday-img.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                  <h3>Birthday Cakes</h3>
                </div>
                <p>
                  Make celebrations unforgettable with custom flavors and
                  decorations.
                </p>
              </div>
              <div>
                <div className="card">
                  <Image
                    src="/images/cake-type-regular-img.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                  <h3>Everyday Cakes</h3>
                </div>
                <p>
                  Add a touch of sweetness to any day with classic flavors and
                  styles.
                </p>
              </div>
              <div>
                <div className="card">
                  <Image
                    src="/images/cake-type-wedding-img.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                  <h3>Wedding Cakes</h3>
                </div>
                <p>
                  Create memories with an elegant wedding cake tailored to your
                  style and flavor preferences.
                </p>
              </div>
            </section>
          </div>
        </section>

        <div>
          <Image
            className="img-vector"
            src="/images/wave-background-vector-up.png"
            alt=""
            width={1000}
            height={1000}
          />
          <section id="benefit-section">
            <div className="container">
              <h2>Why Choose Angela’s Cakes?</h2>
              <section>
                <div>
                  <div>
                    <Image
                      src="/icons/palette.svg"
                      alt=""
                      height="40"
                      width="40"
                    />
                  </div>
                  <div>
                    <h3>Personalized Selections</h3>
                    <p>
                      Customize every detail of your cake – from flavor and
                      filling to style and decoration – so it’s truly unique.
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <Image
                      src="/icons/star.svg"
                      alt=""
                      height="40"
                      width="40"
                    />
                  </div>
                  <div>
                    <h3>Customer-Driven Feedback</h3>
                    <p>
                      Our system links your reviews to your favorite flavors and
                      styles, helping us refine our offerings with each order.
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <Image
                      src="/icons/shopping-bag.svg"
                      alt=""
                      height="40"
                      width="40"
                    />
                  </div>

                  <div>
                    <h3>Effortless Ordering</h3>
                    <p>
                      Enjoy a seamless experience with an intuitive system that
                      lets you design, order, and track your cake effortlessly.
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <Image
                      src="/icons/locate-fixed.svg"
                      alt=""
                      height="40"
                      width="40"
                    />
                  </div>
                  <div>
                    <h3>Comprehensive Tracking</h3>
                    <p>
                      Follow your order from start to finish, knowing exactly
                      when your cake will be ready or delivered.
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <Image
                      src="/icons/timer.svg"
                      alt=""
                      height="40"
                      width="40"
                    />
                  </div>
                  <div>
                    <h3>Timely Delivery</h3>
                    <p>
                      Trust us to deliver your cake on time, ensuring it arrives
                      fresh and perfect for your big moment.
                    </p>
                  </div>
                </div>
              </section>
              <button>Create your order</button>
            </div>
          </section>
          <Image
            className="img-vector"
            src="/images/wave-background-vector-down.png"
            alt=""
            width={1000}
            height={1000}
          />
        </div>
      </main>
      <footer id="footer-section">
        <div className="container">
          <div>
            <Image
              src="/images/ac-logo-horizontal-brown.png"
              width={300}
              height={300}
              alt=""
            />
            <p>
              Crafting cakes that turn moments into memories. Made with love,
              just for you.
            </p>
          </div>
          <section>
            <div>
              <h3>Products</h3>
              <ul>
                <li>
                  <a href="#">Birthday Cakes</a>
                </li>
                <li>
                  <a href="#">Wedding Cakes</a>
                </li>
                <li>
                  <a href="#">Cheesecakes</a>
                </li>
                <li>
                  <a href="#">Custom Cakes</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>About us</h3>
              <ul>
                <li>
                  <a href="#">Our Team</a>
                </li>
                <li>
                  <a href="#">Gallery</a>
                </li>
                <li>
                  <a href="#">Customer Testimonials</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Resources</h3>
              <ul>
                <li>
                  <a href="#">Cake Customization Guide</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Blog & Tips</a>
                </li>
                <li>
                  <a href="#">Terms & Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Get in touch</h3>
              <ul>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Order Assistance</a>
                </li>
                <li>
                  <a href="#">Newsletter Sign-up</a>
                </li>
              </ul>
              <section>
                <ul>
                  <li>
                    <a href="#">
                      <Image
                        src="/icons/facebook_icon.svg"
                        alt=""
                        height="35"
                        width="35"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Image
                        src="/icons/instagram_icon.svg"
                        alt=""
                        height="39"
                        width="39"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Image
                        src="/icons/linkedin_icon.svg"
                        alt=""
                        height="35"
                        width="35"
                      />
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
}
