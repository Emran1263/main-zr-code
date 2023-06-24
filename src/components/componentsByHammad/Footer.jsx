import React from 'react'
import "../../Styles/Footer.css"

export default function Footer() {
  return (
    <div className='width-100'>
        <div className="newsLetterBarCnt width-100">
            <div className="res-1440-40 newsLetterBarContent">
                <div className="newsLetterHeadingImage">
                    <img className='newsLetterImage' src="/images/newsletter.png" alt="ZR surgicals NewsLetter" />
                    <h1 className='newsLetterHeading'>Newsletter Subscription</h1>
                </div>
                <form className="newLetterInputFeilds">
                    <input type="text" placeholder='Your Name' className="newLetterInputFeildName" />
                    <input type="email" placeholder='Your Email' className="newLetterInputFeildEmail" />
                    <button className="newLetterInputFeildSubmit">
                        <img src="/images/sendbtn.png" className="newLetterInputFeildSubmitImg" />
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}
