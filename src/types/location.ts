import { CustomReponseType } from './customReponseType';

export type LocationItem = {
  id: number;
  tenViTri: string;
  tinhThanh: string;
  quocGia: string;
  hinhAnh: string;
};

export type TypeLocationData = CustomReponseType<LocationItem[]>;
