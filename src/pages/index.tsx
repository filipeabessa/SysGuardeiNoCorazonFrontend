import { FC, useCallback, useEffect, useState } from "react";
import DisaffectionCard from "@/components/dataDisplay/DisaffectionCard";
import Box from "@/components/layout/Box";
import { CreateDisaffectionDto, Disaffection } from "@/types";
import BaseLayout from "@/layouts/BaseLayout";
import { mockDisaffections } from "@/mockData";
import Modal from "@/components/surfaces/Modal";
import Button from "@/components/inputs/Button";
import CreateDisaffectionForm from "@/forms/CreateDisaffectionForm";
import { BASE_API_URL } from "@/constants";

const Home: FC<any> = () => {
  const [disaffections, setDisaffections] = useState<Disaffection[]>(mockDisaffections)
  const [createDisaffectionModalOpen, setCreateDisaffectionModalOpen] = useState(false);

  useEffect(() => {
    getDisaffections();
  }, []);

  const getDisaffections = useCallback(async () => {
    const res = await fetch(`${BASE_API_URL}/disaffection`)
    const data = await res.json();
    console.log("Disaffections", data);

    if (res.status === 200) {

      setDisaffections(data.results);
    }
  }, []);

  const createDisaffection = useCallback(async (data: CreateDisaffectionDto) => {
    const res = await fetch(`${BASE_API_URL}/disaffection`, {
      method: 'POST',
      body: JSON.stringify({
        ...data,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (res.status === 201) {
      closeCreateDisaffectionModal();
      getDisaffections();
    }
  }, []);
  
  const openCreateDisaffectionModal = useCallback(() => {
    setCreateDisaffectionModalOpen(true);
  }, []);

  const closeCreateDisaffectionModal = useCallback(() => {
    setCreateDisaffectionModalOpen(false);
  }, []);

  return (
    <BaseLayout title="Desafetos">
      <Button
        onClick={openCreateDisaffectionModal}
        sx={{
          alignSelf: 'flex-start',
          marginBottom: '20px',
        }}
      >
        Criar desafeto
      </Button>
      <Box
        display="flex"
        flexWrap="wrap"
        gap="10px"
      >
        {
          disaffections?.map((disaffection) => (
            <DisaffectionCard 
              key={`disaffection-card-${disaffection.id}`}
              disaffection={disaffection}
            />
          ))
        }      
      </Box>
      <Modal
        open={createDisaffectionModalOpen}
        handleClose={closeCreateDisaffectionModal}
        title="Criar Desafeição"
      >
        <CreateDisaffectionForm
          handleSubmitForm={createDisaffection}
        />
      </Modal>
    </BaseLayout>
  );
}

export default Home;
