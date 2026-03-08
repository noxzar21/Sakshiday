import { motion } from "motion/react";

export default function Finale() {
  return (
    <section className="min-h-screen snap-start flex flex-col justify-center items-center text-center px-6 text-gray-200">

      <div className="max-w-2xl text-2xl sm:text-3xl space-y-8">
        <p>Ki agar talaash karun to koi mil hi jaayega,</p>
        <p>Magar tumhari tarah kon mujhko chaahega?</p>
        <p>Ki chahaton se dekhega zaroor tumko koi,</p>
        <p>Magar vo aankhein hamari kaha se laayega.</p>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mt-20 text-lg text-gray-300"
      >
        And if life asked me again ...
        <br />
        who I would choose
        <br />
        in every lifetime.
        <br />
        the answer would still be the same.
        <br />
        <br />  
        <span className=" text-2xl border-2  rounded-md p-1 bg-gray-900 border-black
         font-romantic font-extrabold">YOU</span>.
      </motion.p>

      <p className="mt-14 text-amber-100 text-lg font-romantic tracking-wide">
        — Lakshyaraj
      </p>
    </section>
  );
}