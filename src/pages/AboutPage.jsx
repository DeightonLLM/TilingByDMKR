
import React from 'react';
import { motion } from 'framer-motion';
import { Building, Users, Target } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12 md:mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          About <span className="gradient-text">DMKR.co.uk</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Dedicated to transforming spaces with exceptional tiling craftsmanship, quality materials, and unparalleled customer service.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="p-6 bg-secondary/50 rounded-lg border border-border/50 text-center"
        >
          <Building className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Our Company</h2>
          <p className="text-muted-foreground text-sm">Founded with a passion for precision and design, DMKR.co.uk has grown into a trusted name for high-quality tiling solutions in the region.</p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="p-6 bg-secondary/50 rounded-lg border border-border/50 text-center"
        >
          <Users className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Our Team</h2>
          <p className="text-muted-foreground text-sm">Our team consists of experienced, licensed professionals dedicated to delivering flawless results and ensuring complete client satisfaction.</p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="p-6 bg-secondary/50 rounded-lg border border-border/50 text-center"
        >
          <Target className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p className="text-muted-foreground text-sm">To provide superior tiling services that enhance the beauty and value of every space, built on a foundation of integrity, quality, and reliability.</p>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="prose prose-invert max-w-none lg:prose-lg text-muted-foreground"
      >
        <p>At DMKR, we believe that the right tiling can completely redefine a space. Whether it's a sleek, modern kitchen backsplash, a luxurious bathroom retreat, or a durable and stylish commercial floor, we approach every project with the same level of dedication and attention to detail.</p>
        <p>We work closely with homeowners, designers, and contractors, offering expert advice and guidance from material selection through to final installation. Our commitment to using premium materials and proven techniques ensures a finish that is not only beautiful but also built to last. We stand behind our work with a comprehensive warranty, giving you peace of mind.</p>
        <p>Thank you for considering DMKR for your next tiling project. We look forward to helping you bring your vision to life.</p>
      </motion.div>
    </div>
  );
};

export default AboutPage;
  