/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Bakbak_One, Be_Vietnam_Pro } from "next/font/google";
import { BotaoModulo } from "@/src/components/ui/botao-modulo";
import BotoesNavegacao from "@/src/components/ui/botoes-navegacao";
import { BackgroundContainer } from '@/src/components/layout/BackgroundContainer';
import { HeaderVoltar } from '@/src/components/layout/HeaderVoltar';
import { BotaoAcaoRapida } from '@/src/components/ui/BotaoAcaoRapida';
import { FormProdutoSimples } from '@/src/components/produto/FormProdutoSimples';
import { CardProdutoModerno } from '@/src/components/produto/CardProdutoModerno';

const bakbak = Bakbak_One({
  subsets: ["latin"],
  weight: "400",
});

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: "400",
});

function Menu() {
  return (
    <div
      className="h-screen flex flex-col justify-between"
      style={{
        backgroundImage: "url('/Background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
     
      <div className="px-6 pt-30 md:pt-32 md:max-w-3xl md:mx-auto w-full">
        <h1 className={`${bakbak.className} text-white text-2xl`}>
          Bem Vindo (A)!
        </h1>
        <h2 className={`${beVietnam.className} text-white mt-2 font-bold`}>
          Selecione um modulo
        </h2>
      </div>

      <div className="flex-1 flex items-center justify-center px-6 pb-20">
        <div className="w-full max-w-md space-y-4">
          
          
          <BotaoModulo
            titulo="CADASTRAR PRODUTOS"
            subtitulo="Gerencie seu estoque"
            rota="/cadastroproduto"
            icone="/itens-icon.png"
            cor="blue"
          />

        
          <BotaoModulo
            titulo="REALIZAR VENDA"
            subtitulo="Inicie uma nova venda"
            rota="/vendas"
            icone="/dinheiro-icon.png"
            cor="green"
          />

         
          <BotoesNavegacao />
          
        </div>
      </div>
    </div>
  );
}

export default Menu;