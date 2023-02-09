
class Cliente {
    public nome: string = 'Lutti';
}

class Pedido {
    public client: Cliente;
    public data: Date;
    public itens: ItemDoPedido[];
    public forma: string;
    public desconto: number;

    public total(): number { return this.itens.reduce((acc, cur) => acc = acc + cur.total(), 0); }
    public discountedTotal(): number { return this.itens.reduce((acc, cur) => acc = acc + cur.total(), 0) * this.desconto; }
}

class ItemDoPedido {
    public quantidade: number;
    public produto: string;
    public preco: number;

    public total(): number {
        return this.quantidade * this.preco;
    }
}