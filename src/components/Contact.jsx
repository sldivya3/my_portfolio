import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ynp72xw",       // ✅ Your Service ID
        "template_iendbyy",       // 🔁 Replace with your Template ID
        form.current,
        "48E6j0NJDcmdl61T7"   // 🔁 Replace with your Public Key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message.");
          console.error(error);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 via-gray-300 to-gray-800 flex items-center justify-center px-6 py-1">
      <div className="w-full max-w-3xl bg-white/30 backdrop-blur-md p-10 rounded-3xl shadow-xl">
        <h2 className="text-4xl font-bold text-center mb-6 text-black">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-lg bg-white text-black border border-gray-400 focus:outline-none"
          />
          {/* <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-lg bg-white text-black border border-gray-400 focus:outline-none"
          /> */}
          <input
            type="text"
            name="title"
            placeholder="Subject"
            required
            className="w-full px-4 py-3 rounded-lg bg-white text-black border border-gray-400 focus:outline-none"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 rounded-lg bg-white text-black border border-gray-400 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
