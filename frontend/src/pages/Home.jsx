import { Link } from 'react-router-dom'
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa'

function Home() {
  return (
    <>
      <section className='heading'>
        <br></br><br></br>
        <h1>WHAT HELP NEEDED?</h1>
        <br></br> 
        <p>Please Choose From Option's Below</p>
      </section>

      <Link to='/new-ticket' className='btn btn-block' >
        <FaQuestionCircle />  CREATE NEW TICKET
      </Link>

      <Link to='/tickets' className='btn btn-block'>
        <FaTicketAlt />  VIEW MY TICKET'S
      </Link>
    </>
  )
}

export default Home
