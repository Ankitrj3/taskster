import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  MapPin,
  Mail,
  Phone,
};

interface ContactItem {
  icon: string;
  text: string;
}

export default function FooterContactInfo({
  contact,
}: {
  contact: ContactItem[];
}) {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-4 tracking-tight text-zinc-900 dark:text-zinc-50">
        Contact Info
      </h4>
      <ul className="space-y-2">
        {contact.map((item) => {
          const Icon = iconMap[item.icon] || Mail;
          return (
            <li
              key={item.text}
              className="flex items-center text-zinc-600 dark:text-zinc-400"
            >
              <Icon className="w-5 h-5 mr-2" />
              {item.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
