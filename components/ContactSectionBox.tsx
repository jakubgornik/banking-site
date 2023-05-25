import { motion } from "framer-motion";
interface Props {
  title: string;
}

const ContactSectionBox = ({ title }: Props) => {
  return (
    <>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-[1440px]"
      >
        <div className="z-10 px-12 py-14">
          <div className="relative flex max-w-[500px] flex-col gap-8 text-white">
            <svg
              className="absolute -left-6"
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 20L15.5 -6.77527e-07L21.5 -9.39795e-07L6 20L0 20Z"
                fill="#39E8EA"
              />
            </svg>
            <h5 className=" text-2xl font-bold ">{title}</h5>
            <div className="relative">
              <div className="absolute top-2 -left-4 h-2 w-2 rounded-full bg-mint"></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                magnam perferendis temporibus? Sequi, commodi! Eligendi sint
                illum omnis assumenda qui incidunt eos quos, necessitatibus,
                autem ipsum debitis! Illum, officiis totam?
              </p>
            </div>
            <div className="relative">
              <div className="absolute top-2 -left-4 h-2 w-2 rounded-full bg-mint"></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                velit optio tempora praesentium beatae cupiditate?
              </p>
            </div>
            <div className="relative">
              <div className="absolute top-2 -left-4 h-2 w-2 rounded-full bg-mint"></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, quisquam!
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ContactSectionBox;
