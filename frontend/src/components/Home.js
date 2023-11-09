import React,{useState} from 'react'
import '../App.css';
const Home = () => {
  const [user,setUser]=useState({
    name:"",email:""
  });
  const [flag,setFlag]=useState(null);
  let name,value;
  const handleChange=(e)=>{
      name=e.target.name;//email
      value=e.target.value;//val

      setUser({...user,[name]:value});
  };

  const postData= async (e)=>{
    e.preventDefault();
    
    const {name,email}=user;
    // if(!name||!email)
    //     {
    //       //alert('Please fill in all fields');
    //       setFlag(1);
    //       return;
    //     }
    const res=await fetch('/validation',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,email
      })
    });

    if(res.status===200)
    {
      const res=await fetch('/email',{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name,email
        })
      });
     
      if(res.status===200)
      {   
        //const data=await res.json();
        //console.log(data.success);
        alert('mail send successfully');
      }
      else{
        alert('not send');
        //setFlag(1);
      }
    }

    else
    {
      setFlag(1);
    }  
  }
  return (      
    <div className="container">
    <div className="row ml-5">
      <div className="col-md-6">
        <div className="signup-image mt-5 ml-5">
         
        </div>
      </div>
      <div className="col-md-6">
        <section className="signup">
          <div className="container mt-5">
            <div className="signup-content">
              <div className="signup-form">
                <h2 className="form-title" style={{marginLeft:180, marginTop:30}}>Register</h2>
                <form method="POST" className="register-form" id="register-form" style={{marginLeft:200, marginTop:150}}>
                  {/* Form inputs go here */}
                  <div className="form-group mt-5">
                                      <label htmlFor="name">
                                      <i className="zmdi zmdi-account material-icons-name mr-4"></i>
                                      </label>
                                      <input type='text' name='name' id='name' 
                                          value={user.name}
                                          onChange={handleChange}
                                          autoComplete='off' 
                                          placeholder="Name" style={{border:'none',outline: 'none',padding:20}}
                                      />
                                  </div>
                                    
                                  <div className="form-group">
                                      <label htmlFor="email">
                                      <i className="zmdi zmdi-phone material-icons-name mr-4"></i>
                                      </label>
                                      <input type='text' name='email' id='email' 
                                      value={user.phone}
                                          onChange={handleChange}
                                          autoComplete='off' 
                                          placeholder="email" style={{border:'none',outline: 'none',padding:20}}
                                      />
                                  </div>
                                  
                                  <div>
                                   { flag ===1 &&<p>Fill all fields</p>}
                                  </div>
            
                              <div className="form-group form-button ml-5" style={{marginTop:20}}>
                                  <input type="submit" name="signup" id="signup" className="form-submit primary"
                                  value="Submit" onClick={postData}/>
                              </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    </div>
)
}

export default Home



   