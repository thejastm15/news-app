import React from 'react'

export default function Filter() {
  return (
    <>
    <div style={{display:"flex"}}>
        <div className='mx-2'>
            <select id="country" className="form-select" aria-label="Default select example">
                <option defaultValue>Select Country</option>
                <option value="in">India</option>
                <option value="us">U.S.A</option>
                <option value="ru">Russia</option>
                <option value="cn">China</option>
                <option value="jp">Japan</option>
                <option value="tw">Taiwan</option>
                <option value="au">Australia</option>
                <option value="ua">Ukraine</option>
                <option value="br">Brazil</option>
            </select>
        </div>
        <div className='mx-2'>
            <select id="catogary" className="form-select" aria-label="Default select example">
                <option defaultValue>Catogory</option>
                <option value="business">business</option>
                <option value="entertainment">entertainment</option>
                <option value="general">general</option>
                <option value="health">health</option>
                <option value="science">science</option>
                <option value="sports">sports</option>
                <option value="technology">technology</option>
            </select>
        </div>
       
    </div>
    </>
  )
}
