import { useEffect, useRef, useState } from "react"
import { cn } from "../lib/utils"
import { AlertCircle, LucideUpload } from "lucide-react"
import { z } from "zod";

interface ImageUploadProps {
  onFileSelect: (file: File | null) => void;
  error?: string;
  label?: string;
  className?: string;
  defaultValue?: string | null;
}

const imageValidationSchema = z.object({
  image: z
    .instanceof(File)
    .refine((file) => file.size <= 2 * 1024 * 1024, "A imagem deve ter no máximo 2MB.")
    .refine((file) => file.type.startsWith("image/"), "Apenas imagens são permitidas."),
});


export function ImageUpload({ onFileSelect, label, defaultValue = null, className, error }: ImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(defaultValue);
  const [validationError, setValidationError] = useState<string | null>(null);

  useEffect(() => {
    if (defaultValue) {
      setPreview(defaultValue);
    }
  }, [defaultValue]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const result = imageValidationSchema.safeParse({ image: file });

      if (result.success) {
        setPreview(URL.createObjectURL(file));
        setValidationError(null);
        onFileSelect(file);
      } else {
        setValidationError(result?.error?.format().image?._errors[0] || null);
        setPreview(null);
        onFileSelect(null);
      }
    }
  };

  return (
    <div>
      <div
        onClick={() => inputRef?.current?.click()}
        className={
          cn(
            "flex flex-col justify-center items-center w-[120px] h-[120px] bg-shape-shape rounded-xl cursor-pointer", className
          )
        }
      >
        <input
          ref={inputRef}
          accept="image/*"
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
        {preview && (
          <div className="relative w-full h-full rounded-xl">
            <img
              src={preview}
              alt="preview"
              className="absolute w-full h-full object-cover rounded-xl"
            />
            <div className="group absolute flex flex-col gap-4 items-center justify-center w-full h-full z-10 rounded-xl transition-colors hover:bg-black/60">
              <LucideUpload className="w-8 h-8 text-shape-white hidden group-hover:block" />
              {label && (
                <span className="text-center text-body-sm font-poppins text-shape-white hidden group-hover:block">{label}</span>
              )}
            </div>
          </div>
        )}
        {!preview && (
          <div className="flex flex-col gap-4 items-center justify-center">
            <LucideUpload className="w-8 h-8 text-orange-base" />
            {label && (
              <span className="text-center text-body-sm font-poppins text-grayscale-300">{label}</span>
            )}
          </div>
        )}
      </div>
      {(validationError || error) && <div className="flex items-center gap-1 py-2">
        <AlertCircle className="w-4 h-4 text-semantic-danger" />
        <span className="text-body-xs text-semantic-danger normal-case">{validationError ?? error}</span>
      </div>}
    </div>
  )
}