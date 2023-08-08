import Card from "@/components/surfaces/Card";
import { FC } from "react";
import Typography from "@/components/dataDisplay/Typography";
import { Offense } from "@/types";
import { useRouter } from "next/router";
import dayjs from "dayjs";

interface DisaffectionCardProps {
  offense: Offense;
}

const OffenseCard: FC<DisaffectionCardProps> = ({
  offense,
}) => {
  const router = useRouter();

  return (
    <Card
      width="80vw"
      padding="10px"
      elevation={2}
      title={offense?.title}
      titleVariant="h6"
      sx={{
        backgroundColor: '#F8E9EC',
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
      <Typography
        color="secondary.main"
        variant="body1"
      >
        <strong>Data da ocorrência: </strong>&nbsp; {dayjs(offense?.occurrenceDateTime).format('DD/MM/YYYY')}
      </Typography>
      <Typography
        color="secondary.main"
        variant="body1"
      >
        <strong>Horário da ocorrência: </strong>&nbsp; {dayjs(offense?.occurrenceDateTime).format('HH:mm')}
      </Typography>
    </Card>
  );
};

export default OffenseCard;
