import { Home, Shop } from '@/app/components/icons/icon';
import Link from 'next/link';

export default function NavItems() {
  const navList = [
    { to: '/', name: 'Home', svg: <Home /> },
    { to: '/about', name: 'About', svg: <Shop /> },
  ];

  const renderNavList = () => {
    return navList.map((item) => {
      return (
        <li key={item.to}>
          <Link
            href={item.to}
            className="text-black hover:text-blue-500 transition duration-300"
          >
            <div className="flex gap-2 items-center">
              {item.svg}
              <span>{item.name}</span>
            </div>
          </Link>
        </li>
      );
    });
  };
  return (
    <div className="hidden w-full md:block md:w-auto">
      <ul className="font-medium text-white text-lg flex items-center justify-center gap-5">
        {renderNavList()}
      </ul>
    </div>
  );
}
