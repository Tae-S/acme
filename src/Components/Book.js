import './bookStyles.css'
import logo from '../assets/logo-light.png'
import check from '../assets/check.png'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../features/basket'
function Book()
{
    const dispatch = useDispatch()
    const [counterValue, setCounterValue] = useState(0)
    const handleCounter = e => {
        const _op = e.target.dataset.op
        setCounterValue(prevState => {
            if(_op === 'inc') return ++prevState
            else if(_op === 'dec' && prevState - 1 > 0) return --prevState
            else if(_op === 'dec')return 0
        })
    }
    // useEffect(()=>{
    //     console.log(counterValue)
    // }, [counterValue])
    const handleAddToBasket = e => {
        dispatch(addItem({isbn:'', quantity: counterValue }))
        console.log('Added to basket successfuly!')
    }
    return(
        <div className='book-section'>            
            <p className='details'>
                <span className='title'>Zero to One</span>
                <span className='desc'>
                    <br/>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa distinctio ducimus eum voluptatum minima unde cum consequatur soluta fugiat. Obcaecati quas officia voluptates eaque beatae eum perspiciatis, sequi dolore voluptas illo voluptatem, quisquam quaerat eligendi. Natus, nam nemo eius, nulla officia a laboriosam amet tempora pariatur iure porro, quaerat dolores voluptatem? Asperiores possimus vero eligendi iste? Obcaecati voluptatum quasi culpa earum, voluptatibus a quae, fugiat suscipit cupiditate quidem qui sequi quis tempora animi. Rem iusto sint adipisci facilis, aspernatur optio accusantium iste quas.
                </span>
            </p>
            <div className='numbers'>
                <p>
                    <img src={check} alt='tick mark logo' />
                    <strong>Publisher:</strong> </p>
                <hr/>
                <p>
                    <img src={check} alt='tick mark logo' />
                    <strong>Paperback:</strong> </p>
                <hr/>
                <p>
                    <img src={check} alt='tick mark logo' />
                    <strong>Language:</strong> </p>
                <hr/>
                <p>
                    <img src={check} alt='tick mark logo' />
                    <strong>ISBN-10:</strong> </p>
                <hr/>
                <p>
                    <img src={check} alt='tick mark logo' />
                    <strong>ISBN-13:</strong> </p>
                <div className='number-container'>
                    <p className='number'>120</p>
                    <div className='counter'>
                        <div data-op='dec' onClick={e => handleCounter(e)} className='decrement'>-</div>
                        <p className='counter-display'>{counterValue}</p>
                        <div data-op='inc' onClick={e => handleCounter(e)} className='increment'>+</div>
                    </div>
                </div>
                <div onClick={e => handleAddToBasket(e)} className='add-to-basket'>
                    <img src={logo} alt='Shopping logo'/>
                    Add to Basket
                </div>
            </div>
        </div>
    )
}

export default Book