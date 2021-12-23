import React from "react";
import { Paciente } from "./Paciente";

export const ListadoPacientes = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto">
    <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
    <p className="text-lg mt-5 text-center mb-10">
      Administra tus{" "}
      <span className="text-indigo-600 font-bold">Pacientes y citas</span>
    </p>
    <Paciente/>
  </div>
  )
};
