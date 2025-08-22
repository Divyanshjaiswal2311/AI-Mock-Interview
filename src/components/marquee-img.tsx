interface MarqueImgProps {
  img: string;
}

export const MarqueImg = ({ img }: MarqueImgProps) => {
  return (
    <div className="mx-8 flex items-center justify-center">
      <img
        src={img}
        alt=""
        className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 opacity-60 hover:opacity-100"
      />
    </div>
  );
};
