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
const questionIcon = require("../../src/images/question_icon.svg");
const downloadIcon = require("../../src/images/download_icon.svg");

const ssDiasUteis = require("../images/screenshots/diasuteis.png");
const ssMandados = require("../images/screenshots/cumprimento_mandados.png");
const ssFerramentas = require("../images/screenshots/FerramentasJudiciais.jpeg");
const ssBuscaCnpj = require("../images/screenshots/BuscaCNPJ.jpeg");
const ssNatJus = require("../images/screenshots/editar-dados.jpg");
const ssExtratorTcCarencia = require("../images/screenshots/extratorTcCarencia.jpg");
const ssImportarTcCarencia = require("../images/screenshots/importarTcCarencia.jpg");
const ssPrescricaoQuinquenal = require("../images/screenshots/prescricaoQuinquenal.jpg");

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
  const showAlert = ["Chrome", "Opera", "Edge"];

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
    natJusAutoFill: {
      Firefox:
        "https://joaotextor.com/ferramentas-jf/extensions/natjus_autofill_v1.0.1.xpi",
      Chrome:
        "https://chromewebstore.google.com/detail/auto-preenchimento-nat-ju/ojpdgoeojoilbdclhikeiblimcoghopf?hl=pt-BR",
      Opera:
        "https://chromewebstore.google.com/detail/auto-preenchimento-nat-ju/ojpdgoeojoilbdclhikeiblimcoghopf?hl=pt-BR",
      Edge: "https://chromewebstore.google.com/detail/auto-preenchimento-nat-ju/ojpdgoeojoilbdclhikeiblimcoghopf?hl=pt-BR",
    },
    ptiTcCarencia: {
      Firefox:
        "https://addons.mozilla.org/pt-BR/firefox/addon/pti-tc-e-car%C3%AAncia/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search",
      Chrome:
        "https://chromewebstore.google.com/detail/pti-tc-carencia/bfkfplicpbcabmocloclajcinmkgjfhp?hl=pt-BR&authuser=0",
      Opera:
        "https://chromewebstore.google.com/detail/pti-tc-carencia/bfkfplicpbcabmocloclajcinmkgjfhp?hl=pt-BR&authuser=0",
      Edge: "https://chromewebstore.google.com/detail/pti-tc-carencia/bfkfplicpbcabmocloclajcinmkgjfhp?hl=pt-BR&authuser=0",
    },
    prescricaoQuinquenal: {
      Firefox:
        "https://joaotextor.com/ferramentas-jf/extensions/prescricaoquinquenal.xpi",
      Chrome:
        "https://chromewebstore.google.com/detail/calculadora-de-prescri%C3%A7%C3%A3o/bpeohgcmbdjilbdamkggejffenhpompp",
      Opera:
        "https://chromewebstore.google.com/detail/calculadora-de-prescri%C3%A7%C3%A3o/bpeohgcmbdjilbdamkggejffenhpompp",
      Edge: "https://chromewebstore.google.com/detail/calculadora-de-prescri%C3%A7%C3%A3o/bpeohgcmbdjilbdamkggejffenhpompp",
    },
    autoSavePainelPrev: {
      Firefox:
        "https://joaotextor.com/ferramentas-jf/extensions/autosave-painel-prev.xpi",
      Chrome:
        "https://chromewebstore.google.com/detail/auto-salvar-painel-previd/fndpkkihfecadifhgnbbaiecplikonkd?authuser=0&hl=pt-BR",
      Opera:
        "https://chromewebstore.google.com/detail/auto-salvar-painel-previd/fndpkkihfecadifhgnbbaiecplikonkd?authuser=0&hl=pt-BR",
      Edge: "https://chromewebstore.google.com/detail/auto-salvar-painel-previd/fndpkkihfecadifhgnbbaiecplikonkd?authuser=0&hl=pt-BR",
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
      <main className="w-5/6 m-auto flex min-h-screen flex-col items-center 2xl:px-64 pt-12 text-justify">
        <div className="flex flex-col items-center justify-center gap-4">
          <Image src={heroImage} alt="Hero" width={250} className="justify-" />
          <h1
            className="text-center max-md:text-[24px]"
            aria-label="título da página"
            tabIndex={2}
          >
            Bem vindo, colegas da Justiça Federal!
          </h1>
          <h2 className="text-center pb-2 px-8 text-[20px]">
            Aqui disponibilizo algumas ferramentas para agilizar algumas tarefas
            no dia-a-dia do nosso trabalho!
          </h2>
          <ul className="text-secondary-light text-xl flex flex-wrap gap-4 justify-center">
            <li>
              <SingleButton
                href="#webapps"
                key="webapps"
                className="!bg-secondary-light"
                caption="Aplicativos Web"
                target="_self"
              />
            </li>
            <li>
              <SingleButton
                href="#softwares"
                key="softwares"
                className="!bg-secondary-light"
                caption="Programas"
                target="_self"
              />
            </li>
            <li>
              <SingleButton
                href="#extensions"
                key="extensions"
                className="!bg-secondary-light"
                caption="Extensões"
                target="_self"
              />
            </li>
          </ul>
          <div className="flex flex-wrap gap-4 justify-center max-md:mt-4">
            <h3 id="webapps" className="text-3xl mt-8">
              Aplicativos Web
            </h3>
            <ToolCard
              title="Calculadora de dias úteis"
              description="Apesar de o sistema e-Proc calcular automaticamente os dias úteis quando definimos um prazo de intimação, existem hipóteses em que necessitamos que o prazo se inicie somente a partir de determinada data (ex.: o prazo para entrega do laudo a partir da data da perícia). Esta ferramenta permite obter a data final por meio da seleção de uma data futura e a indicação do número de dias úteis a serem contados a partir dessa data. A ferramenta utiliza todos os feriados nacionais, estaduais e dos municípios das Subseções que compõem a 4ª Região."
              imageUrl={ssDiasUteis}
              imageWidth={250}
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
              description="O Provimento/TRF4 nº 62 informa, em seu Anexo VI, a lista de municípios atendidos pela JF da 4º Região, se há cumprimento de mandados e qual Subseção ou UAA é responsável pelo cumprimento. Diante da imensa quantidade de dados na tabela, perde-se tempo para identificar se em determinado município há ou não cumprimento de mandados. Esta ferramenta visa entregar essa informação de forma simplicada, bastando ao usuário digitar o nome da cidade desejada (No momento apenas os municípios do Rio Grande do Sul estão disponíveis)."
              imageUrl={ssMandados}
              imageHeight={150}
              className="h-full"
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
            <h3 id="softwares" className="text-3xl mt-8">
              Programas
            </h3>
            <ToolCard
              title="Extrator de Tempo de Contribuição e Carência"
              description={`Esse programa tem como objeto extrair, do documento de "Análise do Direito" emitido pelo INSS, o tempo de contribuição e a carência em todas as datas relevantes (Alterações legislativas e na DER). Essa informação organizada pode ser utilizada com a Extensão PTI-TC-Carência para importar, de forma automática e de uma só vez, o tempo de contribuição e carência dentro da Planilha do Tramitação Inteligente. Para saber mais sobre essa funcionalidade, veja a Extensão PTI-TC-Carência.`}
              imageUrl={ssExtratorTcCarencia}
              imageWidth={500}
              className="h-full"
              buttons={[
                <SingleButton
                  key="1"
                  imgSrc={downloadIcon}
                  href="https://github.com/joaotextor/extrator-tc-carencia/releases/download/tc-carencia1.1.1/Extrator.de.TC.e.Carencia.Setup.1.1.1.exe"
                  caption="Baixar"
                />,
              ]}
            />
            <h3 id="extensions" className="text-3xl mt-8">
              Extensões
            </h3>
            <ToolCard
              title="Extensão: Importar Tempo de Contribuição e Carência"
              description="Uma extensão de navegador que funciona no site Tramitação Inteligente, adicionando a possibilidade de importar, automaticamente de uma só vez, o Tempo de Contribuição e Carências já reconhecidas pelo INSS na Análise de Direito. A importação se dá colando o resultado fornecido pelo programa Extrator de TC e Carência (disponível acima)."
              imageUrl={ssImportarTcCarencia}
              imageWidth={350}
              className="h-full"
              buttons={[
                <SingleButton
                  key="1"
                  imgSrc={browserIcon}
                  svgFilterCode={svgFilter}
                  href={extensionsUrl.ptiTcCarencia[userAgent ?? "Chrome"]}
                  caption={`Baixar no ${userAgent}`}
                />,
                <SingleButton
                  key="1"
                  imgSrc={questionIcon}
                  svgFilterCode={svgFilter}
                  href="https://github.com/joaotextor/pti-tc-carencia#uso"
                  caption="Como Usar"
                  target="_blank"
                />,
              ]}
              showAlert={showAlert.includes(userAgent)}
              alertMessage="AVISO: Não sendo possível acessar a página para instalar a extensão, faça logout da sua conta institucional no Gmail e tente novamente."
            />
            <ToolCard
              title="Extensão: Cálculo de Prescrição Quinquenal para e-Proc"
              description="Adiciona um novo botão ao editor de documentos do e-Proc para calcular a prescrição quinquenal para revisão do processo administrativo previdenciário que deferiu o benefício, levando-se em consideração a suspensão do prazo prescricional em razão do tempo de tramitação do processo revisional na via administrativa."
              imageUrl={ssPrescricaoQuinquenal}
              imageWidth={400}
              className="h-full"
              buttons={[
                <SingleButton
                  key="1"
                  imgSrc={browserIcon}
                  svgFilterCode={svgFilter}
                  href={
                    extensionsUrl.prescricaoQuinquenal[userAgent ?? "Chrome"]
                  }
                  caption={`Baixar no ${userAgent}`}
                />,
              ]}
              showAlert={showAlert.includes(userAgent)}
              alertMessage="AVISO: Não sendo possível acessar a página para instalar a extensão, faça logout da sua conta institucional no Gmail e tente novamente."
            />
            <ToolCard
              title="Extensão: Busca de CNPJ"
              description="Permite a busca de dados da pessoa jurídica de forma mais prática. Basta selecionar um CNPJ, clicar com o botão direito do mouse e então selecionar a opção 'Consultar CNPJ'."
              imageUrl={ssBuscaCnpj}
              imageWidth={300}
              buttons={[
                <SingleButton
                  key="1"
                  imgSrc={browserIcon}
                  svgFilterCode={svgFilter}
                  href={extensionsUrl.buscaCnpj[userAgent ?? "Chrome"]}
                  caption={`Baixar no ${userAgent}`}
                />,
              ]}
              showAlert={showAlert.includes(userAgent)}
              alertMessage="AVISO: Não sendo possível acessar a página para instalar a extensão, faça logout da sua conta institucional no Gmail e tente novamente."
            />
            <ToolCard
              title="Extensão: Auto-preenchimento NatJus"
              description="Permite o preenchimento, de forma automática de acordo com valores pré-definidos, dos seguintes campos do formulário de requisição de notas técnicas do NatJus: requerido, prazo, e-mail para resposta, Vara e motivo."
              imageUrl={ssNatJus}
              buttons={[
                <SingleButton
                  key="1"
                  imgSrc={browserIcon}
                  svgFilterCode={svgFilter}
                  href={extensionsUrl.natJusAutoFill[userAgent ?? "Chrome"]}
                  caption={`Baixar no ${userAgent}`}
                />,
                <SingleButton
                  key="1"
                  imgSrc={questionIcon}
                  svgFilterCode={svgFilter}
                  href="/natjus-autofill"
                  caption="Como Usar"
                  target="_self"
                />,
              ]}
              showAlert={showAlert.includes(userAgent)}
              alertMessage="AVISO: Não sendo possível acessar a página para instalar a extensão, faça logout da sua conta institucional no Gmail e tente novamente."
            />
            <ToolCard
              title="Extensão: Ferramentas Judiciais"
              description="Adiciona um novo botão ao e-proc no navegador do usuário, com atalhos para sistemas internos da Justiça Federal e sistemas de controle específicos da 1ª Vara Federal de Erechim/RS, tais como a planilha de saldo de contas de ações de medicamentos,  ferramenta de busca de cidades para Cumprimento de Mandados, SISBAJUD, etc."
              imageUrl={ssFerramentas}
              imageWidth={400}
              className="h-full"
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
              showAlert={showAlert.includes(userAgent)}
              alertMessage="AVISO: Não sendo possível acessar a página para instalar a extensão, faça logout da sua conta institucional no Gmail e tente novamente."
            />
            <ToolCard
              title="Extensão: Salvamento automático - Painel Previdenciário"
              description="Salva automaticamente o painel previdenciário no e-Proc ao salvar a fundamentação, os dados do período ou alterar o status da instrução ou da conclusão."
              imageUrl="https://www.trf4.jus.br/trf4/upload/editor/2025/ppi71_ppi71_portal--1-.jpg"
              imageHeight={400}
              imageWidth={400}
              className="h-full"
              buttons={[
                <SingleButton
                  key="1"
                  imgSrc={browserIcon}
                  svgFilterCode={svgFilter}
                  href={extensionsUrl.autoSavePainelPrev[userAgent ?? "Chrome"]}
                  caption={`Baixar no ${userAgent}`}
                />,
              ]}
              showAlert={showAlert.includes(userAgent)}
              alertMessage="AVISO: Não sendo possível acessar a página para instalar a extensão, faça logout da sua conta institucional no Gmail e tente novamente."
            />
          </div>
        </div>
      </main>
    </>
  );
}
