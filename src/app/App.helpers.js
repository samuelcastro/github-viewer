import { prop, useWith, identity, equals } from 'ramda';

export const type = prop('type');
export const isTypeOf = useWith(equals, [identity, type]);
