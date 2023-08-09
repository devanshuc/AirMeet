import {
	Button,
	TextField,
	Grid,
	Typography,
	Container,
	Paper,
} from "@mui/material";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { SocketContext } from "../Context";
import { useContext, useState } from "react";

const Options = (props) => {
	const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
		useContext(SocketContext);

	const [idToCall, setIdToCall] = useState("");

	return (
		<Container>
			<Paper>
				<form noValidate autoComplete="off">
					<Grid container>
						<Grid item xs={12} md={6}>
							<Typography gutterBottom variant="h6">
								Account Info
							</Typography>
							<TextField
								label="Name"
								value={name}
								onChange={(e) => setName(e.target.value)}
								fullWidth
							/>
						</Grid>
					</Grid>
				</form>
			</Paper>
			Options
			{props.children}
		</Container>
	);
};

export default Options;
