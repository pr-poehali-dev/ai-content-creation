import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Navigation */}
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
            <a
              href="#about"
              className="hover:text-purple-400 transition-colors"
            >
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

      {/* Hero Section */}
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

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Услуги
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 border-purple-500/30 hover:border-purple-400/50 transition-all hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Icon name="Image" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  Генерация Изображений
                </h3>
                <p className="mb-4 text-slate-800">
                  Эксперт в Midjourney, Leonardo, Flux, Flexy
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-purple-400 text-purple-300"
                >
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 border-blue-500/30 hover:border-blue-400/50 transition-all hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Icon name="Video" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  Видео производство
                </h3>
                <p className="mb-4 text-slate-800">
                  Генерация видео, видеомонтаж и создание аватаров
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-blue-400 text-blue-300"
                >
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border-indigo-500/30 hover:border-indigo-400/50 transition-all hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Icon
                    name="AudioWaveform"
                    size={32}
                    className="text-white"
                    fallback="Volume2"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Аудио AI</h3>
                <p className="mb-4 text-slate-800">
                  Большой опыт работы с аудио нейросетями
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-indigo-400 text-indigo-300"
                >
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-pink-900/50 to-purple-900/50 border-pink-500/30 hover:border-pink-400/50 transition-all hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Icon name="Bot" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  Работа с чат-ботами
                </h3>
                <p className="mb-4 text-slate-800">
                  ChatGPT, Claude, Gemini, DeepSeek, Qwen, Mistral
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-pink-400 text-pink-300"
                >
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-black/20">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Проекты
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/30 hover:border-purple-400/70 transition-all hover:scale-105 group">
              <CardContent className="p-0">
                <div className="h-48 rounded-t-lg relative overflow-hidden">
                  <img
                    src="/img/ea656124-73e4-431b-a6cc-e9bba1d1487e.jpg"
                    alt="AI Image Generation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      AI Image Generation
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="mb-4 text-slate-800">
                    Усовершенствованная система генерации изображений с
                    использованием нейронных сетей
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-purple-400 text-purple-300"
                  >
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 border-blue-500/30 hover:border-blue-400/70 transition-all hover:scale-105 group">
              <CardContent className="p-0">
                <div className="h-48 rounded-t-lg relative overflow-hidden">
                  <img
                    src="/img/011cd08f-9e19-4e8f-885a-7ca142320815.jpg"
                    alt="Neural Audio Processing"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      Neural Audio Processing
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="mb-4 text-slate-800">
                    Обработка и улучшение звука в реальном времени с
                    использованием алгоритмов ИИ
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-400 text-blue-300"
                  >
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-indigo-900/30 to-pink-900/30 border-indigo-500/30 hover:border-indigo-400/70 transition-all hover:scale-105 group">
              <CardContent className="p-0">
                <div className="h-48 rounded-t-lg relative overflow-hidden">
                  <img
                    src="/img/f6ab6f74-5816-4282-807f-19ee3822ab99.jpg"
                    alt="Video Generation AI"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      Video Generation AI
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="mb-4 text-slate-800">
                    Синтез видео нового поколения с использованием современных
                    моделей ИИ
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-indigo-400 text-indigo-300"
                  >
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
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

            <div className="space-y-6">
              <Card className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 border-purple-500/30">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Icon name="Award" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Экспертиза</h4>
                    <p className="text-gray-300">
                      5+ лет работы с AI-технологиями
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border-blue-500/30">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <Icon name="Users" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Клиенты</h4>
                    <p className="text-gray-300">100+ успешных проектов</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-indigo-900/40 to-pink-900/40 border-indigo-500/30">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Icon name="Zap" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Скорость</h4>
                    <p className="text-gray-300">Быстрое выполнение заказов</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-black/30">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Давайте создадим что-то удивительное вместе!
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Готов воплотить ваши идеи в жизнь с помощью современных
            AI-технологий
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              <Icon name="Globe" className="mr-2" />
              Сайт
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-500 text-blue-300 hover:bg-blue-500/20"
              asChild
            >
              <a
                href="https://t.me/neosavr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="Send" className="mr-2" />
                Телеграм
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-red-500 text-red-300 hover:bg-red-500/20"
              asChild
            >
              <a
                href="https://www.youtube.com/@neosavr-n4v"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="Youtube" className="mr-2" />
                YouTube
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-orange-500 text-orange-300 hover:bg-orange-500/20"
              asChild
            >
              <a
                href="https://rutube.ru/channel/41180535/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="Play" className="mr-2" />
                RuTube
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; 2024 AI Video Content Specialist. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
