import { Footer } from '../../components/Footer';
import JavascriptExample from '../../components/JavascriptExample';
import HeaderTitle from '../../components/HeaderTitlte';
import IndexTitle from '../../components/IndexTitle';
import LinkButton from '../../components/LinkButton';
import { Pre } from '../../components/Pre';
import { Nav } from '../../components/Nav';
import { NavSwitch } from '../../components/NavSwicth';
import { ShareButton } from '../../components/ShareButton';
import { SectionTitle } from '../../components/SectionTitle';
import { TitlesContextProvider } from '../../components/TitlesContextProvider';
import ImageComponent from '../../components/ImageComponent';
import { NavLinks } from '../../components/NavLinks';
export default function JavaScript() {
  return (
    <TitlesContextProvider>
      <Nav className="fixed xl:relative w-full h-12 z-50" />
      <div className="max-w-screen-xl mx-auto flex items-stretch py-16">
        <NavLinks />
        <div className="w-full max-w-none prose px-4 md:px-8 text-text-primary">
          <NavSwitch inline />
          <HeaderTitle>Javascript Arrays</HeaderTitle>
          <hr className="border-text-primary" />
          <IndexTitle>Métodos de Array</IndexTitle>
          <SectionTitle title="Introducción" />
          <ul>
            <li>
              Los arrays son una estructura de datos fundamental en JavaScript
              que te permite almacenar y manipular conjuntos de elementos de
              forma eficiente. Son muy versátiles y se utilizan ampliamente en
              el desarrollo web y de aplicaciones.
            </li>
            <li>Hoy, introduciremos un nuevo lenguaje de programación:</li>
          </ul>
          <IndexTitle>Javascript</IndexTitle>
          <figure>
            <svg
              viewBox="0 0 24 24"
              width={120}
              height={60}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_2)">
                <rect width="24" height="24" fill="black" />
                <path
                  d="M0 0H24V24H0V0ZM22.034 18.276C21.859 17.181 21.146 16.261 19.031 15.403C18.295 15.058 17.477 14.818 17.234 14.263C17.143 13.933 17.129 13.753 17.188 13.558C17.338 12.912 18.103 12.718 18.703 12.898C19.093 13.018 19.453 13.318 19.679 13.798C20.713 13.122 20.713 13.122 21.434 12.673C21.164 12.253 21.03 12.072 20.848 11.893C20.218 11.188 19.379 10.828 18.014 10.859L17.309 10.948C16.633 11.113 15.989 11.473 15.599 11.953C14.459 13.244 14.788 15.494 16.168 16.424C17.533 17.444 19.529 17.668 19.784 18.629C20.024 19.799 18.914 20.174 17.818 20.039C17.007 19.859 16.558 19.453 16.063 18.703L14.233 19.754C14.443 20.234 14.683 20.443 15.043 20.863C16.783 22.619 21.133 22.529 21.914 19.859C21.943 19.769 22.154 19.154 21.988 18.209L22.034 18.276ZM13.051 11.031H10.803C10.803 12.969 10.794 14.895 10.794 16.836C10.794 18.068 10.857 19.199 10.656 19.547C10.326 20.236 9.476 20.148 9.09 20.027C8.694 19.831 8.493 19.561 8.26 19.172C8.197 19.067 8.15 18.976 8.133 18.976L6.308 20.101C6.613 20.731 7.058 21.273 7.632 21.618C8.487 22.128 9.636 22.293 10.839 22.023C11.622 21.797 12.297 21.332 12.65 20.612C13.16 19.682 13.052 18.542 13.047 17.266C13.059 15.212 13.047 13.157 13.047 11.087L13.051 11.031Z"
                  fill="#F7DF1E"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_2">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </figure>
        </div>
      </div>
    </TitlesContextProvider>
  );
}
