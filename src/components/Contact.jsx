import React, { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function Contact({ darkMode }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/ajiprasetia456@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
            _subject: formData.get("_subject"),
            _template: formData.get("_template"),
            _captcha: formData.get("_captcha"),
          }),
        },
      );

      if (response.ok) {
        setIsSubmitted(true);
        e.target.reset();
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? "bg-gray-950" : "bg-gray-50"}`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Contact
            </span>
          </h2>
          <p
            className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            Punya project atau ingin berkolaborasi? Hubungi saya!
          </p>
        </div>

        {/* Success Message */}
        {isSubmitted && (
          <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-600 rounded-lg flex items-center space-x-3">
            <CheckCircle
              className="text-green-600 dark:text-green-400"
              size={24}
            />
            <p className="text-green-800 dark:text-green-200 font-medium">
              Terima kasih! Pesan Anda telah berhasil dikirim.
            </p>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className={`rounded-xl p-8 shadow-lg ${darkMode ? "bg-gray-900" : "bg-white"}`}
        >
          {/* Hidden fields untuk konfigurasi FormSubmit */}
          <input
            type="hidden"
            name="_subject"
            value="🚀 [PORTFOLIO] Pesan Baru dari Website!"
          />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />

          <div className="space-y-6">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className={`block text-sm font-medium mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}
              >
                Nama
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                disabled={isSubmitting}
                className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed ${
                  darkMode
                    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                    : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400"
                }`}
                placeholder="Nama Anda"
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className={`block text-sm font-medium mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                disabled={isSubmitting}
                className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed ${
                  darkMode
                    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                    : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400"
                }`}
                placeholder="email@example.com"
              />
            </div>

            {/* Message Input */}
            <div>
              <label
                htmlFor="message"
                className={`block text-sm font-medium mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}
              >
                Pesan
              </label>
              <textarea
                id="message"
                name="message"
                required
                disabled={isSubmitting}
                rows="5"
                className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none disabled:opacity-50 disabled:cursor-not-allowed ${
                  darkMode
                    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                    : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400"
                }`}
                placeholder="Tulis pesan Anda di sini..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              <span>{isSubmitting ? "Mengirim..." : "Kirim Pesan"}</span>
              {!isSubmitting && <Send size={18} />}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
