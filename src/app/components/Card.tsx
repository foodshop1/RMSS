'use client';
import { motion } from 'framer-motion';

interface CardProps {
  building: string;
  roomNumber: string;
  seatingSpaces: string;
  groupOrIndividual: string;
  typeOfSpace: string;
  image: string;
}

export default function Card({
  building,
  roomNumber,
  seatingSpaces,
  groupOrIndividual,
  typeOfSpace,
  image,
}: CardProps) {
  return (
    <motion.div
      className="card bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="mb-4">
        <img
          src={image}
          alt={`${building} ${roomNumber}`}
          className="w-full h-48 object-cover rounded-md"
          onError={(e) => {
            // Fallback image if the study space image doesn't exist
            e.currentTarget.src = '/images/placeholder.jpg';
          }}
        />
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-gray-800">
          {building} - {roomNumber}
        </h3>

        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
          <div>
            <span className="font-medium">Seating:</span> {seatingSpaces}
          </div>
          <div>
            <span className="font-medium">Type:</span> {groupOrIndividual}
          </div>
        </div>

        <div className="text-sm text-gray-600">
          <span className="font-medium">Space Type:</span> {typeOfSpace}
        </div>
      </div>
    </motion.div>
  );
}
