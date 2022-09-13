export type immutableTransaction = {
    value: number,
    category: string,
    note: string,
    date: string,
    type: string,
}

type MakeOptional<Type, Key extends keyof Type> = Omit<Type, Key> & Partial<Pick<Type, Key>>;

export type Transaction = MakeOptional<immutableTransaction, 'note'>;