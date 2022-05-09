import { makeStyles } from '@mui/styles';
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import image from '../../imagese/heroImage.png';
import Image from 'next/image';
const useStyles = makeStyles({
	herosection: {
		height: '500px',
		backgroundColor: '#FDFDFD',
		margin: '0px',
		paddingTop: '20px',
		maxWidth: '100%',
	},
	description: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	subTitle: {
		fontSize: '12px',
	},
	Title: {
		color: '#000000',
		fontSize: '50px',
		justifyContent: 'start',
		alignItems: 'center',
	},
	PriceHeading: {
		marginTop: '1px',
		fontSize: '16px',
		textDecorationLine: 'underline',
	},
	PriceAmmount: {
		marginTop: '3px',
		fontSize: '14px',
	},
	EnquireButton: {
		width: '216px',
		height: '56px',
	},
	BuyNowButton: {
		width: '216px',
		height: '56px',
		backgroundColor: '#007FFF',
	},
});

const HeroSection = () => {
	const classes = useStyles();
	return (
		<>
			<Navbar />
			<Container className={classes.herosection}>
				<Container maxWidth="lg">
					<Box sx={{ flexGrow: 1 }}>
						<Grid container sx={{ alignItems: 'center' }}>
							<Grid className={classes.description} item xs={6}>
								<Typography
									className={classes.subTitle}
									sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
								>
									SKILLS COURSE - SELF PACED OR INTENSIVE FORMATS
								</Typography>
								<Typography
									className={classes.Title}
									sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
								>
									Full Stack Web <br /> Development
								</Typography>
								<Typography
									className={classes.subTitle}
									sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
								>
									Join our immersive bootcamp to get the skills you need to work{' '}
									<br />
									in the tech industry.
								</Typography>
								<Typography
									className={classes.PriceHeading}
									sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
								>
									<Typography sx={{ mr: 3 }}>Original Price</Typography>
									<Typography>Sale Price</Typography>
								</Typography>
								<Typography
									className={classes.PriceAmmount}
									sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
								>
									<Typography
										sx={{ mr: 5, textDecorationLine: 'line-through' }}
									>
										$1000 USD
									</Typography>
									<Typography> $500 USD</Typography>
								</Typography>
								<Stack direction="row" spacing={5} sx={{ mt: 5 }}>
									<Button className={classes.EnquireButton} variant="outlined">
										Enquire Now <ArrowForwardIosOutlinedIcon />
									</Button>
									<Button className={classes.BuyNowButton} variant="contained">
										Buy Now <ArrowForwardIosOutlinedIcon />
									</Button>
								</Stack>
							</Grid>
							<Grid item xs={6}>
								<Image
									src={image}
									alt="Picture of the author"
									width={865}
									height={682}
								/>
							</Grid>
						</Grid>
					</Box>
				</Container>
			</Container>
		</>
	);
};

export default HeroSection;
