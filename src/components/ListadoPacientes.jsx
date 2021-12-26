import React from "react";
import { Paciente } from "./Paciente";

export const ListadoPacientes = ({
  pacientes,
  setPaciente,
  eliminarPaciente,
}) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Seguimiento Pacientes
          </h2>
          <p className="text-lg mt-5 text-center mb-10">
            Administra tus{" "}
            <span className="text-indigo-600 font-bold">Pacientes y citas</span>
          </p>

          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">Sin Pacientes</h2>
          <p className="text-lg mt-5 text-center mb-10">
            comienza agregando Pacientes{" "}
            <span className="text-indigo-600 font-bold">
              y apareceran en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};
