When to Use It

✅ Real-world use cases:

Measuring DOM size or position before painting (tooltips, modals, animations)

Scroll or focus adjustments after DOM changes

Prevent flickering when applying layout changes (e.g., skeleton loaders)

Synchronizing animations with the layout

❌ Don’t use it for API calls or async operations — use useEffect for that.

💡 Real-World Example:
“Sticky Header After Scroll” + “Smooth Layout Measurement”

Let’s create a page where a header becomes sticky after scrolling,
and we’ll measure the element’s position using useLayoutEffect to avoid flicker.
