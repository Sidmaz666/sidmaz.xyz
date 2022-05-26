import Loader from '../components/loader'
import Nav from '../components/nav'
import Intro from '../components/intro'
import Contain from '../components/contain'

export default function HomePage(props){
  return (
	    <>
	   <Loader timeout={5000} state={true}/>
	   <Nav/>
	   <Intro/>
	   <Contain/>
	   </>
  )
}
