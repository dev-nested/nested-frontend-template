import React from 'react';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import { useStyles } from 'src/useStyles/useStyles';
import { Typography } from '@mui/material';

const HeroSection = () => {
	const classes = useStyles();
	return (
		<>
			<Box className={classes.HeroSection}>
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}
				>
					<Grid item xs={2} sm={4} md={6}>
						<Typography textAlign="center" variant="h3" component="h3">
							Full Stack Web <br />
							Development
						</Typography>
						<Typography variant="body1" textAlign="center">
							Join our immersive bootcamp to get the skills you need to work{' '}
							<br />
							in the tech industry.
						</Typography>
					</Grid>
					<Grid item xs={2} sm={4} md={6}>
						<img src="../../imagese/heroImage.png" />
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default HeroSection;
