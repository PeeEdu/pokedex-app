import React from "react"
import api from "./services/api"
import ShowPokemons from "./components/ShowPokemons"


export default async function Page() {

    async function catchPokemons (){
        const pokemons = api.get('/pokemon?limit=999&offset=0').then((response)=>{
            return response.data
        }).catch((error)=>{
            console.log(error)
        })

        return pokemons
    }

    const pokemons = await catchPokemons()


    return (
        <>
            <ShowPokemons pokemons={pokemons}/>
        </>
    )
}