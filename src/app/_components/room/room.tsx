import Card from '@/components/card/card';

type RoomItem = {
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
type RoomData = {
  data: {
    content: RoomItem[];
  };
};

export default function Room({ data }: RoomData) {
  console.log('data', data);

  return (
    <div className="grid grid-cols-4 gap-5">
      {data.content &&
        data.content.map((room) => {
          return (
            <Card key={room.id}>
              <p>{room.tenPhong}</p>
            </Card>
          );
        })}
    </div>
  );
}
