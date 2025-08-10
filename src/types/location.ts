export type LocationItem = {
  id: number;
  tenViTri: string;
  tinhThanh: string;
  quocGia: string;
  hinhAnh: string;
};

export type TypeLocationData = {
  statusCode: number;
  content: LocationItem[];
};

export type LocationData = {
  data: {
    content: LocationItem[];
  };
};
