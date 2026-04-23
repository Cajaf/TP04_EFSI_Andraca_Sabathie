import Cita from "../Cita";
import "./administradorCitas.css";

const AdministradorCitas = ({ citas, setCitas }) => {
     const eliminarCita = (nombre) => {
  const nuevasCitas = citas.filter(cita => cita.nombre !== nombreMascota);
  setCitas(nuevasCitas);
  }
  return (
    <div className="one-half column">
      <h2>Administra tus citas</h2>
      {citas.map((element, index) => (
        <Cita
          nombre={element.nombre}
          dueño={element.dueño}
          fecha={element.fecha}
          hora={element.hora}
          sintoma={element.sintoma}
          eliminarCita={eliminarCita}
        />
      ))}
    </div>
  );
};

export default AdministradorCitas;