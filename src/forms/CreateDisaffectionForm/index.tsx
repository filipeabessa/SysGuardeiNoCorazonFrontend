import { FC, ReactNode, use, useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField, Typography } from '@mui/material';
import Box from '@/components/layout/Box';
import Button from '@/components/inputs/Button';
import { AddCircle } from '@mui/icons-material';
import { CreateDisaffectionFormInputs } from './types';
import { CreateDisaffectionDto } from '@/types';

const validationSchema = yup.object({
  title: yup
    .string()
    .required('Campo obrigatório'),
  description: yup
    .string()
    .required('Campo obrigatório'),
  witnesses: yup
    .array(
      yup
      .string()
      .required('Campo obrigatório'),
    ),
  involvedPeople: yup
    .array(
      yup
      .string()
      .required('Campo obrigatório'),
    ),
});
interface CreateDisaffectionFormProps {
  handleSubmitForm: (createDisaffectionDto: CreateDisaffectionDto) => Promise<any>;
}

const CreateDisaffectionForm: FC<CreateDisaffectionFormProps> = ({
  handleSubmitForm,
}) => {
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      witnesses: [''],
      involvedPeople: [''],
    },
    validationSchema,
    onSubmit: async (values: CreateDisaffectionFormInputs) => {
      try {
        const createDisaffectionDto: CreateDisaffectionDto = {
          title: values.title,
          description: values.description,
          witnesses: values.witnesses.join(', '),
          involvedPeople: values.involvedPeople.join(', '),
        };
        
        await handleSubmitForm!(createDisaffectionDto);
      } catch (error) {
        console.log(error);
      }
    },
  });

  useEffect(() => {
    console.log(formik.values);
  }, [formik.values]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box 
        display="flex"
        flexDirection="column"
        gap="20px"
      >
        <TextField 
          id="disaffection-name-field" 
          name="title" 
          label="Titulo da ocorrência"
          onChange={formik.handleChange}
          value={formik.values.title}
          error={formik.touched.title && Boolean(formik.errors.title)}
          onBlur={formik.handleBlur}
          helperText={formik.touched.title && formik.errors.title ? String(formik.errors.title) : '' as ReactNode}
        />
        <TextField 
          id="disaffection-description-field" 
          name="description" 
          label="Descrição" 
          multiline
          rows={4}
          onChange={formik.handleChange}
          value={formik.values.description}
          error={formik.touched.description && Boolean(formik.errors.description)}
          onBlur={formik.handleBlur}
          helperText={formik.touched.description && formik.errors.description ? String(formik.errors.description) : '' as ReactNode}
        />
        <Typography 
          variant="h6"
          color="secondary.main"
        >
          Testemunhas
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          gap="20px"
        >
          <Button
              onClick={() => formik.setFieldValue('witnesses', [...formik.values.witnesses, ''])}
              width='fit-content'
          >
            Adicionar testemunha &nbsp;
            <AddCircle />
          </Button>

          <TextField
            id="disaffection-witness-1-field"
            name="witnesses[0]"
            label="Testemunha 1"
            fullWidth
            onChange={formik.handleChange}
            value={formik.values.witnesses[0]}
            error={formik.touched.witnesses && Boolean(formik.errors.witnesses?.[0])}
            onBlur={formik.handleBlur}
            helperText={formik.touched.witnesses && formik.errors.witnesses?.[0] ? String(formik.errors.witnesses?.[0]) : '' as ReactNode}
          />
          {
            formik.values.witnesses.map((witness: string, index: number) => (
              index > 0 &&
              <TextField
                key={`disaffection-witness-${index}`}
                id={`disaffection-witness-${index}-field`}
                name={`witnesses[${index}]`}
                label={`Testemunha ${index + 1}`}
                onChange={formik.handleChange}
                value={formik.values.witnesses[index]}
                error={formik.touched.witnesses && Boolean(formik.errors.witnesses?.[index])}
                onBlur={formik.handleBlur}
                helperText={formik.touched.witnesses && formik.errors.witnesses?.[index] ? String(formik.errors.witnesses?.[index]) : '' as ReactNode}
              />
            ))
          }
        </Box>

        <Typography 
          variant="h6"
          color="secondary.main"
        >
          Envolvidos
        </Typography>


        <Box
          display="flex"
          flexDirection="column"
          gap="20px"
        >
          <Button
              onClick={() => formik.setFieldValue('involvedPeople', [...formik.values.involvedPeople, ''])}
              width='fit-content'
          >
            Adicionar envolvido &nbsp;
            <AddCircle />
          </Button>

          <TextField
            id="disaffection-involved-people-1-field"
            name="involvedPeople[0]"
            label="Pessoa envolvida 1"
            fullWidth
            onChange={formik.handleChange}
            value={formik.values.involvedPeople[0]}
            error={formik.touched.involvedPeople && Boolean(formik.errors.involvedPeople?.[0])}
            onBlur={formik.handleBlur}
            helperText={formik.touched.involvedPeople && formik.errors.involvedPeople?.[0] ? String(formik.errors.involvedPeople?.[0]) : '' as ReactNode}
          />
          {
            formik.values.involvedPeople.map((involvedPeople: string, index: number) => (
              index > 0 &&
              <TextField
                key={`disaffection-involved-people-${index}`}
                id={`disaffection-involved-people-${index}-field`}
                name={`involvedPeople[${index}]`}
                label={`Pessoa envolvida ${index + 1}`}
                onChange={formik.handleChange}
                value={formik.values.involvedPeople[index]}
                error={formik.touched.involvedPeople && Boolean(formik.errors.involvedPeople?.[index])}
                onBlur={formik.handleBlur}
                helperText={formik.touched.involvedPeople && formik.errors.involvedPeople?.[index] ? String(formik.errors.involvedPeople?.[index]) : '' as ReactNode}
              />
            ))
          }
        </Box>

        <Button
          width="80px"
          type="submit"
        >
          Criar
        </Button>
      </Box>
    </form>

  );
}

export default CreateDisaffectionForm;