/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                bg: "#F58",
                "bg-dimmed": "#121212",
                text: "#FFFFFF",
                "text-dimmed": "#b3b3b3",
                primary: "#2f6",
            },
        },
    },
    plugins: [],
};
