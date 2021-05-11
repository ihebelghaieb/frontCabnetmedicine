export class Patient {
    public id_pat:number | undefined;
    public nom_pat:string | undefined;
    public prenom_pat:string| undefined;
    public tel_pat:string| undefined;
    public date_pat:string| undefined;
    public email_pat:string| undefined;
    public adress_pat:string| undefined;

    constructor(){}
    public set $id_pat(x:number){
        this.$id_pat=x;
    }

    public set $nom_pat(x:string){
        this.$nom_pat=x;
    }
    public set $prenom_pat(x:string){
        this.$prenom_pat=x;
    }
    public set $tel_pat(x:string){
        this.$tel_pat=x;
    }

    public set $date_pat(x:string){
        this.$date_pat=x;
    }
    public set $email_pat(x:string){
        this.$email_pat=x;
    }
    public set $adress_pat(x:string){
        this.$adress_pat=x;
    }



}
