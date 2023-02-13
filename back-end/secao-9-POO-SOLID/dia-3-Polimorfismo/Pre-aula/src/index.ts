abstract class Character {
    abstract talk(): void;
    abstract specialMove(): void;
    static ExecutarAcoes (char: Character) : void {
        char.talk();
        char.specialMove();
    }
}

class MeleeCharacter extends Character {
    public talk(): void {
        console.log('Olá!');
    }
    public specialMove(): void {
        console.log('Backflip!');
    }
}

class LongRangeCharacter extends Character {
    public talk(): void {
        console.log('Sinta minha mira!');
    }
    public specialMove(): void {
        console.log('Atirando!');
    }
}

function falarEUsarSpecial(player: Character) {
    player.talk();
    player.specialMove();
}

const p1 = new MeleeCharacter();
const p2 = new LongRangeCharacter();

falarEUsarSpecial(p1);
falarEUsarSpecial(p2);

Character.ExecutarAcoes(p1);
Character.ExecutarAcoes(p2);
