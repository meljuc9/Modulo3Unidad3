import { useState } from 'react';
import Swal from "sweetalert2";

const AddTask = ({ onSave }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [description, setDescription] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if (!text && !day) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡Diligencia el título y la fecha porque son obligatorios o cierre el formulario!'
            })
        }   else if (!text && day && description) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: '¡Diligencia el título 📁!'
                })
        }   else if (text && !day && description) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: '¡Diligencia la fecha 📅!'
                })
        }   else if (text && day && !description) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡Diligencia la descripción 🤓!'
            })
        }   else {
                onSave({ text, day, description});
        }

        setText('');
        setDay('');
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>📁 Título</label>
                <input  type="text" placeholder="Agregar título" value={text} 
                        onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label>📅 Fecha</label>
                <input  type="date" placeholder="Agregar fecha" value={day} 
                        onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="form-control">
                <label>🤓 Descripción</label>
                <input  type="text" placeholder="Agregar descripción" value={description} 
                        onChange={(e) => setDescription(e.target.value)} />
            </div>
            <input type="submit" className="btn btn-block" value="📎 Guardar 📎" />
        </form>
    )
}

export default AddTask