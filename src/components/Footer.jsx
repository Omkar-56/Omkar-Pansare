export default function Footer() {
  return (
    <footer className="py-8 px-6 max-w-5xl mx-auto flex items-center justify-between text-xs font-body text-espresso/30">
      <span>© {new Date().getFullYear()} OmkarPansare</span>
      <span>Built with React & Tailwind</span>
    </footer>
  );
}
