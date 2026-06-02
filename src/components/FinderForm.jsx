import FinderHeader from './FinderHeader'
import FinderInput from './FinderInput'
import FinderMain from './FinderMain'

const FinderForm = () => {
  return (
    <div className="gap-5 flex flex-col items-center justify-center sm:w-5/10 w-9/10 transition-all">
      <FinderHeader />
      <FinderInput />
      <FinderMain />
    </div>
  )
}

export default FinderForm