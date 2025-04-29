"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { productList, Product } from "../../../../data/collectionData";
import { BsBag, BsBagCheckFill,BsLayoutTextSidebarReverse } from "react-icons/bs";
import "./Collection.scss";

const filterSection = [
  {
    title: "color",
    options: ["Black", "Brown", "Camel", "Charcoal", "Green", "Navy Blue"],
  },
  { title: "size", options: [
    'S – 36S', 'S – 38S', 'M – 40S', 'M – 40R', 'L – 42R',
    'L – 44L', 'XL – 46R', 'XL – 46L', 'XXL – 48R', 'XXL – 50R',
    '37', '39', '41', '43', '45', '47', '49', '51', '53', '55'
  ] },
  { title: "fabric", options: ["Loden", "Tweed", "Wool"] },
];

export interface CartItem extends Product {
  quantity: number;
}

interface CollectionProps {
  cartItems: CartItem[];
  handleAddCartItems: (product: Product) => void;
}

const Collection: React.FC<CollectionProps> = ({
  cartItems,
  handleAddCartItems,
}) => {
  const [openFilters, setOpenFilters] = useState<Record<string, boolean>>({
    color: true,
    size: true,
    fabric: true,
  });

  const [selectedFilters, setSelectedFilters] = useState<{
    color: string[];
    size: string[];
    fabric: string[];
  }>({
    color: [],
    size: [],
    fabric: [],
  });

  const [sortOption, setSortOption] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showQuantity, setShowQuantity] = useState(12)
  const [openFilterMobile, setOpenFilterMobile] = useState(false)
  

  // Hàm handle Toglle cho Filter Bar
  const handleToggleFilter = (title: string) => {
    setOpenFilters((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  // Hàm đếm số lượng cho từng option của filter
  const countFilterOptions = (products: Product[]) => {
    const counts = {
      color: {} as Record<string, number>,
      size: {} as Record<string, number>,
      fabric: {} as Record<string, number>,
    };
    for (const product of products) {
      for (const color of product.colors) {
        counts.color[color] = (counts.color[color] || 0) + 1;
      }
      for (const size of product.sizes) {
        counts.size[size] = (counts.size[size] || 0) + 1;
      }
      for (const fabric of product.fabrics) {
        counts.fabric[fabric] = (counts.fabric[fabric] || 0) + 1;
      }
    }

    return counts;
  };

  // Hàm xét các filter
  const handleChangeFilter = (
    type: "color" | "size" | "fabric",
    value: string
  ) => {
    setSelectedFilters((prev) => {
      const values = prev[type];
      return {
        ...prev,
        [type]: values.includes(value)
          ? values.filter((v) => v !== value)
          : [...values, value],
      };
    });
  };

  // Biến chứa các sản phẩm sau khi filter
  let filteredProducts = productList.filter((product) => {
    const matchColor =
      selectedFilters.color.length === 0 ||
      selectedFilters.color.some((color) => product.colors.includes(color));
    const matchSize =
      selectedFilters.size.length === 0 ||
      selectedFilters.size.some((size) => product.sizes.includes(size));
    const matchFabric =
      selectedFilters.fabric.length === 0 ||
      selectedFilters.fabric.some((fabric) => product.fabrics.includes(fabric));
    const matchSearch =
      searchTerm === "" ||
      product.name.toLowerCase().includes(searchTerm.toLowerCase().trim());

    return matchColor && matchSize && matchFabric && matchSearch;
  });

  // Sort dánh sách sản phẩm
  if (sortOption === "a-z") {
    filteredProducts = filteredProducts.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  } else if (sortOption === "z-a") {
    filteredProducts = filteredProducts.sort((a, b) =>
      b.name.localeCompare(a.name)
    );
  }

  

  const optionCounts = useMemo(() => countFilterOptions(productList), []);

  return (
    <section className="section-collection bg-white text-black px-10 pt-8 pb-4 ">
      <p className="mb-6 text-[17px] leading-relaxed">
        For centuries Loden coats kept alpine hunters and herdsmen warm and dry
        through the harsh Austrian winters. The tradition lives on in these
        authentic Loden coats.
      </p>

      <div className="main-collection flex gap-6">
        {/* Filter Sidebar */}
        <aside className="filter-container w-[20%]">
          {filterSection.map((section, idx) => {
            const isOpen = openFilters[section.title];
            return (
              <div key={idx} className="border-b border-[#e3e3e3] py-4">
                <div
                  className="uppercase font-bold text-[14px]/[14px] text-[#3a3a3a] font-sans flex cursor-pointer gap-2"
                  onClick={() => handleToggleFilter(section.title)}
                >
                  {isOpen ? <SlArrowUp size={8} /> : <SlArrowDown size={8} />}
                  <p>{section.title}</p>
                </div>

                <div
                  className={`flex flex-col mt-4 transition-all duration-800 overflow-hidden ${
                    isOpen
                      ? section.options.length > 8
                        ? "max-h-[200px] overflow-y-auto"
                        : "max-h-[500px]"
                      : "max-h-0"
                  }`}
                >
                  {section.options.map((opt, idx2) => (
                    <div key={idx2} className="flex items-center my-1.5">
                      <input
                        type="checkbox"
                        className="w-[15px] h-[15px] mr-1.5 "
                        id={opt}
                        checked={selectedFilters[
                          section.title as "color" | "size" | "fabric"
                        ].includes(opt)}
                        onChange={() =>
                          handleChangeFilter(
                            section.title as "color" | "size" | "fabric",
                            opt
                          )
                        }
                      />
                      <label
                        htmlFor={opt}
                        className="text-[14px] text-[#171f15] font-light font-sans"
                      >
                        {opt}
                      </label>
                      <span className="text-[14px] text-[#171f15] font-light font-sans flex-1 text-end">
                        (
                        {optionCounts[
                          section.title as keyof typeof optionCounts
                        ]?.[opt] || 0}
                        ){/* Chưa hiếu dòng này */}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </aside>

        {/* Products */}
        <div className="collections-container w-[80%]">
          {/* Search & Actions */}
          <div className="search-container flex items-center border border-gray-300 rounded-md px-3 py-2 mb-6">
            <IoSearchOutline className="text-[20px] mr-3 text-gray-500" />
            <input
              type="text"
              placeholder="Search products"
              className="w-full outline-none text-[15px]"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="action-container flex justify-between items-center mb-6 max-md:justify-normal max-md: flex-wrap">
            <span className="text-[15px] font-medium max-md:hidden">
              <span className="font-bold">{filteredProducts.length}</span>{" "}
              Products
            </span>

            <div
              className="w-[49%] mr-[2%] border h-[44px] flex items-center gap-x-1.5 px-1.5 cursor-pointer min-md:hidden"
              onClick={() => setOpenFilterMobile(true)}
            >
              <BsLayoutTextSidebarReverse size={16}/>
              <span>Filter By</span>
            </div>

            <div className="filter-selection flex items-center gap-4 text-[14px] max-md:w-[49%] ">
              <div className="flex items-center gap-2 bg-gray-100 px-1.5 max-md:hidden">
                <label htmlFor="show-count">Show</label>
                <select
                  id="show-count"
                  className="border border-transparent h-[44px]"
                  onChange={(e) => setShowQuantity(Number(e.target.value))}
                >
                  <option value="12">12</option>
                  <option value="6">6</option>
                </select>
              </div>
              <div className="bg-gray-100 px-1.5 max-md:w-full max-md:border">
                <select
                  id="sort-by"
                  className="border border-transparent h-[44px] max-md:w-full"
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="a-z">Alphabetically, A-Z</option>
                  <option value="z-a">Alphabetically, Z-A</option>
                  <option value="availability">Availability</option>
                  <option value="best-selling">Best Selling</option>
                </select>
              </div>
            </div>

            <span className="text-[15px] mt-[15px] font-medium min-md:hidden">
              <span className="font-bold">{filteredProducts.length}</span>{" "}
              Products
            </span>
          </div>

          {/* Product Grid */}
          <div className="collections grid grid-cols-3 gap-6">
            {filteredProducts.slice(0, showQuantity).map((product) => (
              <div
                key={product.id}
                className="product group relative bg-gray-200 px-[10px] pt-0 pb-[15px] overflow-hidden cursor-pointer"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-10 z-10 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="product-info absolute bottom-[40px] left-[20px] text-white z-20">
                  <p className="font-[700] text-[21px] tracking-[2px] uppercase py-2">
                    {product.name}
                  </p>
                  <p className="font-[100] text-[21px]">
                    {product.price.toLocaleString("vi-VN")} đ
                  </p>
                </div>
                <button
                  className="absolute top-2.5 right-5 text-white z-40 cursor-pointer max-[1000px]:right-9 max-[1000px]:top-3"
                  onClick={() => handleAddCartItems(product)}
                >
                  {cartItems.some((item) => item.id === product.id) ? (
                    <BsBagCheckFill
                      size={25}
                      className="transition-transform duration-200 hover:scale-125 active:scale-150 text-green-500 max-[1000px]:w-[25px] max-[1000px]:h-[25px]"
                    />
                  ) : (
                    <BsBag
                      size={25}
                      className="transition-transform duration-200 hover:scale-125 active:scale-150 max-[1000px]:w-[25px] max-[1000px]:h-[25px]"
                    />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-15 h-[640px]">
        <iframe
          className="h-full"
          title="vimeo-player"
          src="https://player.vimeo.com/video/743911758?h=17a66078f1"
          width="640"
          height="360"
          allowFullScreen={true}
        ></iframe>
      </div>

      <div
        className={`fixed inset-0 z-51 transition-opacity duration-300 ${
          openFilterMobile
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setOpenFilterMobile(false)}
        />

        {/* Sidebar */}
        <div
          className={`
      absolute left-0 top-0 h-full w-[70vw] bg-white
      transition-transform duration-500
      ${openFilterMobile ? "translate-x-0" : "-translate-x-full"}
    `}
        >
          <div className="uppercase p-4 border-b relative">
            <h2>filter by</h2>
            <button
              className="absolute top-2 right-3 text-xl"
              onClick={() => setOpenFilterMobile(false)}
            >
              ✕
            </button>
          </div>

         
          <aside className="filter-container h-[calc(100vh-64px)] overflow-y-auto p-4">
          {filterSection.map((section, idx) => {
            const isOpen = openFilters[section.title];
            return (
              <div key={idx} className="border-b border-[#e3e3e3] py-4">
                <div
                  className="uppercase font-bold text-[14px]/[14px] text-[#3a3a3a] font-sans flex cursor-pointer gap-2"
                  onClick={() => handleToggleFilter(section.title)}
                >
                  {isOpen ? <SlArrowUp size={8} /> : <SlArrowDown size={8} />}
                  <p>{section.title}</p>
                </div>

                <div
                  className={`flex flex-col mt-4 transition-all duration-800 overflow-hidden ${
                    isOpen
                      ? section.options.length > 8
                        ? "max-h-[200px] overflow-y-auto"
                        : "max-h-[500px]"
                      : "max-h-0"
                  }`}
                >
                  {section.options.map((opt, idx2) => (
                    <div key={idx2} className="flex items-center my-1.5">
                      <input
                        type="checkbox"
                        className="w-[15px] h-[15px] mr-1.5 "
                        id={opt}
                        checked={selectedFilters[
                          section.title as "color" | "size" | "fabric"
                        ].includes(opt)}
                        onChange={() =>
                          handleChangeFilter(
                            section.title as "color" | "size" | "fabric",
                            opt
                          )
                        }
                      />
                      <label
                        htmlFor={opt}
                        className="text-[14px] text-[#171f15] font-light font-sans"
                      >
                        {opt}
                      </label>
                      <span className="text-[14px] text-[#171f15] font-light font-sans flex-1 text-end">
                        (
                        {optionCounts[
                          section.title as keyof typeof optionCounts
                        ]?.[opt] || 0}
                        ){/* Chưa hiếu dòng này */}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </aside>
          
        </div>
      </div>
    </section>
  );
};

export default Collection;
