'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { div } from 'framer-motion/client';

interface CardProps {
  building: string;
  roomNumber: string;
  seatingSpaces: string;
  groupOrIndividual: string;
  typeOfSpace: string;
  image: string;
}

function Card({ building, roomNumber, seatingSpaces, groupOrIndividual, typeOfSpace, image }: CardProps) {
  const [studySpaces, setStudySpaces] = useState([]);

  //fetch data from api
  useEffect(() => {
    const fetchStudySpaces = async () => {
      const response = await fetch('/api/GeneralSpaces');
      const data = await response.json();
      console.log(data);
    };
    fetchStudySpaces();
  }, []);

  return <div className="card">placeholder</div>;
}
