import React from 'react'
import "../styles/brend.css"
import BrendProp from './BrendProp'
import crem from "../images/cream (1) 1.svg"
import pen from "../images/make-up-kit 1.svg"
import glos from "../images/gloss 1.svg"
import cotton from "../images/cotton-swabs 1.svg"

function Brend() {
  return (
    <div className='container'>
        <div className="brend_wrapper">
            <div className="brend_title">
                <p>Why brand name?</p>
                <h2>Sed ut perspiciatis unde omy</h2>
                <h3>At vero eos et accusamus et iusto odio dignissimos</h3>
            </div>
            <div className="br">

            <BrendProp img={crem} title="Lorem ipsum" text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum"/>
            <BrendProp img={pen} title="Sed ut perspiciatis unde" text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."/>
            <BrendProp img={glos} title="Ut enim ad minim" text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum"/>
            <BrendProp img={cotton} title="At vero eos eaccusamus" text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."/>
            </div>

            
        </div>
        
    </div>
  )
}

export default Brend