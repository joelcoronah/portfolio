import { Avatar } from "@heroui/avatar";
import { Card, CardBody } from "@heroui/card";
import { motion } from "framer-motion";
import React from "react";

interface RecommendationProps {
  name: string;
  position: string;
  company: string;
  text: string;
  avatarUrl: string;
}

const Recommendation: React.FC<RecommendationProps> = ({
  name,
  position,
  company,
  text,
  avatarUrl,
}) => {
  return (
    <Card>
      <CardBody className="p-6">
        <p className="text-default-500 italic mb-4">"{text}"</p>
        <div className="flex items-center gap-4">
          <Avatar isBordered className="w-200 h-200" src={avatarUrl} />
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-default-500 text-sm">
              {position}, {company}
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export const RecommendationsSection: React.FC = () => {
  const recommendations = [
    {
      name: "Sarah Johnson",
      position: "CTO",
      company: "Tech Innovations Inc.",
      text: "John is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills make him an invaluable team member.",
      avatarUrl: "https://img.heroui.chat/image/avatar?w=100&h=100&u=2",
    },
    {
      name: "Michael Chen",
      position: "Product Manager",
      company: "Digital Solutions Ltd.",
      text: "Working with John was a pleasure. He has a deep understanding of modern web technologies and always finds elegant solutions to complex problems.",
      avatarUrl: "https://img.heroui.chat/image/avatar?w=100&h=100&u=3",
    },
  ];

  return (
    <motion.section
      className="py-8"
      id="recommendations"
      initial={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
    >
      <h2 className="text-2xl font-semibold mb-6">Recommendations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recommendations.map((recommendation, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Recommendation {...recommendation} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
