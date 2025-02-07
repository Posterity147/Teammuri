import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between mr-7 ml-8 mt-10">
      {/* Contact Form Section */}
      <div id="contact-us" className="w-full md:w-1/2 p-4">
        <div id="container" className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <h1 className="text-3xl font-bold text-center mb-4 animate__animated animate__fadeIn">Contact Us</h1>
          <p className="text-center text-lg mb-6 animate__animated animate__fadeIn animate__delay-1s">
            We'd love to hear from you, please fill out the information below, and we'll get back to you swiftly.
          </p>
          <div id="contact-form" className="animate__animated animate__fadeIn animate__delay-2s">
            <form action="/submit-contact" method="post">
              <div id="form-group" className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 hover:border-indigo-500"
                />
              </div>
              <div id="form-group" className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 hover:border-indigo-500"
                />
              </div>
              <div id="form-group" className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Your Phone Number"
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 hover:border-indigo-500"
                />
              </div>
              <div id="form-group" className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  placeholder="Your Message"
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 hover:border-indigo-500"
                ></textarea>
              </div>
              <button
                type="submit"
                id="cta-button"
                className="w-full py-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
          width="600"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          className="transform transition-all duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Contact;
