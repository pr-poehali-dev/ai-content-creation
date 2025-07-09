import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const socialLinks = [
  {
    name: "Сайт",
    icon: "Globe",
    href: "#",
    className:
      "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
  },
  {
    name: "Телеграм",
    icon: "Send",
    href: "https://t.me/neosavr",
    className: "border-blue-500 text-blue-300 hover:bg-blue-500/20",
    variant: "outline" as const,
  },
  {
    name: "YouTube",
    icon: "Youtube",
    href: "https://www.youtube.com/@neosavr-n4v",
    className: "border-red-500 text-red-300 hover:bg-red-500/20",
    variant: "outline" as const,
  },
  {
    name: "RuTube",
    icon: "Play",
    href: "https://rutube.ru/channel/41180535/",
    className: "border-orange-500 text-orange-300 hover:bg-orange-500/20",
    variant: "outline" as const,
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-black/30">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Давайте создадим что-то удивительное вместе!
        </h2>

        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Готов воплотить ваши идеи в жизнь с помощью современных AI-технологий
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map((link, index) => (
            <Button
              key={index}
              size="lg"
              variant={link.variant}
              className={link.className}
              asChild
            >
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <Icon name={link.icon} className="mr-2" />
                {link.name}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
