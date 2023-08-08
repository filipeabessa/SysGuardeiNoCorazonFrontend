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
      width="500px"
      padding="10px"
      elevation={2}
      title={disaffection?.title}
      titleVariant="h6"
      onClick={() => router.push(`/disaffections/${disaffection?.id}`)}
      sx={{
        cursor: 'pointer',
        background: '#F8E9EC',
      }}
    >
      <Typography
        variant="body1"
        color="secondary.main"
      >
        <strong>Id:</strong>&nbsp; {disaffection?.id}
      </Typography>
      <Typography
        variant="body1"
        color="secondary.main"
      >
        <strong>Descrição: </strong>&nbsp; {disaffection?.description}
      </Typography>
      <Typography
        variant="body1"
        color="secondary.main"
      >
        <strong>Testemunhas: </strong>&nbsp; {disaffection?.witnesses}
      </Typography>
      <Typography
        variant="body1"
        color="secondary.main"
      >
        <strong>Envolvidos: </strong>&nbsp; {disaffection?.involvedPeople}
      </Typography>
    </Card>
  );
};

export default DisaffectionCard;
