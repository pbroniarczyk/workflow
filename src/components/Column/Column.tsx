import React, { FC } from 'react';
import clsx from 'clsx';

import { ITile } from '../../types';

import Tile from '../Tile';

import './column.scss';

type Props = {
  className?: string;
  tiles?: ITile[];
  title: string;
};

const Column: FC<Props> = ({ className, tiles, title }) => {
  const rootClass = clsx('column', className);

  return (
    <div className={rootClass}>
      <h4 className="column__title">{title}</h4>

      <div className="column__tile-wrapper">
        {tiles?.map((tile) => (
          <Tile key={tile.id} title={tile.title} />
        ))}
      </div>

      <footer className="column__footer">
        <button>+ Dodaj kartę</button>
      </footer>
    </div>
  );
};

export default Column;
