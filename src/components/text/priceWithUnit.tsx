type PriceWithUnitProps = {
  amount: number;
  classNameAmount?: string;
  unit: string;
  classNameUnit?: string;
};

export default function PriceWithUnit({
  amount,
  unit,
  classNameAmount,
  classNameUnit,
}: PriceWithUnitProps) {
  return (
    <p>
      <span className={`${classNameAmount} font-bold`}>₫ {amount}</span> /{' '}
      <span className={classNameUnit}>{unit}</span>
    </p>
  );
}
