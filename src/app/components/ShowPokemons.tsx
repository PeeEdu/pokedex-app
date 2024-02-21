import React from "react";
import Image from "next/image";

type PokemonProps = {
  pokemons?: {
    results: { name: string  }[];
  };
};

export default function ShowPokemons({ pokemons }: PokemonProps) {
  const allPokemons = pokemons?.results;

  const formatIndex = (index: number) => {
    return ("000" + index).slice(-3);
  };

  return (
    <>
      <div className="max-w-[1300px] mx-auto bg-[#e7e7e7] py-4 px-7">
        <div>
          <ul className="flex flex-wrap w-full justify-around mt-5">
            {allPokemons &&
              allPokemons.map((pokemon, index) => (
                <div className="flex flex-col items-center w-2/12 mx-3 my-3 bg-[#f1f1f1] shadow-2xl" id={`${index + 1}`}>
                  <div className="bg-[#a5a5a5] mt-3">
                    <Image
                    src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${String(index + 1).padStart(3, "0")}.png`}    
                      alt={`Pokemon number: ${index}`}
                      width={180}
                      height={180}
                      priority={false}
                    />
                  </div>
                  <li
                    className="w-full"
                    
                    key={index}
                  >
                    <p className="font-medium text-sm text-[#747474] w-full px-4 pt-2">
                    {(
                        "0000" +
                        (index + 1)
                      ).slice(-4)}
                    </p>
                    <p className="p-8 font-medium text-xl text-[#313131] text-center">
                        {pokemon.name.charAt(0).toUpperCase() +
                      pokemon.name.slice(1)}

                    </p>
                  </li>
                </div>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}
