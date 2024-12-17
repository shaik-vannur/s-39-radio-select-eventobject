import React from 'react'
import {useRef} from 'react'
function Signup() {
    let firstInputRef=useRef();
    let lastInputRef=useRef();
    let maleRef=useRef();
    let femaleRef=useRef();
    let singleRef=useRef();
    let MarriedRef=useRef();
    // let genderStatus="";
    let status="";
    function genderAndMartialStatus(){
        if(maleRef.current.checked==true){
            status="Mr"; 
            if(singleRef.current.checked==false){
                    status="mrs"
            }
        }
        else{    
            status="miss"                   
            if(MarriedRef.current.checked==true){
                status="mrs";
            }
        }
    }
    
  return (
    <>
    <div className='signup-mainDiv'>
        <form className='Signup-form'> 
            <div className='signup-div'>
                <label className='signup-label'>First Name </label>
                <input className='signup-input' placeholder='First Name' ref={firstInputRef}/>
            </div>
            <div className='signup-div'>
                <label className='signup-label'>Last Name </label>
                <input className='signup-input' placeholder='Last Name'  ref={lastInputRef}/>
            </div>
            <div className='signup-div'>
                <label className='signup-label'>Date Of Birth </label>
                <input className='signup-input' placeholder='DD-MM-YYYY' />
            </div>
            <div className='signup-div'>
                <label className='signup-label'>Gender </label>
                <input className='gender-radio' type="radio" name='gender' ref={maleRef}   />
                <label>Male</label>
                <input className='gender-radio' type="radio" name='gender' ref={femaleRef} />
                <label>Female</label>
            </div>
            <div className='signup-div'>
                <label className='signup-label'>Martial Status </label>
                <input className='ms' type="radio" name="ms" ref={singleRef}/>
                <label>Single</label>
                <input className='ms' type="radio"  name="ms" ref={MarriedRef} />
                <label>Married</label>
            </div>
            <div className='signup-div'>
                <label className='signup-label'>Email </label>
                <input className='signup-input' placeholder='Email' />
            </div>
            <div className='signup-div'>
                <label className='signup-label'>password </label>
                <input className='signup-input' type="password" placeholder='Password' />
            </div>
            <div className='signup-div'>
                <label className='signup-label'>State </label>
                <select>
                     <option>select State</option>
                    <option>Andhra Pradesh</option>
                    <option>kerala</option>
                    <option>Tamilnadu</option>
                    <option>Karnataka</option>
                    <option>Goa</option>
                    <option>Gujarat</option>

                </select>
            </div>
            <div className='signup-div'>
                <label className='signup-label'>Profile Pic </label>
                <input className='signup-input' type="file"  />
            </div>
            <div className='signup-div'>
                <label className='signup-label'>address</label>
                <textarea></textarea>
            </div>
            <div className='signup-div'>
                <button className='btn' type='button' onClick={()=>{
                    
                    genderAndMartialStatus()
                   
                    console.log("status of ms:  "+status);
                    alert(`${status} ${firstInputRef.current.value} ${lastInputRef.current.value}` )
                       
                }}>
                    Signup
                </button>
            </div>

        </form>
    </div>
    </>
  )
}

export default Signup
