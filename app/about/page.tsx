"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import Partner1 from "../../assets/teamImages/Partner1.jpg";
import Partner2 from "../../assets/teamImages/Partner2.jpg";
import Partner3 from "../../assets/teamImages/Partner3.jpg";
import { LinkedIn } from '@mui/icons-material';
import Link from "next/link";

const team = [
  {
    name: "Chumley Dharmasiri",
    role: "Director (Consulting)",
    image: Partner1,
    description: "Skilled in designing impactful campaigns that resonate with target audiences, boosting brand visibility, engagement, and driving business growth",
    linkedin: "https://www.linkedin.com/in/chumley-dharmasiri-782858250/"
  },
  {
    name: "Mohamed Ijlal",
    role: "Director (Technical)",
    image: Partner2,
    description: "Tech enthusiast specializing in developing robust and scalable software solutions that elevate user experiences. Passionate about innovative technologies",
    linkedin: "https://www.linkedin.com/in/mohamed-ijlal"
  },
  {
    name: "Ziaul Hassan",
    role: "Advisor",
    image: Partner3,
    description: "Strategic advisor with a focus on business development and market expansion, providing insights and guidance to drive growth and innovation.",
    linkedin: "https://www.linkedin.com/in/zhasansl/"
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

      {/* Team Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 justify-items-center">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow w-72">
                <div className="relative h-56 w-72">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                  <div className="flex items-center justify-center mt-2">
                    <Link href={member.linkedin} target="_blank" className="flex items-center">
                      <LinkedIn className="h-6 w-6 text-primary hover:text-blue-600" />
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}