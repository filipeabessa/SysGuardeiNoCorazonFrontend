import Card from "@/components/surfaces/Card";
import { FC } from "react";
import Typography from "@/components/dataDisplay/Typography";
import { Disaffection } from "@/types";
import { useRouter } from "next/router";

interface DisaffectionCardProps {
  disaffection: Disaffection;
}

const DisaffectionCard: FC<DisaffectionCardProps> = ({
  disaffection,
}) => {
  const router = useRouter();

  return (
    <Card
      width="250px"
      padding="10px"
      elevation={2}
      background="primary.superLight"
      title={disaffection?.title}
      titleVariant="h6"
      onClick={() => router.push(`/disaffections/${disaffection?.id}`)}
      sx={{
        cursor: 'pointer',
      }}
    >
      <Typography
        variant="body1"
      >
        <strong>Id:</strong> {disaffection?.id}
      </Typography>
    </Card>
  );
};

export default DisaffectionCard;
