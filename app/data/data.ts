import smsgateway from "../../assets/smsgateway.png"

export interface Service {
  icon: string; 
  title: string;
  description: string;
}

export interface Value {
  icon: string; 
  title: string;
  description: string;
}

export interface Stat {
  number: string;
  label: string;
}

export const services: Service[] = [
  {
    icon: "Code2", // You can import the icon components in the consuming files
    title: "Custom Software Development",
    description: "Tailored solutions to meet your unique business requirements"
  },
  {
    icon: "Smartphone",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications"
  },
  {
    icon: "Database",
    title: "ERP Solutions",
    description: "Integrated enterprise resource planning systems"
  },
  {
    icon: "Cog",
    title: "Software Implementation",
    description: "Seamless deployment and integration services"
  },
  {
    icon: "Building2",
    title: "Enterprise Solutions",
    description: "Scalable solutions for large organizations"
  },
  {
    icon: "Headphones",
    title: "Support Services",
    description: "24/7 technical support and maintenance"
  }
];

export const values: Value[] = [
  {
    icon: "Target",
    title: "Excellence",
    description: "We strive for excellence in every project, delivering high-quality solutions that exceed expectations."
  },
  {
    icon: "Users",
    title: "Client-Centric",
    description: "Our clients' success is our priority. We work closely with them to understand and meet their unique needs."
  },
  {
    icon: "Lightbulb",
    title: "Innovation",
    description: "We embrace cutting-edge technologies and innovative approaches to solve complex business challenges."
  },
  {
    icon: "Shield",
    title: "Integrity",
    description: "We maintain the highest standards of integrity and transparency in all our business dealings."
  }
];

export const stats: Stat[] = [
  { number: "5+", label: "Years Experience" },
  { number: "2", label: "Projects Delivered" },
  { number: "2", label: "Enterprise Clients" },
  { number: "99%", label: "Client Satisfaction" }
]; 


export const products = [
    {
      title: "Odoo SMS Gateway",
      price: "USD 150.00",
      description:
        "A tailor-made SMS gateway solution designed to send automated SMS notifications for invoices and payments. Developed using the reliable Sri Lankan Mobitel telecommunication network.",
      image: smsgateway,
      features: [
        "Automated Invoice Notifications",
        "Payment Confirmation SMS",
        "Customizable Messaging Templates",
        "Integration with Your Existing Systems",
      ],
      version: "16.0",
      platform: "Odoo Online / All Platforms",
      category: "Communication",
    },
  ];