const angle1 = 60;
const angle2 = 60;
const angle3 = 60;

let boolReturn = null;

if (angle1 < 0 || angle2 < 0 || angle3 < 0)
{
    console.log("Erro algum angulo é invalido")
}
else
{
    if (angle1 + angle2 + angle3 == 180)
    {
        boolReturn = true;
    }
    else
    {
        boolReturn = false;
    }
}