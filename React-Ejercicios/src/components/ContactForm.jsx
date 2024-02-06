import React from 'react'
import {useForm} from '../hooks/useForm'


const initialForm = {}

const validateForm = form => {}

const ContactForm = () => {
	const {form,errors,loading,response,handleChange,handleBlur,handleSubmit} = useForm(initialForm, validateForm)


	return ( 
		<div> 
			<h2>Formulario De Contacto</h2> 
			<form onSubmit={handleSubmit}> 
				<input type="text" name="name" placeholder="Write your name: " onBlur={handleBlur} onChange={handleChange} value={form.name} required /> 
	            <input type="email" name="email" placeholder="Write your e-mail: " onBlur={handleBlur} onChange={handleChange} value={form.email} required />
				<input type="text" name="subject" placeholder="Subject: " onBlur={handleBlur} onChange={handleChange} value={form.subject} required />
				<textarea name="comments" cols="50" rows="5" placeholder="Write your comments: " onBlur={handleBlur} onChange={handleChange} value={form.comments} required></textarea>  
				<input type="submit" value="Send" />
	        </form> 
	    </div> ) }

export default ContactForm