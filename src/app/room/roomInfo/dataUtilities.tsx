import { ICON_UTILTIES } from '@/components/icons/iconUtilties';

const {
  WashingMachine,
  FlatIron,
  Television,
  AirConditioner,
  Wifi,
  Kitchen,
  Parking,
  Pool,
} = ICON_UTILTIES;

export const dataUtilties = [
  {
    name: 'Máy giặt',
    svg: <WashingMachine />,
    field: 'mayGiat',
  },
  {
    name: 'Bàn là',
    svg: <FlatIron />,
    field: 'banLa',
  },
  {
    name: 'Ti vi',
    svg: <Television />,
    field: 'tivi',
  },
  {
    name: 'Điều hòa',
    svg: <AirConditioner />,
    field: 'dieuHoa',
  },
  {
    name: 'Wifi',
    svg: <Wifi />,
    field: 'wifi',
  },
  {
    name: 'Bếp',
    svg: <Kitchen />,
    field: 'bep',
  },
  {
    name: 'Đỗ xe',
    svg: <Parking />,
    field: 'doXe',
  },
  {
    name: 'Hồ bơi',
    svg: <Pool />,
    field: 'hoBoi',
  },
  {
    name: 'Bàn ủi',
    svg: <FlatIron />,
    field: 'banUi',
  },
];
