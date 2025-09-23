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
  const formattedAmount = new Intl.NumberFormat('en-US').format(amount);
  return (
    <p>
      <span className={`${classNameAmount} font-bold`}>
        ₫ {formattedAmount}
      </span>
      <span> {separator} </span>
      <span className={classNameUnit}>{unit}</span>
    </p>
  );
}
