import bannerIcon from "../../../assets/images/Homepage/SMWF/banner-icon.svg"
import patternKufic from "../../../assets/images/Homepage/SMWF/pattern-kufic.png"

const REPEAT = 10
const TEXT = "Sydney Muslim Writers Festival"

function MarqueeRow() {
  return (
    <div className="flex items-center shrink-0">
      {Array.from({ length: REPEAT }).map((_, i) => (
        <div
          key={i}
          className="flex items-center gap-16 md:gap-24 3xl:gap-32 px-8 md:px-12 3xl:px-16 shrink-0"
        >
          <span className="text-white font-aeonik font-bold text-3xl md:text-4xl 3xl:text-6xl whitespace-nowrap tracking-tight">
            {TEXT}
          </span>
          <img
            src={bannerIcon}
            alt=""
            aria-hidden="true"
            className="w-7 h-7 md:w-8 md:h-8 3xl:w-12 3xl:h-12 shrink-0"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>
      ))}
    </div>
  )
}

export default function SMWFMarqueeBanner() {
  return (
    <div
      className="relative overflow-hidden h-24 md:h-32 3xl:h-44"
      aria-label="Sydney Muslim Writers Festival"
    >
      {/* Top half — matches hero's dark green */}
      <div
        className="absolute inset-x-0 top-0 h-1/2"
        style={{ backgroundColor: "#124039" }}
      />
      {/* Top half — kufic pattern overlay, matches hero exactly */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-1/2 pointer-events-none opacity-40 mix-blend-screen"
        style={{
          backgroundImage: `url(${patternKufic})`,
          backgroundSize: "auto 720px",
          backgroundRepeat: "repeat",
        }}
      />
      {/* Bottom half — matches about section's cream */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/2"
        style={{ backgroundColor: "#F3EFEB" }}
      />

      {/* Tilted blue marquee band */}
      <div
        className="absolute top-1/2 left-[-100px] right-[-100px] py-3 md:py-4 3xl:py-6 overflow-hidden shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)]"
        style={{
          backgroundColor: "#4656CD",
          transform: "translateY(-50%) rotate(1.5deg)",
          transformOrigin: "center",
        }}
      >
        <div
          className="flex smwf-banner-top w-max"
          style={{ animationDuration: "75s", animationDirection: "reverse" }}
        >
          <MarqueeRow />
          <MarqueeRow />
        </div>
      </div>
    </div>
  )
}
