import React from "react";
import Image from "next/image";

type PokemonProps = {
  pokemons?: {
    results: { name: string }[];
  };
};

export default function ShowPokemons({ pokemons }: PokemonProps) {
  const allPokemons = pokemons?.results;

  return (
    <>
      <div className="max-w-[1300px] mx-auto">
        <div className="mt-9">
          <h1 className="text-center text-2xl font-semibold">
            List Of 999 Pokemons:
          </h1>
        </div>
        <div>
          <ul className="flex flex-wrap w-full justify-around mt-5">
            {allPokemons &&
              allPokemons.map((pokemon, index) => (
                <div className="flex flex-col items-center w-2/12 mx-3 my-3 bg-[#f2f2f2]">
                  <div className="bg-[#a5a5a5] mt-3">
                    <Image
                      src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${(
                        "000" +
                        (index + 1)
                      ).slice(-3)}.png`}
                      alt={`Pokemon number: ${index}`}
                      width={180}
                      height={180}
                      priority={false}
                    />
                  </div>
                  <li
                    className="p-8 font-medium text-xl text-[#313131]"
                    id={`number: ${index}`}
                    key={index}
                  >
                    {pokemon.name.charAt(0).toUpperCase() +
                      pokemon.name.slice(1)}
                  </li>
                </div>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}
