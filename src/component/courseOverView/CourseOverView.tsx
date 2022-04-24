import React from 'react';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
} from '@material-ui/core';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const useStyles = makeStyles({
	courseOverView: {
		height: 'auto',
		backgroundColor: '#FDFDFD',
		width: '1920px',
		maxWidth: '100%',
		padding: '0px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},
	courseOverViewTilte: {
		padding: '20px',
	},
	courseAccridon: {
		height: 'auto',
		width: '1920px',
		maxWidth: '100%',
		backgroundColor: '#EEEBF2',
		marginTop: '30px',
		marginButtom: '30px',
		padding: '5px',
	},
});

const overViews: {
	Module: string;
	discraption: string;
	title: string;
}[] = [
	{
		Module: 'Module 1',
		discraption: 'Introduction ',
		title: 'Create The User Model ',
	},
	{
		Module: 'Module 2',
		discraption: 'Express & MongoDB Setup ',
		title: 'Create The User Model ',
	},
	{
		Module: 'Module 3',
		discraption: 'User API Routes & JWT Authentication ',
		title: 'Create The User Model',
	},
	{
		Module: 'Module 4',
		discraption: 'Getting Started With React & The Frontend ',
		title: 'Create The User Model',
	},
	{
		Module: 'Module 5',
		discraption: 'Redux Setup & Alerts ',
		title: 'Create The User Model ',
	},
];

const CourseOverView = () => {
	const classes = useStyles();
	const [opencourseOverView, setOpencourseOverView] = useState('');
	function handleAccordClick(courseOverView) {
		if (opencourseOverView === courseOverView) setOpencourseOverView('');
		if (opencourseOverView !== courseOverView)
			setOpencourseOverView(courseOverView);
	}

	function generateWeekAccordion(courseOverView) {
		return (
			<Accordion
				expanded={courseOverView === opencourseOverView}
				onClick={() => handleAccordClick(courseOverView)}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					id="panel1bh-header"
					aria-controls="panel1bh-content"
				>
					<Typography sx={{ width: '33%', flexShrink: 0 }}>
						{courseOverView.Module}
					</Typography>
					<Typography sx={{ color: 'text.secondary' }}>
						{courseOverView.title}
					</Typography>
				</AccordionSummary>
				<AccordionDetails>{`${courseOverView.discraption} details...`}</AccordionDetails>
			</Accordion>
		);
	}
	return (
		<>
			<Container className={classes.courseOverView}>
				<Typography className={classes.courseOverViewTilte}>
					Course Overview
				</Typography>
				<Box className={classes.courseAccridon}>
					<Container sx={{ padding: '5px', marginY: '30px' }}>
						<Typography>
							{overViews.map((courseOverView) =>
								generateWeekAccordion(courseOverView)
							)}
						</Typography>
					</Container>
				</Box>
			</Container>
		</>
	);
};

export default CourseOverView;
