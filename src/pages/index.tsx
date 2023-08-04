import DisaffectionCard from "@/components/dataDisplay/DisaffectionCard";
import Box from "@/components/layout/Box";
import { Disaffection } from "@/types";
import BaseLayout from "@/layouts/BaseLayout";
import { FC, useCallback, useState } from "react";
import { mockDisaffections } from "@/mockData";
import Modal from "@/components/surfaces/Modal";
import Button from "@/components/inputs/Button";
import CreateDisaffectionForm from "@/forms/CreateDisaffectionForm";

const Home: FC<any> = () => {
  const [disaffections, setDisaffections] = useState<Disaffection[]>(mockDisaffections)
  const [createDisaffectionModalOpen, setCreateDisaffectionModalOpen] = useState(false);

  const handleCreateDisaffectionButtonClick = useCallback(() => {
    setCreateDisaffectionModalOpen(true);
  }, []);

  const handleCreateDisaffectionModalClose = useCallback(() => {
    setCreateDisaffectionModalOpen(false);
  }, []);

  return (
    <BaseLayout title="Desafeições">
      <Button
        onClick={handleCreateDisaffectionButtonClick}
        sx={{
          alignSelf: 'flex-start',
          marginBottom: '20px',
        }}
      >
        Criar desafeição
      </Button>
      <Box
        display="flex"
        flexWrap="wrap"
        gap="10px"
      >
        {
          disaffections.map((disaffection) => (
            <DisaffectionCard 
              key={`disaffection-card-${disaffection.id}`}
              disaffection={disaffection}
            />
          ))
        }      
      </Box>
      <Modal
        open={createDisaffectionModalOpen}
        handleClose={handleCreateDisaffectionModalClose}
        title="Criar Desafeição"
      >
        <CreateDisaffectionForm 
          handleCloseModal={handleCreateDisaffectionModalClose}
        />
      </Modal>
    </BaseLayout>
  );
}

export default Home;
