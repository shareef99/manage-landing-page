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
        variant === "primary" &&
          "bg-c-orange font-medium px-8 py-2 rounded-full",
        variant === "secondary" &&
          "bg-c-orange-50 text-c-orange font-medium px-8 py-2 rounded-full",
        className
      )}
    />
  );
}
