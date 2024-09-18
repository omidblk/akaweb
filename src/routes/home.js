import { Button } from "@mui/material";
import IntlMessages from '../lang/components/IntlMessages';

const Home = () => {
    return (
      <div>
        <h1 className="m-3"><IntlMessages id="home" /></h1>
        <Button  variant="contained">Hello world</Button>
      </div>
    )
  };
  
  export default Home;