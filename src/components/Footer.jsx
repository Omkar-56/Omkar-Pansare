export default function Footer() {
  return (
    <footer className="border-t border-[#2c2e35]/15 bg-[#fef5da] text-xs font-mono text-[#2c2e35]/65">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#fa575e]" />
          <span className="font-semibold text-[#2c2e35]">Omkar Pansare</span>
          <span>· {new Date().getFullYear()}</span>
        </div>

        <div className="flex items-center gap-4">
          <span>Designed &amp; built with React + Tailwind</span>
        </div>
      </div>
    </footer>
  );
}
