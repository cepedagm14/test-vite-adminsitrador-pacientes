import React from "react";

export const Paciente = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold text-gray-700 uppercase">
        Mascota: <span className="font-normal normal-case">hook</span>
      </p>
      <p className="font-bold text-gray-700 uppercase">
        Propietario:{" "}
        <span className="font-normal normal-case">Propietario</span>
      </p>
      <p className="font-bold text-gray-700 uppercase">
        Email:{" "}
        <span className="font-normal normal-case">email@email.com</span>
      </p>
      <p className="font-bold text-gray-700 uppercase">
        Fecha alta:{" "}
        <span className="font-normal normal-case">
          13 de Dicembre de 2021
        </span>
      </p>
      <p className="font-bold text-gray-700 uppercase">
        Sintomas:{" "}
        <span className="font-normal normal-case">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
          excepturi similique sequi voluptate veritatis aspernatur non
          praesentium provident earum nulla?
        </span>
      </p>
    </div>
  );
};
