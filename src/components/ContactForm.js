import React,{useState} from "react";
import "../style.css";
import contactBg from "../../src/assets/images/contactBg.jpeg";
import Typewriter from "typewriter-effect";
import email from "../../src/assets/images/emai.webp";
import { Button } from "react-bootstrap";

const ContactForm = () => {
    const[input,setInput]=useState({
   name:'',     
   email:'',
   textarea:''
    })
  const styles = {
    banner: {
      background: `url(${contactBg})`,
      padding: "4% 6%" ,
      height:'auto'
    },
    para1: {
      color: "white",
      fontWeight: "bold",
    },
    para12: {
      marginTop: "20%",
    },
    img:{
        width:'100%',
    }
  };

  const handleChange=(e)=>{
  const{name,value}=e.target;
  setInput({...input,[name]:value})
  }

  const handleSubmit=(e)=>{
   e.preventDefault();
   console.log(input)
   setInput({name:'',email:'',textarea:''})
  }
  return (
    <div className="container box1" style={styles.banner}>
      <div className="row ">
        <div className="col-md-6 col-xs-6 col-sm-6">
          <p className="h3" style={styles.para1}>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 50,
                
                strings: ["GET IN TOUCH"],
              }}
            />
          </p>
          <p className="h5 para12 " style={styles.para12}>
            Send Your Email Here!
          </p>
          <div className="imageemail">
          <img src={email} style={styles.img}/>
          </div>
          
        </div>
        <form onSubmit={handleSubmit} className="col-md-6 col-xs-6 col-sm-6">
        <div className="p-3">
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Name
            </label>
            <input 
              type="name"
              value={input.name}
              name="name"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Your Name"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 ">
            <label for="exampleFormControlInput1" className="form-label">
              Email
            </label>
            <input
              type="text"
               value={input.email}
               name="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              value={input.textarea}
              name="textarea"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={handleChange}
            ></textarea>
          </div>
          <Button type="submit" variant="primary">Submit</Button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
