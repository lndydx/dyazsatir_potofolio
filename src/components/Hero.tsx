"use client";

import { useEffect, useState } from "react";

const HEADLINE =
  "Building things across data, mathematics, and code. From molecule classifiers to Minecraft mods."; 

const TAGS = ["Python", "Scikit Learn", "XGBoost", "Next.js", "Kotlin", "Java"]; 

export default function Hero() {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(HEADLINE.slice(0, i));
      if (i >= HEADLINE.length) clearInterval(id);
    }, 28);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="pt-5 pb-20">
      <h1 className="mb-5 min-h-[1.3em] max-w-[760px] font-serif text-[44px] font-medium leading-[1.3] max-[640px]:text-[28px]">
        {typed}
        <span className="ml-0.5 inline-block h-[1em] w-[3px] animate-[blink_0.9s_steps(1)_infinite] bg-ink align-middle" />
      </h1>
      <p className="mb-5 max-w-[560px] text-muted">
        Student in Informatics Engineering, focused on data science, machine learning & mathematics.
      </p>
      <div className="flex flex-wrap gap-x-[18px] gap-y-2 text-[13.5px] text-muted">
        {TAGS.map((t) => (
          <span key={t} className="after:ml-[18px] after:text-border after:content-['·'] last:after:content-none">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}