"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IoSearchOutline} from "react-icons/io5";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { productList, Product } from "../../../../data/collectionData";
import { SlHandbag } from "react-icons/sl";
import "./Collection.scss";

const filterSection = [
  {
    title: "color",
    options: ["Black", "Brown", "Camel", "Charcoal", "Green", "Navy Blue"],
  },
  { title: "size", options: ["39", "47", "S – 38S", "M – 40S", "L – 42R"] },
  { title: "fabric", options: ["Loden", "Tweed", "Wool"] },
];

type CollectionProps = {
  onAddToCart: (product: Product) => void;
};

const Collection: React.FC<CollectionProps> = ({ onAddToCart }) => {
  const [filters, setFilters] = useState<{
    color: string[];
    size: string[];
    fabric: string[];
  }>({
    color: [],
    size: [],
    fabric: [],
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [collapsedSections, setCollapsedSections] = useState<{
    [key: string]: boolean;
  }>({});

  const handleFilterChange = (
    type: "color" | "size" | "fabric",
    value: string
  ) => {
    setFilters((prev) => {
      const values = prev[type];
      return {
        ...prev,
        [type]: values.includes(value)
          ? values.filter((v) => v !== value)
          : [...values, value],
      };
    });
  };

  const toggleSection = (section: string) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const countOptionMatches = (
    type: "color" | "size" | "fabric",
    option: string
  ) => {
    return productList.filter((product) =>
      (product[(type + "s") as keyof Product] as string[]).includes(option)
    ).length;
  };

  let filteredProducts = productList.filter((product) => {
    const matchColor =
      filters.color.length === 0 ||
      filters.color.some((color) => product.colors.includes(color));
    const matchSize =
      filters.size.length === 0 ||
      filters.size.some((size) => product.sizes.includes(size));
    const matchFabric =
      filters.fabric.length === 0 ||
      filters.fabric.some((fabric) => product.fabrics.includes(fabric));
    const matchSearch =
      searchTerm === "" ||
      product.name.toLowerCase().includes(searchTerm.toLowerCase().trim());

    return matchColor && matchSize && matchFabric && matchSearch;
  });

  if (sortOption === "a-z") {
    filteredProducts = filteredProducts.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  } else if (sortOption === "z-a") {
    filteredProducts = filteredProducts.sort((a, b) =>
      b.name.localeCompare(a.name)
    );
  }

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
            const isCollapsed = collapsedSections[section.title] ?? false;

            return (
              <div
                key={idx}
                className="filter-section cursor-pointer border-b py-2.5"
              >
                <div
                  className="tag-title text-[14px] font-bold uppercase flex gap-x-2 items-center"
                  onClick={() => toggleSection(section.title)}
                >
                  {isCollapsed ? (
                    <SlArrowDown size={10} />
                  ) : (
                    <SlArrowUp size={10} />
                  )}
                  <span>{section.title}</span>
                </div>

                <div
                  className={`
          overflow-hidden transition-all duration-[800ms] ease-in-out
          ${
            isCollapsed
              ? "max-h-0 opacity-0 scale-y-95"
              : "max-h-60 opacity-100 scale-y-100"
          }
          origin-top
        `}
                >
                  <ul className="mt-2.5">
                    {section.options.map((opt, idx2) => (
                      <li key={idx2} className="flex items-center mb-1">
                        <input
                          type="checkbox"
                          className="mr-1.5"
                          checked={filters[
                            section.title as "color" | "size" | "fabric"
                          ].includes(opt)}
                          onChange={() =>
                            handleFilterChange(
                              section.title as "color" | "size" | "fabric",
                              opt
                            )
                          }
                        />
                        <p className="flex-1">{opt}</p>
                        <span>
                          (
                          {countOptionMatches(
                            section.title as "color" | "size" | "fabric",
                            opt
                          )}
                          )
                        </span>
                      </li>
                    ))}
                  </ul>
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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full outline-none text-[15px]"
            />
          </div>

          <div className="action-container flex justify-between items-center mb-6">
            <span className="text-[15px] font-medium">
              <span className="font-bold">{filteredProducts.length}</span>{" "}
              Products
            </span>
            <div className="filter-selection flex items-center gap-4 text-[14px]">
              <div className="flex items-center gap-2 bg-gray-100 px-1.5">
                <label htmlFor="show-count">Show</label>
                <select
                  id="show-count"
                  className="border border-transparent h-[44px]"
                >
                  <option value="12">12</option>
                  <option value="24">24</option>
                </select>
              </div>
              <div className="bg-gray-100 px-1.5">
                <select
                  id="sort-by"
                  className="border border-transparent h-[44px]"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="a-z">Alphabetically, A-Z</option>
                  <option value="z-a">Alphabetically, Z-A</option>
                  <option value="availability">Availability</option>
                  <option value="best-selling">Best Selling</option>
                </select>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="collections grid grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
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
            onClick={() => onAddToCart(product)}
            className="absolute top-2.5 right-5 text-white z-40"
          >
            <SlHandbag size={20} />
          </button>
        </div>
      ))}
          </div>
        </div>
      </div>

      <div className='flex justify-center mt-15 h-[640px]'>
      <iframe className='h-full' title="vimeo-player" src="https://player.vimeo.com/video/743911758?h=17a66078f1" width="640" height="360" frameBorder="0"    allowFullScreen></iframe>
      </div>
    </section>
  );
};

export default Collection;
