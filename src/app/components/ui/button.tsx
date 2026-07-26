import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-control text-sm font-medium outline-none transition-[color,background-color,border-color,box-shadow,transform] duration-polish ease-polish disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-4 focus-visible:ring-ring/25 focus-visible:ring-offset-2 focus-visible:ring-offset-background [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-gray-950 text-white shadow-control hover:bg-gray-800 hover:shadow-raised active:translate-y-px active:shadow-control-pressed dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200",
        destructive:
          "bg-destructive text-destructive-foreground shadow-control hover:bg-destructive/90 focus-visible:ring-destructive/25",
        outline:
          "border border-border/40 bg-surface/70 text-foreground shadow-control hover:border-border/60 hover:bg-accent hover:text-accent-foreground hover:shadow-raised active:translate-y-px active:shadow-control-pressed",
        secondary:
          "bg-secondary text-secondary-foreground shadow-control hover:bg-secondary/80",
        ghost:
          "shadow-none hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5 py-2 has-[>svg]:px-4",
        sm: "h-9 gap-1.5 px-3.5 has-[>svg]:px-3",
        lg: "h-12 gap-2 rounded-control px-6 py-3 text-sm font-semibold leading-none has-[>svg]:px-6",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button };
