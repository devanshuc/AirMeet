import { Grid, Typography, Paper } from "@mui/material";
import { SocketContext } from "../Context";
import { useContext } from "react";

const VideoPlayer = () => {
	const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
		useContext(SocketContext);

	return (
		<Grid container className="justify-center">
			{/* My Video */}
			{stream && (
				<Paper className="p-3 border-2 border-black m-[10px]">
					<Grid item xs={12} md={6}>
						<Typography variant="h5" gutterBottom>
							{name || "Name"}
						</Typography>
						<video
							className="w-[550px] "
							playsInline
							muted
							ref={myVideo}
							autoPlay
						></video>
					</Grid>
				</Paper>
			)}

			{/* User Video */}
			{callAccepted && !callEnded && (
				<Paper>
					<Grid item xs={12} md={6}>
						<Typography variant="h5" gutterBottom>
							{call.name || "Caller Name"}
						</Typography>
						<video playsInline ref={userVideo} autoPlay></video>
					</Grid>
				</Paper>
			)}
		</Grid>
	);
};

export default VideoPlayer;
