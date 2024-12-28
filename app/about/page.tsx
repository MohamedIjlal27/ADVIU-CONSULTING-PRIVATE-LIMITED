"use client";

import { Card } from "@/components/ui/card";
import { Target, Users, Lightbulb, Shield } from "lucide-react";
import Image from "next/image";
import Partner1 from "../../assets/teamImages/Partner1.jpg";
import Partner2 from "../../assets/teamImages/Partner2.jpg";
import Partner3 from "../../assets/teamImages/Partner3.jpg";

const values = [
  {
    icon: <Target className="h-12 w-12 text-primary" />,
    title: "Excellence",
    description: "We strive for excellence in every project, delivering high-quality solutions that exceed expectations."
  },
  {
    icon: <Users className="h-12 w-12 text-primary" />,
    title: "Client-Centric",
    description: "Our clients' success is our priority. We work closely with them to understand and meet their unique needs."
  },
  {
    icon: <Lightbulb className="h-12 w-12 text-primary" />,
    title: "Innovation",
    description: "We embrace cutting-edge technologies and innovative approaches to solve complex business challenges."
  },
  {
    icon: <Shield className="h-12 w-12 text-primary" />,
    title: "Integrity",
    description: "We maintain the highest standards of integrity and transparency in all our business dealings."
  }
];

const team = [
  {
    name: "Chumley Dharmasiri",
    role: "Director (Consulting)",
    image: Partner1,
    description: "Skilled in designing impactful campaigns that resonate with target audiences, boosting brand visibility, engagement, and driving business growth"
  },
  {
    name: "Mohamed Ijlal",
    role: "Director (Technical)",
    image: Partner2,
    description: "Tech enthusiast, specializing in developing robust & scalable software solutions that elevate user experiences."
  },
  {
    name: "Ziaul Hassan",
    role: "Advisor",
    image: Partner3,
    description: "Strategic advisor with a focus on business development and market expansion, providing insights and guidance to drive growth and innovation."
  }
];

export default function About() {
  return (
    <main>
      {/* About Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Transforming Ideas into Digital Reality</h1>
            <p className="text-xl text-gray-600">
              At ADVIU Consulting, we specialize in delivering innovative software solutions that drive business growth. 
              With our expertise in cutting-edge technologies and agile methodologies, we help organizations streamline 
              their operations, enhance efficiency, and stay ahead in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 justify-items-center">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow w-60">
                <div className="relative h-56 w-60">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}