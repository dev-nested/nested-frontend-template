import React from 'react';
import { Button, Container, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import { useForm, SubmitHandler } from 'react-hook-form';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Link from 'next/link';

type Inputs = {
	name: string;
	email: string;
};

const useStyles = makeStyles({
	FooterStyle: {
		fontSize: '12px',
		padding: '0px',
	},
	style: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
	},
	FooterHeading: {
		fontSize: '24px',
	},
	inputField: {
		display: 'flex',
		flexDirection: 'row',
	},
	inputFieldStyle: {
		display: 'flex',
		flexDirection: 'column',
		marginRight: '20px',
	},
	Submit: {
		width: '216px',
		height: '56px',
		marginTop: '25px',
		backgroundColor: '#007FFF',
	},
});

const Footer = () => {
	const classes = useStyles();
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	console.log(watch('name'));
	return (
		<>
			<Container
				maxWidth="lg"
				className={classes.FooterStyle}
				sx={{ marginY: '50px' }}
			>
				<Box className={classes.style}>
					<Typography className={classes.FooterHeading}>
						Stay in the loop !
					</Typography>
					<Typography sx={{ marginY: '10px' }}>
						Sign up and we’ll keep you updated on degree information,
						scholarships and upcoming events.
					</Typography>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Box className={classes.inputField}>
							<Typography className={classes.inputFieldStyle}>
								<label>Name </label>
								<TextField {...register('name')} style={{ margin: '2px' }} />
							</Typography>
							<Typography className={classes.inputFieldStyle}>
								<label>Email </label>
								<TextField
									style={{ margin: '2px' }}
									{...register('email', { required: true })}
								/>
								{errors.email && (
									<Typography sx={{ color: '#f91010' }}>
										This field is required
									</Typography>
								)}
							</Typography>
							<Button
								sx={{ marginTop: '25px', marginX: '10px' }}
								type="submit"
								className={classes.Submit}
								variant="contained"
							>
								Submit
								<ArrowForwardIosOutlinedIcon />
							</Button>
							{/* <TextField className={classes.Submit} type="submit" /> */}
						</Box>
					</form>
				</Box>
			</Container>
			<Container
				maxWidth="lg"
				sx={{
					marginY: '50px',
					display: 'flex',
					justifyContent: 'space-between',
					padding: '0px',
				}}
			>
				<Box>
					<Typography>Logo</Typography>
					<Typography sx={{marginLeft:'15px'}}>Copyright @ 2022</Typography>
					<Typography>All rights reserved</Typography>
				</Box>
				<Box>
					<Typography sx={{marginX:'15px'}}>English(English)</Typography>
					<Link href="#">About</Link>
					<Link href="#">Help</Link>
					<Link href="#">Privacy & terms</Link>
				</Box>
			</Container>
		</>
	);
};

export default Footer;
