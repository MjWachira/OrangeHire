// frontend/tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // ... existing content paths
  ],
  theme: {
    extend: {
      // Your custom shadcn colors/typography will likely be here
    },
  },
  // 👇 ADD THE PLUGIN HERE 👇
  plugins: [
    require('tailwindcss-animate'),
    // ... any other plugins
  ],
};