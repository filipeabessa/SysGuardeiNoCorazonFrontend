import BaseLayout from '@/layouts/BaseLayout';
import { Disaffection } from '@/types';
import { FC, useCallback, useEffect, useState } from 'react';
import { mockDisaffection } from '@/mockData';
import { BASE_API_URL } from '@/constants';
import OffenseCard from '@/components/dataDisplay/OffenseCard';
import Box from '@/components/layout/Box';
import { useRouter } from 'next/router';


const DisaffectionPage: FC<any> = () => {
  const router = useRouter();
  
  const [disaffection, setDisaffection] = useState<Disaffection>(mockDisaffection)

  const getDisaffection = useCallback(async () => {
    const res = await fetch(`${BASE_API_URL}/disaffections/${disaffection.id}`);
    const data = await res.json();
    // setDisaffection(data);
  }, [router.query.id]);

  useEffect(() => {
    getDisaffection();
  }, []);
    

  return (
    <BaseLayout title={`${disaffection.title}`}>
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
    </BaseLayout>
  );
}

export default DisaffectionPage;