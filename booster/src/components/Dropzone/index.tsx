import React, { useCallback, useState } from 'react';
import { FiUpload } from 'react-icons/fi';
import { useDropzone } from 'react-dropzone';

import { Container } from './styles';

interface DropzoneProps {
  onFileUploaded(file: File): void;
}

const Dropzone: React.FC<DropzoneProps> = ({ onFileUploaded }) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState('');

  const onDrop = useCallback(
    acceptedFiles => {
      const file = acceptedFiles[0];

      const fileUrl = URL.createObjectURL(file);

      setSelectedFileUrl(fileUrl);
      onFileUploaded(file);
    },
    [onFileUploaded],
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
  });

  return (
    <Container {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />
      {selectedFileUrl ? (
        <img src={selectedFileUrl} alt="Point Thumbnail" />
      ) : (
        <p>
          <FiUpload />
          Solte seus arquivos aqui ou clique para selecionar.
        </p>
      )}
    </Container>
  );
};

export default Dropzone;
