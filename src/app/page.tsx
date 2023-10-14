"use client";
import BGParticles from "../components/BGParticles";
import SingleButton from "@/components/SingleButton";
import ToolCard from "@/components/ToolCard";

const downloadIcon = require("../../src/images/download_icon.svg");
const chromeIcon = require("../../src/images/chrome_icon.svg");
const webIcon = require("../../src/images/web_icon.svg");
const firefoxIcon = require("../../src/images/firefox_icon.svg");

const ssDiasUteis = require("../images/screenshots/diasuteis.png");
const ssMandados = require("../images/screenshots/cumprimento_mandados.png");

export default function Home() {
  const svgFilter =
    "invert(6%) sepia(17%) saturate(6063%) hue-rotate(198deg) brightness(90%) contrast(96%)";
  return (
    <>
      <BGParticles />
      <main className="flex min-h-screen flex-col items-center p-12 text-justify">
        <div>
          <h1
            className="text-center pb-8"
            aria-label="título da página"
            tabIndex={2}
          >
            Bem vindo, colegas da Justiça Federal!
          </h1>
          <h4 className="">
            Aqui disponibilizo algumas ferramentas para agilizar algumas tarefas
            no dia-a-dia do nosso trabalho!
            <div className="flex gap-4 justify-between">
              <ToolCard
                title="Calculadora de dias úteis"
                description="Apesar de o sistema e-Proc calcular automaticamente os dias úteis quando definimos um prazo de intimação, existem hipóteses em que necessitamos que o prazo se inicie somente a partir de determinada data (ex.: o prazo para entrega do laudo a partir da data da perícia). Esta ferramenta permite obter a data final por meio da seleção de uma data futura e a indicação do número de dias úteis a serem contados a partir dessa data. A ferramenta utiliza todos os feriados de 2023 até o final das férias advocatícias (20/01) de 2024, e considera individualmente os feriados municipais no Rio Grande do Sul (em breve também Santa Catarina e Paraná)."
                imageUrl={ssDiasUteis}
                buttons={[
                  <SingleButton
                    key="1"
                    imgSrc={webIcon}
                    svgFilterCode={svgFilter}
                    href="https://joaotextor.com/diasuteis/"
                    caption="Acessar"
                  />,
                ]}
              />
              <ToolCard
                title="Cumprimento de Mandados"
                description="O Provimento/TRF4 nº informa, em seu Anexo VI, a lista de municípios atendidos pela JF da 4º Região, se há cumprimento de mandados e qual Subseção ou UAA é responsável pelo cumprimento. Diante da imensa quantidade de dados na tabela, perde-se tempo para identificar se em determinado município há ou não cumprimento de mandados. Esta ferramenta visa entregar essa informação de forma simplicada, bastando ao usuário digitar o nome da cidade desejada (No momento apenas os municípios do Rio Grande do Sul estão disponíveis)."
                imageUrl={ssMandados}
                buttons={[
                  <SingleButton
                    key="1"
                    imgSrc={webIcon}
                    svgFilterCode={svgFilter}
                    href="https://joaotextor.com/cumprimento-mandados/"
                    caption="Acessar"
                  />,
                ]}
              />
            </div>
          </h4>
        </div>
      </main>
    </>
  );
}
