import { Button, Typography, styled } from "@mui/material";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
function App() {
    const BlueButton = styled(Button)(({ theme }) => ({
        backgroundColor: theme.palette.otherColor.main,
        color: "#888",
        margin: 5,
        "&:hover": {
            backgroundColor: "lightblue",
        },
        "&:disabled": {
            backgroundColor: "gray",
            color: "white",
        },
    }));
    return (
        <div className="App">
            <Button variant="text">Text</Button>
            <Button
                startIcon={<AddRoundedIcon />}
                variant="contained"
                color="otherColor"
            >
                Settings
            </Button>
            <Button variant="outlined">Outlined</Button>
            <Typography variant="h1">h1. Heading</Typography>

            <BlueButton>My Button</BlueButton>
            <BlueButton>Another Button</BlueButton>
        </div>
    );
}

export default App;
