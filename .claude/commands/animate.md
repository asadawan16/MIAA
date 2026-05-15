# Animate Component

Add Framer Motion animations to a React component or element.

## Instructions

The user wants to add animations using Framer Motion. Follow these steps:

1. **Check if `framer-motion` is installed** by reading `package.json`. If not installed, run `npm install framer-motion`.

2. **Read the target file** specified by the user (or ask which component to animate).

3. **Add the animation** by:
   - Importing `motion` from `framer-motion` at the top of the file
   - Converting the target HTML element to its `motion.*` equivalent (e.g., `<div>` becomes `<motion.div>`)
   - Adding appropriate animation props based on what the user wants

4. **Animation patterns to use** (pick the best fit):

   **Entrance animation:**
   ```jsx
   <motion.div
     initial={{ opacity: 0, y: 20 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.5, ease: "easeOut" }}
   >
   ```

   **Staggered children:**
   ```jsx
   const container = {
     hidden: { opacity: 0 },
     show: {
       opacity: 1,
       transition: { staggerChildren: 0.1 }
     }
   };
   const item = {
     hidden: { opacity: 0, y: 20 },
     show: { opacity: 1, y: 0 }
   };

   <motion.ul variants={container} initial="hidden" animate="show">
     <motion.li variants={item}>...</motion.li>
   </motion.ul>
   ```

   **Hover/tap interaction:**
   ```jsx
   <motion.button
     whileHover={{ scale: 1.05 }}
     whileTap={{ scale: 0.95 }}
     transition={{ type: "spring", stiffness: 400, damping: 17 }}
   >
   ```

   **Spring physics:**
   ```jsx
   transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.8 }}
   ```

5. **Keep animations tasteful and performant:**
   - Prefer `opacity` and `transform` properties (GPU-accelerated)
   - Keep durations between 0.2s-0.6s for UI elements
   - Use `easeOut` for entrances, `easeIn` for exits
   - Use spring physics for interactive elements
   - Avoid animating `width`, `height`, `top`, `left` directly -- use `scale`, `x`, `y` instead

6. **After applying**, verify the file has no syntax errors by checking imports and JSX structure.

$ARGUMENTS - Description of what to animate and how (e.g., "fade in the hero section", "add hover effect to buttons")
