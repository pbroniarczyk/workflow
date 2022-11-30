import React, { FC, ReactNode } from 'react';
import clsx from 'clsx';

import './flex.scss';

type Props = {
  children: ReactNode | ReactNode[];
  className?: string;
  align?: 'start' | 'end' | 'center';
  direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
  justify?: 'space-between' | 'space-around' | 'start' | 'end' | 'center';
  wrap?: 'wrap' | 'no-wrap';
};

const Flex: FC<Props> = ({
  children,
  className,
  align = 'center',
  direction = 'row',
  justify = 'space-between',
  wrap = 'wrap',
}) => {
  const rootClass = clsx(
    'flex',
    className,
    `flex-align--${align}`,
    `flex-direction--${direction}`,
    `flex-justify--${justify}`,
    `flex-wrap--${wrap}`
  );

  return <div className={rootClass}>{children}</div>;
};

export default Flex;
