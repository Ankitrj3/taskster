import React from "react";
import { Mail, MessageSquare, Phone, MapPin } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Mail,
  MessageSquare,
  Phone,
  MapPin,
};

interface InfoItem {
  icon: string;
  title: string;
  description: string;
}

export default function ContactInfo({ info }: { info: InfoItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
      {info.map((item) => {
        const Icon = iconMap[item.icon] || Mail;
        return (
          <div key={item.title} className="flex flex-col items-start gap-3">
            <Icon className="w-8 h-8 text-zinc-400 mb-2" />
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              {item.title}
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400 text-base">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
