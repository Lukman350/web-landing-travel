interface BgImageProps {
  title: string;
  location: string;
  className: string;
  classInfo: string;
}

function BgImage({ title, location, className, classInfo }: BgImageProps) {
  return (
    <>
      <div
        className={`${className} relative block w-full bg-no-repeat bg-cover bg-center bg-origin-content`}
      >
        <div className={`absolute ${classInfo} flex flex-col`}>
          <h1 className="text-white text-lg font-light">{title}</h1>
          <p className="text-white text-sm font-thin mt-2">{location}</p>
        </div>
      </div>
    </>
  );
}

export default BgImage;
