import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface ServiceCardProps {
  title: string;
  description: string;
  iconName: string;
  iconFallback?: string;
  gradientFrom: string;
  gradientTo: string;
  borderColor: string;
  hoverBorderColor: string;
  buttonBorderColor: string;
  buttonTextColor: string;
  link?: string;
}

const ServiceCard = ({
  title,
  description,
  iconName,
  iconFallback,
  gradientFrom,
  gradientTo,
  borderColor,
  hoverBorderColor,
  buttonBorderColor,
  buttonTextColor,
  link,
}: ServiceCardProps) => {
  return (
    <Card
      className={`bg-gradient-to-br ${gradientFrom} ${gradientTo} ${borderColor} ${hoverBorderColor} transition-all hover:scale-105`}
    >
      <CardContent className="p-8 text-center">
        <div
          className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${gradientFrom.replace("/50", "")} ${gradientTo.replace("/50", "")} rounded-full flex items-center justify-center`}
        >
          <Icon
            name={iconName}
            size={32}
            className="text-white"
            fallback={iconFallback}
          />
        </div>
        <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
        <p className="mb-4 text-slate-800">{description}</p>
        <Button
          size="sm"
          variant="outline"
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
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
