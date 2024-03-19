//links
import Link from "next/link";
//icons
import {
  RiTyphoonLine,
  RiInstagramLine,
  RiFacebookBoxLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex gap-x-3 justify-between items-center text-lg">
      <Link href={`/`} className="hover:text-accent transition-all duration-300">
        <RiTyphoonLine/>
      </Link>
      <Link href={`/`} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine/>
      </Link>
      <Link href={`/`} className="hover:text-accent transition-all duration-300">
        <RiFacebookBoxLine/>
      </Link>
      <Link href={`/`} className="hover:text-accent transition-all duration-300">
        <RiDribbbleLine/>
      </Link>
      <Link href={`/`} className="hover:text-accent transition-all duration-300">
        <RiBehanceLine/>
      </Link>
      <Link href={`/`} className="hover:text-accent transition-all duration-300">
        <RiPinterestLine/>
      </Link>
    </div>
  )
};

export default Socials;
