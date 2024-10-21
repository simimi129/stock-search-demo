export default function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="p-1 sm:p-2 hover:bg-gray-100 rounded-md text-nowrap text-md sm:text-lg">
      {children}
    </a>
  );
}
