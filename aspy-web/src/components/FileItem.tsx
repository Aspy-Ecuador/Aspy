import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import DeleteIcon from "@mui/icons-material/Delete";
import { FileData } from "@/types/FileData";

function FileItem(data: FileData) {
  return (
    <div className="flex flex-row gap-2 mt-4 justify-center align-center">
      <PictureAsPdfIcon className="text-red-700" />
      <div>
        <h1 className="font-kumbh text-primaryAspy font-semibold text-base">
          {data.name}
        </h1>
        <h2 className="font-kumbh text-secondaryAspy text-sm">
          {data.lastModified} 
        </h2>
      </div>
      <a href="{data.fileUrl}">
        <span className="sr-only">Download file</span>
        <FileDownloadIcon />
      </a>
      <a
        href="{data.fileUrl}"
        onClick={(e) => {
          e.preventDefault();
          alert("Hola"); // evita la navegación
        }}
      >
        <span className="sr-only">Delete file</span>
        <DeleteIcon className="text-red-700" />
      </a>
    </div>
  );
}

export default FileItem;
