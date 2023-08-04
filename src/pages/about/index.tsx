import Typography from "@/components/dataDisplay/Typography";
import Box from "@/components/layout/Box";
import BaseLayout from "@/layouts/BaseLayout";
import { FC } from "react";

const About: FC<any> = () => {
  return (
    <BaseLayout title="Sobre">
      <Box>
        <Typography
          textAlign="justify"
        >
          SysguardeiNoCorazon é um projeto de código aberto, desenvolvido por Filipe Bessa
          durante a disciplina Desenvolvimento Web 2, ministrada pelo professor Dr. Eduardo de Melo Vasconcelos. O back-end da aplicação foi desenvolvido em Java com Spring Boot e o front-end foi desenvolvido em React JS, utilizando o framework Next.js.
        </Typography>
      </Box>
    </BaseLayout>
  );
}

export default About;
