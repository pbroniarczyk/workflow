import React, { FC } from 'react';
import clsx from 'clsx';

import './tile.scss';

type Props = {
  className?: string;
  hasDescription?: boolean;
  label?: string;
  title?: string;
};

const Tile: FC<Props> = ({ className, hasDescription, label, title }) => {
  const rootClass = clsx('tile', className);
  return (
    <div className={rootClass}>
      {label && (
        <div className="tile__label-wrapper">
          <span className="tile__label">{label}</span>
        </div>
      )}

      <h4 className="tile__title">{title}</h4>

      {hasDescription && (
        <div className="description-wrapper">
          <span>DESC_ICON</span>
        </div>
      )}
    </div>
  );
};

export default Tile;
