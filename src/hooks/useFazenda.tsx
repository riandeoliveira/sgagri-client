import { useCallback } from "react";
import { fazendaService } from "services/fazenda-service";
import { fazendaStore } from "store/fazenda.store";

export const useFazenda = () => {
  const handleFetchAll = useCallback(async (): Promise<void> => {
    const fazendaListing = await fazendaService.fetchAll();

    fazendaStore.setListing(fazendaListing);
  }, []);

  return {
    handleFetchAll,
  };
};
