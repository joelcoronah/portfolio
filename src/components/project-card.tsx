import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl: string;
  codeUrl: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  imageUrl,
  demoUrl,
  codeUrl,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <Card className="overflow-hidden">
        <CardBody className="p-0">
          <Image
            removeWrapper
            alt={title}
            className="w-full h-48 object-cover"
            src={imageUrl}
          />
          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">{title}</h3>
            <p className="text-default-500 text-sm mb-4">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 bg-default-100 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </CardBody>
        <CardFooter className="gap-2">
          <Button
            as="a"
            href={demoUrl}
            rel="noopener noreferrer"
            size="sm"
            startContent={<Icon icon="lucide:external-link" width={16} />}
            target="_blank"
          >
            Live Demo
          </Button>
          <Button
            as="a"
            href={codeUrl}
            rel="noopener noreferrer"
            size="sm"
            startContent={<Icon icon="lucide:code" width={16} />}
            target="_blank"
            variant="flat"
          >
            View Code
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
