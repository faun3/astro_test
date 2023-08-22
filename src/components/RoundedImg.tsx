type RoundedImgProps = {
  src: string;
  alt: string;
};

const RoundedImg = ({ src, alt }: RoundedImgProps) => {
  return (
    <div className="rounded-lg overflow-hidden">
      <img src={src} alt={alt} className="object-cover w-full h-full" />
    </div>
  );
};
export default RoundedImg;
