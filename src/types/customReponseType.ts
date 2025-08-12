export type CustomReponseType<T> = {
  statusCode: number;
  dateTime: string;
  content: T;
};
