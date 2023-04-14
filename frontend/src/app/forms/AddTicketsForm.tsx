import React from 'react';
import { FormProps } from '../interfaces/form';
import { useForm, Controller } from 'react-hook-form';
import { Grid, TextInput, Textarea, Button, createStyles } from '@mantine/core';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormLabel } from '../../view/components/Forms/FormLabel';

const useStyles = createStyles((theme) => ({
    buttonContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
}));

export interface AddTicketsFormValues {
    email: string;
    title: string;
    description: string;
    price: number;
    amount: number;
    supplier: string;
}

const defaultValues: AddTicketsFormValues = {
    email: '',
    title: '',
    description: '',
    price: 1,
    amount: 1,
    supplier: '',
};

const schema = yup.object().shape({
    email: yup.string().email().required(),
    title: yup.string().min(2).required(),
    description: yup.string().min(8).required(),
    price: yup.number().typeError('Price must be a number').required().positive(),
    amount: yup.number().integer().typeError('Amount must be a number').required().positive(),
    supplier: yup.string().required(),
});

export const AddTicketsForm = ({ onSubmit }: FormProps<AddTicketsFormValues>) => {
    const { control, handleSubmit, formState: { errors }, reset } = useForm<AddTicketsFormValues>({
        defaultValues,
        resolver: yupResolver(schema),
    });
    const { classes } = useStyles();
    const handleFormSubmit = (values: AddTicketsFormValues) => {
        onSubmit(values)
        reset()
    }

    return (
        <Grid>
            <Grid.Col span={12}>
                <Controller
                    name="email"
                    control={control}
                    render={({ field: { onChange, value, name } }) => {
                        return (
                            <>
                                <FormLabel>Email</FormLabel>
                                <TextInput
                                    onChange={onChange}
                                    value={value}
                                    name={name}
                                    placeholder='email'
                                    error={errors.email?.message}
                                />
                            </>
                        );
                    }}
                />
            </Grid.Col>
            <Grid.Col span={12}>
                <Controller
                    name="title"
                    control={control}
                    render={({ field: { onChange, value, name } }) => {
                        return (
                            <>
                                <FormLabel>Title</FormLabel>
                                <TextInput
                                    onChange={onChange}
                                    value={value}
                                    name={name}
                                    error={errors.title?.message}
                                    placeholder='title'
                                />
                            </>
                        );
                    }}
                />
            </Grid.Col>
            <Grid.Col span={12}>
                <Controller
                    name="description"
                    control={control}
                    render={({ field: { onChange, value, name } }) => {
                        return (
                            <>
                                <FormLabel>Description</FormLabel>
                                <Textarea
                                    onChange={onChange}
                                    value={value}
                                    name={name}
                                    placeholder='description'
                                    error={errors.description?.message}
                                />
                            </>
                        );
                    }}
                />
            </Grid.Col>
            <Grid.Col span={6}>
                <Controller
                    name="price"
                    control={control}
                    render={({ field: { onChange, value, name } }) => {
                        return (
                            <>
                                <FormLabel>Price</FormLabel>
                                <TextInput
                                    type="number"
                                    onChange={onChange}
                                    value={value}
                                    name={name}
                                    placeholder='price: 0'
                                    error={errors.price?.message}
                                />
                            </>
                        );
                    }}
                />
            </Grid.Col>
            <Grid.Col span={6}>
                <Controller
                    name="amount"
                    control={control}
                    render={({ field: { onChange, value, name } }) => {
                        return (
                            <>
                                <FormLabel>Amount of tickets</FormLabel>
                                <TextInput
                                    type="number"
                                    onChange={onChange}
                                    value={value}
                                    name={name}
                                    placeholder='amount: 0'
                                    error={errors.amount?.message}
                                />
                            </>
                        );
                    }}
                />
            </Grid.Col>
            <Grid.Col span={12}>
                <Controller
                    name="supplier"
                    control={control}
                    render={({ field: { onChange, value, name } }) => {
                        return (
                            <>
                                <FormLabel>Supplier</FormLabel>
                                <TextInput
                                    onChange={onChange}
                                    value={value}
                                    name={name}
                                    placeholder='supplier'
                                    error={errors.supplier?.message}
                                />
                            </>
                        );
                    }}
                />
            </Grid.Col>
            <Grid.Col span={12} className={classes.buttonContainer}>
                <Button onClick={handleSubmit(handleFormSubmit)}>Add tickets</Button>
            </Grid.Col>
        </Grid>
    );
};
