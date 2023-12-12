import './TodoSearch.css'

function TodoSearch(){
    return(
      <div className='cont-search'>
        <input className='search' placeholder="Search"/>
        <button className='button-search'>
          <span role='img' className='iconLupa'></span>
        </button>
      </div>
    );
  }

export {TodoSearch}