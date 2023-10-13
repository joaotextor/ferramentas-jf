"use client";
import BGParticles from "../components/BGParticles";
import SingleButton from "@/components/SingleButton";
import ToolCard from "@/components/ToolCard";

const downloadIcon = require("../../src/images/download_icon.svg");
const chromeIcon = require("../../src/images/chrome_icon.svg");
const firefoxIcon = require("../../src/images/firefox_icon.svg");

export default function Home() {
  const svgFilter =
    "invert(6%) sepia(17%) saturate(6063%) hue-rotate(198deg) brightness(90%) contrast(96%)";
  return (
    <>
      <BGParticles />
      <main className="flex min-h-screen flex-col items-center justify-between p-12 text-justify">
        <div>
          <h1 className="text-center pb-8">Bem vindo, colegas!</h1>
          <h4 className="">
            Aqui disponibilizo algumas ferramentas para agilizar algumas tarefas
            no dia-a-dia do nosso trabalho!
            <div className="flex gap-2 justify-between">
              <ToolCard
                title="Projeto 1"
                description="Est labore proident dolore fugiat occaecat commodo consectetur ea duis Lorem consequat fugiat ex. Excepteur magna cillum tempor magna nisi Lorem consequat anim culpa exercitation veniam. Ex ad adipisicing quis eu labore duis ea sit fugiat. Consectetur qui dolor do veniam incididunt eiusmod aliqua occaecat magna. Amet aliquip fugiat cupidatat voluptate tempor magna esse esse cillum quis. Reprehenderit sunt incididunt ut proident cillum non labore. Dolore irure nostrud adipisicing eu quis adipisicing."
                buttons={[
                  <SingleButton
                    key="1"
                    imgSrc={downloadIcon}
                    svgFilterCode={svgFilter}
                    href="https://www.joaotextor.com"
                    caption="Baixar"
                  />,
                  <SingleButton
                    key="2"
                    imgSrc={chromeIcon}
                    svgFilterCode={svgFilter}
                    href="https://www.joaotextor.com"
                    caption="Baixar alternativo"
                  />,
                ]}
              />
              <ToolCard
                title="Projeto 1"
                description="Est labore proident dolore fugiat occaecat commodo consectetur ea duis Lorem consequat fugiat ex. Excepteur magna cillum tempor magna nisi Lorem consequat anim culpa exercitation veniam. Ex ad adipisicing quis eu labore duis ea sit fugiat. Consectetur qui dolor do veniam incididunt eiusmod aliqua occaecat magna. Amet aliquip fugiat cupidatat voluptate tempor magna esse esse cillum quis. Reprehenderit sunt incididunt ut proident cillum non labore. Dolore irure nostrud adipisicing eu quis adipisicing."
                buttons={[
                  <SingleButton
                    key="1"
                    imgSrc={downloadIcon}
                    svgFilterCode={svgFilter}
                    href="https://www.joaotextor.com"
                    caption="Baixar"
                  />,
                  <SingleButton
                    key="2"
                    imgSrc={chromeIcon}
                    svgFilterCode={svgFilter}
                    href="https://www.joaotextor.com"
                    caption="Baixar alternativo"
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
