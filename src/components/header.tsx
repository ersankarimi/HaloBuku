import { blueLogo, shoppingBag, searchIcon } from "../../public/images";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="shadow-sm p-4">
      <div className="container m-auto flex justify-between items-center">
        <Image
          src={blueLogo}
          alt="Brand Logo"
          width={74}
          height={64}
          className="cursor-pointer"
        />
        <form className="bg-gray-100 py-2 px-5 rounded-lg flex justify-between items-center gap-2 w-1/3 outline outline-1 outline-blue-200">
          <label htmlFor="search-keyword">
            <Image src={searchIcon} alt="Search Icon" width={24} height={24} />
          </label>
          <input
            type="text"
            name="search-keyword"
            id="search-keyword"
            placeholder="Search title, author, or keyword ..."
            className="appearance-none focus:outline-none p-2 placeholder:text-xs w-full placeholder:text-blue-600/40 bg-transparent text-gray-800"
          />
        </form>
        <Image
          src={shoppingBag}
          alt="Shopping Bag Icon"
          className="cursor-pointer"
        />
      </div>
    </header>
  );
};
