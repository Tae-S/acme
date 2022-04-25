import './booksStyles.css'
import data from './fakeData'

function Books()
{
    //more books section handlers
    const handleMoreBooksClick = e => {
        console.log('more books section view more books btn clicked')
    }
    return(
        <div className='more-books-container'>
            <p className='more-books-title'>More Books</p>
            <div className='books-container'>
                {data.map(({id, chapters, title, price}) => {
                    return (
                        <div className='book-card' key={id}>
                            <p className='title'>{title}</p>    
                            <p className='chapters'>{chapters} chapters</p>
                            <p className='price'>{price}</p>
                            <a href={'/books/' + id}>View Details</a>
                        </div>
                    )
                })}
            </div>
            <input type='button' className='more-books-btn' value='View All Books' onClick={e => handleMoreBooksClick(e)}/>
        </div>
    )
}

export default Books