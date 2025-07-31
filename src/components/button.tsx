import { twMerge } from "tailwind-merge";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(
        "shadow-lg",
        variant === "primary" &&
          "bg-c-orange text-c-gray-50 shadow-c-orange rounded-full px-8 py-2 font-medium",
        variant === "secondary" &&
          "bg-c-orange-50 text-c-orange shadow-c-orange-50 rounded-full px-8 py-2 font-medium",
        className,
      )}
    />
  );
}
