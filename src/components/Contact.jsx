import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <motion.p
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold max-[900px]:text-center pb-8 max-[500px]:text-3xl"
      >
        Me <span className="text-secondary">contacter</span>
      </motion.p>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col w-1/2 max-[500px]:w-11/12 max-[1440px]:w-3/4"
      >
        <label htmlFor="from_name" className="text-lg font-bold">
          Name
        </label>
        <input
          type="text"
          name="from_name"
          required
          id="from_name"
          className="p-2"
        />
        <label htmlFor="from_email" className="text-lg font-bold">
          Email
        </label>
        <input
          type="email"
          name="from_email"
          required
          id="from_email"
          className="p-2"
        />
        <label className="text-lg font-bold" htmlFor="sujet">
          Sujet
        </label>
        <input type="text" name="sujet" id="sujet" className="p-2" />
        <label htmlFor="message" className="text-lg font-bold">
          Message
        </label>
        <textarea name="message" id="message" className="p-2" />
        <button
          type="submit"
          value="Send"
          className="mt-6 bg-primary hover:bg-secondary hover:text-white transition p-2 text-secondary font-bold"
        >
          Envoyer
        </button>
      </form>
    </>
  );
}

export default Contact;
