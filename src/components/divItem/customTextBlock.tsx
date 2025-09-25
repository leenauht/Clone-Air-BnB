import clsx from 'clsx';

import CustomText from '../text/customText';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
interface Props {
  title: string;
  text: string;
  divClass?: string;
  titleClass?: string;
  textClass?: string;
  heading?: HeadingTag;
}

export default function CustomTextBlock({
  title,
  text,
  divClass,
  titleClass,
  textClass,
  heading = 'h6',
}: Props) {
  return (
    <div className={clsx(divClass, 'text-left')}>
      <CustomText heading={heading} className={clsx(titleClass, 'font-medium')}>
        {title}
      </CustomText>
      <p className={textClass}>{text}</p>
    </div>
  );
}
