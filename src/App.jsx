import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function Header() {
  return (
    <header className="d-flex justify-content-between mt-3">
      <a
        href=""
        className="text-decoration-none text-dark d-flex align-items-center"
      >
        <img src="../src/Attachments/images/logo.svg" alt="" />
      </a>

      <nav className="w-50">
        <ul className="list-style-type-none d-flex justify-content-around">
          <li>
            <a href="" className="text-decoration-none text-dark">
              {" "}
              Home
            </a>
          </li>
          <li>
            <a href="" className="text-decoration-none text-dark">
              {" "}
              Recipes
            </a>
          </li>
          <li>
            <a href="" className="text-decoration-none text-dark">
              {" "}
              Blog
            </a>
          </li>
          <li>
            <a href="" className="text-decoration-none text-dark">
              {" "}
              Contact
            </a>
          </li>
          <li>
            <a href="" className="text-decoration-none text-dark">
              {" "}
              About us
            </a>
          </li>
        </ul>
      </nav>

      <div className="d-flex">
        <button className="btn border-0 ">
          <img
            src="../src/Attachments/images/icon-fb.svg"
            alt=""
            width="30"
            height={"20px"}
          />
        </button>

        <button className="btn border-0 ">
          <img
            src="../src/Attachments/images/icon-ins.svg"
            alt=""
            width="30"
            height={"20px"}
          />
        </button>

        <button className="btn border-0 ">
          <img
            src="../src/Attachments/images/icon-tw.svg"
            alt=""
            width="30"
            height={"20px"}
          />
        </button>
      </div>
    </header>
  );
}

function Article1() {
  return (
    <article className="mt-4">
      <div className="row">
        <div className="col-6 d-flex flex-column justify-content-center px-4">
          <h1 className="w-90">Everyone can be a chef in their own kitchen</h1>
          <p className="w-90">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad
            minim{" "}
          </p>
          <button className="btn text-bg-dark text-light w-25 mt-4">
            Learn More
          </button>
        </div>
        <div className="col-6">
          <img
            src="../src/Attachments/images/chef-1.png"
            alt=""
            width={"100%"}
            height={"100%"}
          />
        </div>
      </div>
      <h1 className="text-center mt-5">Simple and tasty recipes</h1>
      <p className="text-center text-black-50 mb-5">
        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
        tempor incididunt ut labore et <br /> dolore magna aliqut enim ad
        minim{" "}
      </p>
    </article>
  );
}

function Main() {
  return (
    <main>
      <from
        id="from-search"
        className="d-flex justify-content-between align-items-center mt-5 btn  p-2 outline-none border-2 border-dimgray"
      >
        <input
          type="text"
          className="btn outline-none text-dark border-0"
          placeholder="Search article, news or recipe..."
        />
        <button className="btn text-bg-dark text-light w-25">Search</button>
      </from>

      <div className="row mt-5">
        <div className="col-8">
          <div className="row">
            <div className="col-4 mt-3 d-flex align-items-center">
              <img
                src="../src/Attachments/images/product-1.png"
                alt=""
                width={"250px"}
                height={"200px"}
              />
            </div>

            <div className="col-8 d-flex flex-column justify-content-center">
              <h4>Crochet Projects for Noodle Lovers</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqut
                enim{" "}
              </p>
              <div className="d-flex">
                <img src="" alt="" />
                <p>Wade Warren</p>
                <div>12 November 2021</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4 mt-3 d-flex align-items-center">
              <img
                src="../src/Attachments/images/product-2.png"
                alt=""
                width={"250px"}
                height={"200px"}
              />
            </div>

            <div className="col-8 d-flex flex-column justify-content-center">
              <h4>10 Vegetarian Recipes To Eat This Month</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqut
                enim{" "}
              </p>
              <div className="d-flex">
                <img src="" alt="" />
                <p>Robert Fox</p>
                <div>12 November 2021</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4 mt-3 d-flex align-items-center">
              <img
                src="../src/Attachments/images/product-3.png"
                alt=""
                width={"250px"}
                height={"200px"}
              />
            </div>

            <div className="col-8 d-flex flex-column justify-content-center">
              <h4>Pork and Chive Chinese Dumplings</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqut
                enim{" "}
              </p>
              <div className="d-flex">
                <img src="" alt="" />
                <p>Dianne Russell</p>
                <div>12 November 2021</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4 mt-3 d-flex align-items-center">
              <img
                src="../src/Attachments/images/product-4.png"
                alt=""
                width={"250px"}
                height={"200px"}
              />
            </div>

            <div className="col-8 d-flex flex-column justify-content-center">
              <h4>Simple & Delicious Vegetarian Lasagna</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqut
                enim{" "}
              </p>
              <div className="d-flex">
                <img src="" alt="" />
                <p>Leslie Alexander</p>
                <div>12 November 2021</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4 mt-3 d-flex align-items-center">
              <img
                src="../src/Attachments/images/product-5.png"
                alt=""
                width={"250px"}
                height={"200px"}
              />
            </div>

            <div className="col-8 d-flex flex-column justify-content-center">
              <h4>Plantain and Pinto Stew with Aji Verde</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqut enim
              </p>
              <div className="d-flex">
                <img src="" alt="" />
                <p>Courtney Henry</p>
                <div>12 November 2021</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4 mt-3 d-flex align-items-center">
              <img
                src="../src/Attachments/images/product-6.png"
                alt=""
                width={"250px"}
                height={"200px"}
              />
            </div>
            <div className="col-8 d-flex flex-column justify-content-center">
              <h4>We’re Hiring a Communications Assistant!</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqut
                enim{" "}
              </p>
              <div className="d-flex">
                <img src="" alt="" />
                <p>Albert Flores</p>
                <div>12 November 2021</div>
              </div>
            </div>
          </div>
          <div className="w-100 mt-5 d-flex justify-content-center">
            <button className="btn text-bg-dark border-2 text-light w-25 ">
              Read more
            </button>
          </div>
        </div>
        <div className="col-4">
          <h3 className="text-center">Tasty Recipes</h3>
          <div className="row">
            <div className="col-4 mt-3 d-flex align-items-center">
              <img
                src="../src/Attachments/images/tasty-1.png"
                alt=""
                width={"100px"}
                height={"80px"}
              />
            </div>
            <div className="col-8 d-flex flex-column justify-content-center">
              <h4>Chicken Meatballs with Cream Cheese </h4>
              <p>By Andreas Paula</p>
            </div>
          </div>
          <div className="row">
            <div className="col-4 mt-3 d-flex align-items-center">
              <img
                src="../src/Attachments/images/tasty-2.png"
                alt=""
                width={"100px"}
                height={"80px"}
              />
            </div>
            <div className="col-8 d-flex flex-column justify-content-center">
              <h4>Traditional Bolognaise Ragu</h4>
              <p>By Andreas Paula</p>
            </div>
          </div>
          <div className="row">
            <div className="col-4 mt-3 d-flex align-items-center">
              <img
                src="../src/Attachments/images/tasty-3.png"
                alt=""
                width={"100px"}
                height={"80px"}
              />
            </div>
            <div className="col-8 d-flex flex-column justify-content-center">
              <h4>Pork and Chive Chinese Dumplings</h4>
              <p>By Andreas Paula</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function Article2() {
  return (
    <article className="p-3">
      <div className="row from-article p-3">
        <div className="col-6 p-5 d-flex flex-column justify-content-center">
          <form action="">
            <h2>Deliciousness to your inbox</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </p>

            <div className="d-flex mt-5 btn border-2 border-light justify-content-between column-gap-3 text-bg-light">
              <input
                type="text"
                placeholder="Your email address..."
                className="border-0 outline-none btn text-bg-light w-75"
              />
              <button className="btn text-bg-dark text-light w-25">
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="col-6">
          <img
            src="../src/Attachments/images/salad-1.png"
            alt=""
            width={"100%"}
          />
        </div>
      </div>
    </article>
  );
}

function Footer() {
  return (
    <footer className=" mb-5">
      <div className="justify-content-between d-flex">
        <div>
          <h2>Foodieland.</h2>
          <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, </p>
        </div>
        <nav className="w-50 d-flex align-align-items-center w-">
          <ul className="list-style-type-none d-flex justify-content-around align-items-center w-100">
            <li>
              <a href="" className="text-decoration-none text-dark">
                {" "}
                Recipes
              </a>
            </li>
            <li>
              <a href="" className="text-decoration-none text-dark">
                {" "}
                Blog
              </a>
            </li>
            <li>
              <a href="" className="text-decoration-none text-dark">
                {" "}
                Contact
              </a>
            </li>
            <li>
              <a href="" className="text-decoration-none text-dark">
                {" "}
                About us
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <hr className="mt-5 mb-5" />

      <div className="d-flex justify-content-end ">
        <div className=" mt-5 d-flex justify-content-between align-items-center w-75">
          <p className="d-flex align-content-center">
            <span style={{ color: "red" }}>© 2026 Flowbase</span>. Powered by
            Webflow
          </p>

          <div className="d-flex">
            <button className="btn border-0 ">
              <img
                src="../src/Attachments/images/icon-fb.svg"
                alt=""
                width="30"
                height={"20px"}
              />
            </button>

            <button className="btn border-0 ">
              <img
                src="../src/Attachments/images/icon-ins.svg"
                alt=""
                width="30"
                height={"20px"}
              />
            </button>

            <button className="btn border-0 ">
              <img
                src="../src/Attachments/images/icon-tw.svg"
                alt=""
                width="30"
                height={"20px"}
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
function App() {
  return (
    <div className="container">
      <Header></Header>
      <Article1></Article1>
      <Main></Main>
      <Article2></Article2>
      <Footer></Footer>
    </div>
  );
}

export default App;
