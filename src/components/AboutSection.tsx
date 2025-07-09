import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const stats = [
  {
    icon: "Award",
    title: "Экспертиза",
    description: "5+ лет работы с AI-технологиями",
    gradientFrom: "from-purple-900/40",
    gradientTo: "to-blue-900/40",
    borderColor: "border-purple-500/30",
    iconGradientFrom: "from-purple-500",
    iconGradientTo: "to-pink-500",
  },
  {
    icon: "Users",
    title: "Клиенты",
    description: "100+ успешных проектов",
    gradientFrom: "from-blue-900/40",
    gradientTo: "to-indigo-900/40",
    borderColor: "border-blue-500/30",
    iconGradientFrom: "from-blue-500",
    iconGradientTo: "to-cyan-500",
  },
  {
    icon: "Zap",
    title: "Скорость",
    description: "Быстрое выполнение заказов",
    gradientFrom: "from-indigo-900/40",
    gradientTo: "to-pink-900/40",
    borderColor: "border-indigo-500/30",
    iconGradientFrom: "from-indigo-500",
    iconGradientTo: "to-purple-500",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex items-center justify-center lg:order-2">
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/files/21fc0e79-e4e3-4386-a3dd-649a12081e3c.png"
                alt="AI-специалист Neosavr"
                className="w-80 h-80 object-cover rounded-full border-4 border-purple-500/50 shadow-2xl shadow-purple-500/20"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 to-blue-500/20"></div>
            </div>
          </div>
          <div className="lg:order-1">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Обо мне
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Разрабатываю рекламный контент, видеоконтент, аудиоконтент по
              идеям заказчиков. Делаю ретушь старых фотографий и анимацию.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Помогаю людям в воплощении их идей для создания собственного
              бизнеса и рекламного продвижения.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-black font-bold"
              asChild
            >
              <a
                href="https://t.me/neosavr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="MessageCircle" className="mr-2" />
                Готов к сотрудничеству
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-16 space-y-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className={`bg-gradient-to-r ${stat.gradientFrom} ${stat.gradientTo} ${stat.borderColor}`}
            >
              <CardContent className="p-6 flex items-center space-x-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${stat.iconGradientFrom} ${stat.iconGradientTo} rounded-full flex items-center justify-center`}
                >
                  <Icon name={stat.icon} size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white">{stat.title}</h4>
                  <p className="text-gray-300">{stat.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
