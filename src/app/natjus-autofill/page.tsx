"use client";
import BGParticles from "../../components/BGParticles";
import Image from "next/image";
import Head from "next/head";
import GoBackNavigation from "@/components/GoBackNavigation";

const heroImage = require("../../images/natjus-icon.png");
const firefoxPermissions = require("../../images/firefox-permissions.jpg");
const chromePermissions = require("../../images/chrome-permissions.jpg");
const extensoes = require("../../images/extensoes.jpg");
const autoPreencher = require("../../images/auto-preencher.jpg");
const editarDados = require("../../images/editar-dados.jpg");

export default function NatjusAutoFill() {
  return (
    <>
      <Head>
        <meta name="og:image" content={heroImage} />
        <meta
          property="og:title"
          content="Auto-preenchimento Natjus - Ferramentas JF"
        />
        <meta property="og:description" content="Faça mais em menos tempo!" />
      </Head>
      <BGParticles />
      <main className="flex min-h-screen flex-col items-center 2xl:px-36 pt-12 text-justify mb-12">
        <div className="flex flex-col items-center justify-center gap-4 w-full px-12">
          <h1>Auto-preenchimento NatJus</h1>
          <h2 className="text-[24px]">
            Como instalar e editar os dados padrões
          </h2>
          <div className="w-full pt-12">
            <GoBackNavigation />
            <h3>1. Instalação</h3>
            <p>Instale normalmente pelo link de acesso na página inicial.</p>
          </div>
          <div className="w-full pt-4">
            <h3>2. Acesse o site do NatJus</h3>
            <p>
              Acesse o{" "}
              <a
                className="text-blue-200"
                href="https://www.cnj.jus.br/e-natjus"
              >
                site
              </a>{" "}
              do NatJus.
            </p>
          </div>
          <div className="w-full pt-4">
            <h3>3. Conceda permissão à extensão</h3>
            <p>
              Clique no ícone da extensão e então selecione a opção para
              permitir o uso no www.cnj.jus.br.
            </p>
            <div className="flex gap-4 mb-4">
              <div className="mt-8 text-center">
                <span>Firefox</span>
                <Image src={firefoxPermissions} alt="Firefox" width={300} />
              </div>
              <div className="mt-8 text-center">
                <span>Chrome/Edge/Opera</span>
                <Image src={chromePermissions} alt="Chrome" width={550} />
              </div>
            </div>
            <p>
              Se o ícone da extensão não aparecer na barra, clique no ícone de
              uma peça de quebra-cabeça.
            </p>
            <Image src={extensoes} alt="Extensões" width={300} />
          </div>
          <div className="w-full pt-4">
            <h3>4. Inicie uma nova requisição de Nota Técnica</h3>
            <p>Clique em {'"Nova Solicitação"'}.</p>
            <p>Após, clique no botão {'"Auto-Preencher Nota Técnica"'}.</p>
            <p>
              Isso preencherá todos os campos que não sejam relativos ao
              processo ou à parte demandante.
            </p>
            <div className="flex gap-4 mb-4">
              <div className="mt-8 text-center">
                <Image src={autoPreencher} alt="Firefox" width={300} />
              </div>
            </div>
          </div>
          <div className="w-full pt-4">
            <h3>5. (Opcional) Edite os dados padrões</h3>
            <p>
              Para editar os dados padrões a serem preenchidos automaticamente,
              clique no ícone da extensão para abrir a janela{" "}
              {'"Editar dados padrões"'}.
            </p>
            <p>
              Agora, basta editar os dados e clicar em {'"Salvar"'} para salvar
              os dados personalizados.
            </p>
            <p>
              Se desejar retornar para os dados padrões, clique em{" "}
              {'"Configurações Padrões"'}.
            </p>
            <div className="flex gap-4 mb-4">
              <div className="mt-8 text-center">
                <Image src={editarDados} alt="Firefox" width={300} />
              </div>
            </div>
            <GoBackNavigation />
          </div>
        </div>
      </main>
    </>
  );
}
