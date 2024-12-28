"use client";

import { Card } from "@/components/ui/card";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export default function Contact() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-16">Get in Touch</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Contact Form */}
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
              <ContactForm />
            </Card>

            {/* Right Column - Contact Info and Map */}
            <div className="space-y-8">
              <Card className="p-8">
                <ContactInfo />
              </Card>
              
              <Card className="p-0 overflow-hidden h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7847393610705!2d79.8908849!3d6.9163201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25996a80ed457%3A0xa8fa04c4accac419!2sObeysekarapura%20Rd!5e0!3m2!1sen!2slk!4v1735376144128!5m2!1sen!2slk" 
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}