import Navbar from "../components/navbar";
import Image from "next/image";
import Profile from "../../../public/img/proj2.png";
import Paula from "../../../public/img/Paula.jpg";
import Talita from "../../../public/img/Talita.jpg";
import Jéssica from "../../../public/img/Jéssica.jpg";
import Raquel from "../../../public/img/Raquel.jpg";

function page() {
  return (
    <>
      <main className="flex flex-col items-center bg-clr1 min-h-screen text-black text-sm leading-6">
        <Navbar isProjetosPage={true} />
        <div className="flex flex-col w-4/5 sm:px-16 px-4 pt-10 pb-4">
          <div className="flex sm:h-custom1 h-96 sm:mt-0">
            <div className="relative w-full">
              <Image
                src={Profile}
                alt="Profile"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-4 pt-6">
            <h1>
              Somos um Estúdio de arquitetura sediado em Curvelo-MG, e desde
              2021 atuamos na criação e transformação dos espaços em todo o
              Brasil.
              <br />
              Entendemos a arquitetura como um agente transformador da vida
              humana. Capaz de modificar a qualidade de vida, a saúde e as
              relações da pessoas que ocupam o espaço e de todo o entorno.
              <br />
              Buscamos uma eterna entrega de autenticidade e qualidade ao
              ambiente projetado e construído, afim de entregar ambientes
              únicos, personalizados e compatíveis á dinâmica dos moradores.
              <br />
              Especulamos maneiras de integrar o espaço construído ao seu
              entorno natural, de forma a buscar a melhor implantação dentro
              daquele ambiente. Todo lote é único, com suas características
              naturais individuais e devem ser trabalhadas de forma a usar esses
              elementos como elevadores ao projeto.
              <br />
              Cultura e tradições somadas à soluções modernas e o bom uso do
              entorno natural são as premissas do Estúdio Masca na busca por um
              ambiente construído com melhor qualidade.
            </h1>
          </div>
        </div>
        <div className="flex w-4/5 sm:px-16 text-3xl px-4 pt-6 sm:pt-16 pb-4">
          <h1>Equipe Principal</h1>
        </div>
        <div className="flex flex-col w-4/5 sm:flex-row sm:px-16 px-4 pt-6 sm:pt-10 pb-4">
          <div className="flex flex-col space-y-4 sm:w-2/5">
            <h1>
              Paula Mascarenhas - Arquiteta Urbanista, Diretora criativa e
              Fundadora do Estúdio Masca.
              <br />
              <br />
              Formada em 2018 pela UNA, quase todo o curso de Arquitetura e
              Urbanismo foi feito na FUMEC mas devido a incompatibilidade de
              horários entre trabalho e a faculdade, concluiu o TCC na UNA.
              <br />
              <br />
              Arquitetura sempre foi um interesse, desde nova e cursar
              arquitetura sempre foi uma certeza. Começou a trabalhar desde os
              primeiros períodos da faculdade ampliando sua experiência
              profissional. Nos últimos anos de curso, ocupou o cargo de
              arquiteta responsável por uma obra de Retrofit em um prédio no
              centro de Belo Horizonte. O edifício comercial tinha 10 andares e
              foi completamente reformado sob o comando e gerenciamento da
              Paula. A obra durou dois anos de muito trabalho e aprendizado. A
              partir disso, com todo o conhecimento e maturidade adquirida nessa
              jornada desafiadora, nasceu o ESTUDIO MASCA, como um desejo
              pessoal de ter sua própria empresa e comandar seus próprios
              projetos.
            </h1>
          </div>
          <div className="flex sm:w-3/5 sm:h-custom1 h-96 mt-4 sm:mt-0">
            <div className="relative w-full">
              <Image src={Paula} alt="Paula" fill className="object-contain" />
            </div>
          </div>
        </div>

        {/* talita */}
        <div className="flex w-4/5 sm:px-16 px-4 pt-6 sm:pt-20 pb-4">
          <div className="flex sm:w-2/5 sm:h-custom1 h-96 mt-4 sm:mt-0">
            <div className="relative w-full">
              <Image
                src={Talita}
                alt="Talita"
                fill
                className="object-contain object-left-top"
              />
            </div>
          </div>
          <h1 className="flex space-y-4 sm:w-3/5 pl-20">
            Talita Costa - Estudante de Engenharia Civil CEFET-Curvelo e
            estagiária de projetos.
          </h1>
        </div>
        <div className="flex w-4/5 sm:px-16 text-3xl px-4 pt-6 sm:pt-16 pb-4">
          <h1>Equipe Complementar</h1>
        </div>

        {/* equipe complementar */}
        <div className="flex w-4/5 text-base mb-14">
          <div className="flex flex-col sm:px-16 px-4 pt-6 sm:pt-10 pb-4">
            <div className="flex h-96 mt-4 sm:mt-0">
              <div className="relative w-96">
                <Image
                  src={Jéssica}
                  alt="Jéssica"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h1 className="flex flex-col space-y-4 mt-3">
              Jéssica Batista - Administradora e Consultora Financeira.
            </h1>
          </div>
          <div className="flex flex-col sm:px-16 px-4 pt-6 sm:pt-10 pb-4">
            <div className="flex h-96 mt-4 sm:mt-0">
              <div className="relative w-96">
                <Image
                  src={Raquel}
                  alt="Raquel"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h1 className="flex flex-col text-center space-y-4 mt-3">
              Raquel Gomes - Administração e Contratos.
            </h1>
          </div>
        </div>
      </main>
    </>
  );
}

export default page;
