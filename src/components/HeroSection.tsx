import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 px-6">
      <div className="container mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent font-orbitron">
            AI VIDEO
            <br />
            CONTENT
          </h1>
          <h2 className="text-2xl md:text-4xl font-light mb-8 text-gray-300 font-orbitron">
            SPECIALIST
          </h2>
        </div>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Специалист по созданию видеоконтента с использованием нейросетей.
          <br />
          Генерация изображений, видео и аудио контента при помощи ИИ.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-black font-bold"
          >
            <Icon name="Play" className="mr-2" />
            Моя видеовизитка
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-purple-500 text-purple-300 hover:bg-purple-500/20"
            asChild
          >
            <a
              href="https://www.youtube.com/@neosavr-n4v"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="Portfolio" className="mr-2" fallback="Briefcase" />
              Портфолио
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
