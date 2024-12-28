import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div className="flex items-start gap-4">
        <Phone className="h-6 w-6 text-primary shrink-0" />
        <div>
          <h3 className="font-semibold mb-2">Phone</h3>
          <div className="space-y-1">
            <a
              href="https://wa.me/+94742008950"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-primary hover:underline"
            >
              +94 74 200 8950
            </a>
            <a
              href="https://wa.me/+94727920628"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-primary hover:underline"
            >
             +94 72 792 0628
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <Mail className="h-6 w-6 text-primary shrink-0" />
        <div>
          <h3 className="font-semibold mb-2">Email</h3>
          <a
            href="mailto:info@adviuconsulting.com"
            className="text-primary hover:underline"
          >
            info@adviuconsulting.com
          </a>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <MapPin className="h-6 w-6 text-primary shrink-0" />
        <div>
          <h3 className="font-semibold mb-2">Address</h3>
          <p className="text-gray-600">
          48/123c 1/1, Dharmasala Mawatha,<br />
          Obeysekarapura, Rajagiriya,<br /> 
          10100 Sri Lanka
          </p>
        </div>
      </div>
    </div>
  );
}