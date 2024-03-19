// import { nanoid } from 'nanoid'
// import { FaTrash } from "react-icons/fa";
// import { FaEdit } from "react-icons/fa";

// import { useState } from 'react'
// import './App.css'
// import validate from './utilits/function'

// function App() {
//   const [name, setName] = useState('')
//   const [surname, setSurname] = useState('')
//   const [age, setAge] = useState()
//   const [email, setEmail] = useState('')
//   const [pass, setPass] = useState()

//   let Alluser = []
//   function getUsers() {
//     if (localStorage.getItem('users')) {
//       Alluser = JSON.parse(localStorage.getItem('users'))
//     }
//     return Alluser;
//   }

//   function handleSave(e) {
//     e.preventDefault()
//     let isvalid = validate(name, surname, age, pass)
//     if (isvalid) {
//       const user = {
//         id: nanoid(),
//         name: name,
//         surname: surname,
//         age: age,
//         email: email,
//         pass: pass
//       }
//       let data = getUsers()
//       data.push(user)
//       localStorage.setItem('users', JSON.stringify(data))
//       setName('')
//       setSurname('')
//       setAge(1)
//       setEmail('')
//       setPass('')
//       console.log(data);
//     }
//   }

//   return (
//     <>
//       <div className='wrapper'>
//         <form onSubmit={handleSave} className='form-control w-50'>
//           <div className="mb-3">
//             <label htmlFor="name" className="form-label">Enter Name</label>
//             <input type="name" className="form-control" id="name" placeholder="name" value={name} onChange={(e) => { setName(e.target.value) }} />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="surname" className="form-label">Enter Surname</label>
//             <input type="text" className="form-control" id="surname" placeholder="Surname" value={surname} onChange={(e) => { setSurname(e.target.value) }} />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="age" className="form-label">Enter Age</label>
//             <input type="number" className="form-control" id="age" placeholder="0 " value={age} onChange={(e) => { setAge(e.target.value) }} />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">Enter Email</label>
//             <input type="email" className="form-control" id="email" placeholder="example@gmail.com" value={email} onChange={(e) => { setEmail(e.target.value) }} />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">Enter Password</label>
//             <input type="password" className="form-control" id="password" placeholder="***" value={pass} onChange={(e) => { setPass(e.target.value) }} />
//           </div>
//           <div className='mb-3'>
//             <button className='form-control btn-primary'>Saqlash</button>
//           </div>
//         </form>

//         <table className="table w-75 table-striped">
//           <thead>
//             <tr>
//               <th scope="col">ID</th>
//               <th scope="col">Name</th>
//               <th scope="col">Surname</th>
//               <th scope="col">Age</th>
//               <th scope="col">Email</th>
//               <th scope="col">Password</th>
//               <th scope="col">Update</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <th scope="row">1</th>
//               <td>Mark</td>
//               <td>Otto</td>
//               <td>@mdo</td>
//               <td>@mdo</td>
//               <td>@mdo</td>
//               <td>
//                 <div className='d-flex gap-3'>
//                   <FaTrash style={{ cursor: 'pointer' }} />
//                   <FaEdit style={{ cursor: 'pointer' }} />
//                 </div>
//               </td>
//             </tr>

//           </tbody>
//         </table>
//       </div>
//     </>
//   )
// }

// export default App
import { FaTrashAlt } from "react-icons/fa";

import './App.css'

import { useState } from 'react'


function App() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')
  const [izoh, setIzoh] = useState('')
  const [pass, setPass] = useState()
  const [allUser, setAllUser] = useState(JSON.parse(localStorage.getItem('data')))
  let data = []
  function getData() {
    if (localStorage.getItem('data')) {
      data = JSON.parse(localStorage.getItem('data'))
    }
    return data
  }

  function validate(n, a, e, i, p) {
    if (n.trim().length < 3) {
      alert('Name value  > 3')
      return false
    }
    if (!a.trim().length > 0 && a.trim().length < 120) {
      alert('Age value  > 0 or < 120')
      return false
    }
    if (e.trim().length < 3) {
      alert('Email is not ')
      return false
    }
    if (p.trim().length < 3) {
      alert('Passsword is not')
      return false
    }
    if (i.trim().length < 3) {
      alert('description value > 3')
      return false
    }

    return true
  }

  function handleClick(e) {
    e.preventDefault();
    let isValidate = validate(name, age, email, izoh, pass)
    if (isValidate) {
      const user = {
        id: Date.now(),
        name: name,
        age: age,
        email: email,
        pass: pass,
        izoh: izoh,
        password: false
      }
      let dataa = getData()
      dataa.push(user)
      localStorage.setItem('data', JSON.stringify(dataa))
      setAllUser(dataa)
      setAge('')
      setEmail('')
      setIzoh('')
      setName('')
      setPass('')
    }


  }
  function handleDelete(e, id) {
    let c = confirm('Rostdan ham ushbu Malumotlarni ochirmqochimisiz')
    if (c) {
      let copied = JSON.parse(JSON.stringify(allUser))
      copied = copied.filter(el => {
        return el.id != id
      })
      localStorage.setItem('data', JSON.stringify(copied))
      setAllUser(copied)
    }
  }
  function handleHide(el) {
    console.log(el);
    e
  }

  return (
    <>
      <div className="form-wrapper mt-5">
        <form className='form p-4 shadow-sm'>
          <h2>Malumotlarni kirgazing</h2>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input type="text" className='form-control' id='name' placeholder='Salohiddin' value={name} onChange={(e) => { setName(e.target.value) }} />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">Your Age</label>
            <input type="number" className='form-control' id='age' placeholder='17' value={age} onChange={(e) => { setAge(e.target.value) }} />
          </div>
          <div className='mb-3'>
            <label htmlFor="email">emailngizni tanlang</label>
            <input type="email" className='form-control' id='email' placeholder='Enter Email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
          </div>
          <div className='mb-3'>
            <label htmlFor="pass">Password</label>
            <input type="password" className='form-control' id='pass' placeholder='Enter Password' value={pass} onChange={(e) => { setPass(e.target.value) }} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Izoh kiriting</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" placeholder='Zor bola' value={izoh} onChange={(e) => { setIzoh(e.target.value) }} ></textarea>
          </div>
          <div className='mb-4'>
            <button onClick={handleClick} className='btn btn-success'>Saqlash</button>
          </div>
        </form>
      </div>
      <div className='table-container'>
        <table className="table shadow-sm mt-5">
          <thead>
            <tr>
              <th scope="col">User</th>
              <th scope="col">Ismi</th>
              <th scope="col">Yoshi</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Izohi</th>
              <th scope="col">Ochirish</th>
            </tr>
          </thead>
          {
            allUser && allUser.map((el, i) => {
              return (
                <tbody key={i}>
                  <tr>
                    <th scope="row">1</th>
                    <td>{el.name}</td>
                    <td>{el.age}</td>
                    <td>{el.email}</td>
                    <td>
                      <div className="d-flex gap-2 align-items-center">
                        {el.password ? el.pass : '***'}
                        {
                          el.password ? 'salom' : <FaTrashAlt onClick={() => { handleHide(el.pass) }} style={{ cursor: 'pointer' }} />
                        }
                      </div>
                    </td>
                    <td>{el.izoh}</td>
                    <td>
                      <div className='d-flex gap-2'>
                        <button onClick={() => { handleEdit(el, el.id) }} className='btn btn-danger'>Edit</button>
                        <button onClick={() => { handleDelete(el, el.id) }} className='btn btn-danger'>Delete</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              )
            })
          }

        </table>
      </div>
    </>
  )
}
export default App
