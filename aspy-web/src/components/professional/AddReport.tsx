import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Edit, UploadFile } from "@mui/icons-material";
import { FileData } from "@/types/FileData";
import CancelButton from "../buttons/CancelButton";
import CreationButton from "../buttons/CreationButton";
import UploadButton from "../buttons/UploadButton";

interface AddReportProps {
  setReport: (file: FileData | null) => void;
}

export default function AddReport({ setReport }: AddReportProps) {
  const [signature, setSignature] = useState<FileData | null>(null);
  const [comment, setComment] = useState<string>("");
  const [reporte, setReporte] = useState<FileData | null>(null);
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full  space-y-6 flex flex-col relative">
      <div>
        <div className="flex items-center mb-2">
          <Edit className="mr-2 text-gray-600" />
          <h2 className="text-lg font-semibold">Firma del profesional</h2>
        </div>
        <UploadButton
          accept="image/*"
          label="Subir firma"
          icon={<UploadFile className="mr-2 text-blue-600" />}
          buttonClassName="bg-white text-black font-bold border border-blue-600 hover:bg-blue-50"
          onFileSelected={(fileData) => setSignature(fileData)}
        />
        {signature && (
          <>
            <p className="text-sm text-gray-500 mt-1">
              Firma cargada: <strong>{signature.name}</strong>
            </p>
            <div className="mt-2">
              <img
                src={
                  signature.file instanceof File
                    ? URL.createObjectURL(signature.file)
                    : signature.file
                }
                alt="Firma seleccionada"
                className="max-h-48 object-contain border rounded-md"
              />
            </div>
          </>
        )}
      </div>

      <div>
        <div className="flex items-center mb-2">
          <Edit className="mr-2 text-gray-600" />
          <h2 className="text-lg font-semibold">Reporte del profesional</h2>
        </div>
        <UploadButton
          accept="application/pdf"
          label="Subir Reporte"
          icon={<UploadFile className="mr-2 text-blue-600" />}
          buttonClassName="bg-white text-black font-bold border border-blue-600 hover:bg-blue-50"
          onFileSelected={(fileData) => {
            setReport(fileData);
            setReporte(fileData);
          }}
        />
        {reporte && (
          <p className="text-sm text-gray-500 mt-1">
            Reporte cargado: <strong>{reporte.name}</strong>
          </p>
        )}
      </div>

      <div className="flex justify-end gap-3 mt-auto">
        <CancelButton
          onClick={() => {
            setSignature(null);
            setComment("");
            setReport(null);
            setReporte(null);
            handleBack();
          }}
          text="Cancelar"
        />
        <CreationButton
          text="Enviar reporte"
          onClick={() => {
            console.log("Comentario:", comment);
            console.log("Firma:", signature);
            navigate("/");
          }}
        />
      </div>
    </div>
  );
}
