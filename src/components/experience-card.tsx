import { Card, CardBody } from "@heroui/card";
import { motion } from "framer-motion";
import React from "react";

interface ExperienceCardProps {
  company: string;
  position: string;
  period: string;
  description: string;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  position,
  period,
  description,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <Card>
        <CardBody className="p-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
            <div>
              <h3 className="text-lg font-medium">{position}</h3>
              <p className="text-default-600">{company}</p>
            </div>
            <p className="text-default-500 text-sm mt-1 md:mt-0">{period}</p>
          </div>
          <p className="text-default-500 text-sm">{description}</p>
        </CardBody>
      </Card>
    </motion.div>
  );
};
