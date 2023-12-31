export namespace GrupoLocaisMessages {
  export enum Error {
    CREATE = "Ocorreu um erro ao criar uma fazenda! Por favor, contate o administrador do sistema.",
    FETCH_ALL = "Não foi possível buscar a listagem de fazendas! Por favor, contate o administrador do sistema.",
    FETCH_BY_ID = "Não foi possível buscar a fazenda selecionada! Por favor, contate o administrador do sistema.",
    REMOVE = "Ocorreu um erro ao remover uma fazenda! Por favor, contate o administrador do sistema.",
    TOGGLE_STATUS = "Ocorreu um erro ao alterar o status de uma fazenda! Por favor, contate o administrador do sistema.",
    UPDATE = "Não foi possível atualizar a fazenda! Por favor, contate o administrador do sistema.",
  }

  export enum Success {
    CREATE = "Fazenda criada com sucesso!",
    REMOVE = "Fazenda removida com sucesso!",
    TOGGLE_STATUS = "Status da fazenda alterado com sucesso!",
    UPDATE = "Fazenda atualizada com sucesso!",
  }
}
