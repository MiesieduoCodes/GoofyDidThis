"use client"

import { useToast } from "@/app/components/hooks/use-toast";
import { Button } from "@/app/components/ui/button";

export function ToastSimple() {
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          description: "Your message has been sent.",
        })
      }}
    >
     Send Message
    </Button>
  )
}
