"use client";

import { useEffect, useState } from "react";
import TeamHeader from "./TeamHeader";
import TeamMember from "./TeamMember";
import TeamSkeleton from "../skeletons/TeamSkeleton";
import { TeamData } from "@/types/team";

export function Team() {
  const [data, setData] = useState<TeamData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/static/team.json")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }, []);

  if (loading || !data) {
    return <TeamSkeleton />;
  }

  return (
    <section
      id="team"
      className="py-24 bg-zinc-50 dark:bg-zinc-900 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <TeamHeader title={data.header.title} subtitle={data.header.subtitle} />
        <div className="relative flex flex-col gap-10 items-center w-full max-w-3xl mx-auto">
          {data.members.map((member, idx) => (
            <TeamMember key={member.id} index={idx} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
