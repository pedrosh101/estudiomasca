import React from "react";
import Navbar from "../components/navbar";
import Image from "next/image";
import Profile from "../../../public/img/proj2.png";
import Paula from "../../../public/img/Paula.jpg";

function page() {
  return (
    <>
      <main className="flex flex-col bg-clr1 min-h-screen text-black text-sm leading-6">
        <Navbar isProjetosPage={true} />
        <div className="flex flex-col sm:flex-row sm:px-16 px-4 pt-20 sm:pt-24 pb-4">
          <div className="flex flex-col space-y-4 sm:w-2/5">
            <h1>
              Somos um Estúdio de arquitetura sediado em Curvelo-MG, e desde
              2021 atuamos na criação e transformação dos espaços em todo o
              Brasil.
              <br />
              <br />
              Entendemos a arquitetura como um agente transformador da vida
              humana. Capaz de modificar a qualidade de vida, a saúde e as
              relações da pessoas que ocupam o espaço e de todo o entorno.
              <br />
              <br />
              Buscamos uma eterna entrega de autenticidade e qualidade ao
              ambiente projetado e construído, afim de entregar ambientes
              únicos, personalizados e compatíveis á dinâmica dos moradores.
              <br />
              <br />
              Especulamos maneiras de integrar o espaço construído ao seu
              entorno natural, de forma a buscar a melhor implantação dentro
              daquele ambiente. Todo lote é único, com suas características
              naturais individuais e devem ser trabalhadas de forma a usar esses
              elementos como elevadores ao projeto.
              <br />
              <br />
              Cultura e tradições somadas à soluções modernas e o bom uso do
              entorno natural são as premissas do Estúdio Masca na busca por um
              ambiente construído com melhor qualidade.
            </h1>
          </div>
          <div className="flex sm:w-3/5 sm:h-custom1 h-96 mt-4 sm:mt-0">
            <div className="relative w-full">
              <Image
                src={Profile}
                alt="Profile"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <div className="sm:px-16 text-3xl px-4 pt-6 sm:pt-24 pb-4">
          <h1>Equipe Principal</h1>
        </div>
        <div className="flex flex-col sm:flex-row sm:px-16 px-4 pt-6 sm:pt-24 pb-4">
          <div className="flex flex-col space-y-4 sm:w-2/5">
            <h1>
            Paula Mascarenhas  - Arquiteta Urbanista, Diretora criativa e Fundadora do Estúdio Masca.
              <br />
              <br />
              Formada em 2018 pela UNA, quase todo o curso de Arquitetura e Urbanismo foi feito na FUMEC mas devido a incompatibilidade de horários entre trabalho e a faculdade, concluiu o TCC na UNA.
              <br />
              <br />
              Arquitetura sempre foi um interesse, desde nova e cursar arquitetura sempre foi uma certeza. Começou a trabalhar desde os primeiros períodos da faculdade ampliando sua experiência profissional. Nos últimos anos de curso, ocupou o cargo de arquiteta responsável por uma obra de Retrofit em um prédio no centro de Belo Horizonte. O edifício comercial tinha 10 andares e foi completamente reformado sob o comando e gerenciamento da Paula. A obra durou dois anos de muito trabalho e aprendizado. A partir disso, com todo o conhecimento e maturidade adquirida nessa jornada desafiadora, nasceu o ESTUDIO MASCA, como um desejo pessoal de ter sua própria empresa e comandar seus próprios projetos.
            </h1>
          </div>
          <div className="flex sm:w-3/5 sm:h-custom1 h-96 mt-4 sm:mt-0">
            <div className="relative w-full">
              <Image
                src={Paula}
                alt="Paula"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default page;
