import clsx from 'clsx';

import CustomText from '../text/customText';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
interface Props {
  title: string;
  text: string;
  titleClass?: string;
  textClass?: string;
  heading: HeadingTag;
}

export default function CustomTextBlock({
  title,
  text,
  titleClass,
  textClass,
  heading,
}: Props) {
  return (
    <div className="text-left">
      <CustomText heading={heading} className={clsx(titleClass, 'font-medium')}>
        {title}
      </CustomText>
      <p className={textClass}>{text}</p>
    </div>
  );
}
