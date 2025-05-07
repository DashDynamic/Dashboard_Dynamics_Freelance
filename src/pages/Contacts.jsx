

import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import emailjs from "@emailjs/browser";

// FAQ Component
const QnA = ({ data }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAnswer = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-gray-50 rounded-lg shadow-md p-6 mt-12">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {data.map((item, index) => (
          <div 
            key={index} 
            className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300"
          >
            <div 
              className="flex justify-between items-center p-4 bg-white cursor-pointer hover:bg-gray-50"
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="font-medium text-gray-800">{item.question}</h3>
              <svg 
                className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${expandedIndex === index ? 'transform rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div
              className={`bg-gray-50 px-4 overflow-hidden transition-all duration-300 ${
                expandedIndex === index ? 'py-4 max-h-96' : 'max-h-0 py-0'
              }`}
            >
              <p className="text-gray-700">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button 
          className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-900 transition-colors duration-300"
        >
                    <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf5RjFNZyK-jDCNsh-Fu8FG52ER9eDNLnsDNgfTQyupZkX4bA/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-900 transition-colors duration-300"
          >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              d="M15 18C14.1667 18 13.4583 17.7347 12.875 17.2042C12.2917 16.6737 12 16.0296 12 15.2718C12 15.038 12.025 14.8126 12.075 14.5955C12.125 14.3784 12.1917 14.1696 12.275 13.9693L5.375 9.8909C5.125 10.1078 4.85417 10.283 4.5625 10.4167C4.27083 10.5503 3.95833 10.6171 3.625 10.6171C2.79167 10.6171 2.08333 10.3518 1.5 9.82129C0.916667 9.29082 0.625 8.64671 0.625 7.88897C0.625 7.13122 0.916667 6.48711 1.5 5.95663C2.08333 5.42616 2.79167 5.16092 3.625 5.16092C3.95833 5.16092 4.27083 5.22772 4.5625 5.36132C4.85417 5.49492 5.125 5.67015 5.375 5.887L12.275 1.80866C12.1917 1.60834 12.125 1.39968 12.075 1.18267C12.025 0.96566 12 0.740321 12 0.506649C12 -0.250788 12.2917 -0.894898 12.875 -1.42537C13.4583 -1.95585 14.1667 -2.22109 15 -2.22109C15.8333 -2.22109 16.5417 -1.95585 17.125 -1.42537C17.7083 -0.894898 18 -0.250788 18 0.506649C18 1.26409 17.7083 1.9082 17.125 2.43868C16.5417 2.96915 15.8333 3.23439 15 3.23439C14.6667 3.23439 14.3542 3.16759 14.0625 3.03399C13.7708 2.90039 13.5 2.72516 13.25 2.5083L6.35 6.58666C6.43333 6.78698 6.5 6.99565 6.55 7.21266C6.6 7.42967 6.625 7.6553 6.625 7.88897C6.625 8.12264 6.6 8.34827 6.55 8.56528C6.5 8.78229 6.43333 8.99096 6.35 9.19127L13.25 13.2696C13.5 13.0528 13.7708 12.8775 14.0625 12.7439C14.3542 12.6103 14.6667 12.5435 15 12.5435C15.8333 12.5435 16.5417 12.8088 17.125 13.3392C17.7083 13.8697 18 14.5138 18 15.2718C18 16.0296 17.7083 16.6737 17.125 17.2042C16.5417 17.7347 15.8333 18 15 18Z"
              fill="currentColor"
            />
          </svg>
            Ask your question
          </a>
        </button>
      </div>
    </div>
  );
};

// Contact form data
const faqData = [
  {
    question: "1. Can I become a distributor for Dash Dynamic?",
    answer: "Please contact us to discuss further.",
  },
  {
    question:
      "2. I have a fleet of EV vehicles that I'd like to begin charging wirelessly. Where do I begin?",
    answer:
      "We are working on wireless charging upgrades for select vehicles and will be happy to discuss with you. Please submit a Contact Us form and we will get back to you.",
  },
  {
    question: "3. When will wireless charging be available?",
    answer:
      "Timing depends on car manufacturer and region. Please contact your manufacturer. In addition, Dash Dynamic has announced the ____________ upgrade for select EV models, available in beta later in 2024 — you can sign up to learn more at www.dashdynamic.in.",
  },
  {
    question: "4. Can I charge my EV wirelessly?",
    answer:
      "We have announced our Dash Dynamic wireless charging solution for select existing electric vehicles, which is retrofit in EVs that will be available in a limited beta later in 2025. You can sign up to stay informed at www.dashdynamic.in. We are also working with global automakers to have wireless charging supported from the factory in new vehicles.",
  },
  {
    question: "5. How wireless charging works?",
    answer:
      "We have announced our Dash Dynamic wireless charging solution for select existing electric vehicles, which is retrofit in EVs that will be available in a limited beta later in 2025. You can sign up to stay informed at www.dashdynamic.in. We are also working with global automakers to have wireless charging supported from the factory in new vehicles.",
  },
];

// Loading component
const LoadingSpinner = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-90 z-50">
    <div className="text-center">
      <svg
        className="w-16 h-16 mx-auto"
        viewBox="0 0 120 30"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000"
      >
        <circle cx="15" cy="15" r="15">
          <animate
            attributeName="r"
            from="15"
            to="15"
            begin="0s"
            dur="0.8s"
            values="15;9;15"
            calcMode="linear"
            repeatCount="indefinite"
          />
          <animate
            attributeName="fill-opacity"
            from="1"
            to="1"
            begin="0s"
            dur="0.8s"
            values="1;.5;1"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="60" cy="15" r="9" fillOpacity="0.3">
          <animate
            attributeName="r"
            from="9"
            to="9"
            begin="0s"
            dur="0.8s"
            values="9;15;9"
            calcMode="linear"
            repeatCount="indefinite"
          />
          <animate
            attributeName="fill-opacity"
            from="0.5"
            to="0.5"
            begin="0s"
            dur="0.8s"
            values=".5;1;.5"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="105" cy="15" r="15">
          <animate
            attributeName="r"
            from="15"
            to="15"
            begin="0s"
            dur="0.8s"
            values="15;9;15"
            calcMode="linear"
            repeatCount="indefinite"
          />
          <animate
            attributeName="fill-opacity"
            from="1"
            to="1"
            begin="0s"
            dur="0.8s"
            values="1;.5;1"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
      <p className="mt-4 text-gray-700">Sending your message...</p>
    </div>
  </div>
);

// Main Contact Page Component
export default function Contacts() {
  const [mobile, setMobile] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    setMobile(isMobile);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        "service_amtz0i7",
        "template_ntgx4hw",
        templateParams,
        "RYOQYT7UpicQ5iIXK"
      )
      .then(
        (result) => {
          console.log(result.text);
          setResponse({ success: true });
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error(error.text);
          setResponse({ success: false });
        }
      )
      .finally(() => {
        setLoading(false);
        // Auto-hide success message after 5 seconds
        if (response && response.success) {
          setTimeout(() => {
            setResponse(null);
          }, 5000);
        }
      });
  };

  return (
    <div className="bg-gray-100">
      {loading && <LoadingSpinner />}

      {/* Map Section */}
      <div className="relative h-96 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.8753988646936!2d77.18544407516454!3d28.543464688120398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d9a6426d987%3A0x48afdc51e54c8134!2sResearch%20and%20Innovation%20Park%20(R%26I)%20-%20IIT%20DELHI!5e0!3m2!1sen!2sin!4v1746595444435!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Dash is leading the way to a more sustainable future with a Charging
            as a Service business model and "invisible" charging infrastructure
            to support the mass adoption of electric vehicles.
          </p>
          
          <button
            onClick={() =>
              window.location.href =
                "https://wa.me/918882132785?text=Hello%2C%20I%20need%20more%20information%20about%20your%20product."
            }
            className="mt-8 inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors duration-300"
          >
            <span className="inline-flex items-center font-medium">
              Connect with us on
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="w-5 h-5 ml-2"
              />
            </span>
          </button>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">LET'S TALK</h2>
            <p className="text-xl text-gray-700 mb-8">
              Contact us for further information
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-gray-100 p-3 rounded-full">
                  <svg 
                    className="w-6 h-6 text-gray-600" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-gray-900 font-medium">Phone</p>
                  <p className="text-gray-600">+91 83034 29563</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-gray-100 p-3 rounded-full">
                  <svg 
                    className="w-6 h-6 text-gray-600" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-gray-900 font-medium">Email</p>
                  <p className="text-gray-600">hr@dashdynamic.in</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-gray-100 p-3 rounded-full">
                  <svg 
                    className="w-6 h-6 text-gray-600" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                    />
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-gray-900 font-medium">Address</p>
                  <p className="text-gray-600">Research and Innovation Park (R&I), IIT Delhi</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <form
              onSubmit={sendEmail}
              className="bg-white p-8 rounded-lg shadow-md space-y-6"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Send us a message
              </h2>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-medium transition-colors duration-300"
              >
                Send Message
              </button>

              {response && (
                <div 
                  className={`p-4 rounded-md ${
                    response.success 
                      ? "bg-green-100 text-green-800 border border-green-200" 
                      : "bg-red-100 text-red-800 border border-red-200"
                  }`}
                >
                  <div className="flex">
                    <div className="flex-shrink-0">
                      {response.success ? (
                        <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">
                        {response.success
                          ? "Message sent successfully! We'll get back to you soon."
                          : "Failed to send message. Please try again or contact us directly."}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <QnA data={faqData} />
      </div>
    </div>
  );
}