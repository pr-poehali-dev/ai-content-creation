import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Генерация Изображений",
    description: "Эксперт в Midjourney, Leonardo, Flux, Flexy",
    iconName: "Image",
    gradientFrom: "from-purple-900/50",
    gradientTo: "to-blue-900/50",
    borderColor: "border-purple-500/30",
    hoverBorderColor: "hover:border-purple-400/50",
    buttonBorderColor: "border-purple-400",
    buttonTextColor: "text-purple-300",
    link: "https://www.youtube.com/shorts/ENoUF_bxdHs",
  },
  {
    title: "Видео производство",
    description: "Генерация видео, видеомонтаж и создание аватаров",
    iconName: "Video",
    gradientFrom: "from-blue-900/50",
    gradientTo: "to-indigo-900/50",
    borderColor: "border-blue-500/30",
    hoverBorderColor: "hover:border-blue-400/50",
    buttonBorderColor: "border-blue-400",
    buttonTextColor: "text-blue-300",
    link: "https://www.youtube.com/shorts/yntRp6e1nWc",
  },
  {
    title: "Аудио AI",
    description: "Большой опыт работы с аудио нейросетями",
    iconName: "AudioWaveform",
    iconFallback: "Volume2",
    gradientFrom: "from-indigo-900/50",
    gradientTo: "to-purple-900/50",
    borderColor: "border-indigo-500/30",
    hoverBorderColor: "hover:border-indigo-400/50",
    buttonBorderColor: "border-indigo-400",
    buttonTextColor: "text-indigo-300",
    link: "https://www.youtube.com/shorts/Z4f5-lvU8wk",
  },
  {
    title: "Работа с чат-ботами",
    description: "ChatGPT, Claude, Gemini, DeepSeek, Qwen, Mistral",
    iconName: "Bot",
    gradientFrom: "from-pink-900/50",
    gradientTo: "to-purple-900/50",
    borderColor: "border-pink-500/30",
    hoverBorderColor: "hover:border-pink-400/50",
    buttonBorderColor: "border-pink-400",
    buttonTextColor: "text-pink-300",
    link: "https://www.youtube.com/shorts/dAEwjsN_B5U",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Услуги
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
