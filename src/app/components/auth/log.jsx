import {useState} from 'react'

export default function LoginDiv() {
  

  const initForm = {
    username : "",
    password : ""
  }

  const [isForm,setForm] = useState(initForm)

  const [error,setError] = useState({})


  const handleInput = (e) => {
     
    const {name,value} = e.target
    setForm({...isForm,[name] : value})
  
  }

  const handleForm = (e) => {
    e.preventDefault()
    console.log({isForm,error})
  }

  return (
    <div
      className="bg-black bg-opacity-70"
      id="login_div"
    >



      <form onSubmit={handleForm}>
        <div className="max-w-md flex flex-col p-5">
          <label className="flex flex-col text-xl font-semibold" htmlFor="username">
            <span>Username</span>
            <input
	      onChange={handleInput}
              className="p-1 mt-2 mb-2 focus:outline-none bg-black border-b-2 border-green-500 focus:bg-gray-900/50 focus:border-cyan-800/70"
              name="username"
              id="username"
              placeholder="a_user"
              type="text"
	      value={isForm.username}
            />
          </label>
          <label
            className="flex flex-col text-xl font-semibold mt-2"
            htmlFor="password"
          >
            <span>Password</span>
            <input
              className="p-1 mt-2 mb-2 focus:outline-none bg-black border-b-2 border-green-500 focus:bg-gray-900/50 focus:border-cyan-800/70"
	      onChange={handleInput}
              name="password"
              id="password"
              placeholder="**********"
              type="password"
	      value={isForm.password}
            />
          </label>
          <span className="flex justify-center pt-5">
            <button
          className="bg-green-500/50 text-white text-xl rounded-md hover:bg-green-500/70 pl-3 pr-3 p-2"
              type="submit"
              name="submitBtn"
              id="submitBtn"
            >
              Login
            </button>
          </span>
        </div>
      </form>
    </div>
  );
}
