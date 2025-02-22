import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

function Contact() {
  const form = useRef();

  const notify = () =>
    toast.success("Message envoyé !", {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      bottomOffset: 50,
    });

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
    notify();
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
      <div className="flex flex-col items-center font-bold text-3xl">
        <p>Mail : baris.gunay.pro@gmail.com</p>
        <p>Téléphone : 0781135767</p>
      </div>
    </>
  );
}

export default Contact;
