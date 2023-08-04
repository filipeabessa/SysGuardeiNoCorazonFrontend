import DisaffectionCard from "@/components/dataDisplay/DisaffectionCard";
import Typography from "@/components/dataDisplay/Typography";
import Box from "@/components/layout/Box";
import Link from "@/components/navigation/Link";
import { Disaffection } from "@/types";
import BaseLayout from "@/layouts/BaseLayout";
import { FC, useState } from "react";
import { mockDisaffections } from "@/mockData";

const Home: FC<any> = () => {
  const [disaffections, setDisaffections] = useState<Disaffection[]>(mockDisaffections)

  return (
    <BaseLayout title="Desafeições">
      <Box
        display="flex"
        flexWrap="wrap"
        gap="10px"
        padding="20px"
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
    </BaseLayout>
  );
}

export default Home;
