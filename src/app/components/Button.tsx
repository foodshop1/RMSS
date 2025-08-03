'use client';

import { motion } from 'framer-motion';

export default function Button() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-blue-500 text-white px-4 py-2 rounded-md"
    >
      Click me
    </motion.button>
  );
}
