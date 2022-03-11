import { useState } from 'react'
import './ContactAdd.css'
import { ContactI } from '../types/Contact'
import InputMask from "react-input-mask"

export interface ContactErrorsI {
  name: string;
  phone: string;
}

export interface ContactAddProps {
  setIsOpenEdit: (e: boolean) => void,
  create: (e: ContactI) => void,
}

function ContactAdd(props: ContactAddProps) {

  const [form, setForm] = useState<ContactI>({
    uniqName: '',
    name: '',
    phone: '',
    favorite: false,
  })

  const [errors, setErrors] = useState<ContactErrorsI>({
    name: '',
    phone: ''
  })


  const validForm = () => {
    let isValid = true
    const newErrors: ContactErrorsI = {
      name: '',
      phone: ''
    }

    if (!form.name) {
      newErrors.name = 'required field'
      isValid = false
    }
    if (!form.phone) {
      newErrors.phone = 'required field'
      isValid = false
    }
    else if (form.phone.replace(/\D/g,'').length !== 11) {
      newErrors.phone = 'invalid number entered'
      isValid = false
    }
    setErrors(newErrors)
    return isValid
  }

  const create = () => {
    if (validForm()) {
      props.create(form)
      props.setIsOpenEdit(false)
    }
  }

  return (
    <div className='contact-add'>

      <div className='contact-add__head'>
        <div className='contact-add__logo' onClick={() => props.setIsOpenEdit(false)}>
          <i className="fa fa-phone-square"></i>
        </div>
        <div className='contact-add__title'>
          Add contact
        </div>
      </div>


      <div className='contact-add__form'>

        <div className='form-item form-input'>
          <label htmlFor="name">Name</label>
          <input 
            type="text"
            id="name"
            value={form.name}
            onChange={event => setForm({...form, name: event.target.value})}
          />
          <span className='error'>{errors.name}</span>
        </div>

        <div className='form-item form-input'>
          <label htmlFor="phone">Phone</label>
          <InputMask 
            id="phone"
            mask="+9 (999) 999-99-99"
            value={form.phone}
            onChange={event => setForm({...form, phone: event.target.value})}
          />
          <span className='error'>{errors.phone}</span>
        </div>

        <div className='form-item form-checkbox'>
          <input 
            type="checkbox"
            id="favorite"
            checked={form.favorite}
            onChange={() => setForm({...form, favorite: !form.favorite})}
          />
          <label htmlFor="favorite">Favorites</label>
        </div>

      </div>

      <div className='contact-add__footer' onClick={create}>
        <span>Create</span>
      </div>

    </div>
  )
}

export default ContactAdd
