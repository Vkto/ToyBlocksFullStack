export interface INode {
  url: string;
  online: boolean;
  name: string;
  loading: boolean;
  status?: string;
  blocks: any[]
}
