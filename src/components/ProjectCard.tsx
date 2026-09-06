import Image from "next/image";
import type { Project } from "@/data/portfolio";

export default function ProjectCard({ name, madeWith, description, image, imagePosition, links, featured }: Project) {
  return (
    <div className="flex flex-col overflow-hidden rounded-[20px] border border-border bg-surface">
      <div className={`relative overflow-hidden bg-black/30 ${featured ? "h-[340px]" : "h-64"}`}>
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            style={{ objectPosition: imagePosition || "center" }}
            className="object-cover transition-transform duration-500 ease-out hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-[repeating-linear-gradient(135deg,#232326_0px,#232326_2px,transparent_2px,transparent_14px)]" />
        )}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-6 pb-4 pt-12">
          <p className={featured ? "mb-1 text-[22px] font-semibold text-white" : "mb-1 text-[19px] font-semibold text-white"}>
            {name}
          </p>
          <p className="text-[12.5px] text-white/75">
            Made with: <b className="font-medium text-white">{madeWith}</b>
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-6 pt-5">
        <p className="mb-[18px] text-sm text-muted">{description}</p>
        <div className="flex flex-wrap gap-2.5">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border px-4 py-2 text-[13px] font-medium transition hover:bg-ink hover:text-bg"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}