import { Container } from "@mui/material";
import IntlMessages from "../../lang/components/IntlMessages";

const ContactUs = () => {
    return ( 
        <div>
           <Container maxWidth="lg">
             <p className="font-bold text-3xl p-4 border-r-4 border-r-primary"><IntlMessages id="contactUs"/></p>
           </Container>
        </div>
     );
}
 
export default ContactUs;