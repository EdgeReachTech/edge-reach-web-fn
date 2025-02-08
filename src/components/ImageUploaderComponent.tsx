import { useEffect, useState, useCallback } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";

interface FileUploadProps {
  fieldChange: (files: File[]) => void;
  mediaUrl?: { id: string; url: string }[]; // Make mediaUrl optional
}

const ImageUploaderComponent = ({
  fieldChange,
  mediaUrl = [],
}: FileUploadProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [fileUrls, setFileUrls] =
    useState<{ id: string; url: string }[]>(mediaUrl);

  useEffect(() => {
    if (mediaUrl.length > 0) {
      setFileUrls(mediaUrl);
    }
  }, [mediaUrl]);

  const handleRemoveFile = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
    fieldChange(newFiles); // Update parent with new files list
  };

  const handleRemoveFileUrl = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const newFileUrls = fileUrls.filter((_, i) => i !== index);
    setFileUrls(newFileUrls);
  };

  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      const newFiles = [...files, ...acceptedFiles];
      setFiles(newFiles);
      fieldChange(newFiles); // Pass selected files to parent
    },
    [files, fieldChange]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/*": [".png", ".jpeg", ".jpg", ".svg"] },
    multiple: true,
  });

  return (
    <div
      {...getRootProps()}
      className="relative w-full border border-gray-300 p-4 rounded-md hover:border-blue-500 cursor-pointer"
    >
      <input {...getInputProps()} />
      {files.length > 0 || fileUrls.length > 0 ? (
        <div className="flex flex-wrap gap-2 p-2">
          {fileUrls.length !== 0 && files.length !== 0
            ? files.map((file, index) => (
                <div
                  key={index}
                  className="relative w-24 h-24 border rounded-md"
                >
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`preview-${index}`}
                    className="w-full h-full object-cover rounded-md"
                  />
                  <button
                    type="button"
                    onClick={(e) => handleRemoveFile(index, e)}
                    className="absolute top-0 right-0 bg-red-500 text-white p-1"
                  >
                    ✖
                  </button>
                </div>
              ))
            : fileUrls.map((file, index) => (
                <div
                  key={index}
                  className="relative w-24 h-24 border rounded-md"
                >
                  <img
                    src={file.url}
                    alt={`preview-${index}`}
                    className="w-full h-full object-cover rounded-md"
                  />
                  <button
                    type="button"
                    onClick={(e) => handleRemoveFileUrl(index, e)}
                    className="absolute top-0 right-0 bg-red-500 text-white p-1"
                  >
                    ✖
                  </button>
                </div>
              ))}
        </div>
      ) : (
        <div className="py-5">
          <img
            src="/upload-cloud-svgrepo-com.svg"
            alt="upload-logo"
            className="w-[100px] h-[100px] mx-auto"
          />
          <p className="text-center">
            Drag and drop your images here, or click to select files.
          </p>
          <p className="text-center text-gray-500">
            Only images with extensions.png,.jpeg,.jpg,.svg are allowed.
          </p>
        </div>
      )}
    </div>
  );
};

export default ImageUploaderComponent;
