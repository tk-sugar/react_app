interface AppProps {
  title: string;
}

interface AppState {
  user: string;
  cpu: string;
  judg: string;
}

interface ResultProps {
  states: {user:string, cpu:string, judg:string};
}

interface HandBoxProps {
  actionPon(my_hand: number): void;
}
