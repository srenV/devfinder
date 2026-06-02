import FinderHeader from './FinderHeader'
import FinderInput from './FinderInput'
import FinderMain from './FinderMain'
import AppContext from '../context/AppContext'
import { useContext } from 'react'

const FinderForm = () => {
  const {searched} = useContext(AppContext)
  return (
    <div className="gap-5 flex flex-col items-center justify-center sm:w-5/10 w-9/10 transition-all">
      <FinderHeader />
      <FinderInput />
      {searched && <FinderMain />}
    </div>
  )
}

export default FinderForm