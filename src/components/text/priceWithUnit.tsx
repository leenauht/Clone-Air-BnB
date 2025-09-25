import { formatNumberWithCommas } from '@/helper/numberFormat';

type PriceWithUnitProps = {
  amount: number;
  classNameAmount?: string;
  unit?: string | number;
  classNameUnit?: string;
  separator?: string;
};

export default function PriceWithUnit({
  amount,
  unit,
  classNameAmount,
  classNameUnit,
  separator = '/',
}: PriceWithUnitProps) {
  return (
    <p>
      <span className={`${classNameAmount} font-bold`}>
        ₫ {formatNumberWithCommas(amount)}
      </span>
      <span> {separator} </span>
      <span className={classNameUnit}>{unit}</span>
    </p>
  );
}
