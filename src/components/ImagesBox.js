import { Atropos } from 'atropos/react';

export const ImgBox = ({ bg, logo1, logo2, logo3 }) => {
  return (
    <div className="w-64 m-6">
      <Atropos className="movie-box" rotateTouch="scroll-y">
        <div className="movie-box-bg" data-atropos-offset="-5">
          <img src={`/images/GerArt/${bg}`} alt="movie bg" />
        </div>

        <img
          className="movie-box-logo"
          data-atropos-offset="0"
          src={`/images/GerArt/${logo1}`}
          alt="movie logo 1"
        />
        <img
          className="movie-box-studio"
          data-atropos-offset="2.5"
          src={`/images/GerArt/${logo2}`}
          alt="movie logo 2"
        />
        {logo3 && (
          <img
            className="movie-box-studio"
            data-atropos-offset="5"
            src={`/images/GerArt/${logo3}`}
            alt="movie logo 3"
          />
        )}
      </Atropos>
    </div>
  );
};
