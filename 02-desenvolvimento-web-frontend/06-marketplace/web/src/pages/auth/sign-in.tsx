import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "../../api/sign-in";
import { toast } from "sonner";

const signInForm = z.object({
  email: z.string().email({ message: 'E-mail inválido.' }),
  password: z.string().min(1, { message: 'A senha é obrigatória.' }),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const navigate = useNavigate()

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SignInForm>({
    resolver: zodResolver(signInForm)
  })

  async function handleSignIn(data: SignInForm) {
    try {
      await authenticate(data)

      navigate('/')
      toast.success('Autenticado com sucesso.')
    } catch {
      toast.error('Credenciais inválidas.')
    }
  }

  return (
    <div className="flex flex-col w-full h-full rounded-[32px] bg-shape-white px-20 py-[72px]">
      <form className="flex flex-col gap-12 mb-20" onSubmit={handleSubmit(handleSignIn)}>

        <div className="flex flex-col gap-2">
          <h1 className="text-title-md font-sans">Acesse sua conta</h1>
          <p className="text-body-sm font-poppins text-grayscale-300">Informe seu e-mail e senha para entrar</p>
        </div>

        <div className="flex flex-col gap-5">
          <Input id="email" type="email" placeholder="Seu e-mail cadastrado" icon="Mail" label="E-mail" error={errors.email?.message} {...register('email')} />
          <Input id="password" type="password" placeholder="Sua senha de acesso" icon="LockKeyhole" label="Senha" error={errors.password?.message} {...register('password')} />
        </div>

        <Button className="w-full" size="lg" disabled={isSubmitting}>Acessar <ArrowRight /></Button>
      </form>

      <div className="flex flex-col gap-5 mt-auto">
        <span className="text-body-md font-poppins text-grayscale-300">Ainda não tem uma conta?</span>
        <Button variant="outline" size="lg" onClick={() => navigate('/sign-up')}>Cadastrar <ArrowRight /></Button>
      </div>
    </div >
  )
}
