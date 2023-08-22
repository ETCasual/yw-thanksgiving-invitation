import type { FunctionComponent, ReactNode } from "react";

interface SwiperSlideProps {
  children: ReactNode;
  nextText: string;
  onClick: () => void;
}

export const Slide: FunctionComponent<SwiperSlideProps> = ({
  children,
  nextText,
  onClick,
}) => {
  return (
    <div className="flex w-full flex-col justify-center">
      {children}
      <button
        onClick={onClick}
        className="mt-4 w-full rounded-lg bg-green-500 py-2 font-bold text-white"
      >
        {nextText}
      </button>
    </div>
  );
};
