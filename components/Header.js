//next imge
import Image from "next/image";
//next link
import Link from "next/link";
//components
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className=" absolute w-full z-30 flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-y-6 py-8 ">
          {/*logo*/}
          <Link href={`/`} className="flex justify-center items-center" >
            <Image
            
              src={`./logo.svg`}
              width={220}
              height={40}
              alt="logo"
              property="true"
            />
          </Link>
          {/*socials*/}
          <Socials/>
        </div>
      </div>
      {/* <Image src={} width={} height={} /> */}
    </header>
  );
};

export default Header;
