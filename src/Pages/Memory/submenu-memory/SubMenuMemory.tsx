import NavLinkCustom from "../../../components/NavLinkCustom/NavLinkCustom";
import "./subMenuMemory.css";

export default function SubMenuMemory() {
  const classNameDefault = "submenu-memory py-2 transition ease-in-out duration-[0.25s] text-gray-900 dark:text-white hover:border-b-blue-600 hover:text-slate-500 border-b-2 border-b-transparent";

  const ArrayLink = [
    {
      to: "/memory",
      title: "Foto",
      NewClassName: null,
    },
    {
      to: "/memory/video",
      title: "Video",
      NewClassName: null,
    },
    {
      to: "/memory/teman",
      title: "Presensi ",
      NewClassName: null,
    },
  ];

  const LinkMap = ArrayLink.map((link, idx) => {
    return (
      <NavLinkCustom
        key={idx}
        to={link.to}
        className={
          link.NewClassName === null
            ? classNameDefault
            : classNameDefault + " " + link.NewClassName
        }
      >
        {link.title}
      </NavLinkCustom>
    );
  });

  return (
    <nav className="sticky md:block hidden">
      <div className="max-w-screen-xl px-9 mx-auto md:px-6 mb-3">
        <div className="flex items-center">
          <ul className="flex flex-row mt-0 mr-6 space-x-8 lg:text-lg font-medium">
            {LinkMap}
          </ul>
        </div>
      </div>
    </nav>
  );
}
