interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string | null;
    gender: string;
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export const fetchCharacter = async (id: string) => {
    const character: Promise<Character> = fetch(`https://rickandmortyapi.com/api/character/${id}`).
        then(async res => await res.json()).
        catch(err => console.log(err))

    return character;
}