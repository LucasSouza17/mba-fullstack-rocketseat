import { useMutation, useQuery } from "@tanstack/react-query"
import { getProfile } from "../api/get-profile"
import { useState } from "react"
import { Button } from "./button";
import { LogOut } from "lucide-react";
import { signOut } from "../api/sign-out";
import { useNavigate } from "react-router-dom";

export function Avatar() {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);

  const { mutateAsync: signOutFn } = useMutation({
    mutationFn: signOut
  })

  const { data } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile
  })

  async function handleSignOut() {
    await signOutFn()
    navigate('/sign-in', { replace: true })
  }

  return (
    <div className="relative" onClick={() => setIsOpen(!isOpen)}>
      {data?.seller?.avatar?.url ? (
        <img src={data?.seller?.avatar?.url} alt={data?.seller?.name} className='w-12 h-12 rounded-xl object-cover hover:cursor-pointer' />
      ) : (
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-grayscale-100 hover:cursor-pointer">
          <span className="text-title-md font-poppins font-medium text-grayscale-400">{data?.seller.name?.charAt(0).toUpperCase()}</span>
        </div>
      )}
      {isOpen && (
        <div className="absolute top-14 right-0 w-48 bg-shape-white rounded-md shadow-md p-4 z-10 flex flex-col gap-5">
          {data?.seller?.avatar?.url ? (
            <img src={data?.seller?.avatar?.url} alt={data?.seller?.name} className='w-8 h-8 rounded-lg object-cover' />
          ) : (
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-grayscale-100">
                <span className="text-title-sm font-poppins font-medium text-grayscale-400">{data?.seller.name?.charAt(0).toUpperCase()}</span>
              </div>
              <span className="text-body-sm font-poppins text-grayscale-300">{data?.seller.name}</span>
            </div>
          )}
          <div className="w-full h-[1px] bg-shape-shape" />
          <Button variant="text" size="sm" onClick={handleSignOut}>Sair <LogOut size={16} /></Button>
        </div>
      )}
    </div>
  )
}