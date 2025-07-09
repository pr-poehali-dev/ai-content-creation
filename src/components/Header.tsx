import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-2xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          AI-Neosavr
        </div>
        <div className="hidden md:flex space-x-8">
          <a
            href="#services"
            className="hover:text-purple-400 transition-colors"
          >
            Услуги
          </a>
          <a
            href="#projects"
            className="hover:text-purple-400 transition-colors"
          >
            Проекты
          </a>
          <a href="#about" className="hover:text-purple-400 transition-colors">
            Обо мне
          </a>
          <a
            href="#contact"
            className="hover:text-purple-400 transition-colors"
          >
            Контакты
          </a>
        </div>
        <Button
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          asChild
        >
          <a
            href="https://t.me/neosavr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Связаться
          </a>
        </Button>
      </div>
    </nav>
  );
};

export default Header;
