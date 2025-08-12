export type RoomItem = {
  banLa: boolean;
  banUi: boolean;
  bep: boolean;
  dieuHoa: boolean;
  doXe: boolean;
  giaTien: number;
  giuong: number;
  hinhAnh: string;
  hoBoi: boolean;
  id: number;
  khach: number;
  maViTri: number;
  mayGiat: boolean;
  moTa: string;
  phongNgu: number;
  phongTam: number;
  tenPhong: string;
  tivi: boolean;
  wifi: boolean;
};

export type TypeRoomData = {
  statusCode: number;
  dateTime: string;
  content: RoomItem[];
};

export type RoomData = {
  data: {
    content: RoomItem[];
  };
};

export const DEFAULT_ROOM_DATA: TypeRoomData = {
  statusCode: 200,
  dateTime: '',
  content: [],
};
