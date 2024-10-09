import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
    darkMode: ["class"],
    content: ["./src/**/*.tsx"],
  theme: {
	container: {
		center: true,
		padding: "2rem",
		screens: {
		  "2xl": "1400px",
		},
	},
  	extend: {
  		fontFamily: {
			sans: ["var(--font-geist-sans)", ...fontFamily.sans],
			mono: ["var(--font-geist-mono)", ...fontFamily.mono],
			heading: ["var(--font-heading)", ...fontFamily.sans],
  		},
		keyframes: {
			"accordion-down": {
			  from: { height: "0" },
			  to: { height: "var(--radix-accordion-content-height)" },
			},
			"accordion-up": {
			  from: { height: "var(--radix-accordion-content-height)" },
			  to: { height: "0" },
			},
			wiggle: {
			  "0%, 100%": {
				transform: "translateX(0%)",
				transformOrigin: "50% 50%",
			  },
			  "15%": { transform: "translateX(-6px) rotate(-6deg)" },
			  "30%": { transform: "translateX(9px) rotate(6deg)" },
			  "45%": { transform: "translateX(-9px) rotate(-3.6deg)" },
			  "60%": { transform: "translateX(3px) rotate(2.4deg)" },
			  "75%": { transform: "translateX(-2px) rotate(-1.2deg)" },
			},
			/**
			 * Original source:
			 * @see https://github.com/juliusmarminge/acme-corp/blob/main/tooling/tailwind/index.ts
			 */
			"fade-up": {
			  "0%": {
				opacity: "0",
				transform: "translateY(10px)",
			  },
			  "75%": {
				opacity: "0.6",
			  },
			  "100%": {
				opacity: "1",
				transform: "translateY(0)",
			  },
			},
			"fade-down": {
			  "0%": {
				opacity: "0",
				transform: "translateY(-10px)",
			  },
			  "75%": {
				opacity: "0.6",
			  },
			  "100%": {
				opacity: "1",
				transform: "translateY(0)",
			  },
			},
			"caret-blink": {
			  "0%,70%,100%": { opacity: "1" },
			  "20%,50%": { opacity: "0" },
			},
		},
		animation: {
			"accordion-down": "accordion-down 0.2s ease-out",
			"accordion-up": "accordion-up 0.2s ease-out",
			wiggle: "wiggle 0.8s both",
			"fade-up": "fade-up 0.5s ease-out",
			"fade-down": "fade-down 0.5s ease-out",
			"caret-blink": "caret-blink 1.25s ease-out infinite",
		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
