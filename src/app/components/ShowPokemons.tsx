'use client'

import React from "react"

type Pokemon = {
    pokemons: any
}

export default function ShowPokemons(pokemons: Pokemon){

    const allPokemons = pokemons?.pokemons?.results

    console.log(allPokemons)

    return(
        <>
            <h1></h1>
        </>
    )
}