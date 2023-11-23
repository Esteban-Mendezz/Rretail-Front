class Provider{
    id: number;
    social_reason: string;
    person_type: string;
    nit: string;
    rating: number;
    id_user: number;

    constructor(id: number, social_reason: string, person_type: string, nit: string, rating: number, id_user: number){
        this.id = id;
        this.social_reason = social_reason;
        this.person_type = person_type;
        this.nit = nit;
        this.rating = rating;
        this.id_user = id_user;
    }
}
