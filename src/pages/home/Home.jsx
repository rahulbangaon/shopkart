import Header from "../../components/header/Header";
import "./style.css";
import Star2 from "../../assets/Star2.svg";
import { useEffect, useState } from "react";
import { getProductCategories, getProducts } from "../../utils/api";
import Product from "../../components/product/Product";

// carousel packages
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// long arrows for carousel
import leftLongArrow from "../../assets/leftLongArrow.svg";
import rightLongArrow from "../../assets/rightLongArrow.svg";
import Footer from "../../components/footer/Footer";

const Home = () => {
  const [productCategories, setProductCategories] = useState([]);

  const [products, setProducts] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [activeCategory, setActiveCategory] = useState("");

  const getCategories = async () => {
    const res = await getProductCategories();
    setProductCategories(res?.data);
    setActiveCategory(res?.data[0]);
  };

  const getProductsData = async () => {
    const res = await getProducts();
    setProducts(res?.data);
  };

  useEffect(() => {
    getCategories();
    getProductsData();
  }, []);

  useEffect(() => {
    filterData(activeCategory);
  }, [activeCategory, products]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
  };

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="carousel-button-group arrows-container">
        <button className="arrow-button" onClick={() => previous()}>
          <img src={leftLongArrow} alt="" />
        </button>
        <button className="arrow-button" onClick={() => next()}>
          <img src={rightLongArrow} alt="" />
        </button>
      </div>
    );
  };

  const filterData = (category) => {
    category = category.toLowerCase();
    const filteredData = products.filter((product) => {
      return product.category === category;
    });
    setFilteredProducts(filteredData);
  };

  return (
    <>
      <Header />
      {/* ---- product section ---- */}
      <section className="product-section">
        {/* title */}
        <h1 className="products-title fs-600 ff-syne">
          New products
          <img src={Star2} className="star2" />
        </h1>
          {/* product categories */}
          <ul className="product-categories">
            {productCategories.map((category, index) => {
              return (
                <li
                  key={index}
                  className={`category 
                  ${
                    category == activeCategory.toLowerCase()
                      ? "ff-syne fs-400"
                      : "ff-work-sans fs-300"
                  }`}
                  onClick={(e) => setActiveCategory(e.target.innerText)}
                >
                  {category}
                </li>
              );
            })}
          </ul>
          {/* products */}
          <Carousel
          className="carousel"
            partialVisbile={true}
            responsive={responsive}
            infinite={true}
            customButtonGroup={<ButtonGroup />}
            renderButtonGroupOutside={true}
            arrows={false}
          >
            {filteredProducts.map((product) => {
              return <Product key={product?.id} {...product} />;
            })}
          </Carousel>
      </section>
      <Footer/>
    </>
  );
};

export default Home;
