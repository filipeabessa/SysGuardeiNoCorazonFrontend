import { ChangeEvent, FC, useState } from 'react';
import { FormLabel as MuiFormLabel, FormControl as MuiFormControl } from '@mui/material';
import Typography from '@/components/dataDisplay/Typography';
import Button from '@/components/inputs/Button';
import UploadFileButton from './UploadFileButton';

const UploadFile: FC<any> = () => {
  const [selectedFile, setSelectedFile] = useState<any>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(event.target.files![0]);
  };

  const handleUpload = () => {
    // Here you can implement your logic to upload the selected file to the server
    // For this example, let's just log the file name to the console
    console.log(selectedFile!.name);
  };

  return (
    <MuiFormControl>
      <MuiFormLabel>
        <Typography>

        </Typography>
      </MuiFormLabel>
      <input
        type="file"
        style={{ display: 'none' }}
        id="fileInput"
        accept=".pdf,.jpg,.jpeg,.png"
        onChange={handleFileChange}
      />
      <label htmlFor="fileInput">
        <UploadFileButton />
      </label>
      {selectedFile && (
        <Typography 
          variant="body1"
          color="success.main"
        >
          Arquivo selecionado: {selectedFile.name}
        </Typography>
      )}
    </MuiFormControl>
  );
};

export default UploadFile;