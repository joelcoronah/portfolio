import { Button } from "@heroui/button";
import { Card } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import { ExperienceCard } from "@/components/experience-card";
import { Header } from "@/components/header";
import { ProfilePhoto } from "@/components/profile-photo";
import { ProjectCard } from "@/components/project-card";
import { RecommendationsSection } from "@/components/recommendations-section";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <motion.section
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row items-center gap-8 py-12"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="md:w-2/3">
            <motion.h1
              animate={{ opacity: 1 }}
              className="text-4xl font-semibold mb-4"
              initial={{ opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              John Doe
            </motion.h1>
            <motion.h2
              animate={{ opacity: 1 }}
              className="text-xl text-default-600 mb-6"
              initial={{ opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Software Developer
            </motion.h2>
            <motion.p
              animate={{ opacity: 1 }}
              className="text-default-500 mb-6"
              initial={{ opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              I&apos;m a passionate software developer with expertise in React,
              TypeScript, and Node.js. I focus on creating clean, efficient, and
              user-friendly applications that solve real-world problems.
            </motion.p>
            <motion.div
              animate={{ opacity: 1 }}
              className="flex gap-4"
              initial={{ opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Button
                as={Link}
                color="primary"
                href="#projects"
                variant="solid"
              >
                View Projects
              </Button>
              <Button as={Link} href="#contact" variant="flat">
                Contact Me
              </Button>
            </motion.div>
          </div>
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            className="md:w-1/3 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <ProfilePhoto />
          </motion.div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          className="py-8"
          id="projects"
          initial={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              codeUrl="#"
              demoUrl="#"
              description="A full-featured e-commerce solution with product management, cart functionality, and payment processing."
              imageUrl="https://img.heroui.chat/image/dashboard?w=600&h=400&u=1"
              tags={["React", "Node.js", "MongoDB"]}
              title="E-commerce Platform"
            />
            <ProjectCard
              codeUrl="#"
              demoUrl="#"
              description="A productivity application for managing tasks, projects, and deadlines with team collaboration features."
              imageUrl="https://img.heroui.chat/image/dashboard?w=600&h=400&u=2"
              tags={["TypeScript", "React", "Firebase"]}
              title="Task Management App"
            />
            <ProjectCard
              codeUrl="#"
              demoUrl="#"
              description="Real-time weather forecasting application with location-based services and interactive maps."
              imageUrl="https://img.heroui.chat/image/dashboard?w=600&h=400&u=3"
              tags={["JavaScript", "APIs", "CSS"]}
              title="Weather Dashboard"
            />
            <ProjectCard
              codeUrl="#"
              demoUrl="#"
              description="Analytics dashboard for tracking social media engagement, growth metrics, and audience insights."
              imageUrl="https://img.heroui.chat/image/dashboard?w=600&h=400&u=4"
              tags={["React", "Chart.js", "Python"]}
              title="Social Media Analytics"
            />
          </div>
        </motion.section>

        <Divider className="my-8" />

        {/* Experience Section */}
        <motion.section
          className="py-8"
          id="experience"
          initial={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Experience</h2>
          <div className="space-y-6 flex flex-col gap-6">
            <ExperienceCard
              company="Tech Innovations Inc."
              description="Lead the development of the company's flagship web application, managing a team of 4 developers and implementing best practices for code quality and performance."
              period="2021 - Present"
              position="Senior Frontend Developer"
            />
            <ExperienceCard
              company="Digital Solutions Ltd."
              description="Developed and maintained multiple client projects using React, Node.js, and MongoDB. Implemented CI/CD pipelines and improved application performance by 40%."
              period="2018 - 2021"
              position="Full Stack Developer"
            />
            <ExperienceCard
              company="WebCraft Agency"
              description="Assisted in the development of client websites and web applications. Gained experience in responsive design, JavaScript frameworks, and backend integration."
              period="2016 - 2018"
              position="Junior Developer"
            />
          </div>
        </motion.section>

        <Divider className="my-8" />

        {/* Recommendations Section */}
        <RecommendationsSection />

        <Divider className="my-8" />

        {/* Contact Section */}
        <motion.section
          className="py-8"
          id="contact"
          initial={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
          <Card className="p-6">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <p className="text-default-500 mb-6">
                  I&apos;m always open to discussing new projects, creative
                  ideas, or opportunities to be part of your vision.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon className="text-default-500" icon="lucide:mail" />
                    <Link color="foreground" href="mailto:hello@johndoe.com">
                      hello@johndoe.com
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon className="text-default-500" icon="lucide:phone" />
                    <Link color="foreground" href="tel:+1234567890">
                      +1 (234) 567-890
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon className="text-default-500" icon="lucide:map-pin" />
                    <span>San Francisco, CA</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-lg font-medium mb-4">Connect with me</h3>
                <div className="flex gap-4">
                  <Button
                    isExternal
                    isIconOnly
                    as={Link}
                    href="https://github.com/"
                    variant="flat"
                  >
                    <Icon icon="logos:github-icon" width={24} />
                  </Button>
                  <Button
                    isExternal
                    isIconOnly
                    as={Link}
                    href="https://linkedin.com/"
                    variant="flat"
                  >
                    <Icon icon="logos:linkedin-icon" width={24} />
                  </Button>
                  <Button
                    isExternal
                    isIconOnly
                    as={Link}
                    href="https://twitter.com/"
                    variant="flat"
                  >
                    <Icon icon="logos:twitter" width={24} />
                  </Button>
                  <Button
                    isExternal
                    isIconOnly
                    as={Link}
                    href="https://dribbble.com/"
                    variant="flat"
                  >
                    <Icon icon="logos:dribbble-icon" width={24} />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.section>
      </main>

      <footer className="border-t border-divider py-6 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center text-default-500">
          <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
