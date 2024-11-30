import Realm from 'realm';

export type BillType = {
  _id: Realm.BSON.ObjectId;
  userId: Realm.BSON.ObjectId;
  name: string;
  description: string;
  value: number;
  dueDay: number;
  paid: Boolean;
  type: string;
};

export class Bill extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  userId!: Realm.BSON.ObjectId;
  name!: string;
  description?: string;
  value!: number;
  dueDay!: number;
  paid!: Boolean;
  type!: string;

  static schema = {
    name: 'Bill',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      userId: 'objectId',
      name: 'string',
      description: 'string?',
      value: 'float',
      dueDay: 'int',
      paid: 'bool',
      type: 'string',
    },
  };
}
