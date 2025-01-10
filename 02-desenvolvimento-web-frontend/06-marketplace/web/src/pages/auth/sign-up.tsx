import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { ImageUpload } from "../../components/image-upload";
import { attachments } from "../../api/attachments";
import { signUp } from "../../api/sign-up";

const signUpForm = z.object({
  avatarId: z.string().nullable(),
  name: z.string().min(1, { message: 'O nome precisa ter pelo menos 1 caractere.' }),
  phone: z.string().min(1, { message: 'O telefone precisa ter pelo menos 1 caractere.' }),
  email: z.string().email({ message: 'E-mail inválido.' }),
  password: z.string().min(6, { message: 'A senha precisa ter pelo menos 6 caracteres.' }),
  passwordConfirmation: z.string().min(6, { message: 'A senha precisa ter pelo menos 6 caracteres.' }),
}).refine(data => data.password === data.passwordConfirmation, {
  message: "As senhas precisam ser iguais.",
  path: ["passwordConfirmation"],
});

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const navigate = useNavigate()

  const { mutateAsync: uploadImage } = useMutation({
    mutationFn: attachments
  })

  const { mutateAsync: createSeller } = useMutation({
    mutationFn: signUp,
  })

  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting, errors },
  } = useForm<SignUpForm>({
    resolver: zodResolver(signUpForm)
  })

  async function handleSignUp(data: SignUpForm) {
    try {
      await createSeller(data)

      toast.success('Conta criada com sucesso.')
      navigate('/sign-in')
    } catch {
      toast.error('Houve um erro ao criar sua conta.')
    }
  }

  async function handleUploadImage(file: File | null) {
    try {
      if (!file) return

      const response = await uploadImage({ files: [file] })

      setValue('avatarId', response.data.attachments[0].id)

      toast.success('Imagem enviada com sucesso.')
    } catch {
      toast.error('Erro ao fazer upload da imagem.')
    }
  }

  return (
    <div className="flex flex-col w-full h-[calc(100vh-48px)] overflow-y-auto rounded-[32px] bg-shape-white px-20 py-[72px]">
      <form className="flex flex-col gap-12 mb-20" onSubmit={handleSubmit(handleSignUp)}>

        <div className="flex flex-col gap-2">
          <h1 className="text-title-md font-sans">Crie sua conta</h1>
          <p className="text-body-sm font-poppins text-grayscale-300">Informe os seus dados pessoais e de acesso</p>
        </div>

        <div className="flex flex-col gap-5">
          <p className="font-bold text-title-sm font-sans text-grayscale-500">Perfil</p>

          <ImageUpload onFileSelect={handleUploadImage} error={errors.avatarId?.message} />
          <Input id="name" type="text" placeholder="Seu nome completo" icon="User" label="Nome" error={errors.name?.message} {...register('name')} />
          <Input id="phone" type="text" placeholder="(00) 00000-0000" icon="Phone" label="Telefone" error={errors.phone?.message} {...register('phone')} />
        </div>

        <div className="flex flex-col gap-5 mt-4">
          <p className="font-bold text-title-sm font-sans text-grayscale-500">Acesso</p>

          <Input id="email" type="email" placeholder="Seu e-mail de acesso" icon="Mail" label="E-mail" error={errors.email?.message} {...register('email')} />
          <Input id="password" type="password" placeholder="Senha de acesso" icon="LockKeyhole" label="Senha" error={errors.password?.message} {...register('password')} />
          <Input id="passwordConfirmation" type="password" placeholder="Confirme a senha" icon="LockKeyhole" label="Confirmar senha" error={errors.passwordConfirmation?.message} {...register('passwordConfirmation')} />
        </div>

        <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>Cadastrar <ArrowRight /></Button>
      </form>

      <div className="flex flex-col gap-5 mt-auto">
        <span className="text-body-md font-poppins text-grayscale-300">Já tem uma conta?</span>
        <Button variant="outline" size="lg" onClick={() => navigate('/sign-in')}>Acessar <ArrowRight /></Button>
      </div>
    </div>
  )
}
