import Link from "next/link";
import Image from "next/image";
import logadviu_logo from "../assets/adviu_logo.svg";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-2">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Company Info */}
          <div className="space-y-3">
            <Link href="/" className="flex items-center space-x-2">
              <Image src={logadviu_logo} alt="Logo" width={120} height={120} />
            </Link>
            <p className="text-primary-foreground/80">
              Empowering businesses through innovative software solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-primary-foreground/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/marketplace" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-primary-foreground/80">Custom Software Development</span>
              </li>
              <li>
                <span className="text-primary-foreground/80">Mobile App Development</span>
              </li>
              <li>
                <span className="text-primary-foreground/80">ERP Solutions</span>
              </li>
              <li>
                <span className="text-primary-foreground/80">Enterprise Solutions</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://wa.me/+94742008950" className="text-primary-foreground/80 hover:text-white transition-colors">
                +94 74 200 8950
                </a>
              </li>
              <li>
                <a href="https://wa.me/+94727920628" className="text-primary-foreground/80 hover:text-white transition-colors">
                +94 72 792 0628
                </a>
              </li>
              <li>
                <a href="mailto:info@adviuconsulting.com" className="text-primary-foreground/80 hover:text-white transition-colors">
                info@adviuconsulting.com
                </a>
              </li>
              <li>
                <span className="text-primary-foreground/80">
                48/123c 1/1, Dharmasala Mawatha,
                Obeysekarapura, Rajagiriya, <br />
                10100
                Sri Lanka
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} ADVIU Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}