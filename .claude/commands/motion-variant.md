# Motion Variants System

Create a reusable animation variants system for consistent motion design across the project.

## Instructions

The user wants a centralized motion design system. Follow these steps:

1. **Check if `framer-motion` is installed** by reading `package.json`. If not, run `npm install framer-motion`.

2. **Create a motion variants file** at `src/lib/motion.js` (or wherever the project keeps utilities):

   ```jsx
   // src/lib/motion.js
   // Centralized motion variants for consistent animation across the app

   // --- Easing curves ---
   export const ease = {
     smooth: [0.25, 0.1, 0.25, 1],
     snappy: [0.4, 0, 0.2, 1],
     bounce: [0.68, -0.55, 0.27, 1.55],
     out: [0, 0, 0.2, 1],
     in: [0.4, 0, 1, 1],
   };

   // --- Transition presets ---
   export const transition = {
     spring: { type: "spring", stiffness: 300, damping: 25 },
     springBouncy: { type: "spring", stiffness: 400, damping: 17 },
     springStiff: { type: "spring", stiffness: 500, damping: 30 },
     smooth: { duration: 0.4, ease: ease.smooth },
     fast: { duration: 0.2, ease: ease.snappy },
     slow: { duration: 0.6, ease: ease.smooth },
   };

   // --- Entrance variants ---
   export const fadeIn = {
     initial: { opacity: 0 },
     animate: { opacity: 1 },
     exit: { opacity: 0 },
   };

   export const fadeInUp = {
     initial: { opacity: 0, y: 24 },
     animate: { opacity: 1, y: 0 },
     exit: { opacity: 0, y: 24 },
   };

   export const fadeInDown = {
     initial: { opacity: 0, y: -24 },
     animate: { opacity: 1, y: 0 },
     exit: { opacity: 0, y: -24 },
   };

   export const fadeInLeft = {
     initial: { opacity: 0, x: -24 },
     animate: { opacity: 1, x: 0 },
     exit: { opacity: 0, x: -24 },
   };

   export const fadeInRight = {
     initial: { opacity: 0, x: 24 },
     animate: { opacity: 1, x: 0 },
     exit: { opacity: 0, x: 24 },
   };

   export const scaleIn = {
     initial: { opacity: 0, scale: 0.9 },
     animate: { opacity: 1, scale: 1 },
     exit: { opacity: 0, scale: 0.9 },
   };

   export const popIn = {
     initial: { opacity: 0, scale: 0.5 },
     animate: { opacity: 1, scale: 1 },
     exit: { opacity: 0, scale: 0.5 },
   };

   // --- Stagger containers ---
   export const stagger = (staggerDelay = 0.1) => ({
     animate: {
       transition: { staggerChildren: staggerDelay },
     },
   });

   export const staggerContainer = {
     hidden: { opacity: 0 },
     show: {
       opacity: 1,
       transition: { staggerChildren: 0.1, delayChildren: 0.05 },
     },
   };

   export const staggerItem = {
     hidden: { opacity: 0, y: 20 },
     show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: ease.smooth } },
   };

   // --- Interactive variants ---
   export const hover = {
     lift: { scale: 1.02, y: -2, transition: transition.spring },
     grow: { scale: 1.05, transition: transition.spring },
     glow: { boxShadow: "0 0 20px rgba(0,0,0,0.1)", transition: transition.smooth },
   };

   export const tap = {
     press: { scale: 0.98 },
     shrink: { scale: 0.95 },
   };

   // --- Page transitions ---
   export const pageVariants = {
     fade: {
       initial: { opacity: 0 },
       enter: { opacity: 1, transition: transition.smooth },
       exit: { opacity: 0, transition: transition.fast },
     },
     slideUp: {
       initial: { opacity: 0, y: 12 },
       enter: { opacity: 1, y: 0, transition: transition.smooth },
       exit: { opacity: 0, y: -12, transition: transition.fast },
     },
     slideRight: {
       initial: { opacity: 0, x: -20 },
       enter: { opacity: 1, x: 0, transition: transition.smooth },
       exit: { opacity: 0, x: 20, transition: transition.fast },
     },
   };
   ```

3. **Show usage examples** to the user:
   ```jsx
   import { motion } from "framer-motion";
   import { fadeInUp, transition, hover, tap, staggerContainer, staggerItem } from "@/lib/motion";

   // Simple entrance
   <motion.div {...fadeInUp} transition={transition.spring}>

   // Interactive button
   <motion.button whileHover={hover.lift} whileTap={tap.press}>

   // Staggered list
   <motion.ul variants={staggerContainer} initial="hidden" animate="show">
     {items.map(item => (
       <motion.li key={item.id} variants={staggerItem}>{item.name}</motion.li>
     ))}
   </motion.ul>
   ```

4. **Adapt to the project's existing patterns** -- if the project uses TypeScript, CSS variables, or a specific folder structure, follow those conventions.

$ARGUMENTS - Any specific animation styles or brand motion guidelines to incorporate
