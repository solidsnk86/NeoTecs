import { Atropos } from 'atropos/react';

export const PictureBox = ({ bg, logo, studios }) => {
  return (
    <div className="xl:w-80 relative my-10">
      <Atropos
        className="game-box"
        rotateTouch="scroll-y"
        rotateXMax={24}
        rotateYMax={24}
        rotateChildren={
          <>
            <span className="game-box-t" />
            <span className="game-box-r" />
            <span className="game-box-b" />
            <span className="game-box-l" />
          </>
        }
      >
        <img
          className="game-box-bg"
          data-atropos-offset="-4"
          src={`${bg}`}
          alt="pic cover"
        />
        <img
          className="game-box-studio sticky top-0"
          src={`${studios}`}
          alt="pic studio"
        />
      </Atropos>
    </div>
  );
};
