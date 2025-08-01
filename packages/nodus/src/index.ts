export interface NodusMetadata { }

export interface NodusNodePort {
  uuid: string;
}

export interface NodusNode {
  uuid: string;
  name: string;
  label?: string;
  metadata?: NodusMetadata;
  inputs?: NodusNodePort[];
  outputs?: NodusNodePort[];
}

export interface NodusEdge {
  uuid: string;
  source: string;
  target: string;
}

export interface NodusElementAttrs {

}

export interface NodusElementProps {

}

export interface NodusElement {
  uuid: string;
  name: string;
  label?: string;
  attrs?: NodusElementAttrs;
  props?: NodusElementProps;
}

export interface NodusDatasource {
  uuid: string;
  name: string;
}

export interface NodusVariable {
  uuid: string;
  name: string;
}

export interface NodusWorkflow {
  uuid: string;
  name: string;
  nodes: NodusNode[];
  edges: NodusEdge[];
}


export interface NodusSchema {
  uuid: string;
  version: string;
  title: string;
  description?: string;
  metadata?: NodusMetadata;
  elements: NodusElement[];
  workflows?: NodusWorkflow[];
  variables?: NodusVariable[];
  datasources?: NodusDatasource[];
}

export interface NodusEngine { }