import { FC, memo } from 'react';

const MuralPageComponent: FC = () => (
  <>
    <div>Hello mural</div>
  </>
);

export const MuralPage = memo(MuralPageComponent);
