import Link from "next/link"
import Image from "next/image"
import LogoImg from "../assets/logo.svg"
const Header = () => {
  return (
    <nav>
      <ul>
        <div className="logo">
          <Image
            src={LogoImg}
            alt="fgfgdfgdfg"
            width={100}
            height={100}
            className="img_cl"
          />
        </div>

        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/users">
          <a>Users</a>
        </Link>
      </ul>
    </nav>
  );
}
export default Header;