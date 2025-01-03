import { ArrowRight } from "lucide-react";

import { Button } from "../../components/button";

export function SignIn() {
  return (
    <div className="flex flex-col w-full h-full rounded-[32px] bg-shape-white px-20 py-[72px]">
      <form className="flex flex-col gap-12">

        <div className="flex flex-col gap-2">
          <h1 className="text-title-md font-sans">Acesse sua conta</h1>
          <p className="text-body-sm font-poppins text-grayscale-300">Informe seu e-mail e senha para entrar</p>
        </div>

        <div>
          Inputs
        </div>

        <Button className="w-full">Acessar <ArrowRight /></Button>
      </form>

      <div className="flex flex-col gap-5 mt-auto">
        <span className="text-body-md font-poppins text-grayscale-300">Ainda não tem uma conta?</span>
        <Button variant="outline">Cadastrar <ArrowRight /></Button>
      </div>
    </div>
  )
}
