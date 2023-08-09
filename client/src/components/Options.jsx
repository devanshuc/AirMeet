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
// import { AssignmentIndIcon } from "@mui/icons-material/AssignmentInd";

const Options = ({ children }) => {
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
								Make a Call
							</Typography>
							<TextField
								label="Name"
								value={name}
								onChange={(e) => setIdToCall(e.target.value)}
								fullWidth
							/>
							<CopyToClipboard text={me}>
								<Button variant="contained" color="primary" fullWidth>
									Button
								</Button>
							</CopyToClipboard>
						</Grid>
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
							{callAccepted && !callEnded ? (
								<Button
									variant="contained"
									color="secondary"
									fontSize="large"
									onClick={leaveCall}
									fullWidth
								>
									Hang Up
								</Button>
							) : (
								<Button
									variant="contained"
									color="primary"
									fontSize="large"
									onClick={() => callUser(idToCall)}
									fullWidth
								>
									Call
								</Button>
							)}
						</Grid>
					</Grid>
				</form>
				{children}
			</Paper>
		</Container>
	);
};

export default Options;
