import Navbar from "../components/navbar";
import Image from "next/image";
import Profile from "../../../public/img/proj2.png";
import Paula from "../../../public/img/Paula.png";
import Talita from "../../../public/img/Talita.png";
import Jéssica from "../../../public/img/Jéssica.png";
import Raquel from "../../../public/img/Raquel.png";

function page() {
  return (
    <>
      <main className="flex flex-col items-center bg-clr1 min-h-screen text-black text-sm leading-6">
        <Navbar isProjetosPage={true} />

        {/* sobre */}
        <div className="flex flex-col-reverse sm:flex-row sm:w-5/6 sm:space-x-8 px-4 sm:px-0 py-16 text-base">
          <h1 className="flex flex-col space-y-4 sm:w-2/5 mt-3 sm:mt-0">
            Olá, somos o ESTÚDIO MASCA.
            <br />
            <br />
            Após uma longa jornada profissional em escritórios e obras de Belo
            Horizonte -MG, a Arquiteta Paula Mascarenhas (FUMEC, 2018) decidiu
            usar toda expertise adquirida para fundar o Estúdio Masca.
            <br />
            Somos um estúdio de arquitetura sediado em Curvelo-MG, e desde 2021
            atuamos na criação e transformação de espaços em todo o Brasil.
            Entendemos a arquitetura como um agente transformador da vida
            humana, capaz de modificar a qualidade de vida, a saúde e as
            relações das pessoas que ocupam o espaço e de todo o entorno.
            <br />
            <br />
            Buscamos uma entrega constante de autenticidade e qualidade ao
            ambiente projetado e construído, a fim de oferecer espaços únicos,
            personalizados e compatíveis com a dinâmica dos moradores.
            Especulamos maneiras de integrar o espaço construído ao seu entorno
            natural, buscando a melhor implantação dentro daquele ambiente. Todo
            lote é único, com suas características naturais individuais, e devem
            ser trabalhadas de forma a usar esses elementos como elevadores ao
            projeto.
            <br />
            Cultura e tradições, somadas a soluções modernas e ao bom uso do
            entorno natural, são as premissas do Estúdio Masca na busca por um
            ambiente construído com melhor qualidade.
          </h1>
          <div className="flex sm:w-3/5 sm:h-custom1 h-96 sm:mt-0 sm:mb-0 mb-6">
            <div className="relative w-full">
              <Image
                src={Profile}
                alt="Paula"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* equipe  */}
        <div className="grid sm:grid-cols-4 sm:w-5/6 sm:mt-10 mb-20 text-sm">
          <div className="flex flex-col px-4 pt-6 sm:pt-10 pb-4">
            <div className="flex h-72 mt-4 sm:mt-0">
              <div className="relative w-96">
                <Image
                  src={Paula}
                  alt="Paula"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain"
                />
              </div>
            </div>
            <div className="text-center mt-3">
              <h1 className="text-base">Paula Mascarenhas</h1>
              <h2>
                Arquiteta Urbanista, Diretora criativa e Fundadora do Estúdio
                Masca.
              </h2>
            </div>
          </div>
          <div className="flex flex-col  px-4 pt-6 sm:pt-10 pb-4">
            <div className="flex h-72 mt-4 sm:mt-0">
              <div className="relative w-96">
                <Image
                  src={Talita}
                  alt="Talita"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain"
                />
              </div>
            </div>
            <div className="text-center mt-3">
              <h1 className="text-base">Talita Costa</h1>
              <h2>
                Estudante de Engenharia Civil CEFET-Curvelo e estagiária de
                projetos.
              </h2>
            </div>
          </div>
          <div className="flex flex-col  px-4 pt-6 sm:pt-10 pb-4">
            <div className="flex h-72 mt-4 sm:mt-0">
              <div className="relative w-96">
                <Image
                  src={Jéssica}
                  alt="Jéssica"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain"
                />
              </div>
            </div>
            <div className="text-center mt-3">
              <h1 className="text-base">Jéssica Batista</h1>
              <h2>Administradora e Consultora Financeira.</h2>
            </div>
          </div>
          <div className="flex flex-col  px-4 pt-6 sm:pt-10 pb-4">
            <div className="flex h-72 mt-4 sm:mt-0">
              <div className="relative w-96">
                <Image
                  src={Raquel}
                  alt="Raquel"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain"
                />
              </div>
            </div>
            <div className="text-center mt-3">
              <h1 className="text-base">Raquel Gomes</h1>
              <h2>Administração e Contratos.</h2>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default page;
