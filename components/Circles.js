//next Iamge
import Image from "next/image";

const Circles = () => {
  return (
    <div className="w-[200px] xl:w-[300px] absolute right-0 bottom-0 mix-blend-color-dodge animate-pulse duration-75 z-10">
      <Image src={`/circles.png`} width={260} height={260} className="h-full w-full "/>
    </div>
  )
};

export default Circles;
