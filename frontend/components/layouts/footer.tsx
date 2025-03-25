import { FaPaypal } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa6";
import { FaApplePay } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { RiMastercardFill } from "react-icons/ri";

const Footer = () => {
  const footerLinks = {
    company: ["About", "Features", "Works", "Career"],
    help: [
      "Customer Support",
      "Delivery Details",
      "Terms & Conditions",
      "Privacy Policy",
    ],
    faq: ["Account", "Manage Deliveries", "Orders", "Payments"],
    resources: [
      "Free eBooks",
      "Development Tutorial",
      "How to - Blog",
      "Youtube Playlist",
    ],
  };

  const socialIcons = [
    { icon: <FaXTwitter size={20} />, href: "#twitter" },
    { icon: <FaFacebook size={20} />, href: "#facebook" },
    { icon: <FaInstagram size={20} />, href: "#instagram" },
    { icon: <FaGithub size={20} />, href: "#github" },
  ];

  const paymentIcons = [
    { icon: <FaCcVisa size={32} />, name: "Visa" },
    { icon: <RiMastercardFill size={32} />, name: "Mastercard" },
    { icon: <FaPaypal size={32} />, name: "PayPal" },
    { icon: <FaApplePay size={32} />, name: "Apple Pay" },
    { icon: <FaGooglePay size={32} />, name: "Google Pay" },
  ];

  return (
    <footer className="relative bg-black text-white">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            STAY UP TO DATE ABOUT
            <br />
            OUR LATEST OFFERS
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-6 py-3 rounded-lg bg-white text-black w-full sm:w-64"
            />
            <button className="px-6 py-3 bg-white text-black rounded-lg whitespace-nowrap hover:bg-gray-100">
              Subscribe to Newsletter
            </button>
          </div>
        </div>

        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">SHOP.CO</h3>
            <p className="text-gray-400 mb-6">
              We have clothes that suits your style and which you&apos;re proud
              to wear. From women to men.
            </p>
            <div className="flex gap-4">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-white text-gray-400 hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-lg font-semibold mb-4 uppercase">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <div className="flex gap-6 mt-4 md:mt-0 text-gray-400">
            {paymentIcons.map((payment, index) => (
              <span key={index} className="hover:text-white transition-colors">
                {payment.icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
