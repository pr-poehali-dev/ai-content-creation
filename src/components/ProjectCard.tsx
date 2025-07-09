import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  gradientFrom: string;
  gradientTo: string;
  borderColor: string;
  hoverBorderColor: string;
  buttonBorderColor: string;
  buttonTextColor: string;
  link?: string;
}

const ProjectCard = ({
  title,
  description,
  imageUrl,
  imageAlt,
  gradientFrom,
  gradientTo,
  borderColor,
  hoverBorderColor,
  buttonBorderColor,
  buttonTextColor,
  link,
}: ProjectCardProps) => {
  return (
    <Card
      className={`bg-gradient-to-br ${gradientFrom} ${gradientTo} ${borderColor} ${hoverBorderColor} transition-all hover:scale-105 group`}
    >
      <CardContent className="p-0">
        <div className="h-48 rounded-t-lg relative overflow-hidden">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          </div>
        </div>
        <div className="p-6">
          <p className="mb-4 text-slate-800">{description}</p>
          <Button
            variant="outline"
            size="sm"
            className={`${buttonBorderColor} ${buttonTextColor}`}
            asChild={!!link}
          >
            {link ? (
              <a href={link} target="_blank" rel="noopener noreferrer">
                Подробнее
              </a>
            ) : (
              "Подробнее"
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
