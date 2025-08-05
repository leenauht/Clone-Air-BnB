import { ICONS } from '@/app/components/icons/icon';
import Link from 'next/link';

const NAV_LIST = [
  { to: '/', name: 'Home', svg: <ICONS.Home width={32} height={32} /> },
  { to: '/about', name: 'About', svg: <ICONS.Shop width={32} height={32} /> },
];

interface NavItem {
  to: string;
  name: string;
  svg: React.ReactNode;
}

interface RenderNavListProps {
  navList: NavItem[];
}

export function RenderNavList({ navList }: RenderNavListProps) {
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
}

export default function NavItems() {
  // const renderNavList = () => {
  //   return NAV_LIST.map((item) => {
  //     return (
  //       <li key={item.to}>
  //         <Link
  //           href={item.to}
  //           className="text-black hover:text-blue-500 transition duration-300"
  //         >
  //           <div className="flex gap-2 items-center">
  //             {item.svg}
  //             <span>{item.name}</span>
  //           </div>
  //         </Link>
  //       </li>
  //     );
  //   });
  // };
  return (
    <div className="hidden w-full md:block md:w-auto">
      <ul className="font-medium text-white text-lg flex items-center justify-center gap-5">
        <RenderNavList navList={NAV_LIST} />
      </ul>
    </div>
  );
}
