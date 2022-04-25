import './bookStyles.css'
import logo from '../assets/logo-light.png'
import check from '../assets/check.png'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../features/basket'
import plus from '../assets/plus.png'
import minus from '../assets/minus.png'
import data from './fakeData'
import Books from './Books'
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

    //accordian handlers
    const handleClick = e => {
        const _field = e.target.dataset.acc
        const _showThis = document.querySelector(`.details[data-acc="${_field}"]`)
        console.log(_showThis, _showThis.classList)
        _showThis.classList.toggle('show-this')
        const _minus = document.querySelector(`.details[data-acc="${_field}"]`)
    }

    
    return(
        <>
            <div className='book-section'>            
                <p className='details'>
                    <span className='title'>Zero to One</span>
                    <span className='desc'>
                        <br/>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa distinctio ducimus eum voluptatum minima unde cum consequatur soluta fugiat. Obcaecati quas officia voluptates eaque beatae eum perspiciatis, sequi dolore voluptas illo voluptatem, quisquam quaerat eligendi.
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
            <div className='book-acc-container'>
                <div className='acc-details'>
                    <div data-acc='0' onClick={e => handleClick(e)} className='acc-item'>
                        <div data-acc='0' className='acc-heading'>
                            <p data-acc='0' className='title'>Including success stories of Mark and Musk</p>
                            <img data-img='01' data-acc='0' src={plus} alt='More details'/>
                        </div>
                        <p data-acc='0' className='details'>Author expresses the huge requirements of new ideas and uniqueness.</p>
                    </div>
                    <div data-acc='1' onClick={e => handleClick(e)} className='acc-item'>
                        <div data-acc='1' className='acc-heading'>
                            <p data-acc='1' className='title'>Must-Read!</p>
                            <img data-img='11' data-acc='1' src={plus} alt='More details'/>
                        </div>
                        <p data-acc='1' className='details'>Author expresses the huge requirements of new ideas and uniqueness.</p>
                    </div>
                    <div data-acc='2' onClick={e => handleClick(e)} className='acc-item'>
                        <div data-acc='2' className='acc-heading'>
                            <p data-acc='2' className='title'>Best book for entrepreneurs.</p>
                            <img data-img='21' data-acc='2' src={plus} alt='More details'/>
                        </div>
                        <p data-acc='2' className='details'>Author expresses the huge requirements of new ideas and uniqueness.</p>
                    </div>
                    <div data-acc='3' onClick={e => handleClick(e)} className='acc-item'>
                        <div data-acc='3' className='acc-heading'>
                            <p data-acc='3' className='title'>Zero to one is not a single step...</p>
                            <img data-img='31' data-acc='3' src={plus} alt='More details'/>
                        </div>
                        <p data-acc='3' className='details'>Author expresses the huge requirements of new ideas and uniqueness.</p>
                    </div>
                    <div data-acc='4' onClick={e => handleClick(e)} className='acc-item'>
                        <div data-acc='4' className='acc-heading'>
                            <p data-acc='4' className='title'>Recommendations for improvement</p>
                            <img data-img='41' data-acc='4' src={plus} alt='More details'/>
                        </div>
                        <p data-acc='4' className='details'>Author expresses the huge requirements of new ideas and uniqueness.</p>
                    </div>
                </div>
                <div className='acc-img'>
                    <img alt='Accordian details' />
                </div>
            </div>

            <Books />
        </>
    )
}

export default Book