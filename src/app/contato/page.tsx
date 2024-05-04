"use client";

import React from "react";
import Navbar from "../components/navbar";
import GoogleMapReact from "google-map-react";

interface MarkerProps {
  lat: number;
  lng: number;
  text: string;
}

const AnyReactComponent: React.FC<MarkerProps> = ({ text }) => (
  <div>{text}</div>
);

function page() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <>
      <main className="flex flex-col items-center bg-clr1 min-h-screen text-black text-sm leading-6">
        <Navbar isProjetosPage={true} />
        <div className="flex flex-col sm:w-4/5 sm:px-16 px-8 sm:pt-10 pt-20 pb-4">
          <div className="h-0.5 w-1/2 bg-clr2 mb-8" />
          <h1 className="text-lg mb-8">Onde Estamos</h1>

          <a
            href="https://maps.app.goo.gl/BZ9SpzkCCAvqDMAS7"
            target="_blank"
            className="w-fit"
          >
            <p className="text-clr2">
              R. Des. Barata, 97 - Passaginha, Curvelo - MG, 35790-303
            </p>
          </a>
          {/* maps */}
          <div className="flex h-96 w-full mt-6">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "",
              }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={-18.727244768059386}
                lng={-44.24254544347476}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>

          <h1 className="text-lg mt-8">Mande uma mensagem!</h1>

          <div className="flex space-x-2 pl-0.5 mt-2">
            <svg
              fill="#22668d"
              viewBox="0 0 16 16"
              height="1.6em"
              width="1.3em"
            >
              <path d="M13.601 2.326A7.854 7.854 0 007.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 003.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0013.6 2.326zM7.994 14.521a6.573 6.573 0 01-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 01-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 014.66 1.931 6.557 6.557 0 011.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 00-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg>
            <a
              href="https://wa.me/5531995574311"
              target="_blank"
              className="w-fit"
            >
              <p className="text-clr2">031995574311</p>
            </a>
          </div>

          <div className="flex space-x-2 my-2">
            <svg
              viewBox="0 0 1024 1024"
              fill="#22668d"
              height="1.6em"
              width="1.6em"
            >
              <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 01-47.9 47.9z" />
            </svg>
            <a
              href="https://www.instagram.com/estudiomasca/"
              target="_blank"
              className="w-fit"
            >
              <p className="text-clr2">@estudiomasca</p>
            </a>
          </div>

          <div className="flex space-x-2">
            <svg
              viewBox="0 0 1024 1024"
              fill="#22668d"
              height="1.6em"
              width="1.6em"
            >
              <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z" />
            </svg>
            <a href="mailto:paula@estudiomasca.com">
              <p className="text-clr2">paula@estudiomasca.com</p>
            </a>
          </div>

          <div className="h-0.5 w-full bg-clr2 mt-8" />
        </div>
      </main>
    </>
  );
}

export default page;
