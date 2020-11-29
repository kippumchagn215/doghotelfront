import React from "react" 
import Navbar from "../component/Navbars/Navbar"
import YourBooking from "../component/YourBookings/YourBooking"
function YourBookingPage(){
    return(
        <div>
            <Navbar/>
            <YourBooking/>
        </div>
    );
}
export default YourBookingPage;