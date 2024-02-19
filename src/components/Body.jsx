import React, { useState, useEffect } from "react";
import "../index.css";
import ReactPaginate from "react-paginate";
import data from "../data.json";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../store/reducers/productsSlice";
import { setSearchQuery } from "../store/reducers/searchSlice";

const Body = () => {
  // Redux hooks
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const searchQuery = useSelector((state) => state.search.searchQuery);

  
  const [pageNumber, setPageNumber] = useState(0);


  useEffect(() => {
    dispatch(setProducts(data));
  }, [dispatch]);

 
  const handleSearch = (event) => {
    dispatch(setSearchQuery(event.target.value));
    setPageNumber(0);
  };

  //Brand Filter
  const filterBrand = (category) => {
    const filteredData = data.filter((item) => item.category === category);
    setProducts(filteredData.slice(0, productsPerPage));
    setPageNumber(0);
  };

  //Price Filter
  const filterPrice = (price) => {
    const filteredData = data.filter((item) => item.price === price);
    setProducts(filteredData.slice(0, productsPerPage));
    setPageNumber(0);
  };

  // Pagination
  const productsPerPage = 4;
  const pagesVisited = pageNumber * productsPerPage;
  const pageCount = Math.ceil(products.length / productsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // Filtered products
  const filteredProducts = products.filter((item) =>
    item.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Display products
  const displayProducts = filteredProducts
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((item, index) => (
      <div
        key={index}
        className="border shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transition duration-300 bg-white bg-opacity-50 backdrop-blur-lg"
      >
        <img
          src={item.image}
          alt={item.productName}
          className="w-full h-[300px] object-cover rounded-t-lg "
        />
        <div className="p-4">
          <h1 className="text-xl font-semibold text-gray-800 mb-2">
            {item.productName}
          </h1>
          <p className="text-lg text-gray-600 mb-2">{item.description}</p>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xl font-semibold text-green-600">
                {item.price}
              </p>
              <p className="text-lg text-gray-700">Quantity: {item.quantity}</p>
            </div>
            <div className="flex space-x-4">
              <button className="bg-green-500 text-white rounded-full px-4 py-1 hover:bg-white hover:text-green-500 border border-green-500 transition duration-300">
                Edit
              </button>
              <button className="bg-red-500 text-white rounded-full px-4 py-1 hover:bg-white hover:text-red-500 border border-red-500 transition duration-300">
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    ));

  // Render no results message
  const renderNoResultsMessage = () => {
    if (filteredProducts.length === 0 && searchQuery !== "") {
      return (
        <p className="text-center text-black mt-4">
          No products found for "{searchQuery}".
        </p>
      );
    }
    return null;
  };

  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12 bg-gradient-to-b from-gray-500 via-gray-200 to-white">
      <h1 className="font-bold text-4xl text-center ml-2 mb-10">Products</h1>
      <div className="flex justify-center items-center mb-8">
        <div className="bg-white p-4 rounded-full flex items-center w-[200px] sm:w[300px] lg:w-[400px]">
          <IoSearch size={30} className="mr-3" />
          <input
            placeholder="Search Here... "
            className="bg-transparent p-2 focus:outline-none w-full text-black"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between">
        <div>
          <p className="font-bold text-gray-700 flex justify-center items-center m-3 text-xl">
            Brand
          </p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setProducts(data)}
              className="m-1 rounded-xl px-5 py-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              All
            </button>
            <button
              onClick={() => filterBrand("nike")}
              className="m-1 rounded-xl px-5 py-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Nike
            </button>
            <button
              onClick={() => filterBrand("adidas")}
              className="m-1 rounded-xl px-5 py-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Adidas
            </button>
            <button
              onClick={() => filterBrand("nb")}
              className="m-1 rounded-xl px-5 py-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              New Balance
            </button>
            <button
              onClick={() => filterBrand("puma")}
              className="m-1 rounded-xl px-5 py-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Puma
            </button>
          </div>
        </div>
        <div>
          <p className="font-bold text-gray-700 flex justify-center items-center m-3 text-xl">
            Price
          </p>
          <div className="flex justify-between ">
            <button
              onClick={() => filterPrice("$20")}
              className="m-1 rounded-xl px-5 py-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $20
            </button>
            <button
              onClick={() => filterPrice("$30")}
              className="m-1 rounded-xl px-5 py-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $30
            </button>
            <button
              onClick={() => filterPrice("$40")}
              className="m-1 rounded-xl px-5 py-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $40
            </button>
            <button
              onClick={() => filterPrice("$50")}
              className="m-1 rounded-xl px-5 py-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $50
            </button>
            <button
              onClick={() => filterPrice("$60")}
              className="m-1 rounded-xl px-5 py-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $60
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {displayProducts}
      </div>
      {renderNoResultsMessage()}
      <ReactPaginate
        className="flex justify-center items-center mt-8 space-x-6 p-3 mx-auto "
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"pagination"}
        previousLinkClassName={" text-black p-2 rounded border border-black "}
        nextLinkClassName={" text-black p-2 rounded border border-black"}
        disabledClassName={"text-black cursor-not-allowed"}
        activeClassName={"bg-blue-300  text-white p-2 rounded"}
        pageLinkClassName={"bg-red-200 text-black p-2 rounded"}
        breakClassName={"pagination__break"}
      />
    </div>
  );
};

export default Body;
