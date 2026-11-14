export default function OtherThings() {
  const activities = [
    {
      id: "gaming",
      index: "01",
      title: "Gaming",
      description:
        "Passionate about FPS Gaming. Secured 1st place in an inter-college Valorant tournament.",
      image: "/images/gaming.webp",
      alt: "Gaming illustration",
    },
    {
      id: "badminton",
      index: "02",
      title: "Badminton",
      description: "Regular weekend games to relax and recharge.",
      image: "/images/badminton.webp",
      alt: "Badminton illustration",
    },
    {
      id: "bowling",
      index: "03",
      title: "Bowling",
      description:
        "Casual outings with friends, a few strikes and plenty of gutters.",
      image: "/images/bowling.webp",
      alt: "Bowling illustration",
    },
  ];

  return (
    <section id="other-things" className="py-20 sm:py-28 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto bg-[#fef5da]">
      {/* ── Single 2-Column Grid: Images vertically centered heightwise with Content on Right ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        {/* ── Left Side: Images collage, larger size, vertically centered heightwise with right content ── */}
        <div className="order-2 lg:order-1 lg:col-span-6 reveal flex items-center justify-center lg:justify-start">
          <div className="relative w-full max-w-[520px] sm:max-w-[560px] h-[380px] sm:h-[420px]">
            {/* Badminton: top-left, slightly tilted */}
            <div className="absolute top-0 left-0 w-[50%] max-w-[250px] z-10 hover:z-30 hover:scale-105 transition-all duration-300 transform -rotate-3 group">
              <img
                src={activities[1].image}
                alt={activities[1].alt}
                loading="lazy"
                decoding="async"
                className="w-full h-auto max-h-[210px] sm:max-h-[235px] object-contain select-none drop-shadow-sm group-hover:drop-shadow-md"
                draggable={false}
              />
            </div>

            {/* Gaming: top-right, slightly tilted */}
            <div className="absolute top-2 right-1 sm:right-2 w-[54%] max-w-[270px] z-20 hover:z-30 hover:scale-105 transition-all duration-300 transform rotate-2 group">
              <img
                src={activities[0].image}
                alt={activities[0].alt}
                loading="lazy"
                decoding="async"
                className="w-full h-auto max-h-[215px] sm:max-h-[240px] object-contain select-none drop-shadow-sm group-hover:drop-shadow-md"
                draggable={false}
              />
            </div>

            {/* Bowling: bottom-left offset */}
            <div className="absolute bottom-0 left-8 sm:left-14 w-[52%] max-w-[260px] z-15 hover:z-30 hover:scale-105 transition-all duration-300 transform -rotate-1 group">
              <img
                src={activities[2].image}
                alt={activities[2].alt}
                loading="lazy"
                decoding="async"
                className="w-full h-auto max-h-[210px] sm:max-h-[235px] object-contain select-none drop-shadow-sm group-hover:drop-shadow-md"
                draggable={false}
              />
            </div>
          </div>
        </div>

        {/* ── Right Side: Header + List of 3 Titles with Descriptions + Summary ── */}
        <div className="order-1 lg:order-2 lg:col-span-6 flex flex-col gap-6 reveal">
          {/* Header on Right Side */}
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="font-mono text-xs font-bold tracking-widest text-[#2c2e35]/75 uppercase">
                {"// 03 · LIFE OUTSIDE CODE"}
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.6rem] font-bold text-[#2c2e35] tracking-tight leading-[1.08]">
              Other things I like Doing
            </h2>
          </div>

          {/* List of the Three Titles with individual descriptions */}
          <div className="space-y-4 pt-1">
            {activities.map((item) => (
              <div key={item.id} className="space-y-1">
                <span className="font-mono text-xs font-bold tracking-wider text-[#2c2e35] uppercase block">
                  {item.index} · {item.title}
                </span>
                <p className="font-body text-sm sm:text-base text-[#2c2e35]/75 leading-relaxed hyphenate">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Philosophy / Mindset takeaway below the list */}
          <p className="font-body text-sm sm:text-base text-[#2c2e35]/75 leading-relaxed pt-3 border-t border-[#2c2e35]/15 hyphenate">
            Competitive gaming and sports have taught me teamwork, communication and staying focused under pressure.
          </p>
        </div>
      </div>
    </section>
  );
}
