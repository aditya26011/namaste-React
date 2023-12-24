import React from 'react';


class UserClass extends React.Component {

    constructor(props){
        super(props);

     
        this.state={
           userInfo:{
            name:"dummy name",
            location:"Location"
           }
            // count2:2,
        };

        console.log("child constructor loaded");
    }

   async componentDidMount(){
        console.log(" Children component did mount called");


        const data=await fetch("https://api.github.com/users/akshaymarch7")
        const json=await data.json();
        console.log(json);
        this.setState({
            userInfo:json,
        })
    }

    componentDidUpdate(){
        console.log("Component did update is called");
    }

    componentWillUnmount(){
        console.log("component will unmount is called");
    }

    render(){
        console.log("CHILD render");
        
        const {name,location,email,avatar_url}=this.state.userInfo;
        // const{count,count2}=this.state;

        return(
            <div className="user-card">
                {/* <h1>count:{count}</h1>
                <button 
                onClick={()=>{
                    this.setState({
                        count:this.state.count+1,
                    })
                }}>
                    Increase Count
                    </button> */}
                {/* <h1>count2:{count}</h1> */}

                <img src={avatar_url} alt="" />
            <h2>Name:{name}</h2>
            <h3>Location:{location}</h3>
            <h3>Contact:{email}</h3>
        </div>
        );
    }
}

export default UserClass;


/*
----Mounting---
constructor is called
render is called
    HTML is rendered with dummy data
component did mount is called
    <API call>
    <this.setState>->state variable is updated 

---Updating---
render is called with API
    <HTML (new API data)

 Component did update is called





*/