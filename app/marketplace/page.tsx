"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "Enterprise Resource Planning",
    description: "Comprehensive ERP solution for medium to large enterprises",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    features: ["Financial Management", "Inventory Control", "HR Management", "Analytics Dashboard"]
  },
  {
    title: "Healthcare Management System",
    description: "Complete hospital management and patient care solution",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80",
    features: ["Patient Records", "Appointment Scheduling", "Billing", "Pharmacy Management"]
  },
  {
    title: "E-commerce Platform",
    description: "Scalable online store solution with advanced features",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80",
    features: ["Product Management", "Order Processing", "Customer Analytics", "Payment Integration"]
  },
  {
    title: "Supply Chain Management",
    description: "End-to-end supply chain visibility and optimization",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80",
    features: ["Inventory Tracking", "Supplier Management", "Logistics", "Forecasting"]
  }
];

export default function Marketplace() {
  return (
    <main className="py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow w-full h-[36rem]"
            >
              <div className="relative h-48">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-5">
                <h2 className="text-2xl font-semibold mb-3">{product.title}</h2>
                <p className="text-gray-600 mb-3">{product.description}</p>
                <h3 className="font-semibold mb-2">Key Features:</h3>
                <ul className="list-disc list-inside mb-5 text-gray-600">
                  {product.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button className="w-full">Request Demo</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}