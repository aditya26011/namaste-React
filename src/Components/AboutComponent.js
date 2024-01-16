import {Component} from "react";
import UserClass from "./UserClass";
import UserComponent from "./UserComponent";
import UserContext from "../utils/UserContext";

//One way to write class is used to destructure the component from React
class AboutComponent extends Component{
    constructor(props){
        super(props);


        // console.log("Parent Constructor called");
    }

    componentDidMount(){
        // console.log(" Parent component did mount called");
    }

    render(){

        // console.log("Parent render");


        return(
            <div>
             <h1>About</h1>
             <h2>This is Namaste react coures</h2>
             <div>
                Logged In
                <UserContext.Consumer>
                    {({UserLoggedIn})=><h1 className="font-bold">{UserLoggedIn}</h1>}
                </UserContext.Consumer>
             </div>
             {/* <UserComponent name={"Aditya (Function)"}/> */}
            <UserClass name={"Aditya (class)"} location={"Pune"} contact={"aditya@gmail.com"} />

            </div>
            
            );
       
    }
}

export default AboutComponent;
// const AboutComponent=()=>{
//     return(
//         <div>
//             <h1>About</h1>
//             <h2>This is Namaste react coures</h2>
//             {/* <UserComponent name={"Aditya (Function)"}/> */}
//             <UserClass name={"Aditya (class)"} location={"Pune"} contact={"aditya@gmail.com"} />
//         </div>)
        
    
// }

// export default AboutComponent;