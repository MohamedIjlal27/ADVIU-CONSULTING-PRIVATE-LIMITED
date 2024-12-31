"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { products } from "../data/data";
import { useState } from "react";

export default function Marketplace() {
  const [selectedVersion, setSelectedVersion] = useState("All Versions");
  const [selectedPlatform, setSelectedPlatform] = useState("All Platforms");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const filteredProducts = products.filter(
    (product) =>
      (selectedVersion === "All Versions" || product.version === selectedVersion) &&
      (selectedPlatform === "All Platforms" || product.platform.includes(selectedPlatform)) &&
      (selectedCategory === "All Categories" || product.category === selectedCategory)
  );

  const handleVersionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedVersion(event.target.value);
  };

  const handlePlatformChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPlatform(event.target.value);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <>
      {/* Top Section */}
      <div className="relative bg-blue-500 to-indigo-600 text-white py-16 px-4 mb-10">
        {/* Background Overlay */}
        <div
          className="absolute inset-0 bg-black bg-opacity-30 pointer-events-none"
          aria-hidden="true"
        ></div>
        {/* Content */}
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Marketplace</h1>
          <p className="text-lg font-medium mb-6">
            Explore our exclusive products tailored to meet your business needs.
          </p>
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Choose a Product</h1>
        <p className="text-center mb-6">
          All of these products can be customized to fit your needs. If you like
          features from several products, you can include them all in one installation!
        </p>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center mb-6 bg-gray-100 p-4 rounded-md shadow-md">
          <div className="flex space-x-4">
            <select
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleCategoryChange}
              value={selectedCategory}
            >
              <option>All Categories</option>
              <option>Communication</option>
              {/* Add more categories as needed */}
            </select>
            <select
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handlePlatformChange}
              value={selectedPlatform}
            >
              <option>All Platforms</option>
              <option>Odoo Online</option>
            </select>
            <select
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleVersionChange}
              value={selectedVersion}
            >
              <option>All Versions</option>
              <option>16.0</option>
              <option>17.0</option>
              <option>18.0</option>
            </select>
          </div>
        </div>

        <h2 id="products" className="text-3xl font-semibold text-center mb-6">
          Available Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {filteredProducts.map((product, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow bg-white rounded-lg shadow-md mb-10"
            >
              <div className="relative h-48">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <div className="bg-gray-200 h-full flex items-center justify-center">
                    <span>No Image Available</span>
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="flex justify-between">
                  <h3 className="text-2xl font-semibold mb-3 ">{product.title}</h3>
                  <h3 className="text-2xl font-semibold mb-3 ">{product.price}</h3>
                </div>
                <p className="text-gray-600 mb-3">{product.description}</p>
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="list-disc list-inside mb-5 text-gray-600">
                  {product.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <Link href={`/contact?productName=${encodeURIComponent(product.title)}`} passHref>
                  <Button className="w-full bg-blue-500 text-white hover:bg-blue-600">
                    Request Demo
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
