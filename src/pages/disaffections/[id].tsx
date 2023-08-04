import BaseLayout from '@/layouts/BaseLayout';
import { Disaffection } from '@/types';
import { FC, useCallback, useEffect, useState } from 'react';
import { mockDisaffection } from '@/mockData';
import { BASE_API_URL } from '@/constants';
import OffenseCard from '@/components/dataDisplay/OffenseCard';
import Box from '@/components/layout/Box';
import { useRouter } from 'next/router';
import Button from '@/components/inputs/Button';
import Modal from '@/components/surfaces/Modal';


const DisaffectionPage: FC<any> = () => {
  const router = useRouter();
  
  const [disaffection, setDisaffection] = useState<Disaffection>(mockDisaffection)
  const [addOffenseModalOpen, setAddOffenseModalOpen] = useState(false);

  const getDisaffection = useCallback(async () => {
    const res = await fetch(`${BASE_API_URL}/disaffections/${disaffection.id}`);
    const data = await res.json();
    // setDisaffection(data);
  }, [router.query.id]);

  useEffect(() => {
    getDisaffection();
  }, []);

  const handleAddOffenseButtonClick = useCallback(() => {
    setAddOffenseModalOpen(true);
  }, []);
  
  const handleAddOffenseModalClose = useCallback(() => {
    setAddOffenseModalOpen(false);
  }, []);

  return (
    <BaseLayout title={`${disaffection.title}`}>
      <Button
        onClick={handleAddOffenseButtonClick}
        sx={{
          alignSelf: 'flex-start',
          marginBottom: '20px',
        }}
      >
        Criar ofensa
      </Button>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="100%"
        gap="20px"
      >
        {
          disaffection && disaffection.offenses?.map(offense => (
            <OffenseCard 
              key={`offense-card-${offense.id}`}
              offense={offense} 
            />
          ))
        }
      </Box>
      <Modal
        open={addOffenseModalOpen}
        handleClose={handleAddOffenseModalClose}
        title="Criar ofensa"
      >
        <div></div>
      </Modal>
    </BaseLayout>
  );
}

export default DisaffectionPage;