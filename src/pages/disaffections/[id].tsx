import BaseLayout from '@/layouts/BaseLayout';
import { Disaffection } from '@/types';
import { FC, useState } from 'react';
import { mockDisaffection } from '@/mockData';


const disaffections: FC = () => {
  const [disaffection, setDisaffection] = useState<Disaffection>(mockDisaffection)
  return (
    <BaseLayout title={`${disaffection.title}`}>

    </BaseLayout>
  );
}

export default disaffections;