export default function Header() {
  return (
    <header className="flex items-center justify-between pt-8 pb-15">
      <div className="font-serif text-[21px] font-semibold">Hi, I am Dyaz Arya Satir 👋</div> {/* TODO */}
      <nav className="flex gap-7">
        <a href="#work" className="text-sm text-muted transition hover:text-ink">Work</a>
        <a href="#experience" className="text-sm text-muted transition hover:text-ink">Experience</a>
        <a href="#contact" className="text-sm text-muted transition hover:text-ink">Contact</a>
      </nav>
    </header>
  );
}