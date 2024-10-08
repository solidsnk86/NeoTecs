import { Atropos } from 'atropos/react';

export const AtroposBox = ({ bg, logo }) => {
  return (
    <div className="xl:w-80 my-10">
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
          loading="lazy"
        />
        <img
          className="game-box-logo"
          data-atropos-offset="2.5"
          src={`${logo}`}
          alt="pic logo"
          loading="lazy"
        />
        <img
          className="game-box-studio"
          src="/images/icons/ger-art-icon.svg"
          alt="pic studio"
          loading="lazy"
        />
      </Atropos>
    </div>
  );
};
