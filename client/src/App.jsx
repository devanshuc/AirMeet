import { VideoPlayer, Notifications, Options } from "./components";
import { AppBar, Typography } from "@mui/material";

import "./App.css";

function App() {
	return (
		<>
			<div className="flex flex-col items-center w-[100%]">
				<AppBar
					className="rounded-2xl my-[30px] mx-[100px] flex flex-row justify-center items-center w-[600px] border-2 border-black lg:w-90 w-90"
					position="static"
					color="inherit"
				>
					<Typography
						className="font-bold text-amber-300"
						variant="h2"
						align="center"
					>
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
