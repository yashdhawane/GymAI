import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
  return (
    <div className="bg-black">
      <div className="flex h-24 items-center justify-center">
        <span className="font-space-grotesk font-semibold uppercase text-white text-4xl mt-52">
          Services
        </span>
      </div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 0.7], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 px-8">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
      
    </section>
  );
};

const Card = ({ card }:any) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center opacity-0 group-hover:opacity-100">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    url: "gymlogo.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "dumbbel.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "dumbbel.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "dumbbel.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "dumbbel.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "dumbbel.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "dumbbel.jpg",
    title: "Title 7",
    id: 7,
  },
  {
    url: "dumbbel.jpg",
    title: "Title 8",
    id: 8,
  },
  {
    url: "dumbbel.jpg",
    title: "Title 9",
    id: 9,
  },{
    url: "dumbbel.jpg",
    title: "Title 19",
    id: 19,
  },{
    url: "dumbbel.jpg",
    title: "Title 119",
    id: 119,
  },{
    url: "dumbbel.jpg",
    title: "Title 1219",
    id: 1219,
  },
];