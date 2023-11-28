import Image from "next/image";
import Logo from "../public/logoc.png";
const header = () => {
  return (
    <>
      <div className="bg-red-900 text-white flex flex-row justify-around">
        <div>
          <Image
            src="/gascoignelogo.webp"
            alt="Logo Gascoigne Pub"
            width={170}
            height={250}
            className="p-4"
          />
        </div>
        <div>Language Switcher</div>
        <nav>
          <ul className="flex flex-col lg:flex-row">
            <li>
              <a href="/">Index</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/events">Events</a>
            </li>
            <li>
              <a href="/contacts">Contacts</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default header;
