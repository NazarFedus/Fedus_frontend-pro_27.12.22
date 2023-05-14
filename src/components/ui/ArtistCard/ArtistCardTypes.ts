export interface IArtistProps {
     artist: IArtist
}

export interface IArtist {
     id: number,
     name: string,
     username: string,
     email: string,
     phone: string,
     address: IAddress,
     company: TCompany
}

interface IAddress{
     street: string,
     suite: string,
     city: string,
     zipcode: string,
     geo: TGeo
}

type TCompany = Record<'bs'|'catchPhrase'|'name', string>
type TGeo = Record<'lat'|'lng', string>




