# Layout Animation

Add automatic layout animations using Framer Motion's layout prop for smooth transitions when elements change size, position, or order.

## Instructions

The user wants smooth layout transitions. Follow these steps:

1. **Check if `framer-motion` is installed** by reading `package.json`. If not, run `npm install framer-motion`.

2. **Read the target file** and identify layout changes (reordering, filtering, expanding, toggling).

3. **Apply layout animation patterns:**

   **Basic layout animation (auto-animate position/size changes):**
   ```jsx
   <motion.div layout transition={{ type: "spring", stiffness: 300, damping: 30 }}>
     {content}
   </motion.div>
   ```

   **Shared layout animation (element moves between containers):**
   ```jsx
   // Both elements share the same layoutId -- Framer Motion
   // animates between them automatically
   {isExpanded ? (
     <motion.div layoutId="card" className="expanded">
       <motion.h2 layoutId="title">{title}</motion.h2>
       <motion.p layout>{description}</motion.p>
     </motion.div>
   ) : (
     <motion.div layoutId="card" className="collapsed">
       <motion.h2 layoutId="title">{title}</motion.h2>
     </motion.div>
   )}
   ```

   **Filterable/sortable list:**
   ```jsx
   <LayoutGroup>
     <motion.ul layout>
       <AnimatePresence>
         {filteredItems.map((item) => (
           <motion.li
             key={item.id}
             layout
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             exit={{ opacity: 0, scale: 0.8 }}
             transition={{ type: "spring", stiffness: 300, damping: 25 }}
           >
             {item.name}
           </motion.li>
         ))}
       </AnimatePresence>
     </motion.ul>
   </LayoutGroup>
   ```

   **Expandable card:**
   ```jsx
   function ExpandableCard({ title, content }) {
     const [isOpen, setIsOpen] = useState(false);

     return (
       <motion.div
         layout
         onClick={() => setIsOpen(!isOpen)}
         style={{ borderRadius: 12, overflow: "hidden" }}
         transition={{ type: "spring", stiffness: 300, damping: 30 }}
       >
         <motion.h3 layout="position">{title}</motion.h3>
         <AnimatePresence>
           {isOpen && (
             <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.2 }}
             >
               {content}
             </motion.div>
           )}
         </AnimatePresence>
       </motion.div>
     );
   }
   ```

   **Tab indicator:**
   ```jsx
   function Tabs({ tabs, activeTab, onSelect }) {
     return (
       <div style={{ display: "flex", position: "relative" }}>
         {tabs.map((tab) => (
           <button key={tab} onClick={() => onSelect(tab)} style={{ position: "relative" }}>
             {tab}
             {activeTab === tab && (
               <motion.div
                 layoutId="tab-indicator"
                 style={{
                   position: "absolute",
                   bottom: 0,
                   left: 0,
                   right: 0,
                   height: 2,
                   background: "currentColor",
                 }}
                 transition={{ type: "spring", stiffness: 400, damping: 30 }}
               />
             )}
           </button>
         ))}
       </div>
     );
   }
   ```

4. **Key rules:**
   - Use `layout="position"` when only position should animate (not size)
   - Use `layout="size"` when only size should animate
   - Wrap groups in `<LayoutGroup>` when independent components share `layoutId`s
   - Add `style={{ borderRadius }}` inline when using layout animations (CSS border-radius distorts during transforms)
   - Use spring transitions for layout -- tweens look mechanical
   - Combine with `<AnimatePresence>` for enter/exit during list changes

$ARGUMENTS - What layout change to animate (e.g., "filterable grid", "expandable cards", "tab indicator", "reorderable list")
