import { FaPhoneAlt } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { MdEmail } from "react-icons/md";

export default function ContactCard() {
  return (
    <div className="max-w-md mx-auto bg-gray-100 rounded-2xl p-6 shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-2">
        Let’s Keep in Touch!
      </h2>
      <p className="text-gray-600 mb-6">
        We would love to hear from you. Contact us for any inquiries you might
        have for us.
      </p>

      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-3 text-gray-800">
          <FaPhoneAlt className="text-lg" />
          <span>+1 (555) 123-4567</span>
        </div>
        <div className="flex items-center gap-3 text-gray-800">
          <MdEmail className="text-lg" />
          <span>information@eshop.com</span>
        </div>
        <div className="flex items-center gap-3 text-gray-800">
          <GoLocation className="text-xl" />
          <span>123 Main Street, Suite 105, Anytown USA</span>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-gray-800 border-b-2 border-red-500 inline-block mb-3">
          Opening Hours
        </h3>
        <div className="space-y-1 text-gray-700">
          <div>
            <span className="font-bold">MON to FRI:</span>{" "}
            <span>08:00 AM - 04:00 PM</span>
          </div>
          <div>
            <span className="font-bold">SAT to SUN:</span>{" "}
            <span>09:00 AM - 03:00 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
}
