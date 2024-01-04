import { create } from './create';
import { games } from './games';
import { getAll } from './getAll';
import { invite } from './invite';
import { removeUser } from './removeUser';
import { reply } from './reply';
import { show } from './show';
import { update } from './update';
import { destroy } from './destroy';

export const GroupsService = {
  getAll,
  create,
  show,
  games,
  invite,
  reply,
  removeUser,
  update,
  destroy
}
