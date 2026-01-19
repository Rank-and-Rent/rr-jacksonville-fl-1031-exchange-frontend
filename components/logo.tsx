"use client";

interface LogoProps {
  className?: string;
  color?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizes = {
  sm: "h-8",
  md: "h-10",
  lg: "h-12",
  xl: "h-16",
};

export default function Logo({ className = "", color = "currentColor", size = "md" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 400 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${sizes[size]} w-auto ${className}`}
      aria-label="Jacksonville 1031"
    >
      {/* Fluid handwritten "Jacksonville 1031" signature style */}
      <g stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none">
        {/* J - tall flourish */}
        <path
          d="M12 58 C12 58, 16 14, 18 10 C20 6, 24 8, 24 14 C24 22, 20 48, 18 56 C16 62, 12 66, 8 64 C4 62, 4 58, 8 56"
          strokeWidth="2.2"
        />
        {/* acksonvill - flowing lowercase */}
        <path
          d="M28 42 C24 42, 22 48, 26 52 C30 56, 36 52, 38 48 C38 44, 38 36, 38 36 L38 54"
          strokeWidth="1.8"
        />
        <path
          d="M44 48 C42 44, 40 48, 42 52 C44 56, 50 52, 50 48"
          strokeWidth="1.8"
        />
        <path
          d="M54 18 L54 54 M54 40 L62 32 M56 42 L64 54"
          strokeWidth="1.8"
        />
        <path
          d="M72 46 C68 44, 66 48, 68 52 C70 56, 76 52, 76 48 C76 44, 70 44, 70 48 C70 52, 76 54, 76 54"
          strokeWidth="1.8"
        />
        <path
          d="M84 42 C80 42, 78 48, 82 52 C86 56, 92 50, 92 44 C92 38, 88 42, 88 50 C88 56, 92 58, 96 54"
          strokeWidth="1.8"
        />
        <path
          d="M100 54 L100 40 C100 36, 104 34, 108 36 C112 38, 112 44, 112 54"
          strokeWidth="1.8"
        />
        <path
          d="M118 36 L126 54 L134 36"
          strokeWidth="1.8"
        />
        <path
          d="M140 40 L140 54 M140 32 L140 30"
          strokeWidth="1.8"
        />
        <path
          d="M148 18 C148 18, 148 54, 150 58"
          strokeWidth="1.8"
        />
        <path
          d="M158 18 C158 18, 158 54, 160 58"
          strokeWidth="1.8"
        />
        {/* e with flourish connecting to 1031 */}
        <path
          d="M168 46 C172 46, 176 44, 176 42 C176 38, 170 36, 166 40 C162 44, 164 52, 170 54 C176 56, 182 52, 188 48"
          strokeWidth="1.8"
        />
        
        {/* Elegant script "1031" */}
        <path
          d="M200 56 L200 22 C200 22, 194 28, 192 30"
          strokeWidth="2.5"
        />
        <path
          d="M216 28 C210 28, 206 34, 206 42 C206 50, 210 56, 218 56 C226 56, 230 50, 230 42 C230 34, 226 28, 218 28"
          strokeWidth="2.5"
        />
        <path
          d="M242 28 C250 28, 254 32, 254 36 C254 40, 248 42, 248 42 C248 42, 256 44, 256 50 C256 56, 250 58, 242 58"
          strokeWidth="2.5"
        />
        <path
          d="M272 56 L272 22 C272 22, 266 28, 264 30"
          strokeWidth="2.5"
        />
        
        {/* Decorative flourish underline */}
        <path
          d="M8 64 Q80 72, 160 66 Q240 60, 280 68"
          strokeWidth="1.2"
          opacity="0.5"
        />
      </g>
    </svg>
  );
}

// Alternative: Pure CSS text logo using custom font
export function LogoText({ className = "", dark = false }: { className?: string; dark?: boolean }) {
  return (
    <span 
      className={`logo-cursive ${className}`}
      style={{ color: dark ? "#1a1a1a" : "white" }}
    >
      Jacksonville 1031
    </span>
  );
}
