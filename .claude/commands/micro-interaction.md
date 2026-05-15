# Micro-Interaction

Add polished micro-interactions and UI feedback animations using Framer Motion.

## Instructions

The user wants subtle, delightful micro-interactions. Follow these steps:

1. **Check if `framer-motion` is installed** by reading `package.json`. If not, run `npm install framer-motion`.

2. **Read the target file** and identify UI elements that need feedback animations.

3. **Apply the appropriate micro-interaction pattern:**

   **Button with success/loading state:**
   ```jsx
   function AnimatedButton({ onClick, children }) {
     const [state, setState] = useState("idle"); // idle | loading | success

     const handleClick = async () => {
       setState("loading");
       await onClick();
       setState("success");
       setTimeout(() => setState("idle"), 1500);
     };

     return (
       <motion.button
         onClick={handleClick}
         whileHover={{ scale: 1.02 }}
         whileTap={{ scale: 0.98 }}
         animate={state === "success" ? { backgroundColor: "#22c55e" } : {}}
         transition={{ type: "spring", stiffness: 400, damping: 17 }}
       >
         <AnimatePresence mode="wait">
           {state === "loading" && (
             <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1, rotate: 360 }} exit={{ opacity: 0 }} transition={{ rotate: { repeat: Infinity, duration: 0.8 } }}>
               ...
             </motion.span>
           )}
           {state === "success" && (
             <motion.span key="success" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ opacity: 0 }}>
               Done
             </motion.span>
           )}
           {state === "idle" && (
             <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
               {children}
             </motion.span>
           )}
         </AnimatePresence>
       </motion.button>
     );
   }
   ```

   **Number counter animation:**
   ```jsx
   import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";
   import { useEffect } from "react";

   function AnimatedCounter({ value }) {
     const motionValue = useMotionValue(0);
     const spring = useSpring(motionValue, { stiffness: 100, damping: 20 });
     const display = useTransform(spring, (v) => Math.round(v));
     const [displayValue, setDisplayValue] = useState(0);

     useEffect(() => {
       motionValue.set(value);
       return spring.on("change", (v) => setDisplayValue(Math.round(v)));
     }, [value]);

     return <motion.span>{displayValue}</motion.span>;
   }
   ```

   **Toggle switch:**
   ```jsx
   function Toggle({ isOn, onToggle }) {
     return (
       <motion.div
         onClick={onToggle}
         animate={{ backgroundColor: isOn ? "#22c55e" : "#e5e7eb" }}
         style={{ width: 50, height: 28, borderRadius: 14, padding: 3, cursor: "pointer", display: "flex", justifyContent: isOn ? "flex-end" : "flex-start" }}
         transition={{ duration: 0.2 }}
       >
         <motion.div
           layout
           style={{ width: 22, height: 22, borderRadius: "50%", backgroundColor: "#fff" }}
           transition={{ type: "spring", stiffness: 500, damping: 30 }}
         />
       </motion.div>
     );
   }
   ```

   **Notification badge pop:**
   ```jsx
   <AnimatePresence>
     {count > 0 && (
       <motion.span
         key={count}
         initial={{ scale: 0, opacity: 0 }}
         animate={{ scale: 1, opacity: 1 }}
         exit={{ scale: 0, opacity: 0 }}
         transition={{ type: "spring", stiffness: 500, damping: 20 }}
         className="badge"
       >
         {count}
       </motion.span>
     )}
   </AnimatePresence>
   ```

   **Text reveal (word by word):**
   ```jsx
   function TextReveal({ text }) {
     const words = text.split(" ");
     return (
       <motion.p initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.05 } } }}>
         {words.map((word, i) => (
           <motion.span
             key={i}
             variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
             style={{ display: "inline-block", marginRight: "0.25em" }}
           >
             {word}
           </motion.span>
         ))}
       </motion.p>
     );
   }
   ```

   **Tooltip with animation:**
   ```jsx
   function Tooltip({ children, text }) {
     const [isVisible, setIsVisible] = useState(false);
     return (
       <div onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)} style={{ position: "relative", display: "inline-block" }}>
         {children}
         <AnimatePresence>
           {isVisible && (
             <motion.div
               initial={{ opacity: 0, y: 5, scale: 0.95 }}
               animate={{ opacity: 1, y: 0, scale: 1 }}
               exit={{ opacity: 0, y: 5, scale: 0.95 }}
               transition={{ duration: 0.15 }}
               style={{ position: "absolute", bottom: "100%", left: "50%", transform: "translateX(-50%)", whiteSpace: "nowrap" }}
             >
               {text}
             </motion.div>
           )}
         </AnimatePresence>
       </div>
     );
   }
   ```

4. **Design principles:**
   - Micro-interactions should be fast (0.1s-0.3s)
   - Use spring physics for anything the user directly interacts with
   - Provide immediate visual feedback -- no delay on tap/click responses
   - Animations should reinforce meaning (success = scale up, error = shake, delete = shrink)
   - Less is more -- not every element needs animation

$ARGUMENTS - Type of micro-interaction (e.g., "button feedback", "toggle switch", "counter animation", "notification pop")
