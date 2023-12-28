import { createContext, useCallback, useEffect, useState } from "react";

interface GroupsContextData {
  showNewGroupModal: boolean;
  handleShowNewGroupModal(): void;
  handleCloseNewGroupModal(): void;
  handleSelectGroup(group: any): void;
  selectedGroup: any;
  selectedMenu: 'Games' | 'Members'  | 'Standings';
  handleSelectMenu(menu: 'Games' | 'Members'  | 'Standings'): void;
}

export const GroupsContext = createContext({} as GroupsContextData);

export function GroupsProvider({children}: {children: React.ReactNode}) {
  const [showNewGroupModal, setShowNewGroupModal] = useState<boolean>(false);
  const [selectedGroup, setSelectedGroup] = useState<any>(null);

  const [selectedMenu, setSelectedMenu] = useState<'Games' | 'Members'  | 'Standings'>('Standings');

  function handleShowNewGroupModal() {
    setShowNewGroupModal(true);
  }

  function handleCloseNewGroupModal() {
    setShowNewGroupModal(false);
  }

  function handleSelectGroup(group: any) {
    setSelectedGroup(group);
  }

  function handleSelectMenu(menu: 'Games' | 'Members'  | 'Standings') {
    setSelectedMenu(menu);
  }

  return (
    <GroupsContext.Provider value={{
      showNewGroupModal,
      handleShowNewGroupModal,
      handleCloseNewGroupModal,
      handleSelectGroup,
      selectedGroup,
      selectedMenu,
      handleSelectMenu,

    }}>
      {children}
    </GroupsContext.Provider>
  )
}

