# Page Transition

Add smooth page transitions using Framer Motion's AnimatePresence.

## Instructions

The user wants page/route transitions. Follow these steps:

1. **Check if `framer-motion` is installed** by reading `package.json`. If not, run `npm install framer-motion`.

2. **Check if a router is installed** (react-router-dom). If not and the project needs routing, run `npm install react-router-dom`.

3. **Set up AnimatePresence** for route transitions:

   **Basic page wrapper component:**
   ```jsx
   import { motion, AnimatePresence } from "framer-motion";
   import { useLocation } from "react-router-dom";

   const pageVariants = {
     initial: { opacity: 0, y: 8 },
     enter: { opacity: 1, y: 0 },
     exit: { opacity: 0, y: -8 },
   };

   const pageTransition = {
     type: "tween",
     ease: "easeInOut",
     duration: 0.3,
   };

   function PageTransition({ children }) {
     const location = useLocation();
     return (
       <AnimatePresence mode="wait">
         <motion.div
           key={location.pathname}
           variants={pageVariants}
           initial="initial"
           animate="enter"
           exit="exit"
           transition={pageTransition}
         >
           {children}
         </motion.div>
       </AnimatePresence>
     );
   }
   ```

4. **Transition styles available** (ask user preference or pick best fit):

   - **Fade**: `opacity: 0 -> 1 -> 0`
   - **Slide up**: `y: 20 -> 0`, `opacity: 0 -> 1`
   - **Slide horizontal**: `x: 100 -> 0 -> -100`
   - **Scale**: `scale: 0.95 -> 1`, `opacity: 0 -> 1`
   - **Crossfade**: Use `mode="popLayout"` for overlapping transitions

5. **Key rules:**
   - Always use `mode="wait"` on AnimatePresence unless crossfade is desired
   - The `key` prop must change per route for AnimatePresence to detect changes
   - Keep page transitions fast (0.2s-0.4s) -- users notice slow transitions
   - Avoid complex transitions on mobile -- prefer simple fades

6. **Integrate with the router** by wrapping route outlets with the PageTransition component.

$ARGUMENTS - Type of transition desired (e.g., "fade", "slide", "scale") and any specific pages to target
