# Parallax Effect

Add scroll-based parallax effects using Framer Motion's useScroll and useTransform.

## Instructions

The user wants parallax scrolling effects. Follow these steps:

1. **Check if `framer-motion` is installed** by reading `package.json`. If not, run `npm install framer-motion`.

2. **Read the target file** and identify which elements should have parallax.

3. **Apply the appropriate parallax pattern:**

   **Basic parallax (element moves slower/faster than scroll):**
   ```jsx
   import { motion, useScroll, useTransform } from "framer-motion";
   import { useRef } from "react";

   function ParallaxSection({ children, speed = 0.5 }) {
     const ref = useRef(null);
     const { scrollYProgress } = useScroll({
       target: ref,
       offset: ["start end", "end start"],
     });
     const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

     return (
       <div ref={ref} style={{ overflow: "hidden", position: "relative" }}>
         <motion.div style={{ y }}>
           {children}
         </motion.div>
       </div>
     );
   }
   ```

   **Hero parallax with layered depth:**
   ```jsx
   function ParallaxHero() {
     const { scrollY } = useScroll();
     const bgY = useTransform(scrollY, [0, 500], [0, 150]);
     const textY = useTransform(scrollY, [0, 500], [0, -50]);
     const opacity = useTransform(scrollY, [0, 300], [1, 0]);

     return (
       <section style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
         <motion.div style={{ y: bgY, position: "absolute", inset: 0 }}>
           {/* Background layer */}
         </motion.div>
         <motion.div style={{ y: textY, opacity, position: "relative", zIndex: 1 }}>
           <h1>Hero Title</h1>
         </motion.div>
       </section>
     );
   }
   ```

   **Horizontal scroll section:**
   ```jsx
   function HorizontalScroll({ items }) {
     const containerRef = useRef(null);
     const { scrollYProgress } = useScroll({ target: containerRef });
     const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(items.length - 1) * 100}%`]);

     return (
       <section ref={containerRef} style={{ height: `${items.length * 100}vh` }}>
         <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
           <motion.div style={{ x, display: "flex" }}>
             {items.map((item, i) => (
               <div key={i} style={{ minWidth: "100vw", height: "100vh" }}>
                 {item}
               </div>
             ))}
           </motion.div>
         </div>
       </section>
     );
   }
   ```

   **Scroll-linked progress bar:**
   ```jsx
   function ScrollProgress() {
     const { scrollYProgress } = useScroll();
     return (
       <motion.div
         style={{
           scaleX: scrollYProgress,
           position: "fixed",
           top: 0,
           left: 0,
           right: 0,
           height: 3,
           background: "var(--accent)",
           transformOrigin: "0%",
           zIndex: 50,
         }}
       />
     );
   }
   ```

   **Scroll-based scale/rotation:**
   ```jsx
   function ScrollZoom() {
     const ref = useRef(null);
     const { scrollYProgress } = useScroll({
       target: ref,
       offset: ["start end", "center center"],
     });
     const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
     const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0]);

     return (
       <motion.div ref={ref} style={{ scale, rotate }}>
         {/* Content */}
       </motion.div>
     );
   }
   ```

4. **Performance guidelines:**
   - Always use `useMotionValue` / `useTransform` chain (no React state for scroll values)
   - Use `will-change: transform` for heavy parallax layers
   - Limit parallax layers to 3-4 per viewport
   - Use `overflow: hidden` on containers to prevent layout shifts
   - Consider `useReducedMotion()` to disable parallax for accessibility
   - Use `offset` parameter to precisely control when animation starts/ends

$ARGUMENTS - Type of parallax effect (e.g., "hero parallax", "horizontal scroll", "layered depth", "scroll progress")
