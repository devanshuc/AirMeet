import { VideoPlayer, Notifications, Options } from "./components";
import { AppBar, Typography } from "@mui/material";

import "./App.css";

function App() {
	return (
		<>
			<div>
				<AppBar position="static" color="inherit">
					<Typography variant="h2" align="center">
						AirMeet
					</Typography>
				</AppBar>
				<VideoPlayer />
				<Options>
					<Notifications />
				</Options>
			</div>
		</>
	);
}

export default App;
