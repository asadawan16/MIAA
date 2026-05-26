import patternKufic from "../../../assets/images/Homepage/SMWF/pattern-kufic.png"

const TEXT = "Sydney Muslim Writers Festival"
const REPEAT = 10
const BG = "#2A9E9B"

// Adjacent section colours. Top half matches the section above, bottom half
// matches the section below — same pattern the blue marquee uses to "bleed"
// into its neighbours, just with cream on both sides here.
const TOP_BG    = "#F3EFEB"
const BOTTOM_BG = "#F3EFEB"

function Quatrefoil({ color = "#FFFFFF", className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <circle cx="50" cy="22" r="25" fill={color} />
      <circle cx="50" cy="78" r="25" fill={color} />
      <circle cx="22" cy="50" r="25" fill={color} />
      <circle cx="78" cy="50" r="25" fill={color} />
      <rect x="22" y="22" width="56" height="56" rx="4" fill={color} />
    </svg>
  )
}

function MarqueeRow() {
  return (
    <div className="flex items-center shrink-0">
      {Array.from({ length: REPEAT }).map((_, i) => (
        <div
          key={i}
          // Gap + padding bumped to match the blue marquee's spacing
          className="flex items-center gap-16 md:gap-24 3xl:gap-32 px-8 md:px-12 3xl:px-16 shrink-0"
        >
          <span
            // Text scale matched to blue: 3xl / 4xl / 6xl across breakpoints
            className="text-white font-aeonik font-bold text-3xl md:text-4xl 3xl:text-6xl whitespace-nowrap tracking-tight"
          >
            {TEXT}
          </span>
          <Quatrefoil
            color="#FFFFFF"
            // Icon scale matched to blue's icon: 7/8/12
            className="w-7 h-7 md:w-8 md:h-8 3xl:w-12 3xl:h-12 shrink-0"
          />
        </div>
      ))}
    </div>
  )
}

export default function SMWFTurquoiseMarquee() {
  return (
    <div
      className="relative overflow-hidden h-24 md:h-32 3xl:h-44"
      aria-label="Sydney Muslim Writers Festival"
    >
      {/* Top half — matches section above */}
      <div className="absolute inset-x-0 top-0 h-1/2" style={{ backgroundColor: TOP_BG }} />
      {/* Bottom half — matches section below */}
      <div className="absolute inset-x-0 bottom-0 h-1/2" style={{ backgroundColor: BOTTOM_BG }} />

      {/* Tilted band crossing the midline.
          Rotation flipped from -2deg to +1.5deg so it tilts the same way
          as the blue marquee. Shadow strengthened from 0.25 → 0.35 to match. */}
      <div
        className="absolute top-1/2 left-[-100px] right-[-100px] py-3 md:py-4 3xl:py-6 overflow-hidden shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)]"
        style={{
          backgroundColor: BG,
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