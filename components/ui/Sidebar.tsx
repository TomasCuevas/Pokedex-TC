import { useContext } from "react";
import NextLink from "next/link";
import { Button, Link } from "@nextui-org/react";

//* icons *//
import { MdClose } from "react-icons/md";

//* components *//
import { SearcherSidebar } from "./";

//* context *//
import { NavbarContext } from "../../context";

export const Sidebar: React.FC = () => {
  const { onToggleSidebar } = useContext(NavbarContext);

  return (
    <section className="absolute top-0 left-0 h-screen w-screen bg-gray-800 px-7 lg:hidden">
      <div className="flex h-[86px] w-full items-center justify-end py-2 ">
        <MdClose onClick={onToggleSidebar} className="text-4xl" />
      </div>
      <div className="flex w-full flex-col items-center gap-5 md:flex-row md:justify-center">
        <NextLink href="/favorites" passHref>
          <Link>
            <Button color="gradient">Favoritos</Button>
          </Link>
        </NextLink>
        <SearcherSidebar />
      </div>
    </section>
  );
};
