import Alert from "@mui/material/Alert";

import CheckIcon from "@mui/icons-material/Check";
import { Button } from "@mui/material";

const Alerts = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-center">Alerts</h1>
      <div className="flex justify-center">
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
          Here is a gentle confirmation that your action was successful.
        </Alert>
      </div>
      <div className="w-1/2 flex flex-col items-center gap-2">
        <h4 className="text-center"> Severity</h4>
        <Alert className="w-full " severity="success">
          This is a success Alert.
        </Alert>
        <Alert className="w-full " severity="info">
          This is an info Alert.
        </Alert>
        <Alert className="w-full " severity="warning">
          This is a warning Alert.
        </Alert>
        <Alert className="w-full " severity="error">
          This is an error Alert.
        </Alert>
      </div>
      <div className="w-1/2 flex flex-col items-center gap-2">
        <h4 className="text-center"> Filled</h4>
        <Alert className="w-full" variant="filled" severity="success">
          This is a filled success Alert.
        </Alert>
        <Alert className="w-full" variant="filled" severity="info">
          This is a filled info Alert.
        </Alert>
        <Alert className="w-full" variant="filled" severity="warning">
          This is a filled warning Alert.
        </Alert>
        <Alert className="w-full" variant="filled" severity="error">
          This is a filled error Alert.
        </Alert>
      </div>
      <div className="w-1/2 flex flex-col items-center gap-2">
        <h4 className="text-center"> Outlined</h4>
        <Alert className="w-full" variant="outlined" severity="success">
          This is an outlined success Alert.
        </Alert>
        <Alert className="w-full" variant="outlined" severity="info">
          This is an outlined info Alert.
        </Alert>
        <Alert className="w-full" variant="outlined" severity="warning">
          This is an outlined warning Alert.
        </Alert>
        <Alert className="w-full" variant="outlined" severity="error">
          This is an outlined error Alert.
        </Alert>
      </div>
      <div className="w-1/2 flex flex-col items-center gap-2">
        <h4 className="text-center"> Actions </h4>
        <Alert className="w-full" severity="warning" onClose={() => {}}>
          This Alert displays the default close icon.
        </Alert>
        <Alert
          className="w-full" severity="success"
          action={
            <Button color="inherit" size="small">
              UNDO
            </Button>
          }
        >
          This Alert uses a Button component for its action.
        </Alert>
      </div>
    </div>
  );
};

export default Alerts;
