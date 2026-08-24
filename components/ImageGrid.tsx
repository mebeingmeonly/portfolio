import React, { useState } from 'react';
import { motion } from 'framer-motion';

const works = [
  {
    image: "https://res.cloudinary.com/dhbtx0ajy/image/upload/v1770637792/frame-2_pkyluc.avif",
    gif: "https://res.cloudinary.com/dhbtx0ajy/image/upload/v1777458167/copingt_f75rw6.gif",
    alt: "Work sample 3",
  },
  {
    image: "https://res.cloudinary.com/dhbtx0ajy/image/upload/v1774120955/frame-36_scilxk.avif",
    gif: "https://res.cloudinary.com/dhbtx0ajy/image/upload/v1777458166/Arch_crn6el.gif",
    alt: "Work sample 4",
  },
  {
    image: "https://res.cloudinary.com/dhbtx0ajy/image/upload/v1777458377/frame-1329_qjio6j.avif",
    gif: "https://res.cloudinary.com/dhbtx0ajy/image/upload/v1777458167/unimic_upr3uu.gif",
    alt: "Work sample 5",
  },
  {
    image: "https://res.cloudinary.com/dhbtx0ajy/image/upload/v1774121343/frame-34_aeblpl.avif",
    gif: "https://res.cloudinary.com/dhbtx0ajy/image/upload/v1777458166/hemisphere_zx36iu.gif",
    alt: "Work sample 6",
  },
  {
    image: "https://res.cloudinary.com/dhbtx0ajy/image/upload/v1770637792/frame-1_dd60dz.avif",
    gif: "https://res.cloudinary.com/dhbtx0ajy/image/upload/v1777458166/Aerie_lamihh.gif", // add cloudinary gif URL here
    alt: "Work sample 1",
  },
  {
    image: "https://res.cloudinary.com/dhbtx0ajy/image/upload/v1770637793/frame-3_xpuhef.avif",
    gif: "https://res.cloudinary.com/dhbtx0ajy/image/upload/v1777458167/anorama_ruhrtg.gif",
    alt: "Work sample 2",
  },
];

const WorkCard: React.FC<{ work: typeof works[0]; idx: number }> = ({ work, idx }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="aspect-[1.43/1] overflow-hidden rounded-xl bg-neutral-900 relative cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Static image */}
      <img
        src={work.image}
        alt={work.alt}
        className="w-full h-full object-cover absolute inset-0 transition-opacity duration-300"
        style={{ opacity: hovered && work.gif ? 0 : 1 }}
        loading="lazy"
      />

      {/* GIF — preloaded and renders immediately on hover */}
      {work.gif && (
        <img
          src={work.gif}
          alt={work.alt}
          className="w-full h-full object-cover absolute inset-0 transition-opacity duration-300"
          style={{ opacity: hovered ? 1 : 0 }}
          loading="lazy"
        />
      )}

      {/* Subtle scale on hover */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: hovered ? 1.04 : 1 }}
        transition={{ duration: 1.6, ease: [0.19, 1, 0.22, 1] }}
        style={{ transformOrigin: 'center' }}
      />
    </motion.div>
  );
};

export const ImageGrid: React.FC = () => {
  return (
    <section className="px-5 md:px-6 py-16 md:py-24 cursor-default overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {works.map((work, idx) => (
          <WorkCard key={idx} work={work} idx={idx} />
        ))}
      </div>
    </section>
  );
};
