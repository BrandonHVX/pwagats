import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
const useStyles = makeStyles((theme) => ({
	icon: {
		marginRight: theme.spacing(2)
	},
	heroContent: {
		backgroundColor: 'red',
		width: '100%',
		padding: theme.spacing(8, 0, 6)
	},
	heroButtons: {
		marginTop: theme.spacing(4)
	},
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8)
	},
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column'
	},
	cardMedia: {
		paddingTop: '56.25%' // 16:9
	},
	cardContent: {
		flexGrow: 1
	},
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(6)
	}
}));
export default function Album() {
	const classes = useStyles();

	return (
		<div className={classes.heroContent}>
			<Container maxWidth="sm">
				<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
					Album layout
				</Typography>
				<Typography variant="h5" align="center" color="textSecondary" paragraph>
					Something short and leading about the collection below—its contents, the creator, etc. Make it short
					and sweet, but not too short so folks don&apos;t simply skip over it entirely. Something short and
					leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not
					too short so folks don&apos;t simply skip over it entirely.Something short and leading about the
					collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks
					don&apos;t simply skip over it entirely.Something short and leading about the collection below—its
					contents, the creator, etc. Make it short and sweet, but not too short so folks don&apos;t simply
					skip over it entirely.Something short and leading about the collection below—its contents, the
					creator, etc. Make it short and sweet, but not too short so folks don&apos;t simply skip over it
				</Typography>
				<div className={classes.heroButtons}>
					<Grid container spacing={2} justify="center">
						<Grid item>
							<Button variant="contained" color="primary">
								Main call to action
							</Button>
						</Grid>
						<Grid item>
							<Button variant="outlined" color="primary">
								Secondary action
							</Button>
						</Grid>
					</Grid>
				</div>
			</Container>
		</div>
	);
}
