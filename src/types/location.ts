export type LocationItem = {
  id: number;
  tenViTri: string;
  tinhThanh: string;
  quocGia: string;
  hinhAnh: string;
};

export type TypeLocationData = {
  statusCode: number;
  dateTime: string;
  content: LocationItem[];
};

export type LocationData = {
  dataLoca: {
    content: LocationItem[];
  };
};
