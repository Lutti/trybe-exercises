abstract class Character {
    abstract talk(): void;
    abstract specialMove(): void;
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

