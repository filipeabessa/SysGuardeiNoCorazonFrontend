import React, { FC, ReactNode} from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {  TextField, Typography } from '@mui/material';
import { AddCircle } from '@mui/icons-material';
import Box from '@/components/layout/Box';
import Button from '@/components/inputs/Button';

const validationSchema = yup.object({
  title: yup
    .string()
    .required('Campo obrigatório'),
  description: yup
    .string()
    .required('Campo obrigatório'),
  cursedFamilyMember: yup
    .string(),
  offendingPerson: yup
    .string()
    .required('Campo obrigatório'),
});
interface CreateOffenseFormProps {
  handleSubmitForm: (requestBody: any) => Promise<any>;
}

const CreateOffenseForm: FC<CreateOffenseFormProps> = ({
  handleSubmitForm,
}) => {
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      cursedFamilyMember: '',
      offendingPerson: '',
    },
    validationSchema,
    onSubmit: async (values: any) => {
      try {
        await handleSubmitForm!(values);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box 
        display="flex"
        flexDirection="column"
        gap="20px"
      >
        <TextField 
          id="offense-name-field" 
          name="title" 
          label="Titulo da ofensa"
          onChange={formik.handleChange}
          value={formik.values.title}
          error={formik.touched.title && Boolean(formik.errors.title)}
          onBlur={formik.handleBlur}
          helperText={formik.touched.title && formik.errors.title ? String(formik.errors.title) : '' as ReactNode}
        />
        <TextField 
          id="offense-description-field" 
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
        <TextField
          id="offense-cursedFamilyMember-field"
          name="cursedFamilyMember"
          label="Familiar xingado"
          onChange={formik.handleChange}
          value={formik.values.cursedFamilyMember}
          error={formik.touched.cursedFamilyMember && Boolean(formik.errors.cursedFamilyMember)}
          onBlur={formik.handleBlur}
          helperText={formik.touched.cursedFamilyMember && formik.errors.cursedFamilyMember ? String(formik.errors.cursedFamilyMember) : '' as ReactNode}
        />
        <TextField
          id="offense-offending-person-field"
          name="offendingPerson"
          label="Bulinador"
          onChange={formik.handleChange}
          value={formik.values.offendingPerson}
          error={formik.touched.offendingPerson && Boolean(formik.errors.offendingPerson)}
          onBlur={formik.handleBlur}
          helperText={formik.touched.offendingPerson && formik.errors.offendingPerson ? String(formik.errors.offendingPerson) : '' as ReactNode}
        />

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

export default CreateOffenseForm;