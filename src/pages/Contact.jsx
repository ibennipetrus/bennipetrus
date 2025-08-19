import React, { useRef } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = formRef.current;
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      toast.error("Bitte fülle alle erforderlichen Felder aus!");
      return;
    }

    emailjs
      .sendForm(
        "service_9ipq3nr",
        "template_rmz0rd7",
        form,
        "wEeL7RZ4SzUO4jY2I"
      )
      .then(
        () => {
          toast.success("Danke für deine Nachricht!.");
          form.reset();
        },
        (error) => {
          toast.error("Fehler beim Absenden des Formulars.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  const copyEmailToClipboard = () => {
    const email = "hello@domain.com";
    navigator.clipboard
      .writeText(email)
      .then(() =>
        toast.success("E-Mail-Adresse wurde in die Zwischenablage kopiert!")
      )
      .catch((err) => {
        toast.error("Fehler beim Kopieren der E-Mail-Adresse.");
        console.error(err);
      });
  };

  return (
    <ReactLenis root>
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-12 animate-pulse">
          Contact Me
        </h1>

        <div className="flex flex-col md:flex-row w-full max-w-5xl gap-8">
          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex-1 bg-opacity-30 p-6 rounded-xl flex flex-col gap-6"
          >
            <label className="font-semibold text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              placeholder="John Smith"
              className="p-3 bg-transparent border-b-1 border-gray-700 focus:outline-none focus:border-gray-600 placeholder-gray-600"
            />

            <label className="font-semibold text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              placeholder="john@company.com"
              className="p-3 bg-transparent border-b-1 border-gray-700 focus:outline-none focus:border-gray-600 placeholder-gray-600"
            />

            <label className="font-semibold text-gray-300">
              What are you looking for?
            </label>
            <select
              name="project"
              className="p-3 bg-transparent border-b border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:border-gray-500"
            >
              <option className="bg-gray-900 text-white">Website design</option>
              <option className="bg-gray-900 text-white">Branding</option>
              <option className="bg-gray-900 text-white">UI/UX Design</option>
            </select>

            <label className="font-semibold text-gray-300">Budget</label>
            <select
              name="budget"
              className="p-3 bg-transparent border-b-1 border-gray-700 focus:outline-none focus:border-gray-600"
            >
              <option className="bg-gray-900 text-white">
                $1.000 - $2.000
              </option>
              <option className="bg-gray-900 text-white">
                $2.000 - $4.000
              </option>
              <option className="bg-gray-900 text-white">
                $4.000 - $8.000
              </option>
            </select>

            <label className="font-semibold text-gray-300">
              Project details
            </label>
            <textarea
              name="message"
              placeholder="Your Message"
              className="p-3 bg-transparent border-b-1 border-gray-700 focus:outline-none focus:border-gray-600 resize-y min-h-[120px] placeholder-gray-600"
            ></textarea>

            <button
              type="submit"
              className="mt-6 text-white !bg-transparent p-3 rounded font-semibold hover:!bg-white hover:!text-black transition-colors duration-300"
            >
              Submit
            </button>
          </form>

          {/* Schedule a call */}
          <div className="flex-1 flex flex-col justify-center items-center p-6">
            <a
              href="https://cal.com/yourname"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg md:text-xl font-semibold text-gray-200 underline hover:text-gray-700"
            >
              Schedule a call →
            </a>
          </div>
        </div>
      </div>
    </ReactLenis>
  );
};

export default Contact;
