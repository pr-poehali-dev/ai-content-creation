import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "AI Image Generation",
    description:
      "Усовершенствованная система генерации изображений с использованием нейронных сетей",
    imageUrl: "/img/ea656124-73e4-431b-a6cc-e9bba1d1487e.jpg",
    imageAlt: "AI Image Generation",
    gradientFrom: "from-purple-900/30",
    gradientTo: "to-blue-900/30",
    borderColor: "border-purple-500/30",
    hoverBorderColor: "hover:border-purple-400/70",
    buttonBorderColor: "border-purple-400",
    buttonTextColor: "text-purple-300",
    link: "https://www.youtube.com/shorts/yntRp6e1nWc",
  },
  {
    title: "Neural Audio Processing",
    description:
      "Обработка и улучшение звука в реальном времени с использованием алгоритмов ИИ",
    imageUrl: "/img/011cd08f-9e19-4e8f-885a-7ca142320815.jpg",
    imageAlt: "Neural Audio Processing",
    gradientFrom: "from-blue-900/30",
    gradientTo: "to-indigo-900/30",
    borderColor: "border-blue-500/30",
    hoverBorderColor: "hover:border-blue-400/70",
    buttonBorderColor: "border-blue-400",
    buttonTextColor: "text-blue-300",
    link: "https://www.youtube.com/shorts/dAEwjsN_B5U",
  },
  {
    title: "Video Generation AI",
    description:
      "Синтез видео нового поколения с использованием современных моделей ИИ",
    imageUrl: "/img/f6ab6f74-5816-4282-807f-19ee3822ab99.jpg",
    imageAlt: "Video Generation AI",
    gradientFrom: "from-indigo-900/30",
    gradientTo: "to-pink-900/30",
    borderColor: "border-indigo-500/30",
    hoverBorderColor: "hover:border-indigo-400/70",
    buttonBorderColor: "border-indigo-400",
    buttonTextColor: "text-indigo-300",
    link: "https://www.youtube.com/shorts/Z4f5-lvU8wk",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-black/20">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Проекты
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
