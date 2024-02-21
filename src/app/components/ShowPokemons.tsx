import React from "react";
import Image from "next/image";

type PokemonProps = {
    pokemons?: {
        results: { name: string }[]
    }
}

export default function ShowPokemons({ pokemons }: PokemonProps){
    const allPokemons = pokemons?.results;

    

    return(
        <>
            <div>
                <h1>Pokemons:</h1>
                <ul className="flex flex-wrap w-full">
                
                    {allPokemons && allPokemons.map((pokemon, index) => (
                        <div className="flex flex-col items-center">
                            <Image src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${('000' + (index + 1) ).slice(-3)}.png`} alt={`Pokemon number: ${index}`} width={70} height={70}/>
                            <li className="p-8" id={`number: ${index}`} key={index}>{pokemon.name}</li>
                        </div>
                    ))}
                </ul>
            </div>
        </>
    )
}
