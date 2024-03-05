import "./Curd.css"
import {useState} from "react"

const Curd = () => {
    const[open,setOpen]=useState(false)
    const[user,setUser]=useState({name:"", email:"", adress:""})
    const[userdata, setuserdata]=useState([])
    const [editClick,setEditClick]=useState(false)
    const [editIndex,setEditIndex]=useState("")

    function openModal(){
        setOpen(true)
        document.body.classList.add("blur-background");
    }
    function closeModal(){
        setOpen(false)
        document.body.classList.remove("blur-background");
    }
    
    //delete then index.id
    function handleDelete(index){
        const del=userdata.filter((v,i)=>!i==index)
        setuserdata(del)

    }
    function addUser(){
        if(editClick){
            // const temp=[...userdata]
            // Object.assign(temp[editIndex],user)
            // setuserdata([temp]);
            const updatedUsers = [...userdata];
            updatedUsers[editIndex] = user ;
            setuserdata(updatedUsers);
            setEditClick(false); // Reset editClick to false
            closeModal();
        }
        else{
            setuserdata([...userdata,user])
            closeModal();
        }
    }
    function handleUpdate(index){
        setOpen(true)
        const temp=userdata[index];
        setUser(
        { name:temp.name,
          email:temp.email,
          adress:temp.adress          
        }
       )
       setEditClick(true)
       setEditIndex(index)
    }
  return (
    <div>
        <section>
            <h1>
                CRUD APP
            </h1>
            
            <button onClick={openModal}>Add User</button>
        </section>
        <hr></hr>
        <center>
            <table border={1} rules='all'>
                <thead>
                    <tr>
                        <th style={{ backgroundColor: 'red', color:'white', height: '40px' }}><b>Name</b></th>
                        <th style={{ backgroundColor: 'red', color:'white', height: '40px' }}><b>Email</b></th>
                        <th style={{ backgroundColor: 'red', color:'white', height: '40px' }}><b>Address</b></th>
                        <th style={{ backgroundColor: 'red', color:'white', height: '40px' }}><b>Action</b></th>
                    </tr>
                </thead>
                {/* if userdata is greater then length then map usedata */}
                <tbody>
                    {userdata.length>0 && userdata.map((user,index)=>{
                        return(
                            <tr key={user.name}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.adress}</td>

                                <td>
                                    
                                    <button className="edit" onClick={()=>handleUpdate(index)}>Edit</button>
                                    <button className="delete" onClick={()=>handleDelete(index)}>Delete</button>
                                </td>
                            </tr>
                        )  
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={4}><center>@copyright</center></td>
                    </tr>
                </tfoot>       
            </table>
        </center>
        {open &&(
            
            <div className="opform">
              <div className="blurred-background"></div>
              <div className="modal-content"> 
                <form>
                  <label>Name:&nbsp; &nbsp;</label>
                  <input type="text" placeholder="enter your namr" name="name" value={user.name} onChange={(e)=>setUser({...user,name:e.target.value})}/><br></br>
                  <label>Email:&nbsp; &nbsp;</label>
                  <input type="email" placeholder="enter your namr" name="email" value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}/><br></br>
                  <label>Address:&nbsp; &nbsp;</label>
                  <input type="text" placeholder="enter your namr" name="adress" value={user.adress}onChange={(e)=>setUser({...user,adress:e.target.value})}/><br></br>
                  <button className="btn" onClick={addUser}>{editClick?"update":"Add"}</button>
                </form>
                </div>
            </div>
            
            
        )}
    </div>
  )
}

export default Curd