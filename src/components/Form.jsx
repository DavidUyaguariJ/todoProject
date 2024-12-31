
import { useRef, useState } from "react";

function Form() {
  const [error, setError]= useState("");
  const todoForm = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault();
    const data =new FormData(todoForm.current);
    //obtener los valores del formulario como objeto
    const {activity, description, status} = Object.fromEntries([...data.entries()]);
    if(!activity.trim() || !description.trim() || !status.trim()){
      setError("Todos los campos son obligatorios");
    }
  };
  return (
      <form onSubmit={handleSubmit} ref={todoForm}>
        <input
          type='text'
          placeholder='Ingrese la Actividad'
          className='form-control mb-2 mt-4 w-25'
          name='activity'
        />
        <textarea
          placeholder='Ingrese la Descripción en la que figure su actividad'
          className='form-control mb-2 w-25'
          name='description'
        />
        <select className="form-select mb-2 w-25" name='status'>
          <option value='pendiente'>Pendiente</option>
          <option value='completado'>Completado</option>
        </select>
        <button type="submit" className="btn btn-primary">Generar Tarea</button>
        &nbsp;
        {error !== "" && error}
      </form>
  )
}

export default Form;