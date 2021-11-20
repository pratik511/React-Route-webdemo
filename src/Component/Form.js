import React,{useEffect,useState} from 'react';
import Alert from './Alert';
import List from './List';

const getLocalStorage = () => {
    let list = localStorage.getItem("Contact");
    if (list) {
      return (list = JSON.parse(localStorage.getItem("Contact")));
    } else {
      return [];
    }
  };

const Form = () => {

    const [name, setName] = useState("");
    const [name1, setName1] = useState("");
    const [list, setList] = useState(getLocalStorage());
    const [isEditing, setIdEditing] = useState(false);
    const [editId, setEditID] = useState(null);
    // const [check, setCheck] = useState(false);
    // console.log("Checked Button",check);
    const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  
    useEffect(() => {
      localStorage.setItem("Contact", JSON.stringify(list));
    }, [list]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!(name && name1) ) {
        showAlert(true, "danger", "Please Enter Value");
      } else if ((name && name1) && isEditing) {
        setList(
          list.map((item) => {
            if (item.id === editId) {
              return { ...item, title: name,title1:name1 }
            }
            return item
          })
        );
        setName("");
        setName1("");

        setEditID(null);
        setIdEditing(false);
        showAlert(true, "success", "Value Change");
      } else {
        showAlert(true, "success", "Item Added to the List");
        const newItem = { id:Math.random() , title: name, title1 :name1 };  //new Date().getTime().toString()
        setList([...list, newItem]);
        setName("");
        setName1("");
      }
    }
    const showAlert = (show = false, type = "", msg = "") => {
      setAlert({ show, type, msg });
    }
  
    const removeItem = (id) => {
      showAlert(true, "danger", "Item Removed");
      setList(list.filter((item) => item.id !== id));
    };
    const editItem = (id) => {
      const editItem = list.find((item) => item.id === id);
      setIdEditing(true);
      setEditID(id);
      setName(editItem.title);
      setName1(editItem.title1);
    };
    const clearList = () => {
      showAlert(true, "danger", "Empty List");
      setList([]);
    };
  
    // const checkedItem = (id) =>{
    //     console.log(id);
    //     // console.log(setCheck(true));
    //     // setCheck(check !== true)
    //   };
  
    return (
      <section className="section-center">
        <form onSubmit={handleSubmit}>
          {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
          <h1 style={{ marginBottom: "1.5rem", textAlign: "center" }}>Contact Page</h1>
          <div className="mb-3 form">
            <input type="text" className="form-control" placeholder="First Name" onChange={(e) => setName(e.target.value)} value={name} /> <br/>
            <input type="text" className="form-control" placeholder="Last Name" onChange={(e) => setName1(e.target.value)} value={name1} />
            <button type="submit" className="btn btn-success">{isEditing ? "Edit" : "Submit"} </button>
          </div>
        </form>
        {list.length > 0 && (
          <div style={{ marginTop: "2rem" }}>
            <List items={list} removeItem={removeItem} editItem={editItem} />
            <div className="text-center">
              <button className="btn btn-warning" onClick={clearList}>Clear Items</button>
            </div>
          </div>
        )}
      </section>
    )
  }
  

export default Form;
