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

interface Location {
    info: {
        count: number;
        next: string;
        pages: number;
    }

    results: {
        id: number;
        name: string;
        type: string;
        dimension: string;
        residents: string[]; // List of URLs
        url: string; // URL to the location's own endpoint
        created: string; // Time at which the location was created in the database
    }[]
};


export const fetchLocationsByType = async ({ type, page = 1 }: { page: number, type: string }) => {
    const location: Promise<Location> = fetch(`https://rickandmortyapi.com/api/location?page=${page}&type=${type}`).
        then(async res => await res.json()).
        catch(err => console.log(err))

    return location;
}

export const fetchLocations = async ({ page = 1 }: { page: number }) => {
    const location: Promise<Location> = fetch(`https://rickandmortyapi.com/api/location/?page=${page}`).
        then(async res => await res.json()).
        catch(err => console.log(err))

    return location;
}


export const fetchMultiplesCharacter = async (id: string[]) => {
    const character: Promise<Character[]> = fetch(`https://rickandmortyapi.com/api/character/${id}`).
        then(async res => await res.json()).
        catch(err => console.log(err))

    return character;
}