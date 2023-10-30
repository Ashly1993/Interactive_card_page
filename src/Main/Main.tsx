import './Main.scss'
import CardFront from '../Assets/bg-card-front.png'
import CardBack from '../Assets/bg-card-back.png'
import { useState } from 'react';

function Main() {


    const [cardNumber, setCardNumber] = useState('');
    const [name, setName] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    const [cvc, setCvc] = useState('')
    const [nameValidationError, setNameValidationError] = useState(false)
    const [numberValidationError, setNumberValidationError] = useState(false)
    const [monthValidationError, setMonthValidationError] = useState(false)
    const [yearValidationError, setYearValidationError] = useState(false)
    const [cvcValidationError, setCvcValidationError] = useState(false)


    const [success, setSuccess] = useState(false)

    const handleNameChange = (e: any) => {
        const nameValue = e.target.value;
        setName(nameValue)
    }

    const handleChange = (e: any) => {
        const { value } = e.target;
        // const formattedValue = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
        setCardNumber(value);

    };

    const handleChangeMonth = (e: any) => {
        const { value } = e.target;
        const trimmedValue = value.replace(/\s/g, ''); // Replace all white spaces with an empty string
        setMonth(trimmedValue);
    };

    const handleChangeYear = (e: any) => {
        const { value } = e.target;
        const trimmedValue = value.replace(/\s/g, ''); // Replace all white spaces with an empty string
        setYear(trimmedValue);
    };



    const handleChangeCvc = (e: any) => {
        const { value } = e.target;
        const trimmedValue = value.replace(/\s/g, ''); // Replace all white spaces with an empty string
        setCvc(trimmedValue);
        // if (value.length <= 2) {
        //     const trimmedValue = value.replace(/\s/g, ''); // Replace all white spaces with an empty string
        //     setCvc(trimmedValue);
        // } else {
        //     // Disable further typing when the length exceeds 3
        //     e.target.disabled = true;
        // }
    };


    const isValidCardNumber = (cardNumber: any) => {
        const trimmedValue = cardNumber.replace(/\s/g, ''); // Replace all white spaces with an empty string
        if (/^\d{16}$/.test(trimmedValue)) {
            setNumberValidationError(false)
            return true
        }
        else {
            setNumberValidationError(true)
            return false
        }
    }

    const isValidName = (name: any) => {
        const trimmedValue = name.replace(/\s/g, ''); // Replace all white spaces with an empty string
        if (/^[a-zA-Z\s]+$/.test(trimmedValue)) {
            setNameValidationError(false)
            return true
        } else {
            setNameValidationError(true)
            return false
        }
    }

    const isValidMonth = (month: any) => {
        if (/^\d+$/.test(month)) {
            setMonthValidationError(false)
            return true
        } else {
            setMonthValidationError(true)
            return false
        }
    }

    const isValidYear = (year: any) => {
        if (/^\d+$/.test(year)) {
            setYearValidationError(false)
            return true
        } else {
            setYearValidationError(true)
            return false
        }
    }

    const isValidCardCVC = (cvc: any) => {
        if (/^\d{3}$/.test(cvc)) {
            setCvcValidationError(false)
            return true
        }
        else {
            setCvcValidationError(true)
            return false
        }

    }
    const formSubmit = () => {

        const isValidCardNumberResult = isValidCardNumber(cardNumber);
        const isValidNameResult = isValidName(name);
        const isValidMonthResult = isValidMonth(month);
        const isValidYearResult = isValidYear(year);
        const isValidCardCVCResult = isValidCardCVC(cvc);

        if (isValidCardNumberResult && isValidNameResult && isValidMonthResult && isValidYearResult && isValidCardCVCResult) {
            setSuccess(true)
        }

    }


    return (
        <div className='main'>
            <div className="flex-left-main">
                <div className='cardFrontImage'>
                    <img src={CardFront} alt="CardFront" className='cardFront' />
                    <p className='previewNumber'>

                        {
                            cardNumber ?
                                <>
                                    <div className=''>

                                        {cardNumber.substr(0, 4).split('').map((num, index) => (
                                            <span key={index}>{num}</span>
                                        ))}

                                        {/* 
                                        The code snippet {cardNumber.substr(0, 4).split('').map((num, index) => (<span key={index}>{num}</span>))} takes the first 4 characters of the cardNumber string using the .substr() method, then converts it into an array of individual characters using the .split('') method.

                                      Next, it uses the .map() method to iterate over each character in the array and generates a <span> element for each character. The key attribute is set to the index value to uniquely identify each <span> element.
                                         */}
                                    </div>
                                    <div>

                                        {cardNumber.substr(4, 4).split('').map((num, index) => (
                                            <span key={index}>{num}</span>
                                        ))}
                                    </div>
                                    <div>

                                        {cardNumber.substr(8, 4).split('').map((num, index) => (
                                            <span key={index}>{num}</span>
                                        ))}
                                    </div>
                                    <div>

                                        {cardNumber.substr(12, 4).split('').map((num, index) => (
                                            <span key={index}>{num}</span>
                                        ))}
                                    </div>
                                </>
                                :
                                <>
                                    <div>
                                        <span>0</span>
                                        <span>0</span>
                                        <span>0</span>
                                        <span>0</span>
                                    </div>
                                    <div>
                                        <span>0</span>
                                        <span>0</span>
                                        <span>0</span>
                                        <span>0</span>
                                    </div>
                                    <div>
                                        <span>0</span>
                                        <span>0</span>
                                        <span>0</span>
                                        <span>0</span>
                                    </div>
                                    <div>
                                        <span>0</span>
                                        <span>0</span>
                                        <span>0</span>
                                        <span>0</span>
                                    </div>
                                </>
                        }
                    </p>
                    <p className='previewName'>
                        {
                            name ?
                                name
                                :
                                'Jane Appleseed'
                        }
                    </p>
                    <div className="previewDate">
                        {
                            month ?
                                `${month}/`
                                :

                                '00/'
                        }

                        {
                            year ?
                                `${year}`
                                :
                                '00'
                        }
                    </div>
                </div>

                <img src={CardBack} alt="CardBack" className='cardBack' />
            </div>
            <div className="flex-right-main">
                {
                    !success ?
                        <div className="">
                            <form className='form' onSubmit={(e) => {
                                e.preventDefault();
                            }}>
                                <div className="nameField">
                                    <label htmlFor="">Cardholder Name</label>
                                    <input type="text" placeholder=' e.g. Jane Appleseed' value={name} onChange={handleNameChange} />
                                    {
                                        nameValidationError ? <span className='error'>Can't be blank</span>
                                            :
                                            null
                                    }

                                </div>
                                <div className="numberField">
                                    <label htmlFor="">Card Number</label>
                                    <input type="text" placeholder='e.g. 1234 5678 9123 0000' value={cardNumber} onChange={handleChange} />
                                    {
                                        numberValidationError ? <span className='error'>wrong format</span>
                                            :
                                            null
                                    }

                                </div>
                                <div className="expDateAndcc">
                                    <div className='expDate'>
                                        <label htmlFor="">Exp. Date (MM/YY)</label>
                                        <div className='expFlexRow'>
                                            <input type="text" placeholder='MM' value={month} onChange={handleChangeMonth} />
                                            <input type="text" placeholder='YY' value={year} onChange={handleChangeYear} />
                                        </div>
                                        {
                                            monthValidationError || yearValidationError ? <span className='error'>wrong format</span>
                                                :
                                                null
                                        }

                                    </div>
                                    <div className='cvc'>
                                        <label htmlFor=""> CVC</label>
                                        <input type="text" placeholder='e.g. 123' onChange={handleChangeCvc} />
                                        {
                                            cvcValidationError ? <span className='error'>wrong format</span>
                                                :
                                                null
                                        }
                                    </div>

                                </div>
                                <button className='confirmBtn' onClick={formSubmit}>Confirm</button>
                            </form>
                        </div>
                        :
                        <div className="successAlert">
                            <span className="material-symbols-outlined done">task_alt</span>
                            <div className='thankYouText'>Thank You</div>
                            <div className='grayText'> We've added your card details</div>
                            <button className='continueBtn'>Continue</button>
                        </div>

                }







            </div>
        </div>
    )
}

export default Main
