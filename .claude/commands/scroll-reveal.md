# Scroll Reveal Animation

Add scroll-triggered reveal animations using Framer Motion's whileInView.

## Instructions

The user wants elements to animate as they scroll into view. Follow these steps:

1. **Check if `framer-motion` is installed** by reading `package.json`. If not, run `npm install framer-motion`.

2. **Read the target file** and identify which elements should animate on scroll.

3. **Apply scroll-triggered animations** using `whileInView`:

   **Basic scroll reveal:**
   ```jsx
   <motion.div
     initial={{ opacity: 0, y: 40 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true, margin: "-100px" }}
     transition={{ duration: 0.6, ease: "easeOut" }}
   >
   ```

   **Staggered section reveal:**
   ```jsx
   const containerVariants = {
     hidden: { opacity: 0 },
     visible: {
       opacity: 1,
       transition: { staggerChildren: 0.15, delayChildren: 0.1 }
     }
   };

   const itemVariants = {
     hidden: { opacity: 0, y: 30 },
     visible: {
       opacity: 1,
       y: 0,
       transition: { duration: 0.5, ease: "easeOut" }
     }
   };

   <motion.section
     variants={containerVariants}
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, margin: "-80px" }}
   >
     <motion.h2 variants={itemVariants}>Title</motion.h2>
     <motion.p variants={itemVariants}>Description</motion.p>
     <motion.div variants={itemVariants}>Content</motion.div>
   </motion.section>
   ```

   **Slide from side:**
   ```jsx
   <motion.div
     initial={{ opacity: 0, x: -60 }}
     whileInView={{ opacity: 1, x: 0 }}
     viewport={{ once: true }}
     transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
   >
   ```

   **Scale up reveal:**
   ```jsx
   <motion.div
     initial={{ opacity: 0, scale: 0.9 }}
     whileInView={{ opacity: 1, scale: 1 }}
     viewport={{ once: true }}
     transition={{ duration: 0.5 }}
   >
   ```

4. **Best practices:**
   - Always use `viewport={{ once: true }}` unless the user specifically wants repeating animations
   - Use negative `margin` values (e.g., `"-100px"`) to trigger before the element is fully in view
   - Keep `y` offsets between 20-60px -- larger values feel sluggish
   - Stagger delays should be 0.08s-0.2s per item
   - For long pages, don't animate everything -- pick key sections
   - Use `amount: 0.3` in viewport options to require 30% visibility before triggering

5. **Create a reusable component if multiple sections need the same animation:**
   ```jsx
   function RevealOnScroll({ children, delay = 0 }) {
     return (
       <motion.div
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "-80px" }}
         transition={{ duration: 0.5, delay, ease: "easeOut" }}
       >
         {children}
       </motion.div>
     );
   }
   ```

$ARGUMENTS - Which sections/elements to animate and preferred reveal style (e.g., "fade up all sections", "slide cards from left")
