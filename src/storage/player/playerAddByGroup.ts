import AsyncStorage from "@react-native-async-storage/async-storage";

import { AppError } from "@utils/AppError";
import { PLAYER_COLLECTION } from "@storage/storageConfig";

import { playerByGroup } from "./playerByGroup";
import { PlayerStorageDTO } from "./PlayerStorageDTO";

export async function playerAddByGroup(newPlayer: PlayerStorageDTO, group: string) {
  try {
    const storedPlayers = await playerByGroup(group);
    const playerAlreadyExists = storedPlayers.some(player => player.name === newPlayer.name);

    if (playerAlreadyExists) {
      throw new AppError('Já existe um jogador com esse nome.');
    }
    
    const storage = JSON.stringify([...storedPlayers, newPlayer]);
    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);

    return playerByGroup(group);
  } catch (error) {
    throw error;
  }
}
