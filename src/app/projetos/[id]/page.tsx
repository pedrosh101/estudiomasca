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
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

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
      <main className="flex flex-col bg-clr1 min-h-screen items-center">
        <Navbar isProjetosPage={true} />

        <div className="flex flex-col sm:flex-row sm:w-5/6 pt-8 pb-16 gap-10 px-4 sm:px-0">
          {/* Coluna da esquerda */}
          <div className="flex flex-col w-full sm:w-1/2 text-black">
            <h1 className="sm:text-3xl font-semibold text-2xl sm:mt-10 mt-4">
              {proj?.title}
            </h1>
            <div className="h-0.5 w-full bg-clr1 my-2"></div>

            <div className="sm:w-5/6 w-full mt-4 sm:mt-8 text-sm leading-relaxed">
              <div>
                <h2 className="font-semibold pb-1">Sobre</h2>
                <h2>
                  {proj?.description.split("¨").map((phrase, index) => (
                    <span key={index}>
                      {phrase.trim()}
                      {index !== proj?.description.split("¨").length - 1 && <br />}
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

              <div className="my-4">
                <h2 className="font-semibold pb-1">Local</h2>
                <h2>{proj?.local}</h2>
              </div>

              <div className="my-4">
                <h2 className="font-semibold pb-1">Dados Técnicos</h2>
                <h2>{proj?.dado1}</h2>
                <h2>{proj?.dado2}</h2>
                <h2>{proj?.dado3}</h2>
              </div>
            </div>
          </div>

          {/* Coluna da direita - miniaturas */}
          <div className="grid grid-cols-2 2xl:grid-cols-3 gap-4 w-full sm:w-1/2 place-items-center">
            {proj?.fotos.map((foto, index) => (
              <div
                key={index}
                onClick={() => openModal(index)}
                className="relative w-full h-56 sm:h-64 cursor-pointer overflow-hidden"
              >
                <Image
                  src={foto}
                  alt={`Imagem ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Modal com Swiper */}
        {modalIsOpen && selectedImageIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            onClick={closeModal}
          >
            <div className="relative w-full max-w-6xl h-[80vh]" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeModal}
                className="absolute top-4 right-6 text-white text-4xl z-50 hover:text-gray-300"
              >
                &times;
              </button>

              <Swiper
                navigation
                pagination={{ type: "fraction" }}
                modules={[Navigation, Pagination]}
                className="w-full h-full"
                initialSlide={selectedImageIndex}
              >
                {proj?.fotos.map((foto, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full h-full">
                      <Image
                        src={foto}
                        alt={`Imagem ${index + 1}`}
                        fill
                        className="object-contain"
                        sizes="100vw"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default ProjetoDetalhes;
