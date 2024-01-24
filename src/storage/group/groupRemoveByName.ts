import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/storageConfig";
import { groupsGetAll } from "./groupsGetAll";

export async function groupRemoveByName(group: string) {
  try {
    const storedGroups = await groupsGetAll();
    const filtered = storedGroups.filter(groupName => groupName !== group);

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(filtered));
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${group}`);
  } catch (error) {
    throw error;
  }
}