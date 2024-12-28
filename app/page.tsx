"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code2, Smartphone, Database, Cog, Building2, Headphones } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    icon: <Code2 className="h-12 w-12 text-primary" />,
    title: "Custom Software Development",
    description: "Tailored solutions to meet your unique business requirements"
  },
  {
    icon: <Smartphone className="h-12 w-12 text-primary" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications"
  },
  {
    icon: <Database className="h-12 w-12 text-primary" />,
    title: "ERP Solutions",
    description: "Integrated enterprise resource planning systems"
  },
  {
    icon: <Cog className="h-12 w-12 text-primary" />,
    title: "Software Implementation",
    description: "Seamless deployment and integration services"
  },
  {
    icon: <Building2 className="h-12 w-12 text-primary" />,
    title: "Enterprise Solutions",
    description: "Scalable solutions for large organizations"
  },
  {
    icon: <Headphones className="h-12 w-12 text-primary" />,
    title: "Support Services",
    description: "24/7 technical support and maintenance"
  }
];

const stats = [
  { number: "5+", label: "Years Experience" },
  { number: "2", label: "Projects Delivered" },
  { number: "2", label: "Enterprise Clients" },
  { number: "99%", label: "Client Satisfaction" }
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80"
            alt="Hero background"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto relative z-10 text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Empowering Businesses Through Innovation
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Transform your business with cutting-edge software solutions. We deliver custom applications, 
            ERP systems, and enterprise solutions that drive growth and success.
          </p>
          <div className="flex gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get Started
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="text-black border-black hover:bg-black/10 hover:text-white">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our software solutions can help you achieve your business goals.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}