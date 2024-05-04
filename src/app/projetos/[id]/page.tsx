"use client";
import Navbar from "@/app/components/navbar";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { projects } from "../../data/projects";
import { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

const ProjetoDetalhes = ({ params }: any) => {
  const proj = projects.find((proj) => proj.id.toString() === params.id);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    setModalIsOpen(false);
  };

  return (
    <>
      <main className="flex flex-col bg-clr1 min-h-screen">
        <Navbar isProjetosPage={true} />
        <div className="flex flex-col sm:flex-row sm:px-16 px-4 pt-16 sm:pt-12 pb-4">
          {/* coluna da esquerda */}
          <div className="flex flex-col w-full sm:w-1/2 text-black">
            {/* segundo elemento, textos */}
            <h1 className="sm:text-3xl font-semibold text-2xl sm:mt-10 mt-4">
              {proj?.title}
            </h1>
            <div className="h-0.5 w-full bg-clr1 my-2"></div>
            <div className="sm:w-5/6 w-full mt-4 sm:mt-8 text-sm">
              <div>
                <h2 className="font-semibold pb-1">Sobre</h2>
                <h2>
                  {proj?.description.split("¨").map((phrase, index) => (
                    <span key={index}>
                      {phrase.trim()}
                      {index !== proj?.description.split("¨").length - 1 && (
                        <br />
                      )}
                    </span>
                  ))}
                </h2>
              </div>
              <div className="my-4">
                <h2 className="font-semibold pb-1">Arquitetura</h2>
                <h2>{proj?.name}</h2>
              </div>
              <div className="my-4">
                <h2 className="font-semibold pb-1">Projeto</h2>
                <h2>{proj?.projeto}</h2>
              </div>
              {proj?.parceria && (
                <div className="my-4">
                  <h2 className="font-semibold pb-1">Parceria</h2>
                  <h2>{proj.parceria}</h2>
                </div>
              )}

              <div className="my-4"></div>
              <div className="justify-between">
                <h2 className="font-semibold pb-1">Local</h2>
                <h2>{proj?.local}</h2>
              </div>
              <div className="my-4"></div>
              <div className="justify-between">
                <h2 className="font-semibold pb-1">Dados Técnicos</h2>
                <h2>{proj?.dado1}</h2>
                <h2>{proj?.dado2}</h2>
                <h2>{proj?.dado3}</h2>
              </div>
            </div>
          </div>

          {/* coluna direita, miniaturas */}

          <div className="grid sm:grid-cols-3 sm:gap-4 gap-2 mt-8">
            {proj?.fotos.map((foto, index) => (
              <div
                key={index}
                onClick={() => openModal(index)}
                className="relative h-64 sm:w-64 w-auto "
              >
                <Image
                  src={foto}
                  alt={`Imagem ${index + 1}`}
                  fill
                  className="cursor-pointer object-cover px-0 sm:px-2 2xl:px-0"
                />
              </div>
            ))}

            {/* modal, swiper carousel */}
            {modalIsOpen && selectedImageIndex !== null && (
              <div
                className="fixed inset-0 flex items-center justify-center min-h-screen"
                onClick={closeModal}
              >
                <div className="absolute inset-0 bg-black opacity-75"></div>
                <div className="relative" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-white text-3xl z-50"
                  >
                    &times;
                  </button>

                  <div className="overflow-hidden">
                    <div className="container">
                      <Swiper
                        navigation
                        pagination={{ type: "fraction" }}
                        modules={[Navigation, Pagination]}
                        className="md:min-h-screen md:w-[70em] h-96 w-96"
                        initialSlide={
                          selectedImageIndex !== null ? selectedImageIndex : 0
                        }
                      >
                        {proj?.fotos.map((foto, index) => (
                          <SwiperSlide key={index}>
                            <div className="flex h-full w-full items-center justify-center">
                              <Image
                                src={foto}
                                alt={`Imagem ${index + 1}`}
                                className="block object-contain h-full w-full"
                                fill
                              />
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default ProjetoDetalhes;
