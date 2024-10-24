import {
  Mail,
  Phone,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 py-8 px-4">
      <div className="container mx-auto text-center">
        <p className="text-lg mb-4">
          For more information or support, feel free to contact us.
        </p>

        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2">
            <Phone className="h-4 w-4" />
            <span>Phone : +91 1234567890</span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <Mail className="h-4 w-4" />
            <span>Email : info@brainchildlearning.in</span>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-4">
          {/* Email */}
          <a
            href="#"
            className="bg-[#0b66c3] p-2 rounded-md hover:bg-[#448cd4] transition-colors duration-200"
          >
            <Linkedin className="h-5 w-5 text-white" />
          </a>

          <a
            href="mailto:Brainyabacus@gmail.com"
            className="bg-blue-600 p-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            <Youtube className="h-5 w-5 text-white" />
          </a>

          {/* Twitter */}
          <a
            href="#"
            className="bg-sky-500 p-2 rounded-md hover:bg-sky-600 transition-colors duration-200"
          >
            <Instagram className="h-5 w-5 text-white" />
          </a>

          {/* Facebook */}
          <a
            href="#"
            className="bg-blue-800 p-2 rounded-md hover:bg-blue-900 transition-colors duration-200"
          >
            <Facebook className="h-5 w-5 text-white" />
          </a>

          {/* Google */}
          <a
            href="#"
            className="bg-red-600 p-2 rounded-md hover:bg-red-700 transition-colors duration-200"
          >
            <svg
              className="h-5 w-5 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
