import { motion } from "framer-motion";
import Image from "next/image";

interface Social {
  github?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
}

interface TeamMemberProps {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  social: Social;
  index: number;
}

type AvatarMember = Pick<TeamMemberProps, "id" | "name" | "image" | "social">;

function getAvatarUrl(member: AvatarMember) {
  if (member.social.github) {
    const username = member.social.github
      .replace("https://github.com/", "")
      .replace(/\/$/, "");
    return `https://github.com/${username}.png`;
  }
  return member.image;
}

export default function TeamMember({ index, ...member }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
      viewport={{ once: true }}
      className="flex items-center w-full gap-10 py-6 bg-transparent border-b border-zinc-200 dark:border-zinc-800 last:border-b-0 group relative overflow-hidden"
    >
      {/* Avatar with animated border */}
      <motion.div className="flex-shrink-0 w-24 h-24 flex items-center justify-center relative">
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <span className="absolute w-24 h-24 rounded-full bg-gradient-to-tr from-zinc-200/40 to-zinc-400/20 dark:from-zinc-700/40 dark:to-zinc-900/20 blur-sm" />
        <Image
          src={getAvatarUrl(member)}
          alt={member.name}
          width={96}
          height={96}
          className="w-24 h-24 object-cover rounded-full border-2 border-zinc-200 dark:border-zinc-800 shadow-md bg-zinc-200 dark:bg-zinc-800 relative z-10"
          unoptimized
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
      </motion.div>

      {/* Name & Role */}
      <motion.div
        className="flex-1 min-w-0"
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
        viewport={{ once: true }}
      >
        <div className="font-extrabold text-2xl text-zinc-900 dark:text-zinc-50 tracking-tight mb-1 truncate group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors">
          {member.name}
        </div>
        <div className="text-zinc-500 dark:text-zinc-400 text-base font-medium truncate">
          {member.role}
        </div>
      </motion.div>

      {/* Social icons */}
      <motion.div
        className="flex gap-4 ml-2"
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
        viewport={{ once: true }}
      >
        {member.social.github && (
          <motion.a
            href={member.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-all duration-200"
            aria-label="GitHub"
            tabIndex={-1}
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="w-7 h-7"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </motion.a>
        )}
        {member.social.linkedin && (
          <motion.a
            href={member.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-all duration-200"
            aria-label="LinkedIn"
            tabIndex={-1}
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="w-7 h-7"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </motion.a>
        )}
        {member.social.twitter && (
          <motion.a
            href={member.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-all duration-200"
            aria-label="Twitter"
            tabIndex={-1}
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="w-7 h-7"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </motion.a>
        )}
        {member.social.website && (
          <motion.a
            href={member.social.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-all duration-200"
            aria-label="Website"
            tabIndex={-1}
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="w-7 h-7"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
          </motion.a>
        )}
      </motion.div>
    </motion.div>
  );
}
