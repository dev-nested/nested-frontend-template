import type { NextPage } from 'next';
import Head from 'next/head';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@features/material-ui-demo/Link';
import ProTip from '@features/material-ui-demo/ProTip';
import Copyright from '@features/material-ui-demo/Copyright';
import Counter from '../features/counter/Counter';
import styles from '../styles/Home.module.css';
import HeroSection from 'src/component/HeroSection/HeroSection';
import Footer from 'src/component/Footer/Footer';

const MaterialUiDemo = () => {
	return (
		<>
			<HeroSection />
			<Box
				sx={{
					my: 4,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Typography variant="h4" component="h1" gutterBottom>
					MUI v5 + Next.js with TypeScript example
				</Typography>
				<Link href="/about" color="secondary">
					Go to the about page
				</Link>
				<ProTip />
				<Copyright />
			</Box>
			<Footer />
		</>
	);
};

const IndexPage: NextPage = () => {
	return (
		<>
			<HeroSection />
			<MaterialUiDemo />
			<Footer />
			<div className={styles.container}>
				<Head>
					<title>Redux Toolkit</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<header className={styles.header}>
					<img src="/logo.svg" className={styles.logo} alt="logo" />
					<Counter />
					<p>
						Edit <code>src/App.tsx</code> and save to reload.
					</p>
					<span>
						<span>Learn </span>
						<a
							className={styles.link}
							href="https://reactjs.org/"
							target="_blank"
							rel="noopener noreferrer"
						>
							React
						</a>
						<span>, </span>
						<a
							className={styles.link}
							href="https://redux.js.org/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Redux
						</a>
						<span>, </span>
						<a
							className={styles.link}
							href="https://redux-toolkit.js.org/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Redux Toolkit
						</a>
						,<span> and </span>
						<a
							className={styles.link}
							href="https://react-redux.js.org/"
							target="_blank"
							rel="noopener noreferrer"
						>
							React Redux
						</a>
					</span>
				</header>
			</div>
		</>
	);
};

export default IndexPage;
