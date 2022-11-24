export class Inventory {

    constructor(
        public _id?: string,
        public item?: string,
        public qty?: number,
        public tags?: string[],
        public status?: string,
        public size?: Size
        //Size : a class below
    ){}

}

export class Size {

    constructor(
        public h?: number,
        public w?: number,
        public uom?: string
    ){}

}
