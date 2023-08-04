import { FC, useCallback, useEffect, useState } from 'react';
import BaseLayout from '@/layouts/BaseLayout';
import { Disaffection } from '@/types';
import { mockDisaffection } from '@/mockData';
import { BASE_API_URL } from '@/constants';
import OffenseCard from '@/components/dataDisplay/OffenseCard';
import Box from '@/components/layout/Box';
import { useRouter } from 'next/router';
import Button from '@/components/inputs/Button';
import Modal from '@/components/surfaces/Modal';
import CreateOffenseForm from '@/forms/CreateOffenseForm';


const DisaffectionPage: FC<any> = () => {
  const router = useRouter();
  
  const [disaffection, setDisaffection] = useState<Disaffection>(mockDisaffection)
  const [createOffenseModalOpen, setCreateOffenseModalOpen] = useState(false);

  useEffect(() => {
    getDisaffection();
  }, []);

  const getDisaffection = useCallback(async () => {
    const res = await fetch(`${BASE_API_URL}/disaffections/${router?.query.id}`);
    const data = await res.json();
    // setDisaffection(data);
  }, []);

  const createOffense = useCallback(async (data: any) => {
    const disaffectionId = router?.query.id;
    const res = await fetch(`${BASE_API_URL}/offenses/${disaffectionId}`, {
      method: 'POST',
      body: JSON.stringify({
        ...data,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.status === 201) {
      closeCreateOffenseModal();
      getDisaffection();
    }
    
  }, [disaffection]);

  const openCreateOffenseModal = useCallback(() => {
    setCreateOffenseModalOpen(true);
  }, []);
  
  const closeCreateOffenseModal = useCallback(() => {
    setCreateOffenseModalOpen(false);
  }, []);

  return (
    <BaseLayout title={`${disaffection.title}`}>
      <Button
        onClick={openCreateOffenseModal}
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
        open={createOffenseModalOpen}
        handleClose={closeCreateOffenseModal}
        title="Criar ofensa"
      >
        <CreateOffenseForm 
          handleSubmitForm={createOffense}
        />
      </Modal>
    </BaseLayout>
  );
}

export default DisaffectionPage;