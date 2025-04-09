import Link from "next/link";

interface ButtonProps {
    href: string;
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    className?: string;
}

export const Button = ({
    href,
    children,
    variant = "primary",
    className = "",
}: ButtonProps) => {
    const baseStyles = `
        relative inline-block uppercase font-semibold px-4 py-1.5 rounded-none shadow 
        transition-all duration-300 overflow-hidden
    `;

    const variantStyles =
        variant === "primary"
            ? "bg-[#e25858] text-white hover:bg-red-600"
            : "bg-[#1f1f1f] text-white hover:bg-black";

    const animatedEffects = `
        before:absolute before:inset-0 before:-translate-x-full before:bg-white/10 
        before:transition-transform before:duration-500 
        hover:before:translate-x-full

        hover:scale-[1.03] active:scale-[0.98]
    `;

    return (
        <Link
            href={href}
            className={`${baseStyles} ${variantStyles} ${animatedEffects} ${className}`}
        >
            <span className="relative z-10">{children}</span>
        </Link>
    );
};