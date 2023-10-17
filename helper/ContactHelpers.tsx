export function verifName(name:String){
    if(name=="" || name.length<3){
        return "Vous devez entrer un nom valide.";
    }
    return "";
}

export function verifFirstname(name:String){
    if(name=="" || name.length<3){
        return "Vous devez entrer un prénom valide.";
    }
    return "";
}

export function verifPhone(phone:string){
    const reg = /^[0-9]{10}$/;
    if(phone=="" || phone.length<3 || !reg.test(phone)){
        return "Vous devez entrer un numéro de téléphone valide.";
    }
    return "";
}

export function verifEmail(email:string){
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email=="" || email.length<3 || !reg.test(email)){
        return "Vous devez entrer une adresse email valide.";
    }
    return "";
}