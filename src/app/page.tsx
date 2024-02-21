'use server'

import React from "react";
import api from "./services/api";
import ShowPokemons from "./components/ShowPokemons";

export default async function Page() {
  async function catchPokemons() {
    const pokemons = api
      .get("/pokemon?limit=1025&offset=0")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    return pokemons;
  }


  

  const pokemons = await catchPokemons();

  return (
    <>
      <div className="my-9">
        <h1 className="text-center text-2xl font-semibold text-[#ffffff]">
          List Of 999 Pokemons:
        </h1>
      </div>
      <ShowPokemons pokemons={pokemons}/>
    </>
  );
}
