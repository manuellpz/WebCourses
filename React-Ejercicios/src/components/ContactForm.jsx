import { useForm } from "../hooks/useForm";

const initialForm = {
  name:"",
  email:"",
  subject:"",
  comments:""
};

//Aquí validaremos todos los campos, esta función regresa los errores ocurridos en un objeto. 
//Esta función se usa en la función handleBlur de nuestro hook personalizado, handleBlur se ejecuta cada vez que el campo pierde el foco[evento onblur]
const validateForm = (form) => {
  let errors = {}

  if(!form.name.trim()) {
    errors.name = "El campo Nombre es requerido*"
  }
  else if(!form.email.trim()) {
    errors.email = "El campo Email es requerido*"
  }
  else if(!form.subject.trim()) {
    errors.subject = "El campo Asunto es requerido*"
  }

  return errors
};

const ContactForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validateForm);

  return (
    <div>
      <h2>Formulario De Contacto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Write your name: "
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
          required
        />
        {errors.name && <p className="error">{errors.name}</p>}
        <input
          type="email"
          name="email"
          placeholder="Write your e-mail: "
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <input
          type="text"
          name="subject"
          placeholder="Subject: "
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.subject}
          required
        />
        {errors.subject && <p className="error">{errors.subject}</p>}
        <textarea
          name="comments"
          cols="50"
          rows="5"
          placeholder="Write your comments: "
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.comments}
          required
        ></textarea>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContactForm;
