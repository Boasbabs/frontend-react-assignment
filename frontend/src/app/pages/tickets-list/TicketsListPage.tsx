import React from 'react';
import { Paper, createStyles, Center, LoadingOverlay, Box } from '@mantine/core';
import { useSelector, useDispatch } from 'react-redux';
import { PageLayout } from '../../../view/components/PageLayout/PageLayout';
import { colors } from '../../constants/colors';
import { TicketsListTable } from '../../tables/TicketsListTable';
import { getTickets } from '../../store/ticketsThunk';
import { AppDispatch, RootState } from '../../store/store';

const useStyles = createStyles((theme) => ({
    formContainer: {
        width: 850,
        minHeight: 500,
    },
    header: {
        marginTop: 0,
        textAlign: 'center',
        color: colors.blue,
    },
}));

export const TicketsListPage = () => {
    const { classes } = useStyles();
    const dispatch = useDispatch<AppDispatch>();
    const { tickets, loading } = useSelector((state: RootState) => state.ticketsReducer);

    React.useEffect(() => {
        dispatch(getTickets());
    }, [dispatch]);

    return (
        <PageLayout>
            <Center>
                <Paper p="xl" shadow="md" className={classes.formContainer}>
                    <h3 className={classes.header}>Tickets list</h3>
                    <Box pos="relative">
                        <LoadingOverlay visible={loading === "loading"} overlayBlur={2} />
                        <TicketsListTable items={tickets} />
                    </Box>
                </Paper>
            </Center>
        </PageLayout>
    );
};
