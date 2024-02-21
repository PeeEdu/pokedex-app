'use client'
import React from 'react'
import { useParams } from "next/navigation";
import Image from 'next/image';

export default function SolitaryPokemon(){
    
    const params = useParams<{ name: string; id: string }>()
    console.log(params)

    return(
        <>
        <div>
            <div>
                <Image 
                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${params.id}.png`} 
                alt={params.name}
                width={170}
                height={170}
                priority={true}                
                />
                <p className='text-[#313131] text-3xl'>Nome: {params.name}</p>
                <p className='text-[#313131] text-3xl'>ID: {params.id}</p>
            </div>
        </div>
        </>
    )
}