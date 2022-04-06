let nomePeca = "RAINHA";

switch (nomePeca.toLowerCase())
{
    case "torre":
        console.log("horizontal");
        break;
    case "bispo":
        console.log("diagonal");
    case "cavalo":
        console.log("em L");
        break;
    case "peao":
    case "peão":
        console.log("1 diagonal ou 1 a frente");
        break;
    case "rainha":
        console.log("diagonal ou horizontal");
        break;
    case "rei":
        console.log("1 diagonal ou horizontal");
        break;
    default:
        console.log("peça invalida");
        break;
}