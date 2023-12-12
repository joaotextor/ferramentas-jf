"use client";
import BGParticles from "../components/BGParticles";
import SingleButton from "@/components/SingleButton";
import ToolCard from "@/components/ToolCard";
import { getBrowser } from "@/helpers/getBrowser";
import Image from "next/image";
import { useEffect, useState } from "react";
import Head from "next/head";

const heroImage = require("../images/hero.png");

const chromeIcon = require("../../src/images/chrome_icon.svg");
const webIcon = require("../../src/images/web_icon.svg");
const firefoxIcon = require("../../src/images/firefox_icon.svg");
const edgeIcon = require("../../src/images/edge_icon.svg");
const operaIcon = require("../../src/images/opera_icon.svg");

const ssDiasUteis = require("../images/screenshots/diasuteis.png");
const ssMandados = require("../images/screenshots/cumprimento_mandados.png");
const ssFerramentas = require("../images/screenshots/FerramentasJudiciais.jpeg");
const ssBuscaCnpj = require("../images/screenshots/BuscaCNPJ.jpeg");

export default function Home() {
  const [userAgent, setUserAgent] = useState<string>("Chrome");

  useEffect(() => {
    setUserAgent(getBrowser());
  }, []);

  const browsers: any = {
    Opera: operaIcon,
    Chrome: chromeIcon,
    Firefox: firefoxIcon,
    Edge: edgeIcon,
  };
  const browserIcon = browsers[userAgent] ?? "Chrome";

  const extensionsUrl: any = {
    ferramentasJudiciais: {
      Firefox:
        "https://joaotextor.com/ferramentas-jf/extensions/ferramentas_judiciais-1.4.xpi",
      Chrome:
        "https://chromewebstore.google.com/detail/ferramentas-judiciais/ipedoojcmpmkiddpkjcppoeddcimpond?hl=pt-BR",
      Opera:
        "https://chromewebstore.google.com/detail/ferramentas-judiciais/ipedoojcmpmkiddpkjcppoeddcimpond?hl=pt-BR",
      Edge: "https://chromewebstore.google.com/detail/ferramentas-judiciais/ipedoojcmpmkiddpkjcppoeddcimpond?hl=pt-BR",
    },
    buscaCnpj: {
      Firefox:
        "https://joaotextor.com/ferramentas-jf/extensions/busca_cnpj-1.0.1.xpi",
      Chrome:
        "https://chromewebstore.google.com/detail/busca-cnpj/ceeplcdhfdkppajiahicpiamjpjdmoao?hl=pt-BR",
      Opera:
        "https://chromewebstore.google.com/detail/busca-cnpj/ceeplcdhfdkppajiahicpiamjpjdmoao?hl=pt-BR",
      Edge: "https://chromewebstore.google.com/detail/busca-cnpj/ceeplcdhfdkppajiahicpiamjpjdmoao?hl=pt-BR",
    },
  };

  const svgFilter =
    "invert(6%) sepia(17%) saturate(6063%) hue-rotate(198deg) brightness(90%) contrast(96%)";
  return (
    <>
      <Head>
        <meta name="og:image" content={heroImage} />
        <meta property="og:title" content="Ferramentas JF" />
        <meta property="og:description" content="Faça mais em menos tempo!" />
      </Head>
      <BGParticles />
      <main className="flex min-h-screen flex-col items-center 2xl:px-72 pt-12 text-justify">
        <div className="flex flex-col items-center justify-center gap-4">
          <Image src={heroImage} alt="Hero" width={250} className="justify-" />
          <h1
            className="text-center pb-8"
            aria-label="título da página"
            tabIndex={2}
          >
            Bem vindo, colegas da Justiça Federal!
          </h1>
          <h4 className="text-center pb-8 px-8">
            Aqui disponibilizo algumas ferramentas para agilizar algumas tarefas
            no dia-a-dia do nosso trabalho!
            <div className="flex flex-wrap gap-4 justify-center">
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
              <ToolCard
                title="Extensão: Ferramentas Judiciais"
                description="Adiciona um novo botão ao e-proc, com atalhos para sistemas internos da Justiça Federal, tais como a planilha de saldo de contas de ações de medicamentos,  ferramenta de busca de cidades para Cumprimento de Mandados, SISBAJUD, etc."
                imageUrl={ssFerramentas}
                buttons={[
                  <SingleButton
                    key="1"
                    imgSrc={browserIcon}
                    svgFilterCode={svgFilter}
                    href={
                      extensionsUrl.ferramentasJudiciais[userAgent ?? "Chrome"]
                    }
                    caption={`Baixar no ${userAgent}`}
                  />,
                ]}
              />
              <ToolCard
                title="Extensão: Busca de CNPJ"
                description="Permite a busca de dados da pessoa jurídica de forma mais prática. Basta selecionar um CNPJ, clicar com o botão direito do mouse e então selecionar a opção 'Consultar CNPJ'."
                imageUrl={ssBuscaCnpj}
                buttons={[
                  <SingleButton
                    key="1"
                    imgSrc={browserIcon}
                    svgFilterCode={svgFilter}
                    href={extensionsUrl.buscaCnpj[userAgent ?? "Chrome"]}
                    caption={`Baixar no ${userAgent}`}
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
