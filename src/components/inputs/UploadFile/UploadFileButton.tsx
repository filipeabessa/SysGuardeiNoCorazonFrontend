import { FC } from 'react';
import Button from '../Button';
import { FileUpload } from '@mui/icons-material';

const UploadFileButton: FC<any> = () => {
  return (
    <Button
      variant="outlined"
      color="common.white"
      size="small"
      sx={{
        color: 'grey.500',
        borderColor: 'grey.500',
        textTransform: 'none',
      }}
    >
      <FileUpload sx={{ marginRight: '10px' }} />
      Fazer upload
    </Button>
  );
}

export default UploadFileButton;