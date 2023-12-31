import type { AxiosResponse } from "axios";
import type { BaseResponse, PaginationResponse } from "types/api";

export namespace CreateGrupoLocais {
  export interface Request {
    descricao: string | null;
    fazendaId: string;
    nome: string;
    tamanhoHa: number | null;
  }

  export interface Response extends AxiosResponse<BaseResponse> {}
}

export namespace FetchAllGrupoLocais {
  export interface Result {
    ativo: boolean;
    descricao: string;
    id: string;
    nome: string;
    tamanhoHa: number | null;
  }

  export interface Response extends AxiosResponse<BaseResponse<PaginationResponse<Result>>> {}
}

export namespace FetchGrupoLocaisById {
  export interface Result {
    ativo: boolean;
    dataAtualizacao: string | null;
    dataCriacao: string;
    dataExclusao: string | null;
    descricao: string;
    fazendaId: string;
    id: string;
    idMobile: string | null;
    nome: string;
    tamanhoHa: number | null;
  }

  export interface Response extends AxiosResponse<BaseResponse<Result>> {}
}

export namespace RemoveGrupoLocais {
  export interface Response extends AxiosResponse<BaseResponse> {}
}

export namespace UpdateGrupoLocais {
  export interface Request {
    descricao: string | null;
    fazendaId: string;
    id: string;
    nome: string;
    tamanhoHa: number | null;
  }

  export interface Response extends AxiosResponse<BaseResponse> {}
}

export namespace ToggleGrupoLocaisStatus {
  export interface Result {
    ativo: boolean;
    dataAtualizacao: string | null;
    dataCriacao: string;
    dataExclusao: string | null;
    descricao: string;
    fazendaId: string;
    id: string;
    idMobile: string | null;
    nome: string;
    tamanhoHa: number | null;
  }

  export interface Response extends AxiosResponse<Result> {}
}
