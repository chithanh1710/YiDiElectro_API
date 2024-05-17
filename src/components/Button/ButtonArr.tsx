import { ArrowUp } from "lucide-react";

export function ButtonArr({
  buttonArrRef,
}: {
  buttonArrRef: React.RefObject<HTMLButtonElement>;
}) {
  return (
    <button
      onClick={() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }}
      ref={buttonArrRef}
      className="fixed bottom-5 hidden right-5 bg-gray-800 fade p-2 items-center justify-center rounded-lg"
    >
      <ArrowUp className="h-8 w-8 text-gray-100" />
    </button>
  );
}
