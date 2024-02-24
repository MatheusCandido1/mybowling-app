import { useState } from "react";

export function useDropdownController() {
  const [isOpen, setIsOpen] = useState(false);

  function openDropdown() {
    setIsOpen(true);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  function toggleDropdown() {
    setIsOpen(prev => !prev);
  }

  return {
    isOpen,
    openDropdown,
    closeDropdown,
    toggleDropdown
  }
}
