import { Link } from "react-router-dom";
import Smartphone from "../../assets/banners/smartphone.png";
import arrow_forward from "../../assets/icons/arrow_forward.png";
import dollar from "../../assets/icons/dollar.png";
import cart from "../../assets/icons/cart.png";
import favorite from "../../assets/icons/favorite.png";
import visibility from "../../assets/icons/visibility.png";

// Define a React functional component named StoreOverview
function StoreOverview() {
  return (
    <section>
      {/* Section for completing KYC (Know Your Customer) */}
      <section className="section flex items-center justify-between gap-30 bg-custom-blue text-white text-center lg:pt-2 lg:px-8 pt-2 px-2">
        <img
          src={Smartphone}
          alt="Phone-Security-image"
          className="security lg:w-40 lg:h-30 w-10 h-10"
        />
        {/* Title for completing KYC */}
        <section className="flex ">
          <h2 className="KYC ">
            <span className="span lg:text-2xl text-xs font-bold">Complete KYC</span>
            <br></br>{" "}
            <span className="span lg:text-2xl text-xs">
              To ensure security of your store
            </span>
          </h2>
        </section>
        <img src={arrow_forward} alt="arrow_forward" className="arrow" />
      </section>

        {/* Overview section */}
      <h2 className="overview text-start mt-10 lg:text-2xl text-lg font-semibold">
        Overview
      </h2>

      {/* Grid items for displaying store overview data */}
      <section className="grid lg:grid-cols-2 grid-cols-2 lg:gap-6 gap-2">
        <div className="overview-grid-item border lg:pt-10 pt-4 lg:pb-10 pb-4 p-5 mt-8 bg-light-green">
          <img
            src={dollar}
            alt="dollar-image"
            className="dollar lg:w-10 lg:h-10 w-8 h-8 mb-2"
          />
          <p className="p text-start lg:text-2xl text-lg mb-8">Total income</p>
          <h3 className="h3 text-start lg:text-4xl text-xl font-semibold">0</h3>
        </div>

        <div className="overview-grid-item border lg:pt-10 pt-4 lg:pb-10 pb-4 p-5 mt-8 bg-light-green">
          <img src={cart} alt="cart-image" className="cart lg:w-10 lg:h-10 w-8 h-8 mb-2" />
          <p className="p text-start lg:text-2xl text-lg mb-8">Total order</p>
          <h3 className="h3 text-start lg:text-4xl text-xl font-semibold">0</h3>
        </div>

        <div className="overview-grid-item border lg:pt-10 pt-4 lg:pb-10 pb-4 p-5 bg-light-green">
          <img
            src={favorite}
            alt="favorite-image"
            className="favorite lg:w-10 lg:h-10 w-8 h-8 mb-2"
          />
          <p className="p text-start lg:text-2xl text-lg mb-8">Impressions</p>
          <h3 className="h3 text-start lg:text-4xl text-xl font-semibold">0</h3>
        </div>

        <div className="overview-grid-item border lg:pt-10 pt-4 lg:pb-10 pb-4 p-5 bg-light-green">
          <img
            src={visibility}
            alt="visibility-image"
            className="visibility lg:w-10 lg:h-10 w-8 h-8 mb-2"
          />
          <p className="text-start lg:text-2xl text-lg mb-8">Most ordered meal</p>
          <h3 className="h3 text-start lg:text-4xl text-xl font-semibold">-</h3>
        </div>
      </section>

      {/* Recent orders section */}
      <h2 className="recent-orders text-start lg:mt-10 mt-10 lg:text-2xl text-lg font-semibold">
        Recent orders
      </h2>

      {/* Message for when there are no sales records */}
      <section className="orders-section text-center lg:mt-10 mt-2">
        <p className="mb-8 lg:text-2xl text-xl">You have no sales record yet.</p>

        {/* Button to navigate to the store performance page to start selling */}
        <Link
          to="/store-performance/details"
          className="button text-black lg:text-2xl text-xl border bg-custom-green lg:px-12 px-8 py-2"
        >
          Start selling
        </Link>
      </section>

      {/* Top meals section */}
      <h2 className="top-meals text-start lg:mt-10 mt-10 mb-6 lg:text-2xl text-lg font-semibold">
        Top meals in your store
      </h2>
      <section className="top-meals-section mt-4 lg:text-2xl text-xl">
        <p>
          Your bestsellers would appear <br></br> here once you start selling.
        </p>
      </section>
    </section>
  );
}

export default StoreOverview;
