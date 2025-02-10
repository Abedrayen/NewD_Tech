import { cn } from "@/lib/utils"

interface ProgressStepsProps {
  currentStep: number
  totalSteps: number
}

export function ProgressSteps({ currentStep, totalSteps }: ProgressStepsProps) {
  return (
    <div className="w-full">
      <div className="flex justify-between">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={cn(
              "flex items-center",
              index < totalSteps - 1 && "w-full"
            )}
          >
            <div
              className={cn(
                "h-8 w-8 rounded-full border-2 flex items-center justify-center font-semibold",
                index + 1 <= currentStep
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-muted-foreground text-muted-foreground"
              )}
            >
              {index + 1}
            </div>
            {index < totalSteps - 1 && (
              <div
                className={cn(
                  "h-[2px] w-full",
                  index + 1 < currentStep
                    ? "bg-primary"
                    : "bg-muted-foreground"
                )}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

