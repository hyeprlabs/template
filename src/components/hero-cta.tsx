import { Button } from "@/components/ui/button";
import { ArrowRightIcon, PhoneCallIcon } from "lucide-react";

export function HeroCta() {
  return (
    <div className="fade-in slide-in-from-bottom-10 flex w-fit animate-in items-center justify-center gap-3 fill-mode-backwards pt-2 delay-300 duration-500 ease-out">
      <Button variant="outline">
        <PhoneCallIcon data-icon="inline-start" /> Book a Call
      </Button>
      <Button>
        Get started <ArrowRightIcon data-icon="inline-end" />
      </Button>
    </div>
  );
}
