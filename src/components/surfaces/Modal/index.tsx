import { Card, CardContent, CardHeader, IconButton, Modal as MuiModal } from '@mui/material';
import { ModalProps as MuiModalProps } from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { FC } from 'react';

interface BaseModalProps extends MuiModalProps  {
  open: boolean;
  handleClose: () => void;
  title?: string;
}

const Modal: FC<BaseModalProps> = (
  {
    open,
    handleClose,
    children,
    title,
    ...MuiModalProps
  }
) => {
  return (
    <MuiModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      {...MuiModalProps}
    >
      <Card
        sx = {{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          p: 4,
        }}
      >
          <IconButton 
            sx={{
              position: 'absolute',
              top: '10px',
              right: '10px',
            }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
          <CardHeader title={title} />
          <CardContent>
              {children}
          </CardContent>
      </Card>
    </MuiModal>
  );
}

export default Modal;