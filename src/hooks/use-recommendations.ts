import React from "react";

interface Recommendation {
  id: string;
  name: string;
  position: string;
  company: string;
  text: string;
  avatarUrl: string;
}

export const useRecommendations = () => {
  const [recommendations, setRecommendations] = React.useState<
    Recommendation[]
  >([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate API call with timeout
    const fetchRecommendations = async () => {
      setIsLoading(true);

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Mock data
      const data: Recommendation[] = [
        {
          id: "1",
          name: "Sarah Johnson",
          position: "Product Manager",
          company: "Tech Innovations Inc.",
          text: "John is an exceptional developer who consistently delivers high-quality code. His attention to detail and problem-solving skills make him an invaluable team member.",
          avatarUrl: "https://img.heroui.chat/image/avatar?w=200&h=200&u=10",
        },
        {
          id: "2",
          name: "Michael Chen",
          position: "CTO",
          company: "Digital Solutions Ltd.",
          text: "Working with John was a pleasure. He has a deep understanding of modern web technologies and always finds elegant solutions to complex problems.",
          avatarUrl: "https://img.heroui.chat/image/avatar?w=200&h=200&u=11",
        },
        {
          id: "3",
          name: "Emily Rodriguez",
          position: "Senior Developer",
          company: "WebCraft Agency",
          text: "John's technical expertise and collaborative approach made our project a success. He's not only a skilled developer but also a great mentor to junior team members.",
          avatarUrl: "https://img.heroui.chat/image/avatar?w=200&h=200&u=12",
        },
        {
          id: "4",
          name: "David Kim",
          position: "Project Lead",
          company: "Innovative Systems",
          text: "I've worked with many developers, but John stands out for his commitment to quality and his ability to translate business requirements into technical solutions.",
          avatarUrl: "https://img.heroui.chat/image/avatar?w=200&h=200&u=13",
        },
      ];

      setRecommendations(data);
      setIsLoading(false);
    };

    fetchRecommendations();
  }, []);

  return { recommendations, isLoading };
};
