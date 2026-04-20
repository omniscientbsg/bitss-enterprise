import { cn } from "@/lib/utils";

interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  gradientHover?: boolean;
}

export function BentoCard({ children, className, gradientHover = true, ...props }: BentoCardProps) {
  return (
    <div
      className={cn(
        "bento-card p-8 rounded-2xl",
        gradientHover && "border-gradient",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
