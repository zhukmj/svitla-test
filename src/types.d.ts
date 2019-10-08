interface Candidate {
  id: number;
  fullName: string;
  role: string;
  connectedOn: string;
  status: string;
}

interface State {
  candidates: Candidate[];
}

interface Action {
  type: string;
  [key: string]: any;
}
