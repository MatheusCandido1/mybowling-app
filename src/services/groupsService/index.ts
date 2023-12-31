import { create } from './create';
import { games } from './games';
import { getAll } from './getAll';
import { invite } from './invite';
import { removeUser } from './removeUser';
import { reply } from './reply';
import { show } from './show';

export const GroupsService = {
  getAll,
  create,
  show,
  games,
  invite,
  reply,
  removeUser
}
