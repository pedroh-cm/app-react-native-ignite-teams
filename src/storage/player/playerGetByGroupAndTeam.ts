import { playerByGroup } from './playerByGroup';

export async function playerGetByGroupAndTeam(group: string, team: string) {
  try {
    const storage = await playerByGroup(group);
    const players = storage.filter(player => player.team === team);
    return players;
  } catch (error) {
    throw error;
  }
}