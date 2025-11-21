import { formatNumberWithCommas } from '@/helper/numberFormat';

type PriceWithUnitProps = {
  amount: number | string;
  classNameAmount?: string;
  unit?: string | number;
  classNameUnit?: string;
  separator?: string;
  reverse?: boolean;
};

export default function PriceWithUnit({
  amount,
  unit,
  classNameAmount,
  classNameUnit,
  separator = '/',
  reverse = true,
}: PriceWithUnitProps) {
  return (
    <>
      {reverse ? (
        <p className="flex gap-1 items-end">
          <span className={`${classNameAmount} font-medium`}>
            ₫{formatNumberWithCommas(amount)}
          </span>
          {unit ? (
            <>
              <span>{separator}</span>
              <span className={classNameUnit}>{unit}</span>
            </>
          ) : (
            ''
          )}
        </p>
      ) : (
        <p className="flex gap-1 items-end">
          {unit ? (
            <>
              <span className={classNameUnit}>{unit}</span>
              <span>{separator}</span>
            </>
          ) : (
            ''
          )}

          <span className={`${classNameAmount} font-medium`}>
            ₫{formatNumberWithCommas(amount)}
          </span>
        </p>
      )}
    </>
  );
}
