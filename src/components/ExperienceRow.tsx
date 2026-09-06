import type { ExperienceItem } from "@/data/portfolio";

export default function ExperienceRow({ role, org, desc, duration }: ExperienceItem) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-border py-[18px] last:border-none max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-1">
      <div>
        <div className="text-[15px] font-semibold">{role}</div>
        <div className="text-sm text-muted">{org}</div>
        <div className="mt-1 max-w-[460px] text-[13.5px] text-muted">{desc}</div>
      </div>
      <div className="whitespace-nowrap text-[13px] text-muted">{duration}</div>
    </div>
  );
}