/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Include JavaScript and TypeScript files in the 'app' directory
    './pages/**/*.{js,ts,jsx,tsx}', // Include JavaScript and TypeScript files in the 'pages' directory
    // Add other directories or file patterns as needed
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

