import Card from "@/components/surfaces/Card";
import { FC } from "react";
import Typography from "@/components/dataDisplay/Typography";
import { Offense } from "@/types";
import { useRouter } from "next/router";

interface DisaffectionCardProps {
  offense: Offense;
}

const OffenseCard: FC<DisaffectionCardProps> = ({
  offense,
}) => {
  const router = useRouter();

  return (
    <Card
      width="1000px"
      padding="10px"
      elevation={2}
      background="#F8E9EC"
      title={offense?.title}
      titleVariant="h6"
      onClick={() => router.push(`/disaffections/${offense?.id}`)}
      sx={{
        cursor: 'pointer',
      }}
    >
      <Typography
        color="secondary.main"
        variant="body1"
      >
        <strong>Id:</strong>&nbsp; {offense?.id}
      </Typography>
      <Typography
        color="secondary.main"
        variant="body1"
      >
        <strong>Descrição: </strong>&nbsp; {offense?.description}
      </Typography>
      <Typography
        color="secondary.main"
        variant="body1"
      >
        <strong>Familiar xingado: </strong>&nbsp; {offense?.cursedFamilyMember}
      </Typography>
      <Typography
        color="secondary.main"
        variant="body1"
      >
        <strong>Bulinador: </strong>&nbsp; {offense?.offendingPerson}
      </Typography>
    </Card>
  );
};

export default OffenseCard;
