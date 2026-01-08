import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "1rem",
            screens: {
                "2xl": "1200px",
            },
        },
        extend: {
            colors: {
                primary: "#1c355e", // Navy Blue from "interpret"
                secondary: {
                    DEFAULT: "#3AB6E3", // Bright Cyan/Blue from buttons/icons
                    light: "#6ACDF0",
                    dark: "#2A95BD",
                },
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                heading: ["var(--font-outfit)", "sans-serif"],
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
export default config;
