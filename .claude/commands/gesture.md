# Gesture Interactions

Add drag, hover, tap, and gesture-based interactions using Framer Motion.

## Instructions

The user wants interactive gesture-based animations. Follow these steps:

1. **Check if `framer-motion` is installed** by reading `package.json`. If not, run `npm install framer-motion`.

2. **Read the target file** and identify which elements need gesture interactions.

3. **Apply the appropriate gesture pattern:**

   **Drag interaction:**
   ```jsx
   <motion.div
     drag
     dragConstraints={{ top: -50, left: -50, bottom: 50, right: 50 }}
     dragElastic={0.2}
     dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
     whileDrag={{ scale: 1.1, cursor: "grabbing" }}
   >
   ```

   **Drag to dismiss/swipe:**
   ```jsx
   import { motion, useMotionValue, useTransform } from "framer-motion";

   function SwipeCard({ children, onDismiss }) {
     const x = useMotionValue(0);
     const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);
     const rotate = useTransform(x, [-200, 200], [-15, 15]);

     return (
       <motion.div
         style={{ x, opacity, rotate }}
         drag="x"
         dragConstraints={{ left: 0, right: 0 }}
         onDragEnd={(_, info) => {
           if (Math.abs(info.offset.x) > 150) onDismiss?.();
         }}
       >
         {children}
       </motion.div>
     );
   }
   ```

   **Advanced hover effect:**
   ```jsx
   <motion.div
     whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(0,0,0,0.12)" }}
     whileTap={{ scale: 0.98 }}
     transition={{ type: "spring", stiffness: 400, damping: 17 }}
   >
   ```

   **Magnetic cursor effect:**
   ```jsx
   import { motion, useMotionValue, useSpring } from "framer-motion";

   function MagneticButton({ children }) {
     const x = useMotionValue(0);
     const y = useMotionValue(0);
     const springX = useSpring(x, { stiffness: 300, damping: 20 });
     const springY = useSpring(y, { stiffness: 300, damping: 20 });

     return (
       <motion.button
         style={{ x: springX, y: springY }}
         onMouseMove={(e) => {
           const rect = e.currentTarget.getBoundingClientRect();
           x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
           y.set((e.clientY - rect.top - rect.height / 2) * 0.3);
         }}
         onMouseLeave={() => { x.set(0); y.set(0); }}
         whileTap={{ scale: 0.95 }}
       >
         {children}
       </motion.button>
     );
   }
   ```

   **Long press:**
   ```jsx
   <motion.button
     whileTap={{ scale: 0.95 }}
     onTapStart={() => console.log("tap started")}
     onTap={() => console.log("tapped")}
   >
   ```

   **Tilt on hover (3D perspective):**
   ```jsx
   function TiltCard({ children }) {
     const x = useMotionValue(0);
     const y = useMotionValue(0);
     const rotateX = useTransform(y, [-0.5, 0.5], [8, -8]);
     const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8]);

     return (
       <motion.div
         style={{ rotateX, rotateY, transformPerspective: 800 }}
         onMouseMove={(e) => {
           const rect = e.currentTarget.getBoundingClientRect();
           x.set((e.clientX - rect.left) / rect.width - 0.5);
           y.set((e.clientY - rect.top) / rect.height - 0.5);
         }}
         onMouseLeave={() => { x.set(0); y.set(0); }}
       >
         {children}
       </motion.div>
     );
   }
   ```

4. **Performance tips:**
   - Use `useMotionValue` instead of React state for real-time values (avoids re-renders)
   - Use `useSpring` for smooth follow animations
   - Use `useTransform` to derive values without re-renders
   - Set `dragConstraints` to a ref for container-based constraints
   - Add `will-change: transform` via style prop for complex drag interactions

$ARGUMENTS - Type of gesture interaction needed (e.g., "drag cards", "hover tilt effect", "swipe to dismiss")
