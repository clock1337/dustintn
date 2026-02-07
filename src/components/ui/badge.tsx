import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-300 focus:outline-none",
  {
    variants: {
      variant: {
        default:
          "border border-transparent bg-[#FF6B00] text-white hover:bg-[#FF8533]",
        secondary:
          "border border-white/10 bg-[#1A1A1A] text-white/70 hover:text-white hover:border-white/20",
        destructive:
          "border border-transparent bg-red-500/10 text-red-500 hover:bg-red-500/20",
        outline:
          "border border-white/10 text-white/70 hover:border-[#FF6B00]/50 hover:text-white",
        accent:
          "border border-[#FF6B00]/20 bg-[#FF6B00]/10 text-[#FF6B00]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
